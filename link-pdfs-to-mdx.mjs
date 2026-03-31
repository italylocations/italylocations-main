#!/usr/bin/env node
/**
 * link-pdfs-to-mdx.mjs
 * Analizza il matching tra PDF R2 e file MDX delle location.
 * NON modifica i file MDX — solo analisi + output JSON.
 *
 * USO: node link-pdfs-to-mdx.mjs
 */

import { readFileSync, readdirSync, statSync, existsSync, writeFileSync } from 'fs'
import { join, relative } from 'path'

const SOURCE_PDF = './scouting-pdfs-compressed'
const SOURCE_MDX = './content/locations'
const OUTPUT     = './content/_meta/pdf-mapping.json'
const PUBLIC_BASE = 'https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev'
const R2_PREFIX   = 'scouting-reports'

// ── Abbrev. opache nei nomi file Umbria → keyword leggibili ────────────────────
const ABBREV_MAP = {
  mntflc: 'montefalco',
  rsgla:  'rasiglia',
  splet:  'spoleto',
  flgn:   'foligno',
  gbb:    'gubbio',
  part2:  'part2',
}

// Sinonimi: keyword slug → keyword PDF (e viceversa)
const SYNONYMS = [
  ['rome', 'roma', 'scouting-rome'],
  ['colosseum', 'rome', 'roma'],
  ['amalfi', 'amalfi-coast'],
  ['atrani', 'atrani'],
  ['cetara', 'cetara'],
  ['vietri', 'vietri'],
  ['ravello', 'ravello'],
  ['maiori', 'maiori'],
  ['bolsena', 'bolsena'],
  ['bomarzo', 'viterbo', 'tuscia'],          // bomarzo MDX → viterbo PDF
  ['viterbo', 'viterbo', 'tuscia'],
  ['tuscania', 'tuscania'],
  ['tarquinia', 'tarquinia'],
  ['caprarola', 'tuscia'],                   // caprarola = tuscia generale
  ['nepi', 'tuscia'],                        // nepi = tuscia generale
  ['latina', 'latina'],
  ['ponza', 'ponza'],
  ['rieti', 'lazio-nord'],
  ['appia', 'appia-e-acquedotti'],
  ['gazometro', 'gazometro'],
  ['gazometer', 'gazometro'],
  ['sulmona', 'sulmona'],
  ['pescara', 'pescara'],
  ['san-domenico', 'lago-san-domenico', 'san domenico'],
  ['abruzzo', 'abruzzo'],
  ['chioggia', 'chioggia'],
  ['veneto', 'chioggia'],
  ['northeast', 'nordest', 'navigabili'],
  ['rivers', 'navigabili', 'fiumi'],
  ['fiumi', 'navigabili'],
  ['dolomites', 'passi-alpini', 'alpine'],
  ['dolomiti', 'cortina', 'dolomiti'],
  ['cortina', 'cortina-dampezzo'],
  ['bologna', 'bologna'],
  ['parma', 'parma'],
  ['reggio-emilia', 'reggio-emilia'],
  ['rimini', 'rimini'],
  ['torino', 'torino'],
  ['piemonte', 'torino'],
  ['sardegna', 'sardegna'],
  ['chia', 'chia-sardegna'],
  ['bosa', 'bosa'],
  ['castelsardo', 'castelsardo', 'castelsardo'],
  ['cagliari', 'saline'],
  ['salt-pans', 'saline'],
  ['quarry', 'iglesias'],
  ['mars', 'iglesias'],
  ['umbria', 'umbria'],
  ['assisi', 'assisi'],
  ['todi', 'todi'],
  ['amelia', 'amelia'],
  ['montefalco', 'mntflc'],
  ['rasiglia', 'rsgla'],
  ['spoleto', 'splet'],
  ['orvieto', 'flgn'],                       // flgn = foligno, nessun PDF orvieto
  ['white-marble', 'roma'],
  ['fashion', 'roma'],
  ['marche', 'marche'],
]

// ── Utility ────────────────────────────────────────────────────────────────────

function scanPdfs(dir, results = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) scanPdfs(full, results)
    else if (entry.toLowerCase().endsWith('.pdf')) results.push(full)
  }
  return results
}

function toR2Key(absolutePath) {
  const norm = absolutePath.replace(/\\/g, '/')
  const marker = '/Italy-Locations/'
  const first = norm.indexOf(marker)
  if (first !== -1) {
    const second = norm.indexOf(marker, first + marker.length)
    const rel = second !== -1
      ? norm.slice(second + marker.length)
      : norm.slice(first + marker.length)
    return `${R2_PREFIX}/${rel}`
  }
  return `${R2_PREFIX}/${relative(SOURCE_PDF, absolutePath).replace(/\\/g, '/')}`
}

/** Normalizza stringa in set di keyword lowercase */
function tokenize(str) {
  let s = str.toLowerCase()
  // Espandi abbreviazioni
  for (const [abbr, full] of Object.entries(ABBREV_MAP)) {
    s = s.replace(new RegExp('\\b' + abbr + '\\b', 'g'), full)
  }
  return new Set(
    s
      .split(/[-_\s/.,()]+/)
      .map(t => t.trim())
      .filter(t => t.length > 2 && !['pdf', 'scouting', 'italy', 'locations', 'location',
        'street', 'coast', 'the', 'and', 'per', 'del', 'part', 'filming', 'alps',
        'automotive', 'industrial', 'medieval', 'alternative', 'adriatic', 'seaside',
        'island', 'lake', 'mountain', 'fashion', 'marble', 'white'].includes(t))
  )
}

/** Espande i token con sinonimi */
function expandTokens(tokens) {
  const expanded = new Set(tokens)
  for (const group of SYNONYMS) {
    const groupSet = new Set(group.map(g => g.toLowerCase().replace(/-/g, ' ')))
    const slugFlat = [...tokens].map(t => t.replace(/-/g, ' '))
    if (slugFlat.some(t => groupSet.has(t))) {
      for (const syn of groupSet) expanded.add(syn.replace(/\s/g, '-'))
    }
  }
  return expanded
}

/** Score di matching tra token MDX e token PDF */
function matchScore(mdxTokens, pdfPath) {
  const pdfTokens  = tokenize(pdfPath)
  const mdxExpanded = expandTokens(mdxTokens)
  const pdfExpanded = expandTokens(pdfTokens)

  let score = 0
  for (const t of mdxExpanded) {
    if (pdfExpanded.has(t)) score += 2
    // Partial match (una contiene l'altra)
    for (const p of pdfExpanded) {
      if (t !== p && (t.includes(p) || p.includes(t))) score += 1
    }
  }
  return score
}

// ── Legge i file MDX (solo frontmatter slug) ───────────────────────────────────
function readSlug(mdxPath) {
  const raw = readFileSync(mdxPath, 'utf8')
  const m = raw.match(/^slug:\s*["']?([^"'\n]+)["']?/m)
  return m ? m[1].trim() : null
}

// ── Main ───────────────────────────────────────────────────────────────────────

// 1. Costruisce lista PDF con R2 URL
const allPdfPaths = scanPdfs(SOURCE_PDF)
const pdfList = allPdfPaths.map(p => {
  const r2Key  = toR2Key(p)
  const relPath = r2Key.replace(`${R2_PREFIX}/`, '')
  return {
    localPath: p.replace(/\\/g, '/'),
    r2Key,
    relPath,
    url: `${PUBLIC_BASE}/${r2Key}`,
    label: relPath, // folder/filename
  }
})

// 2. Legge i file MDX
const mdxFiles = readdirSync(SOURCE_MDX).filter(f => f.endsWith('.mdx'))

console.log(`\n  MDX:  ${mdxFiles.length} file`)
console.log(`  PDF:  ${pdfList.length} file`)
console.log(`\n  Matching in corso...\n`)

// 3. Matching
const results = []

for (const mdxFile of mdxFiles) {
  const mdxPath  = join(SOURCE_MDX, mdxFile)
  const slug     = readSlug(mdxPath) || mdxFile.replace('.mdx', '')
  const mdxTokens = tokenize(slug)

  // Calcola score per ogni PDF
  const scored = pdfList.map(pdf => ({
    ...pdf,
    score: matchScore(mdxTokens, pdf.label),
  })).sort((a, b) => b.score - a.score)

  const best      = scored[0]
  const runnerUp  = scored[1]
  const ambiguous = best.score > 0 && runnerUp.score >= best.score - 1 && runnerUp.score > 0

  let status
  if (best.score === 0)      status = 'unmatched'
  else if (ambiguous)        status = 'ambiguous'
  else if (best.score >= 3)  status = 'matched'
  else                       status = 'weak'

  results.push({
    slug,
    mdxFile,
    status,
    match: best.score > 0 ? {
      relPath: best.relPath,
      url:     best.url,
      score:   best.score,
    } : null,
    runnerUp: (ambiguous || status === 'weak') && runnerUp.score > 0 ? {
      relPath: runnerUp.relPath,
      url:     runnerUp.url,
      score:   runnerUp.score,
    } : null,
  })
}

results.sort((a, b) => a.slug.localeCompare(b.slug))

// ── Stampa tabella ─────────────────────────────────────────────────────────────
const matched   = results.filter(r => r.status === 'matched')
const weak      = results.filter(r => r.status === 'weak')
const ambiguous = results.filter(r => r.status === 'ambiguous')
const unmatched = results.filter(r => r.status === 'unmatched')

const COL1 = 46
const COL2 = 52

function pad(s, n) { return String(s).slice(0, n).padEnd(n) }
function line(slug, pdf, score, note = '') {
  console.log(`  ${pad(slug, COL1)} ${pad(pdf, COL2)} ${note ? '(' + note + ')' : score}`)
}

console.log('='.repeat(COL1 + COL2 + 12))
console.log(`  ${'SLUG MDX'.padEnd(COL1)} ${'PDF ABBINATO'.padEnd(COL2)} SCORE`)
console.log('='.repeat(COL1 + COL2 + 12))

if (matched.length) {
  console.log(`\n  -- MATCHED (${matched.length}) ---------\n`)
  for (const r of matched) line(r.slug, r.match.relPath, r.match.score)
}

if (weak.length) {
  console.log(`\n  -- WEAK MATCH (${weak.length}) — verificare ---------\n`)
  for (const r of weak) {
    line(r.slug, r.match.relPath, r.match.score, `score=${r.match.score}`)
    if (r.runnerUp) console.log(`  ${''.padEnd(COL1)}   alt: ${r.runnerUp.relPath} (${r.runnerUp.score})`)
  }
}

if (ambiguous.length) {
  console.log(`\n  -- AMBIGUOUS (${ambiguous.length}) — scegliere manualmente ---------\n`)
  for (const r of ambiguous) {
    line(r.slug, r.match.relPath, r.match.score, `score=${r.match.score}`)
    if (r.runnerUp) console.log(`  ${''.padEnd(COL1)}   alt: ${r.runnerUp.relPath} (${r.runnerUp.score})`)
  }
}

if (unmatched.length) {
  console.log(`\n  -- UNMATCHED (${unmatched.length}) — nessun PDF trovato ---------\n`)
  for (const r of unmatched) console.log(`  ${r.slug}`)
}

// PDFs non usati in nessun match
const usedUrls = new Set(results.filter(r => r.match).map(r => r.match.url))
const unusedPdfs = pdfList.filter(p => !usedUrls.has(p.url))
if (unusedPdfs.length) {
  console.log(`\n  -- PDF NON ABBINATI (${unusedPdfs.length}) ---------\n`)
  for (const p of unusedPdfs) console.log(`  ${p.label}`)
}

console.log('\n' + '='.repeat(COL1 + COL2 + 12))
console.log(`  Totale MDX: ${results.length}  |  Matched: ${matched.length}  |  Weak: ${weak.length}  |  Ambiguous: ${ambiguous.length}  |  Unmatched: ${unmatched.length}`)
console.log('='.repeat(COL1 + COL2 + 12))

// ── Salva JSON ─────────────────────────────────────────────────────────────────
const jsonOut = {
  generatedAt: new Date().toISOString(),
  stats: {
    total: results.length,
    matched: matched.length,
    weak: weak.length,
    ambiguous: ambiguous.length,
    unmatched: unmatched.length,
    unusedPdfs: unusedPdfs.length,
  },
  mapping: results,
  unusedPdfs: unusedPdfs.map(p => ({ relPath: p.relPath, url: p.url })),
}

writeFileSync(OUTPUT, JSON.stringify(jsonOut, null, 2))
console.log(`\n  Risultato salvato in ${OUTPUT}\n`)

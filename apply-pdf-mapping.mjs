#!/usr/bin/env node
/**
 * apply-pdf-mapping.mjs
 * 1. Applica il mapping definitivo slug→PDF
 * 2. Aggiorna content/_meta/pdf-mapping.json
 * 3. Inietta pdfUrl nel frontmatter di ogni file MDX
 *
 * USO: node apply-pdf-mapping.mjs
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

const SOURCE_PDF  = './scouting-pdfs-compressed'
const SOURCE_MDX  = './content/locations'
const MAPPING_OUT = './content/_meta/pdf-mapping.json'
const PUBLIC_BASE = 'https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev'
const R2_PREFIX   = 'scouting-reports'

// ── Mapping completo (tutti i 48 slug → filename PDF, null = nessun PDF) ───────
// [M] = confermato manualmente  [A] = match automatico confermato
const OVERRIDES = {
  // [M] risolti manualmente
  'abruzzo-pescara-adriatic-seaside':           'pescara-italy_locations.pdf',
  'abruzzo-sulmona':                            'sulmona_italy_locations.pdf',
  'bologna-street-locations-scouting':          'bologna-scouting.pdf',
  'caprarola-tuscia-street-locations-scouting': 'scouting-tuscia.pdf',
  'lazio-latina-automotive-location':           'Latina-scouting.pdf',
  'lazio-ponza-island':                         'ponza_italy_locations_scouting.pdf',
  'lazio-roma-appia-antica':                    'roma-appia-e-acquedotti.pdf',
  'lazio-roma-gazometro-industrial-location':   'roma-gazometro.pdf',
  'lazio-tuscia-bomarzo-viterbo':               'viterbo.pdf',
  'lazio-tuscia-viterbo':                       'viterbo.pdf',
  'lazio-tuscia-viterbo-tuscania':              'tuscania-tuscia.pdf',
  'maiori-coast-street-locations-scouting':     'maiori-scouting.pdf',
  'nepi-tuscia-street-locations-scouting':      'scouting-tuscia.pdf',
  'rome-colosseum-street-locations-scouting':   'scouting-rome-italy-locations.pdf',
  'rome-white-marble-fashion-locations':        'scouting-rome-italy-locations.pdf',
  'sardegna-bosa-sardinia':                     'Bosa.pdf',
  'sardegna-castelsardo-sardinia':              'CastelSardo.pdf',
  'tarquinia-tuscia-street-locations-scouting': 'scouting-tarquinia.pdf',
  'todi-medieval-film-location-umbria':         'Todi-umbria-scouting.pdf',
  'umbria-assisi':                              'Assisi_italy_locations.pdf',
  'umbria-locations-scouting':                  'umbria-scouting1.pdf',
  'umbria-locations-scouting-2':                'umbria-scouting-part2.pdf',
  'umbria-locations-scouting-2-2':              'flgn_Umbria.pdf',
  'umbria-locations-scouting-2-2-2':            'gbb_umbria.pdf',
  'umbria-locations-scouting-amelia':           'Amelia-Umbria-scouting.pdf',
  'umbria-locations-scouting-montefalco':       'mntflc_Umbria.pdf',
  'umbria-locations-scouting-rasiglia':         'rsgla_umbria.pdf',
  'umbria-locations-scouting-spoleto':          'splet_umbria.pdf',
  'umbria-orvieto':                             null,
  // [A] match automatico confermato
  'abruzzo-san-domenico-lake':                  'lago-san-domenico.pdf',
  'amalfi-coast-street-locations-scouting':     'amalfi-scouting.pdf',
  'atrani-coast-street-locations-scouting':     'atrani-scouting.pdf',
  'cetara-coast-street-locations-scouting':     'cetara-scouting.pdf',
  'dolomites-alpine-automotive-filming-locations': 'passi-alpini-italy_locations.pdf',
  'dolomiti-cortina-dampezzo-alps':             'scouting-cortina-dampezzo.pdf',
  'lazio-rieti-locations-scouting':             'Lazio-nord_est.pdf',
  'lazio-tuscia-bolsena-lake':                  'bolsena.pdf',
  'northeast-italy-rivers-filming-locations':   'locations-navigabili-nord-est-italy-locations.pdf',
  'parma-street-locations-scouting':            'parma-scouting.pdf',
  'ravello-coast-street-locations-scouting':    'ravello-scouting.pdf',
  'reggio-emilia-street-locations-scouting':    'scouting-reggio-emilia.pdf',
  'rimini-street-locations-scouting':           'rimini-scouting.pdf',
  'sardegna-beach-chia':                        'chia-sardegna.pdf',
  'sardegna-cagliari-salt-pans':                'saline-sardegna.pdf',
  'sardegna-quarry-mars':                       'iglesias.pdf',
  'torino-piemonte':                            'torino_italy_locations.pdf',
  'veneto-chioggia-venice-alternative':         'chioggia.pdf',
  'vietri-coast-street-locations-scouting':     'vietri-scouting.pdf',
}

// ── Scansione PDF → mappa filename → relPath ───────────────────────────────────
function scanPdfs(dir, results = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) scanPdfs(full, results)
    else if (entry.toLowerCase().endsWith('.pdf')) results.push(full)
  }
  return results
}

function toR2RelPath(absolutePath) {
  const norm = absolutePath.replace(/\\/g, '/')
  const marker = '/Italy-Locations/'
  const first  = norm.indexOf(marker)
  if (first !== -1) {
    const second = norm.indexOf(marker, first + marker.length)
    return second !== -1
      ? norm.slice(second + marker.length)
      : norm.slice(first + marker.length)
  }
  return norm.slice(norm.indexOf(SOURCE_PDF.replace('./', '')) + SOURCE_PDF.length + 1)
}

const allPdfs  = scanPdfs(SOURCE_PDF)
// filename (lowercase) → relPath (original case)
const byName   = new Map()
for (const p of allPdfs) {
  const rel  = toR2RelPath(p)
  const name = rel.split('/').pop()
  byName.set(name.toLowerCase(), rel)
}

function resolveUrl(filename) {
  if (!filename) return null
  const rel = byName.get(filename.toLowerCase())
  if (!rel) { console.warn(`  WARN: PDF non trovato nel filesystem: ${filename}`); return null }
  // Encode spazi per URL valido
  const encoded = rel.split('/').map(encodeURIComponent).join('/')
  return `${PUBLIC_BASE}/${R2_PREFIX}/${encoded}`
}

// ── Legge slug dal frontmatter ──────────────────────────────────────────────────
function readSlug(mdxPath) {
  const raw = readFileSync(mdxPath, 'utf8')
  const m   = raw.match(/^slug:\s*["']?([^"'\n]+)["']?/m)
  return m ? m[1].trim() : null
}

// ── Inietta/aggiorna pdfUrl nel frontmatter MDX ────────────────────────────────
function injectPdfUrl(mdxPath, pdfUrl) {
  let raw = readFileSync(mdxPath, 'utf8')

  // Normalizza fine riga
  const crlf = raw.includes('\r\n')
  raw = raw.replace(/\r\n/g, '\n')

  // Trova il blocco frontmatter (tra il primo e secondo ---)
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/)
  if (!fmMatch) { console.warn(`  WARN: nessun frontmatter in ${mdxPath}`); return false }

  const fmBlock   = fmMatch[1]
  const afterFm   = raw.slice(fmMatch[0].length)
  const urlValue  = pdfUrl ? `"${pdfUrl}"` : '""'

  let newFm
  if (/^pdfUrl:/m.test(fmBlock)) {
    // Aggiorna campo esistente
    newFm = fmBlock.replace(/^pdfUrl:.*$/m, `pdfUrl: ${urlValue}`)
  } else {
    // Aggiungi prima della chiusura --- (dopo originalUrl se presente, altrimenti in fondo)
    if (/^originalUrl:/m.test(fmBlock)) {
      newFm = fmBlock.replace(/^(originalUrl:.*)$/m, `$1\npdfUrl: ${urlValue}`)
    } else {
      newFm = fmBlock + `\npdfUrl: ${urlValue}`
    }
  }

  let result = `---\n${newFm}\n---${afterFm}`
  if (crlf) result = result.replace(/\n/g, '\r\n')
  writeFileSync(mdxPath, result, 'utf8')
  return true
}

// ── Main ───────────────────────────────────────────────────────────────────────
const mdxFiles = readdirSync(SOURCE_MDX).filter(f => f.endsWith('.mdx'))

console.log('\n  Applicazione mapping definitivo...\n')

const finalMapping = []
let withPdf = 0, withoutPdf = 0

for (const mdxFile of mdxFiles.sort()) {
  const mdxPath = join(SOURCE_MDX, mdxFile)
  const slug    = readSlug(mdxPath) || mdxFile.replace('.mdx', '')

  const filename = OVERRIDES[slug]          // undefined = slug non elencato
  const pdfUrl   = filename !== undefined ? resolveUrl(filename) : null
  const relPath  = filename ? (byName.get(filename.toLowerCase()) ?? filename) : null
  const source   = slug in OVERRIDES ? (Object.keys(OVERRIDES).indexOf(slug) < 29 ? 'manual' : 'auto') : 'unknown'

  // Inietta nel MDX
  injectPdfUrl(mdxPath, pdfUrl)

  if (pdfUrl) withPdf++
  else        withoutPdf++

  const label = pdfUrl ? relPath : '— nessun PDF —'
  const tag   = source === 'manual' ? '[M]' : '[A]'
  console.log(`  ${pdfUrl ? '✓' : '○'} ${tag} ${slug.padEnd(46)} ${label ?? ''}`)

  finalMapping.push({ slug, mdxFile, source, pdfUrl, relPath })
}

// ── Aggiorna pdf-mapping.json ──────────────────────────────────────────────────
const updatedJson = {
  generatedAt: new Date().toISOString(),
  stats: {
    total:      finalMapping.length,
    withPdf:    withPdf,
    withoutPdf: withoutPdf,
  },
  mapping: finalMapping.sort((a, b) => a.slug.localeCompare(b.slug)),
}
writeFileSync(MAPPING_OUT, JSON.stringify(updatedJson, null, 2))

console.log('\n' + '='.repeat(70))
console.log(`  MDX con pdfUrl:    ${withPdf} / ${finalMapping.length}`)
console.log(`  MDX senza pdfUrl:  ${withoutPdf}`)
console.log(`  [M] = mapping manuale approvato`)
console.log(`  [A] = match automatico confermato`)
console.log(`\n  JSON aggiornato: ${MAPPING_OUT}`)
console.log('='.repeat(70) + '\n')

#!/usr/bin/env node
/**
 * upload-pdfs-to-r2.mjs
 * Carica tutti i PDF compressi su Cloudflare R2 nella cartella /scouting-reports/
 *
 * USO:    node upload-pdfs-to-r2.mjs
 * PREREQ: .env.local con R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET
 */

import { S3Client, PutObjectCommand, HeadObjectCommand } from '@aws-sdk/client-s3'
import { readFileSync, existsSync } from 'fs'
import { readdirSync, statSync } from 'fs'
import { join, relative, sep } from 'path'

// ── Carica .env.local manualmente ──────────────────────────────────────────────
function loadEnv(path) {
  if (!existsSync(path)) return
  const lines = readFileSync(path, 'utf8').split('\n')
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eqIdx = trimmed.indexOf('=')
    if (eqIdx === -1) continue
    const key = trimmed.slice(0, eqIdx).trim()
    const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '')
    if (key && !(key in process.env)) process.env[key] = val
  }
}
loadEnv('.env.local')
loadEnv('.env')

// ── Configurazione ──────────────────────────────────────────────────────────────
const ACCOUNT_ID    = process.env.R2_ACCOUNT_ID
const ACCESS_KEY    = process.env.R2_ACCESS_KEY_ID
const SECRET_KEY    = process.env.R2_SECRET_ACCESS_KEY
const BUCKET        = process.env.R2_BUCKET || 'italy-locations-photos'
const SOURCE_DIR    = './scouting-pdfs-compressed'
const DEST_PREFIX   = 'scouting-reports'
const PUBLIC_BASE   = 'https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev'
const CONCURRENCY   = 3
const SKIP_EXISTING = true

// ── Validazione ─────────────────────────────────────────────────────────────────
if (!ACCOUNT_ID || !ACCESS_KEY || !SECRET_KEY) {
  console.error('\nERRORE: Credenziali R2 mancanti. Compila .env.local con:')
  console.error('   R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY\n')
  process.exit(1)
}

if (!existsSync(SOURCE_DIR)) {
  console.error(`\nERRORE: Cartella sorgente non trovata: ${SOURCE_DIR}`)
  console.error('   Esegui prima compress-pdfs.ps1\n')
  process.exit(1)
}

// ── Client R2 ───────────────────────────────────────────────────────────────────
const s3 = new S3Client({
  region: 'auto',
  endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: { accessKeyId: ACCESS_KEY, secretAccessKey: SECRET_KEY },
})

// ── Scansione ricorsiva ─────────────────────────────────────────────────────────
function scanPdfs(dir, results = []) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry)
    if (statSync(fullPath).isDirectory()) {
      scanPdfs(fullPath, results)
    } else if (entry.toLowerCase().endsWith('.pdf')) {
      results.push(fullPath)
    }
  }
  return results
}

/**
 * Estrae il path R2 relativo da un percorso assoluto del file.
 *
 * Struttura sorgente:
 *   scouting-pdfs-compressed/
 *     Italy-Locations-XXX-001/
 *       Italy-Locations/
 *         Assisi/
 *           Assisi_italy_locations.pdf   <- vogliamo da qui in poi
 *
 * Risultato R2 key: scouting-reports/Assisi/Assisi_italy_locations.pdf
 */
function toR2Key(absolutePath) {
  // Normalizza a forward slash
  const normalized = absolutePath.replace(/\\/g, '/')

  // Cerca il segmento 'Italy-Locations/' (la cartella interna, non quella con date)
  // Pattern: dopo il secondo 'Italy-Locations/' (il primo e' la zip root)
  const marker = '/Italy-Locations/'
  const firstIdx = normalized.indexOf(marker)
  if (firstIdx !== -1) {
    const secondIdx = normalized.indexOf(marker, firstIdx + marker.length)
    if (secondIdx !== -1) {
      const relPath = normalized.slice(secondIdx + marker.length)
      return `${DEST_PREFIX}/${relPath}`
    }
    // Fallback: usa tutto dopo il primo marker
    const relPath = normalized.slice(firstIdx + marker.length)
    return `${DEST_PREFIX}/${relPath}`
  }

  // Fallback finale: path relativo alla cartella sorgente
  const relFromSource = relative(SOURCE_DIR, absolutePath).replace(/\\/g, '/')
  return `${DEST_PREFIX}/${relFromSource}`
}

function formatMb(bytes) {
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
}

// ── Controlla esistenza in R2 ───────────────────────────────────────────────────
async function existsInR2(key) {
  try {
    await s3.send(new HeadObjectCommand({ Bucket: BUCKET, Key: key }))
    return true
  } catch {
    return false
  }
}

// ── Upload singolo PDF ──────────────────────────────────────────────────────────
async function uploadPdf(localPath, index, total) {
  const r2Key    = toR2Key(localPath)
  const fileSize = statSync(localPath).size
  const label    = r2Key.replace(`${DEST_PREFIX}/`, '')

  if (SKIP_EXISTING && await existsInR2(r2Key)) {
    console.log(`  [skip] ${index}/${total} -- ${label}`)
    return { status: 'skipped', r2Key }
  }

  const body = readFileSync(localPath)

  await s3.send(new PutObjectCommand({
    Bucket:       BUCKET,
    Key:          r2Key,
    Body:         body,
    ContentType:  'application/pdf',
    CacheControl: 'public, max-age=86400',
  }))

  console.log(`  [ok]   ${index}/${total} -- ${label} (${formatMb(fileSize)})`)
  return { status: 'uploaded', r2Key, size: fileSize }
}

// ── Main ────────────────────────────────────────────────────────────────────────
const allPdfs = scanPdfs(SOURCE_DIR)
const total   = allPdfs.length

if (total === 0) {
  console.error(`\nERRORE: Nessun PDF trovato in ${SOURCE_DIR}\n`)
  process.exit(1)
}

console.log('\n================================================')
console.log('  Italy Locations -- PDF Upload to R2')
console.log(`  Bucket:       ${BUCKET}`)
console.log(`  Prefisso R2:  /${DEST_PREFIX}/`)
console.log(`  PDF trovati:  ${total}`)
console.log(`  Skip exist.:  ${SKIP_EXISTING}`)
console.log('================================================\n')

let uploaded = 0, skipped = 0, failed = 0
const uploadedKeys = []
const failedList   = []

// Elabora in chunk da CONCURRENCY upload paralleli
for (let i = 0; i < allPdfs.length; i += CONCURRENCY) {
  const chunk   = allPdfs.slice(i, i + CONCURRENCY)
  const results = await Promise.allSettled(
    chunk.map((path, j) => uploadPdf(path, i + j + 1, total))
  )
  for (let k = 0; k < results.length; k++) {
    const r = results[k]
    if (r.status === 'fulfilled') {
      if (r.value.status === 'uploaded') {
        uploaded++
        uploadedKeys.push(r.value.r2Key)
      } else {
        skipped++
        uploadedKeys.push(r.value.r2Key) // gia' presenti = URL valido
      }
    } else {
      failed++
      failedList.push(allPdfs[i + k])
      const label = toR2Key(allPdfs[i + k]).replace(`${DEST_PREFIX}/`, '')
      console.error(`  [ERR]  ${i + k + 1}/${total} -- ${label} -> ${r.reason?.message}`)
    }
  }
}

// ── Riepilogo ───────────────────────────────────────────────────────────────────
console.log('\n================================================')
console.log(`  Caricati:     ${uploaded}`)
console.log(`  Gia' presenti: ${skipped}`)
console.log(`  Falliti:      ${failed}`)
console.log('================================================')

// ── Lista URL pubblici ──────────────────────────────────────────────────────────
if (uploadedKeys.length > 0) {
  console.log(`\n  URL pubblici (${uploadedKeys.length} file):\n`)
  for (const key of uploadedKeys.sort()) {
    console.log(`  ${PUBLIC_BASE}/${key}`)
  }
}

if (failedList.length > 0) {
  const outPath = 'failed-pdf-uploads.json'
  const { writeFileSync } = await import('fs')
  writeFileSync(outPath, JSON.stringify(failedList, null, 2))
  console.log(`\n  Lista falliti salvata in ${outPath}`)
}

console.log()

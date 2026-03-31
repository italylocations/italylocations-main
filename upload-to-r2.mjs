#!/usr/bin/env node
/**
 * upload-to-r2.mjs
 * Carica tutte le immagini da ./downloaded-images/ su Cloudflare R2
 *
 * USO:    node upload-to-r2.mjs
 * PREREQ: .env.local con R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET
 */

import { S3Client, PutObjectCommand, HeadObjectCommand } from '@aws-sdk/client-s3'
import { readFileSync, readdirSync, existsSync } from 'fs'
import { extname, join } from 'path'

// ── Carica .env.local manualmente (senza dipendenze extra) ─────────────────────
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
const ACCOUNT_ID  = process.env.R2_ACCOUNT_ID
const ACCESS_KEY  = process.env.R2_ACCESS_KEY_ID
const SECRET_KEY  = process.env.R2_SECRET_ACCESS_KEY
const BUCKET      = process.env.R2_BUCKET || 'italy-locations-photos'
const DEST_PREFIX = 'main-site'           // cartella nel bucket
const SOURCE_DIR  = './downloaded-images'
const CONCURRENCY = 5                     // upload paralleli
const SKIP_EXISTING = true               // salta file già caricati

// ── Validazione credenziali ─────────────────────────────────────────────────────
if (!ACCOUNT_ID || !ACCESS_KEY || !SECRET_KEY) {
  console.error('\n❌ Credenziali R2 mancanti. Compila .env.local con:')
  console.error('   R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY\n')
  console.error('   Vedi .env.local.example per il template.\n')
  process.exit(1)
}

if (!existsSync(SOURCE_DIR)) {
  console.error(`\n❌ Cartella sorgente non trovata: ${SOURCE_DIR}`)
  console.error('   Esegui prima: node download-images.mjs\n')
  process.exit(1)
}

// ── Client R2 (compatibile S3) ──────────────────────────────────────────────────
const s3 = new S3Client({
  region: 'auto',
  endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY,
  },
})

// ── Content-Type mapping ────────────────────────────────────────────────────────
const MIME = {
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png':  'image/png',
  '.webp': 'image/webp',
  '.gif':  'image/gif',
  '.avif': 'image/avif',
}

function getMime(filename) {
  return MIME[extname(filename).toLowerCase()] || 'application/octet-stream'
}

// ── Controlla se il file esiste già nel bucket ──────────────────────────────────
async function existsInR2(key) {
  try {
    await s3.send(new HeadObjectCommand({ Bucket: BUCKET, Key: key }))
    return true
  } catch {
    return false
  }
}

// ── Upload singolo file ─────────────────────────────────────────────────────────
async function uploadFile(filename, index, total) {
  const localPath  = join(SOURCE_DIR, filename)
  const r2Key      = `${DEST_PREFIX}/${filename}`
  const contentType = getMime(filename)

  if (SKIP_EXISTING && await existsInR2(r2Key)) {
    console.log(`⏭  ${index}/${total} — già presente: ${filename}`)
    return { status: 'skipped' }
  }

  const body = readFileSync(localPath)
  await s3.send(new PutObjectCommand({
    Bucket:      BUCKET,
    Key:         r2Key,
    Body:        body,
    ContentType: contentType,
    // Cache 1 anno per asset statici
    CacheControl: 'public, max-age=31536000, immutable',
  }))

  console.log(`✓  ${index}/${total} — ${filename} (${contentType})`)
  return { status: 'uploaded' }
}

// ── Main ────────────────────────────────────────────────────────────────────────
const files = readdirSync(SOURCE_DIR).filter(f => MIME[extname(f).toLowerCase()])
const total = files.length

if (total === 0) {
  console.error(`\n❌ Nessuna immagine trovata in ${SOURCE_DIR}\n`)
  process.exit(1)
}

console.log(`\n🚀 Italy Locations → Cloudflare R2`)
console.log(`   Bucket:      ${BUCKET}`)
console.log(`   Prefisso:    /${DEST_PREFIX}/`)
console.log(`   Immagini:    ${total}`)
console.log(`   Concorrenza: ${CONCURRENCY}`)
console.log(`   Skip exist.: ${SKIP_EXISTING}\n`)

let uploaded = 0, skipped = 0, failed = 0
const failedList = []

// Elabora in chunk da CONCURRENCY upload paralleli
for (let i = 0; i < files.length; i += CONCURRENCY) {
  const chunk = files.slice(i, i + CONCURRENCY)
  const results = await Promise.allSettled(
    chunk.map((filename, j) => uploadFile(filename, i + j + 1, total))
  )
  for (let k = 0; k < results.length; k++) {
    const r = results[k]
    if (r.status === 'fulfilled') {
      if (r.value.status === 'uploaded') uploaded++
      else skipped++
    } else {
      failed++
      failedList.push(files[i + k])
      console.error(`✗  ${i + k + 1}/${total} — ${files[i + k]} → ${r.reason?.message}`)
    }
  }
}

// ── Riepilogo ───────────────────────────────────────────────────────────────────
console.log('\n─────────────────────────────────────────')
console.log(`✅ Caricate:    ${uploaded}`)
console.log(`⏭  Già presenti: ${skipped}`)
console.log(`❌ Fallite:     ${failed}`)
console.log('─────────────────────────────────────────')

const publicUrl = process.env.R2_PUBLIC_URL
  ? process.env.R2_PUBLIC_URL.replace(/\/$/, '')
  : `https://${ACCOUNT_ID}.r2.cloudflarestorage.com/${BUCKET}`

console.log(`\n📦 URL base immagini:\n   ${publicUrl}/${DEST_PREFIX}/`)
console.log(`\n   Esempio:\n   ${publicUrl}/${DEST_PREFIX}/${files[0]}\n`)

if (failedList.length > 0) {
  const outPath = 'failed-uploads.json'
  readFileSync // touch
  import('fs').then(({ writeFileSync }) => {
    writeFileSync(outPath, JSON.stringify(failedList, null, 2))
    console.log(`⚠️  Lista falliti salvata in ${outPath}\n`)
  })
}

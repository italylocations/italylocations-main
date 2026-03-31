import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { readFileSync, existsSync } from 'fs'

function loadEnv(path) {
  if (!existsSync(path)) return
  for (const line of readFileSync(path, 'utf8').split('\n')) {
    const t = line.trim()
    if (!t || t.startsWith('#')) continue
    const eq = t.indexOf('=')
    if (eq === -1) continue
    const key = t.slice(0, eq).trim()
    const val = t.slice(eq + 1).trim().replace(/^[\"']|[\"']$/g, '')
    if (key && !(key in process.env)) process.env[key] = val
  }
}
loadEnv('.env.local')

const client = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId:     process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
})

const files = [
  'mercedes-sl350-amg-2009.jpg',
  'porsche-997-carrera-4s-2010.jpg',
  'porsche-997-carrera-s-cabrio-2006.jpg',
]

for (const file of files) {
  const local = `public/images/cars/${file}`
  const key   = `main-site/cars/${file}`
  console.log(`Carico ${file}...`)
  await client.send(new PutObjectCommand({
    Bucket:       process.env.R2_BUCKET || 'italy-locations-photos',
    Key:          key,
    Body:         readFileSync(local),
    ContentType:  'image/jpeg',
    CacheControl: 'public, max-age=31536000, immutable',
  }))
  console.log(`  ✓ https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/${key}`)
}
console.log('\nUpload completato!')

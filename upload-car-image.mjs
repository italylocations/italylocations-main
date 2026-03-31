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

const LOCAL = 'public/images/cars/lamborghini-gallardo-lp560-2013.avif'
const KEY   = 'main-site/cars/lamborghini-gallardo-lp560-2013.avif'
const URL   = `https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/${KEY}`

console.log('Carico su R2...')
await client.send(new PutObjectCommand({
  Bucket:       process.env.R2_BUCKET || 'italy-locations-photos',
  Key:          KEY,
  Body:         readFileSync(LOCAL),
  ContentType:  'image/avif',
  CacheControl: 'public, max-age=31536000, immutable',
}))
console.log('Upload completato!')
console.log('URL:', URL)

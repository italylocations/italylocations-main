import { readdir, readFile, writeFile } from 'fs/promises'
import { join } from 'path'

const CONTENT_DIR = './content/locations'
const WP_BASE = 'https://italylocations.com/wp-content/uploads/'
const R2_BASE = 'https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/'

// Convert WP URL to R2 URL
// e.g. .../uploads/2025/02/filename.jpg → R2_BASE/2025_02_filename.jpg
function convertUrl(url) {
  if (!url.startsWith(WP_BASE)) return url
  const path = url.slice(WP_BASE.length) // "2025/02/filename.jpg"
  const r2filename = path.replace(/\//g, '_')  // "2025_02_filename.jpg"
  return R2_BASE + r2filename
}

const files = (await readdir(CONTENT_DIR)).filter(f => f.endsWith('.mdx'))

let totalReplacements = 0
let filesModified = 0

for (const file of files) {
  const filePath = join(CONTENT_DIR, file)
  const original = await readFile(filePath, 'utf8')

  // Replace all WP URLs in the file
  let updated = original.replace(
    /https:\/\/italylocations\.com\/wp-content\/uploads\/\d{4}\/\d{2}\/[^\s"')]+/g,
    match => convertUrl(match)
  )

  if (updated !== original) {
    const count = (original.match(/https:\/\/italylocations\.com\/wp-content\/uploads\//g) || []).length
    totalReplacements += count
    filesModified++
    await writeFile(filePath, updated, 'utf8')
    console.log(`✓ ${file} — ${count} URL${count > 1 ? 's' : ''} replaced`)
  }
}

console.log(`\nDone: ${filesModified}/${files.length} files updated, ${totalReplacements} URLs replaced.`)

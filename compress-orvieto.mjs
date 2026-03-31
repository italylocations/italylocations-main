import { execFileSync, execSync } from 'child_process'
import { statSync, existsSync } from 'fs'

const gs      = 'C:\\Program Files\\gs\\gs10.05.1\\bin\\gswin64c.exe'
const inFile  = 'C:\\progetti\\italylocations-main\\scouting-pdfs\\orvieto_italy_locations.pdf'
const outFile = 'C:\\progetti\\italylocations-main\\scouting-pdfs-compressed\\orvieto_italy_locations.pdf'

if (!existsSync(inFile)) {
  console.error('ERRORE: file sorgente non trovato:', inFile)
  process.exit(1)
}

console.log('Comprimo Orvieto PDF...')

execFileSync(gs, [
  '-sDEVICE=pdfwrite',
  '-dCompatibilityLevel=1.4',
  '-dPDFSETTINGS=/ebook',
  '-dNOPAUSE',
  '-dQUIET',
  '-dBATCH',
  `-sOutputFile=${outFile}`,
  inFile,
], { stdio: 'inherit' })

const before = (statSync(inFile).size  / 1048576).toFixed(1)
const after  = (statSync(outFile).size / 1048576).toFixed(1)
console.log(`OK: ${before} MB -> ${after} MB`)
console.log('Output:', outFile)

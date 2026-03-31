# compress-pdfs.ps1
# Comprime tutti i PDF in scouting-pdfs\ usando Ghostscript (/ebook 150dpi)
# Output in scouting-pdfs-compressed\ mantenendo la struttura di cartelle

$InputDir  = "C:\progetti\italylocations-main\scouting-pdfs"
$OutputDir = "C:\progetti\italylocations-main\scouting-pdfs-compressed"

# -- Trova gswin64c (PATH o percorso default di installazione) ---------------
$gs = Get-Command gswin64c -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Source
if (-not $gs) {
    $candidates = Get-ChildItem "C:\Program Files\gs" -Recurse -Filter "gswin64c.exe" -ErrorAction SilentlyContinue |
                  Sort-Object FullName -Descending |
                  Select-Object -First 1
    if ($candidates) { $gs = $candidates.FullName }
}
if (-not $gs) {
    Write-Host ""
    Write-Host "  ERRORE: gswin64c.exe non trovato." -ForegroundColor Red
    Write-Host "  Installa Ghostscript con:" -ForegroundColor Yellow
    Write-Host "    winget install ArtifexSoftware.GhostScript" -ForegroundColor Cyan
    Write-Host "  oppure scaricalo da https://ghostscript.com/releases/gsdnld.html" -ForegroundColor Cyan
    Write-Host ""
    exit 1
}
Write-Host "  Ghostscript: $gs" -ForegroundColor DarkGray

# -- Controlla cartella input -------------------------------------------------
if (-not (Test-Path $InputDir)) {
    Write-Host ""
    Write-Host "  ERRORE: Cartella input non trovata: $InputDir" -ForegroundColor Red
    Write-Host ""
    exit 1
}

# -- Raccoglie tutti i PDF ----------------------------------------------------
$pdfs  = Get-ChildItem -Path $InputDir -Recurse -Filter "*.pdf" | Sort-Object FullName
$total = $pdfs.Count

if ($total -eq 0) {
    Write-Host ""
    Write-Host "  Nessun PDF trovato in $InputDir" -ForegroundColor Yellow
    Write-Host ""
    exit 0
}

$divider = "=" * 56

Write-Host ""
Write-Host $divider -ForegroundColor DarkGray
Write-Host "  PDF Compressor - Ghostscript /ebook (150 dpi)" -ForegroundColor White
Write-Host "  Input : $InputDir" -ForegroundColor DarkGray
Write-Host "  Output: $OutputDir" -ForegroundColor DarkGray
Write-Host "  Trovati: $total PDF" -ForegroundColor DarkGray
Write-Host $divider -ForegroundColor DarkGray
Write-Host ""

$totalBefore = 0
$totalAfter  = 0
$skipped     = 0
$index       = 0

foreach ($pdf in $pdfs) {
    $index++

    # Percorso relativo rispetto all'InputDir
    $relativePath = $pdf.FullName.Substring($InputDir.Length).TrimStart('\')
    $outPath      = Join-Path $OutputDir $relativePath

    # Crea sottocartella di destinazione se non esiste
    $outFolder = Split-Path $outPath -Parent
    if (-not (Test-Path $outFolder)) {
        New-Item -ItemType Directory -Path $outFolder -Force | Out-Null
    }

    $sizeBefore = [math]::Round($pdf.Length / 1MB, 2)
    $prefix     = "  [{0,2}/{1}]" -f $index, $total

    Write-Host "$prefix Comprimo - $($pdf.Name)" -ForegroundColor White -NoNewline

    # Esegui Ghostscript
    $gsArgs = @(
        "-sDEVICE=pdfwrite",
        "-dCompatibilityLevel=1.5",
        "-dPDFSETTINGS=/ebook",
        "-dNOPAUSE",
        "-dQUIET",
        "-dBATCH",
        "-dColorImageResolution=150",
        "-dGrayImageResolution=150",
        "-dMonoImageResolution=150",
        "-sOutputFile=`"$outPath`"",
        "`"$($pdf.FullName)`""
    )

    $result   = & $gs @gsArgs 2>&1
    $exitCode = $LASTEXITCODE

    if ($exitCode -ne 0) {
        Write-Host ""
        Write-Host "    ERRORE Ghostscript (exit $exitCode): $result" -ForegroundColor Red
        $skipped++
        continue
    }

    if (-not (Test-Path $outPath)) {
        Write-Host ""
        Write-Host "    ERRORE: file output non creato." -ForegroundColor Red
        $skipped++
        continue
    }

    $sizeAfter = [math]::Round((Get-Item $outPath).Length / 1MB, 2)

    # Se il compresso e' piu' grande, usa l'originale
    if ($sizeAfter -ge $sizeBefore) {
        Copy-Item $pdf.FullName $outPath -Force
        $sizeAfter = $sizeBefore
        Write-Host ("  ({0} MB -> gia' ottimizzato, copiato)" -f $sizeBefore) -ForegroundColor DarkGray
    } else {
        $pct = [math]::Round((1 - $sizeAfter / $sizeBefore) * 100, 0)
        Write-Host ("  ({0} MB -> {1} MB, -{2}%)" -f $sizeBefore, $sizeAfter, $pct) -ForegroundColor Green
    }

    $totalBefore += $pdf.Length
    $totalAfter  += (Get-Item $outPath).Length
}

# -- Riepilogo finale ---------------------------------------------------------
$savedBytes = $totalBefore - $totalAfter
$savedGB    = [math]::Round($savedBytes / 1GB, 3)
$savedMB    = [math]::Round($savedBytes / 1MB, 1)
$beforeGB   = [math]::Round($totalBefore / 1GB, 3)
$afterGB    = [math]::Round($totalAfter  / 1GB, 3)
$pctTotal   = if ($totalBefore -gt 0) { [math]::Round((1 - $totalAfter / $totalBefore) * 100, 1) } else { 0 }

Write-Host ""
Write-Host $divider -ForegroundColor DarkGray
Write-Host "  COMPLETATO" -ForegroundColor Green
Write-Host ("  Processati : {0}/{1} PDF" -f ($index - $skipped), $total) -ForegroundColor White
if ($skipped -gt 0) {
    Write-Host ("  Saltati    : {0} (errori)" -f $skipped) -ForegroundColor Yellow
}
Write-Host ("  Prima      : {0} GB ({1} MB)" -f $beforeGB, [math]::Round($totalBefore / 1MB, 1)) -ForegroundColor DarkGray
Write-Host ("  Dopo       : {0} GB ({1} MB)" -f $afterGB,  [math]::Round($totalAfter  / 1MB, 1)) -ForegroundColor DarkGray
Write-Host ("  Risparmio  : {0} GB ({1} MB) - -{2}%" -f $savedGB, $savedMB, $pctTotal) -ForegroundColor Cyan
Write-Host $divider -ForegroundColor DarkGray
Write-Host ""

#!/usr/bin/env python3
"""
wp-to-mdx.py
Converte l'export XML di WordPress in file MDX per Next.js (italylocations.com)

USO:
  python3 wp-to-mdx.py

OUTPUT:
  - content/locations/*.mdx       → 48 post location
  - content/pages/*.mdx           → 6 pagine statiche
  - content/_meta/all-slugs.json  → lista slug per redirect 301
  - content/_meta/all-images.json → lista URL immagini da migrare su R2
  - content/_meta/summary.txt     → riepilogo migrazione

REQUISITI:
  pip install beautifulsoup4 lxml
  (oppure: pip3 install beautifulsoup4 lxml)
"""

import xml.etree.ElementTree as ET
import re
import os
import json
from datetime import datetime

# ── Prova a importare BeautifulSoup per pulizia HTML ──────────────────────────
try:
    from bs4 import BeautifulSoup
    HAS_BS4 = True
except ImportError:
    HAS_BS4 = False
    print("⚠️  BeautifulSoup non trovato. Uso regex per pulizia HTML.")
    print("   Per risultati migliori: pip3 install beautifulsoup4 lxml\n")

# ── Configurazione ─────────────────────────────────────────────────────────────
XML_FILE   = "italianlocationsscoutingservice_WordPress_2026-03-17.xml"
OUTPUT_DIR = "content"
BASE_URL   = "https://italylocations.com"

# Namespace WordPress
NS = {
    'wp':      'http://wordpress.org/export/1.2/',
    'content': 'http://purl.org/rss/1.0/modules/content/',
    'excerpt': 'http://wordpress.org/export/1.2/excerpt/',
    'dc':      'http://purl.org/dc/elements/1.1/',
}

# Mappa attachment_id → URL immagine (per featured image)
ATTACHMENT_MAP: dict[str, str] = {}


# ── Helper: costruisce mappa id→url dagli attachment ──────────────────────────
def build_attachment_map(items):
    for item in items:
        pt = item.find('wp:post_type', NS)
        if pt is None or pt.text != 'attachment':
            continue
        post_id = item.find('wp:post_id', NS)
        att_url = item.find('wp:attachment_url', NS)
        if post_id is not None and att_url is not None:
            ATTACHMENT_MAP[post_id.text] = att_url.text


# ── Helper: pulisce l'HTML Elementor e restituisce Markdown leggibile ──────────
def html_to_markdown(html: str) -> str:
    if not html:
        return ""

    if HAS_BS4:
        soup = BeautifulSoup(html, 'lxml')

        # Rimuovi shortcode Elementor e blocchi vuoti
        for tag in soup.find_all(['script', 'style', 'noscript']):
            tag.decompose()

        # Converti tag HTML in Markdown
        result = []
        for element in soup.find_all(['h1','h2','h3','h4','p','ul','ol','li',
                                       'strong','em','a','img','figure','br']):
            name = element.name
            text = element.get_text(separator=' ', strip=True)

            if not text and name != 'img':
                continue

            if name == 'h1':
                result.append(f"\n## {text}\n")
            elif name == 'h2':
                result.append(f"\n## {text}\n")
            elif name == 'h3':
                result.append(f"\n### {text}\n")
            elif name == 'h4':
                result.append(f"\n#### {text}\n")
            elif name == 'p':
                if text:
                    result.append(f"\n{text}\n")
            elif name == 'li':
                if text:
                    result.append(f"- {text}")
            elif name == 'img':
                src = element.get('src', '')
                alt = element.get('alt', '')
                if src and 'wp-content' in src:
                    result.append(f"\n![{alt}]({src})\n")

        # Unisci e pulisci spazi multipli
        text = '\n'.join(result)
    else:
        # Fallback con regex
        text = html

        # Rimuovi blocchi Elementor/commenti
        text = re.sub(r'<!--.*?-->', '', text, flags=re.DOTALL)
        text = re.sub(r'data-elementor[^=]*="[^"]*"', '', text)

        # Converti heading
        text = re.sub(r'<h1[^>]*>(.*?)</h1>', r'\n## \1\n', text, flags=re.DOTALL|re.IGNORECASE)
        text = re.sub(r'<h2[^>]*>(.*?)</h2>', r'\n## \1\n', text, flags=re.DOTALL|re.IGNORECASE)
        text = re.sub(r'<h3[^>]*>(.*?)</h3>', r'\n### \1\n', text, flags=re.DOTALL|re.IGNORECASE)
        text = re.sub(r'<h4[^>]*>(.*?)</h4>', r'\n#### \1\n', text, flags=re.DOTALL|re.IGNORECASE)

        # Converti liste
        text = re.sub(r'<li[^>]*>(.*?)</li>', r'\n- \1', text, flags=re.DOTALL|re.IGNORECASE)

        # Converti immagini
        def replace_img(m):
            attrs = m.group(1)
            src_m = re.search(r'src="([^"]+)"', attrs)
            alt_m = re.search(r'alt="([^"]*)"', attrs)
            src = src_m.group(1) if src_m else ''
            alt = alt_m.group(1) if alt_m else ''
            if 'wp-content' in src:
                return f"\n![{alt}]({src})\n"
            return ''
        text = re.sub(r'<img([^>]+)/?>', replace_img, text, flags=re.IGNORECASE)

        # Paragrafi
        text = re.sub(r'<p[^>]*>(.*?)</p>', r'\n\1\n', text, flags=re.DOTALL|re.IGNORECASE)

        # Rimuovi tutti gli altri tag HTML
        text = re.sub(r'<[^>]+>', ' ', text)

        # Decodifica entità HTML
        text = text.replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>')
        text = text.replace('&nbsp;', ' ').replace('&#8220;', '"').replace('&#8221;', '"')
        text = text.replace('&#8216;', "'").replace('&#8217;', "'").replace('&#8230;', '...')

    # Pulizia finale
    text = re.sub(r'\n{3,}', '\n\n', text)
    text = re.sub(r' {2,}', ' ', text)
    text = text.strip()
    return text


# ── Helper: estrae immagini da contenuto HTML ──────────────────────────────────
def extract_images(html: str) -> list[str]:
    if not html:
        return []
    # Prima prova href (Elementor usa <a href="..."> per lightbox)
    hrefs = re.findall(
        r'href="(https?://italylocations\.com/wp-content/uploads/[^"]+\.(?:jpg|jpeg|png|webp|gif))"',
        html, re.IGNORECASE
    )
    # Poi src normali
    srcs = re.findall(
        r'src="(https?://italylocations\.com/wp-content/uploads/[^"]+\.(?:jpg|jpeg|png|webp|gif))"',
        html, re.IGNORECASE
    )
    # Unifica, rimuovi duplicati, escludi versioni scalate (-NNNxNNN)
    seen = set()
    result = []
    for url in hrefs + srcs:
        # Preferisci l'immagine originale (senza -scaled o dimensioni)
        clean = re.sub(r'-\d+x\d+(?=\.\w+$)', '', url)
        clean = re.sub(r'-scaled(?=\.\w+$)', '', clean)
        if clean not in seen:
            seen.add(clean)
            result.append(clean)
    return result


# ── Helper: determina la regione/area dal slug ─────────────────────────────────
def region_from_slug(slug: str) -> str:
    mapping = {
        'rome': 'Lazio', 'lazio': 'Lazio',
        'amalfi': 'Campania', 'ravello': 'Campania', 'cetara': 'Campania',
        'atrani': 'Campania', 'maiori': 'Campania', 'vietri': 'Campania',
        'umbria': 'Umbria', 'spoleto': 'Umbria', 'gubbio': 'Umbria',
        'montefalco': 'Umbria', 'rasiglia': 'Umbria', 'assisi': 'Umbria',
        'orvieto': 'Umbria', 'foligno': 'Umbria', 'todi': 'Umbria',
        'amelia': 'Umbria',
        'bologna': 'Emilia-Romagna', 'parma': 'Emilia-Romagna',
        'reggio': 'Emilia-Romagna', 'rimini': 'Emilia-Romagna',
        'northeast': 'Nord-Est',
        'tuscia': 'Lazio', 'nepi': 'Lazio', 'caprarola': 'Lazio',
        'tarquinia': 'Lazio', 'viterbo': 'Lazio', 'tuscania': 'Lazio',
        'bomarzo': 'Lazio', 'bolsena': 'Lazio', 'rieti': 'Lazio',
        'ponza': 'Lazio', 'latina': 'Lazio', 'sabaudia': 'Lazio',
        'appia': 'Lazio', 'gazometro': 'Lazio',
        'abruzzo': 'Abruzzo', 'pescara': 'Abruzzo', 'sulmona': 'Abruzzo',
        'torino': 'Piemonte',
        'sardegna': 'Sardegna', 'sardinia': 'Sardegna',
        'dolomit': 'Trentino/Veneto', 'cortina': 'Trentino/Veneto',
        'alpine': 'Trentino/Veneto',
        'chioggia': 'Veneto', 'veneto': 'Veneto',
        'marche': 'Marche',
    }
    slug_lower = slug.lower()
    for key, region in mapping.items():
        if key in slug_lower:
            return region
    return 'Italia'


# ── Helper: determina tipo di location dal contenuto ──────────────────────────
def location_type_from_content(title: str, slug: str) -> str:
    combined = (title + ' ' + slug).lower()
    if any(w in combined for w in ['coast', 'amalfi', 'beach', 'mare', 'island', 'ponza']):
        return 'Coastal'
    if any(w in combined for w in ['medieval', 'castle', 'historic', 'ancient', 'roman']):
        return 'Historic'
    if any(w in combined for w in ['mountain', 'alpine', 'dolomit', 'alps']):
        return 'Mountain'
    if any(w in combined for w in ['urban', 'street', 'city', 'rome', 'bologna', 'torino']):
        return 'Urban'
    if any(w in combined for w in ['industrial', 'loft', 'gazometro']):
        return 'Industrial'
    if any(w in combined for w in ['rural', 'countryside', 'lake', 'river']):
        return 'Rural'
    return 'Location'


# ── Genera frontmatter YAML sicuro ─────────────────────────────────────────────
def yaml_str(value: str) -> str:
    """Wrappa stringa in virgolette doppie, escapando quelle interne."""
    if value is None:
        return '""'
    escaped = value.replace('\\', '\\\\').replace('"', '\\"')
    return f'"{escaped}"'


# ── Crea cartelle output ───────────────────────────────────────────────────────
def setup_dirs():
    for d in [
        f"{OUTPUT_DIR}/locations",
        f"{OUTPUT_DIR}/pages",
        f"{OUTPUT_DIR}/_meta",
    ]:
        os.makedirs(d, exist_ok=True)


# ── Processa un singolo post ───────────────────────────────────────────────────
def process_post(item) -> dict:
    slug      = item.find('wp:post_name',   NS).text or ''
    title_el  = item.find('title')
    title     = title_el.text if title_el is not None else slug
    link_el   = item.find('link')
    link      = link_el.text if link_el is not None else f"{BASE_URL}/{slug}/"
    date_el   = item.find('wp:post_date',   NS)
    raw_date  = date_el.text if date_el is not None else ''
    pub_date  = item.find('pubDate')
    pub       = pub_date.text if pub_date is not None else ''

    # Formatta data ISO
    try:
        dt = datetime.strptime(raw_date, '%Y-%m-%d %H:%M:%S')
        iso_date = dt.strftime('%Y-%m-%d')
    except Exception:
        iso_date = raw_date[:10] if raw_date else ''

    # Excerpt
    exc_el  = item.find('excerpt:encoded', NS)
    excerpt = exc_el.text.strip() if exc_el is not None and exc_el.text else ''

    # Contenuto HTML
    cont_el = item.find('content:encoded', NS)
    html    = cont_el.text if cont_el is not None else ''

    # Immagini
    images = extract_images(html)

    # Featured image (da attachment map)
    featured_image = ''
    for pm in item.findall('wp:postmeta', NS):
        k = pm.find('wp:meta_key',   NS)
        v = pm.find('wp:meta_value', NS)
        if k is not None and k.text == '_thumbnail_id' and v is not None:
            featured_image = ATTACHMENT_MAP.get(v.text, '')
            break

    # Se featured image non è nella lista, aggiungila in testa
    if featured_image and featured_image not in images:
        images.insert(0, featured_image)

    # Yoast SEO
    meta = {}
    for pm in item.findall('wp:postmeta', NS):
        k = pm.find('wp:meta_key',   NS)
        v = pm.find('wp:meta_value', NS)
        if k is not None and v is not None and k.text:
            meta[k.text] = v.text or ''

    seo_title = meta.get('_yoast_wpseo_title', '') or title
    seo_desc  = meta.get('_yoast_wpseo_metadesc', '') or excerpt[:160]
    focus_kw  = meta.get('_yoast_wpseo_focuskw', '')

    # Tag
    tags = []
    for cat in item.findall('category'):
        domain = cat.get('domain', '')
        if domain == 'post_tag' and cat.text:
            tags.append(cat.text.strip())

    # Regione e tipo
    region        = region_from_slug(slug)
    location_type = location_type_from_content(title, slug)

    # Markdown del contenuto
    body = html_to_markdown(html)

    return {
        'slug':           slug,
        'title':          title,
        'date':           iso_date,
        'excerpt':        excerpt,
        'seo_title':      seo_title,
        'seo_desc':       seo_desc,
        'focus_kw':       focus_kw,
        'tags':           tags,
        'region':         region,
        'location_type':  location_type,
        'images':         images,
        'featured_image': featured_image or (images[0] if images else ''),
        'original_url':   link,
        'body':           body,
    }


# ── Scrive un file MDX ─────────────────────────────────────────────────────────
def write_mdx_location(post: dict, out_dir: str):
    tags_yaml = json.dumps(post['tags'])
    images_yaml = json.dumps(post['images'])

    frontmatter = f"""---
title: {yaml_str(post['title'])}
slug: {yaml_str(post['slug'])}
date: "{post['date']}"
excerpt: {yaml_str(post['excerpt'])}
seoTitle: {yaml_str(post['seo_title'])}
seoDescription: {yaml_str(post['seo_desc'])}
focusKeyword: {yaml_str(post['focus_kw'])}
region: {yaml_str(post['region'])}
locationType: {yaml_str(post['location_type'])}
tags: {tags_yaml}
featuredImage: {yaml_str(post['featured_image'])}
images: {images_yaml}
originalUrl: {yaml_str(post['original_url'])}
---

"""

    content = frontmatter + post['body']
    filepath = os.path.join(out_dir, f"{post['slug']}.mdx")
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    return filepath


# ── MAIN ───────────────────────────────────────────────────────────────────────
def main():
    print("🚀 WordPress → MDX Converter")
    print(f"   Input:  {XML_FILE}")
    print(f"   Output: {OUTPUT_DIR}/\n")

    if not os.path.exists(XML_FILE):
        print(f"❌ File non trovato: {XML_FILE}")
        print("   Assicurati di eseguire lo script nella stessa cartella dell'XML.")
        return

    setup_dirs()

    tree = ET.parse(XML_FILE)
    root = tree.getroot()
    channel = root.find('channel')
    items = list(channel.findall('item'))

    # Build attachment map prima di tutto
    print("📎 Costruisco mappa attachment...")
    build_attachment_map(items)
    print(f"   {len(ATTACHMENT_MAP)} immagini trovate negli attachment\n")

    # Processa post
    posts = []
    pages = []
    all_slugs = []
    all_images = set()

    print("📝 Processo post e pagine...")
    for item in items:
        post_type = item.find('wp:post_type', NS)
        status    = item.find('wp:status',    NS)
        if post_type is None or status is None:
            continue
        if status.text != 'publish':
            continue

        if post_type.text == 'post':
            data = process_post(item)
            posts.append(data)
            all_slugs.append({
                'slug':         data['slug'],
                'original_url': data['original_url'],
                'next_url':     f"/locations/{data['slug']}",
                'type':         'post',
            })
            for img in data['images']:
                all_images.add(img)

        elif post_type.text == 'page':
            data = process_post(item)
            pages.append(data)
            all_slugs.append({
                'slug':         data['slug'],
                'original_url': data['original_url'],
                'next_url':     f"/{data['slug']}",
                'type':         'page',
            })

    # Scrivi MDX location
    print(f"\n📄 Scrivo {len(posts)} file MDX location...")
    for post in sorted(posts, key=lambda x: x['date']):
        fp = write_mdx_location(post, f"{OUTPUT_DIR}/locations")
        print(f"   ✓ {post['slug']}.mdx  [{post['region']}] {len(post['images'])} img")

    # Scrivi MDX pagine statiche
    print(f"\n📄 Scrivo {len(pages)} file MDX pagine...")
    for page in pages:
        fp = write_mdx_location(page, f"{OUTPUT_DIR}/pages")
        print(f"   ✓ {page['slug']}.mdx")

    # Salva metadata JSON
    slugs_file = f"{OUTPUT_DIR}/_meta/all-slugs.json"
    with open(slugs_file, 'w', encoding='utf-8') as f:
        json.dump(all_slugs, f, indent=2, ensure_ascii=False)
    print(f"\n📋 Slug salvati: {slugs_file}")

    images_list = sorted(all_images)
    images_file = f"{OUTPUT_DIR}/_meta/all-images.json"
    with open(images_file, 'w', encoding='utf-8') as f:
        json.dump(images_list, f, indent=2, ensure_ascii=False)
    print(f"🖼️  Immagini salvate: {images_file}  ({len(images_list)} URL unici)")

    # Genera script redirect per next.config.js
    redirects = []
    for s in all_slugs:
        if s['type'] == 'post':
            # WordPress usa /<slug>/ → Next.js usa /locations/<slug>
            redirects.append({
                'source':      f"/{s['slug']}",
                'destination': f"/locations/{s['slug']}",
                'permanent':   True,
            })

    redirects_file = f"{OUTPUT_DIR}/_meta/redirects.json"
    with open(redirects_file, 'w', encoding='utf-8') as f:
        json.dump(redirects, f, indent=2, ensure_ascii=False)

    # Genera snippet next.config.js
    nextconfig_snippet = f"""// Aggiungi questo in next.config.js → async redirects()
// FILE: {redirects_file}

async redirects() {{
  return {json.dumps(redirects, indent=4)};
}},
"""
    nextconfig_file = f"{OUTPUT_DIR}/_meta/next-config-redirects.js"
    with open(nextconfig_file, 'w', encoding='utf-8') as f:
        f.write(nextconfig_snippet)
    print(f"↩️  Redirect 301 salvati: {nextconfig_file}")

    # Script download immagini per R2
    download_script = f"""#!/usr/bin/env node
/**
 * download-images.mjs
 * Scarica tutte le immagini da WordPress e le prepara per l'upload su Cloudflare R2
 * 
 * USO: node download-images.mjs
 * REQUISITI: Node.js 18+  (usa fetch nativo)
 */

import {{ writeFileSync, mkdirSync, existsSync }} from 'fs';
import {{ dirname, basename }} from 'path';

const IMAGES = {json.dumps(images_list, indent=2)};

const OUT_DIR = './downloaded-images';
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, {{ recursive: true }});

let success = 0, failed = 0;
const failedList = [];

for (const url of IMAGES) {{
  const filename = url.split('/wp-content/uploads/')[1]?.replace(/\\//g, '_') || basename(url);
  const outPath = `${{OUT_DIR}}/${{filename}}`;
  
  if (existsSync(outPath)) {{
    console.log(`⏭  Già presente: ${{filename}}`);
    success++;
    continue;
  }}
  
  try {{
    const res = await fetch(url, {{ signal: AbortSignal.timeout(15000) }});
    if (!res.ok) throw new Error(`HTTP ${{res.status}}`);
    const buf = await res.arrayBuffer();
    writeFileSync(outPath, Buffer.from(buf));
    console.log(`✓  ${{filename}}`);
    success++;
  }} catch (err) {{
    console.error(`✗  ${{filename}} → ${{err.message}}`);
    failed++;
    failedList.push(url);
  }}
  
  // Piccolo delay per non sovraccaricare il server
  await new Promise(r => setTimeout(r, 200));
}}

console.log(`\\n✅ Scaricate: ${{success}} | ❌ Fallite: ${{failed}}`);
if (failedList.length > 0) {{
  writeFileSync('failed-images.json', JSON.stringify(failedList, null, 2));
  console.log('Lista fallite salvata in failed-images.json');
}}
"""
    download_file = f"{OUTPUT_DIR}/_meta/download-images.mjs"
    with open(download_file, 'w', encoding='utf-8') as f:
        f.write(download_script)
    print(f"⬇️  Script download immagini: {download_file}")

    # Riepilogo finale
    summary = f"""=== RIEPILOGO MIGRAZIONE WordPress → Next.js ===
Data: {datetime.now().strftime('%Y-%m-%d %H:%M')}

CONTENUTI MIGRATI:
  Post (location):     {len(posts)}
  Pagine statiche:     {len(pages)}
  Immagini uniche:     {len(images_list)}
  Redirect 301:        {len(redirects)}

FILE GENERATI:
  content/locations/   {len(posts)} file .mdx
  content/pages/       {len(pages)} file .mdx
  _meta/all-slugs.json
  _meta/all-images.json
  _meta/redirects.json
  _meta/next-config-redirects.js  ← copia in next.config.js
  _meta/download-images.mjs       ← scarica foto da WordPress

PROSSIMI PASSI:
1. Copia content/ nella root del progetto Next.js
2. Installa: npm install next-mdx-remote gray-matter
3. Copia i redirect da next-config-redirects.js in next.config.js
4. Esegui download-images.mjs per scaricare le foto
5. Carica le foto su Cloudflare R2
6. Sostituisci gli URL italylocations.com/wp-content/... con URL R2

STRUTTURA NEXT.JS CONSIGLIATA:
  app/locations/[slug]/page.tsx   ← legge il file MDX corrispondente
  app/locations/page.tsx          ← griglia di tutte le location
  lib/mdx.ts                      ← helper per leggere i file MDX

NOTE SEO:
  - Gli slug originali sono preservati (/{'{slug}'} → /locations/{'{slug}'})
  - I redirect 301 mantengono il posizionamento Google
  - Tutti gli excerpt e le meta description Yoast sono inclusi nel frontmatter
"""
    summary_file = f"{OUTPUT_DIR}/_meta/summary.txt"
    with open(summary_file, 'w', encoding='utf-8') as f:
        f.write(summary)

    print(f"\n{'='*50}")
    print(summary)
    print(f"{'='*50}")
    print(f"\n✅ Migrazione completata! File in: ./{OUTPUT_DIR}/")


if __name__ == '__main__':
    main()

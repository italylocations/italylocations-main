# Italy Locations — italylocations.com
## Note Architetturali per Claude Code

### Panoramica Progetto
Sito principale per Italy Locations, agenzia professionale
di location scouting cinematografico in Italia.
Fondatore: Nicolas Vanegas Sanchez
- Fotografo e filmmaker professionista dal 2014
- Origini colombiane, cresciuto in Italia
- Lingue: italiano, inglese, spagnolo (fluente)
- P.IVA: 14296561005, ATECO: 74.20.19
- Email: info@italylocations.com
- WhatsApp: +39 389 536 5864
- Sito personale: nreal.it

### URLs
- Sito principale: https://italylocations.com (dominio da collegare)
- Preview Vercel: https://italylocations-main.vercel.app
- Sottodominio database privato: https://locations.italylocations.com
- Repository: https://github.com/italylocations/italylocations-main

### Tech Stack
- Framework: Next.js 16.1.7 (App Router, Turbopack)
- Linguaggio: TypeScript
- Styling: Tailwind CSS
- Font: Playfair Display (titoli) + DM Sans (body)
- Hosting: Vercel
- Storage foto/PDF: Cloudflare R2
  - Bucket: italy-locations-photos
  - URL pubblico: https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev
  - Foto sito: /main-site/
  - PDF scouting: /scouting-reports/
  - Foto auto: /main-site/cars/
- Email: Resend (noreply@italylocations.com)
- Analytics: Google Analytics 4 (G-CM2Z9LE08K)
- Anti-spam form: Cloudflare Turnstile + Honeypot
- Tracking PDF: GA4 event file_download

### Design System
- Sfondo: gradient scuro (#0a0f1e → #111827 → #1a2744 → #1e293b)
- Testo primario: white
- Testo secondario: rgba(255,255,255,0.70)
- Accent oro: gradient (#c9a84c → #e8d5a0)
- Accent blu: gradient (#3b82f6 → #2563eb)
- Card: glassmorphism rgba(255,255,255,0.04) + border rgba(255,255,255,0.08)
- Componenti UI: GoldText, GlassCard, BlueButton, GoldButton,
  SectionLabel, Tag, AnimatedCounter, AnimateOnScroll
  (tutti in components/ui/)

### Struttura Pagine
- / → Homepage completa con 9 sezioni
- /locations → Griglia 48 location con filtri regione
- /locations/[slug] → Pagina singola con MDX, galleria, PDF download
- /iconic-cars → 4 auto premium per produzioni
- /services → 8 servizi professionali
- /rates → Pricing €600/€750 al giorno
- /about → Storia Nicolas, foto professionale, equipment
- /contact → Form con Resend + Turnstile + Honeypot
- /faq → 17 domande in 4 categorie con accordion e ricerca

### Content System
- 48 file MDX in content/locations/
- 6 file MDX in content/pages/
- Frontmatter: title, slug, date, excerpt, seoTitle,
  seoDescription, region, locationType, tags,
  featuredImage, images[], pdfUrl
- Helper: lib/locations.ts (getAllLocations, getLocationBySlug)
- Sitemap dinamica include tutte le 48 location URL

### PDF Scouting Reports
- 48 PDF compressi (originali 7.83GB → 0.89GB, -88%)
- Compressi con Ghostscript /ebook (150dpi)
- Caricati su R2 in /scouting-reports/
- Collegati ai MDX via campo pdfUrl
- Download tracciato con GA4 event file_download
- Solo umbria-orvieto ha PDF separato aggiunto manualmente

### Iconic Cars (4 veicoli)
Disponibili SOLO come production prop — NON per uso privato.
Richiede documentazione produzione + assicurazione.
1. Porsche 997 Carrera S Cabrio 2006 — Nero Pastello, 54.000km
2. Lamborghini Gallardo LP-560 4 2013 — Grigio opaco/verde lime, 26.000km
3. Mercedes SL 350 AMG Sport R230 2009 — Argento metallizzato, 150.000km
4. Porsche 997 Carrera 4S Coupé 2010 — Bianca Carrara, 41.000km

### Business Model
- Location scouting: €600/giorno (Italia centrale)
  o €750/giorno (Nord/Sud)
- Database location private: commissione 10% sul fee produzione
- Iconic Cars: tariffe su richiesta per produzioni
- PDF scouting: scaricabili gratuitamente dalle pagine location
- Clientela: quasi sempre internazionale

### Variabili Ambiente (.env.local)
Non inserire MAI i valori reali qui. Solo i nomi:
- RESEND_API_KEY
- NEXT_PUBLIC_TURNSTILE_SITE_KEY
- TURNSTILE_SECRET_KEY
- R2_ACCOUNT_ID
- R2_ACCESS_KEY_ID
- R2_SECRET_ACCESS_KEY
- R2_BUCKET
- NEXT_PUBLIC_APP_URL

### Script Utili nella Root
- upload-to-r2.mjs → carica foto su R2
- upload-pdfs-to-r2.mjs → carica PDF su R2
- download-images.mjs → scarica foto da WordPress
- compress-pdfs.ps1 → comprime PDF con Ghostscript
- apply-pdf-mapping.mjs → collega PDF ai file MDX
- link-pdfs-to-mdx.mjs → analizza matching PDF/MDX
- wp-to-mdx.py → converte XML WordPress in MDX

### Roadmap — Prossimi Step

#### IMMEDIATO (prima del go-live)
1. Collegare dominio italylocations.com a Vercel
   - Vai su SiteGround → DNS → aggiungi record A o CNAME
   - Su Vercel → Settings → Domains → aggiungi italylocations.com
2. Aggiungere redirect 301 in next.config.ts
   - File pronto in content/_meta/next-config-redirects.js
   - Preserva posizionamento SEO dal vecchio WordPress
3. Testare form contatto end-to-end con Resend
4. Verificare Google Search Console con nuovo dominio

#### FASE 2 — Post lancio (settimane 1-4)
5. Blog automatico con supervisione Nicolas
   - 1 articolo a settimana su film girati in Italia
   - Fonti: IMDb, Wikipedia, BFI, Cinecittà News
   - Claude API genera bozza → Nicolas approva → pubblica
   - File MDX in content/blog/
   - Nuova route: /blog e /blog/[slug]
6. Meta Pixel per retargeting
   - Creare account Meta Business Manager
   - Installare pixel su tutte le pagine
   - Campagne retargeting su Instagram/Facebook
7. Instagram automatico con Claude
   - Script su Mac Mini con cron job
   - Claude API genera caption dalle foto location
   - Meta Graph API pubblica su Instagram @italylocations
   - Cartella immagini → schedule pubblicazione → approvazione Nicolas
8. Traduzioni IT/ES
   - Sistema dizionari già in lib/i18n.ts
   - Switcher navbar EN/IT/ES
   - Priorità: italiano prima, spagnolo dopo

#### FASE 3 — Crescita (mesi 2-6)
9. Google Ads Remarketing
10. LinkedIn Insight Tag per B2B
11. Nuove location da aggiungere al database
12. Nuove auto da aggiungere a /iconic-cars
13. Scout module per outreach proprietari location
    (documentato in italy-locations-outreach-plan.docx)
14. Pagina dedicata ogni auto in /iconic-cars/[slug]
15. Sistema recensioni/testimonial da produzioni

### Sottodominio locations.italylocations.com
Progetto separato in ~/italy-locations-database/frontend/
Stack identico (Next.js, TypeScript, Tailwind)
Database: Google Sheets + SQLite locale Mac Mini
Form 9 step per registrazione location private
Dashboard admin con generazione PDF bilingue
AI Outreach System documentato (vedere file .docx nel progetto)

### Note Operative
- Nicolas lavora dal Mac Mini (IP locale 192.168.188.44:3000)
  e dal Predator Windows (C:\progetti\italylocations-main)
- Git push da Predator → Vercel autodeploy in ~2 minuti
- Preferisce comandi separati, non concatenati con &&
- Rivede sempre i testi prima dell'implementazione
- Le foto delle location sono sue (copyright Nicolas Vanegas Sanchez)

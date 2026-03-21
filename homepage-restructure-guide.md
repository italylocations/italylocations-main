# Homepage Restructure — italylocations.com
## Guida Implementazione — 22 Marzo 2026

---

## STEP 1: Upload file su R2

Carica i 6 file rinominati nella cartella `mytheresa-festive/` (allegata) su Cloudflare R2.

Dal Predator Windows, usa lo script `upload-to-r2.mjs` oppure la dashboard Cloudflare R2:

**Percorso R2:** `main-site/projects/mytheresa-festive/`

| File locale | Percorso R2 |
|---|---|
| `01-mytheresa-festive-roma-street.jpg` | `main-site/projects/mytheresa-festive/01-mytheresa-festive-roma-street.jpg` |
| `02-mytheresa-festive-roma-suit.jpg` | `main-site/projects/mytheresa-festive/02-mytheresa-festive-roma-suit.jpg` |
| `03-mytheresa-festive-roma-lace.jpg` | `main-site/projects/mytheresa-festive/03-mytheresa-festive-roma-lace.jpg` |
| `04-mytheresa-festive-roma-jewels.jpg` | `main-site/projects/mytheresa-festive/04-mytheresa-festive-roma-jewels.jpg` |
| `05-mytheresa-festive-roma-reel1.mp4` | `main-site/projects/mytheresa-festive/05-mytheresa-festive-roma-reel1.mp4` |
| `06-mytheresa-festive-roma-reel2.mp4` | `main-site/projects/mytheresa-festive/06-mytheresa-festive-roma-reel2.mp4` |

**URL pubblici (verificati ✅):**
```
https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/projects/mytheresa-festive/01-mytheresa-festive-roma-street.jpg
https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/projects/mytheresa-festive/02-mytheresa-festive-roma-suit.jpg
https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/projects/mytheresa-festive/03-mytheresa-festive-roma-lace.jpg
https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/projects/mytheresa-festive/04-mytheresa-festive-roma-jewels.jpg
https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/projects/mytheresa-festive/05-mytheresa-festive-roma-reel1.mp4
https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/projects/mytheresa-festive/06-mytheresa-festive-roma-reel2.mp4
```

---

## STEP 2: Modifiche a `app/page.tsx`

### Struttura PRIMA → DOPO

```
PRIMA:                              DOPO:
1. Hero                             1. Hero
2. Counter (con €600)               2. Counter (SENZA €600)
3. Servizi                          3. Servizi
4. Ogni Angolo d'Italia             4. Ogni Angolo d'Italia (+ 6 foto)
5. Tariffe ← RIMUOVERE             5. Ultimi Lavori ← NUOVA
6. Partner di Fiducia               6. Partner di Fiducia
7. Database Location ← RIMUOVERE   7. CTA "Pronto a Girare?"
8. Hai una Location?                8. Hai una Location? (spostata)
9. CTA "Pronto a Girare?"          9. Footer
10. Footer
```

### 2a. RIMUOVERE: Sezione Counter €600

Cerca nel file `page.tsx` il counter con `€600` o `Starting Daily Rate` e rimuovi quel singolo blocco. Mantieni gli altri 3 counter (20+ Regioni, 500+ Locations, 10+ Anni).

Il blocco da rimuovere è simile a:
```tsx
{/* Counter €600 */}
<div className="text-center">
  <div className="...">€<span>600</span></div>
  <p className="...">Starting Daily Rate</p>
</div>
```

Dopo la rimozione, la griglia dei counter passa da 4 colonne a 3:
```tsx
{/* Cambia da grid-cols-4 a grid-cols-3 */}
<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
```

### 2b. RIMUOVERE: Sezione "Tariffe / Clear Rates"

Cerca la sezione con `TRANSPARENT PRICING` o `Clear Rates. No Surprises.` o le card €600/€750 e rimuovi l'intera sezione `<section>...</section>`.

### 2c. RIMUOVERE: Sezione "Database Location Private"

Cerca la sezione con `Private Location Database` o `EXCLUSIVE` e rimuovi l'intera sezione.

### 2d. SPOSTARE: "Hai una Location Privata?"

Taglia la sezione con `FOR PROPERTY OWNERS` / `Do You Have a Private Location` e spostala DOPO la sezione CTA "Ready to Shoot in Italy?" — diventa la penultima sezione prima del footer.

### 2e. AGGIUNGERE: Sezione "Ultimi Lavori" (dopo "Ogni Angolo d'Italia")

Inserisci questa nuova sezione DOPO "Every Corner of Italy" e PRIMA di "Your Trusted Partner":

```tsx
{/* ============================================ */}
{/* SEZIONE: ULTIMI LAVORI / LATEST WORK         */}
{/* ============================================ */}
<section className="py-24 px-4 relative">
  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <div className="text-center mb-4">
      <p className="text-xs tracking-[0.3em] text-[#c9a84c] uppercase mb-4">
        Latest Work
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3"
          style={{ fontFamily: 'Playfair Display, serif' }}>
        Mytheresa Festive
      </h2>
      <p className="text-white/50 text-sm mb-2">
        Rome, Italy — Festive Campaign
      </p>
      <p className="text-white/30 text-xs mb-8">
        Location Management & Permit Coordination — Rome Historic Center
      </p>
    </div>

    {/* Griglia foto/video — stile Instagram */}
    {/* Desktop: 3 colonne, Tablet: 2, Mobile: 1 */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">

      {/* Foto 1 — Street */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg group">
        <img
          src="https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/projects/mytheresa-festive/01-mytheresa-festive-roma-street.jpg"
          alt="Mytheresa Festive Campaign — Rome street fashion"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Foto 2 — Suit */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg group">
        <img
          src="https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/projects/mytheresa-festive/02-mytheresa-festive-roma-suit.jpg"
          alt="Mytheresa Festive Campaign — Rome fashion editorial"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Foto 3 — Lace */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg group">
        <img
          src="https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/projects/mytheresa-festive/03-mytheresa-festive-roma-lace.jpg"
          alt="Mytheresa Festive Campaign — Rome evening wear"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Foto 4 — Jewels */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg group">
        <img
          src="https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/projects/mytheresa-festive/04-mytheresa-festive-roma-jewels.jpg"
          alt="Mytheresa Festive Campaign — Rome luxury jewelry"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Video 1 — Reel */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg group">
        <video
          src="https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/projects/mytheresa-festive/05-mytheresa-festive-roma-reel1.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        {/* Icona play per indicare che è un video */}
        <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full p-1.5">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>

      {/* Video 2 — Reel */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg group">
        <video
          src="https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/projects/mytheresa-festive/06-mytheresa-festive-roma-reel2.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full p-1.5">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>

    </div>

    {/* Credits */}
    <div className="mt-8 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03]">
        <span className="text-white/30 text-xs">Client:</span>
        <span className="text-white/60 text-xs font-medium">Mytheresa</span>
        <span className="text-white/20 text-xs">|</span>
        <span className="text-white/30 text-xs">Production:</span>
        <span className="text-white/60 text-xs font-medium">Pierce & Pierce</span>
        <span className="text-white/20 text-xs">|</span>
        <span className="text-white/30 text-xs">Location Manager:</span>
        <span className="text-[#c9a84c]/80 text-xs font-medium">Italy Locations</span>
      </div>
    </div>

    {/* Sottotitolo permessi */}
    <p className="text-center text-white/25 text-[11px] mt-3">
      Full permit coordination for Rome historic center — Municipio I
    </p>

  </div>
</section>
```

### 2f. Sezione "Ogni Angolo d'Italia" — aggiungere 6 foto

Nella sezione esistente "Every Corner of Italy", DOPO i tag delle regioni e il testo, aggiungi una griglia di 6 foto. Quando mi mandi le foto le caricheremo su R2 in `main-site/regions/`. Per ora metti i placeholder:

```tsx
{/* Griglia foto regioni — aggiungere DOPO il testo e i tag regioni */}
<div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-10">
  {/* Sostituire src con le foto reali quando pronte */}
  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
    <img src="PLACEHOLDER_FOTO_1" alt="Italy filming location" className="w-full h-full object-cover" loading="lazy" />
  </div>
  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
    <img src="PLACEHOLDER_FOTO_2" alt="Italy filming location" className="w-full h-full object-cover" loading="lazy" />
  </div>
  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
    <img src="PLACEHOLDER_FOTO_3" alt="Italy filming location" className="w-full h-full object-cover" loading="lazy" />
  </div>
  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
    <img src="PLACEHOLDER_FOTO_4" alt="Italy filming location" className="w-full h-full object-cover" loading="lazy" />
  </div>
  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
    <img src="PLACEHOLDER_FOTO_5" alt="Italy filming location" className="w-full h-full object-cover" loading="lazy" />
  </div>
  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
    <img src="PLACEHOLDER_FOTO_6" alt="Italy filming location" className="w-full h-full object-cover" loading="lazy" />
  </div>
</div>
```

---

## STEP 3: Aggiornare traduzioni `lib/i18n.ts`

Aggiungi le traduzioni per la nuova sezione "Latest Work":

```typescript
// Dentro il dizionario, sezione homepage
latestWork: {
  en: {
    badge: 'Latest Work',
    title: 'Mytheresa Festive',
    subtitle: 'Rome, Italy — Festive Campaign',
    description: 'Location Management & Permit Coordination — Rome Historic Center',
    creditClient: 'Client',
    creditProduction: 'Production',
    creditLocation: 'Location Manager',
    permits: 'Full permit coordination for Rome historic center — Municipio I',
  },
  it: {
    badge: 'Ultimi Lavori',
    title: 'Mytheresa Festive',
    subtitle: 'Roma, Italia — Campagna Festive',
    description: 'Gestione Location & Coordinamento Permessi — Centro Storico di Roma',
    creditClient: 'Cliente',
    creditProduction: 'Produzione',
    creditLocation: 'Location Manager',
    permits: 'Coordinamento completo permessi centro storico di Roma — Municipio I',
  },
  es: {
    badge: 'Últimos Trabajos',
    title: 'Mytheresa Festive',
    subtitle: 'Roma, Italia — Campaña Festive',
    description: 'Gestión de Locaciones y Coordinación de Permisos — Centro Histórico de Roma',
    creditClient: 'Cliente',
    creditProduction: 'Producción',
    creditLocation: 'Location Manager',
    permits: 'Coordinación completa de permisos centro histórico de Roma — Municipio I',
  },
},
```

---

## STEP 4: Verifica finale

Checklist dopo le modifiche:

- [ ] ❌ Sezione tariffe/pricing rimossa
- [ ] ❌ Counter €600 rimosso (resta griglia 3 colonne: 20+, 500+, 10+)
- [ ] ❌ Sezione "Database Location Private" rimossa
- [ ] ✅ Sezione "Ultimi Lavori" visibile al punto 5
- [ ] ✅ Griglia 3 col desktop / 1 col mobile con 4 foto + 2 video
- [ ] ✅ Video autoplay muted loop
- [ ] ✅ Credits corretti in basso
- [ ] ✅ "Hai una Location?" spostata dopo CTA finale
- [ ] ✅ 6 placeholder foto in "Ogni Angolo d'Italia" (da sostituire)
- [ ] ✅ Traduzioni IT/EN/ES aggiornate
- [ ] ✅ Mobile responsive testato
- [ ] Push su GitHub → autodeploy Vercel

---

## Riepilogo file

| File | Azione |
|---|---|
| `app/page.tsx` | Rimuovere tariffe, database, €600. Aggiungere "Ultimi Lavori". Spostare "Hai una Location?". Aggiungere foto placeholder in "Ogni Angolo". |
| `lib/i18n.ts` | Aggiungere traduzioni sezione "latestWork" |
| R2 bucket | Upload 4 foto + 2 video in `main-site/projects/mytheresa-festive/` |

---

*Guida preparata il 22 Marzo 2026 per Nicolas Vanegas Sanchez — Italy Locations*

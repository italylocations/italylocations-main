# italylocations-main — Architecture Notes

## Project Overview
Main website for **italylocations.com** — a professional film location scouting agency in Italy.
Target audience: international film directors, producers, advertising agencies, professional photographers.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (no tailwind.config.ts — config via `@theme` in globals.css)
- **Fonts**: Playfair Display (headings) + DM Sans (body) via `next/font/google`
- **Deploy**: Vercel at `italylocations.com`

## Design System
Dark luxury premium aesthetic. See `app/globals.css` for CSS variables and utility classes.

Key CSS helpers defined in globals.css:
- `.gold-text` — gradient gold text (use for headings and labels)
- `.scroll-animate` + `.in-view` — scroll-triggered fade-up animation
- `.gold-border-glow` — gold box-shadow for highlighted cards
- `.blue-glow` — blue box-shadow for CTA buttons
- `.region-tag:hover` — hover effect for region tags
- `.stats-divider` — vertical divider in stats bar

Font variables (set via next/font/google):
- `var(--font-playfair)` — Playfair Display
- `var(--font-dm-sans)` — DM Sans

Always apply Playfair Display inline via `style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}`
because Tailwind v4 doesn't have a `font-playfair` utility by default.

## Directory Structure
```
app/
  layout.tsx          ← Global layout: Navbar, Footer, SEO metadata, GA4, JSON-LD
  globals.css         ← Design tokens + utility classes
  page.tsx            ← Homepage (imports section components)
  contact/page.tsx    ← Full contact form (functional)
  services/page.tsx   ← Coming Soon placeholder
  rates/page.tsx      ← Coming Soon placeholder
  locations/page.tsx  ← Coming Soon placeholder
  about/page.tsx      ← Coming Soon placeholder
  faq/page.tsx        ← Coming Soon placeholder
  sitemap.ts          ← Next.js sitemap generator
  robots.ts           ← robots.txt generator

components/
  Navbar.tsx          ← "use client" — sticky navbar, mobile menu, EN/IT toggle
  Footer.tsx          ← Server component
  ComingSoon.tsx      ← Reusable placeholder for not-yet-built pages
  sections/           ← Homepage sections (mostly server components)
    HeroSection.tsx
    StatsSection.tsx    ← Uses AnimatedCounter (client)
    ServicesSection.tsx
    RegionsSection.tsx
    PricingSection.tsx
    WhySection.tsx
    DatabaseSection.tsx
    CtaSection.tsx
  ui/                 ← Primitive UI components
    GoldText.tsx
    GlassCard.tsx
    BlueButton.tsx
    GoldButton.tsx
    SectionLabel.tsx
    Tag.tsx
    AnimatedCounter.tsx  ← "use client" — counts up on scroll
    AnimateOnScroll.tsx  ← "use client" — triggers .in-view class on scroll

lib/
  i18n.ts             ← EN/IT translation dictionaries (no external library)
```

## i18n
Simple dictionary system in `lib/i18n.ts`. No external library.
Language state is local to `Navbar.tsx` (visual toggle only for now).
To wire up full i18n: create a `LanguageContext` provider and pass it from layout.tsx.

## SEO
- Metadata defined in `layout.tsx` (global) and each page
- JSON-LD `ProfessionalService` schema in `layout.tsx`
- Sitemap at `/sitemap.xml` via `app/sitemap.ts`
- Robots at `/robots.txt` via `app/robots.ts`
- GA4 tracking ID: `G-CM2Z9LE08K` (in layout.tsx via next/script)
- Canonical: `https://italylocations.com`

## Key Business Info
- Email: info@italylocations.com
- WhatsApp: +39 389 536 5864
- Private location database subdomain: https://locations.italylocations.com
- Daily rates: €600 (Central Italy), €750 (North & South)
- P.IVA: IT02345678901 (placeholder — update with real VAT)

## Tailwind v4 Notes
- No `tailwind.config.ts` — Tailwind v4 uses `@theme` in CSS
- Custom colors defined in `@theme` block in globals.css
- For one-off colors use Tailwind arbitrary values: `bg-[rgba(255,255,255,0.04)]`
- For complex gradients: use inline `style` or custom CSS classes
- `background-attachment: fixed` disabled on mobile (iOS Safari incompatibility)

## Conventions
- Sections that need client state → `'use client'` at top of file
- Scroll animations: wrap content in `<AnimateOnScroll>` with optional `delay` prop
- All headings use Playfair Display via inline style
- Glass cards: use `<GlassCard>` component, add `goldBorder` prop for highlighted cards
- CTAs: `<BlueButton>` for primary, `<GoldButton>` for secondary

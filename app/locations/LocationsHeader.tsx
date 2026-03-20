'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export function LocationsHeader({ count }: { count: number }) {
  const { t } = useLanguage()
  const p = t.pages.locations

  return (
    <section className="max-w-7xl mx-auto px-6 mb-16 text-center">
      <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase gold-text mb-4">
        {p.label}
      </span>
      <h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
      >
        {p.h1}
      </h1>
      <p className="text-[rgba(255,255,255,0.65)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        {p.subtitle}
      </p>
    </section>
  )
}

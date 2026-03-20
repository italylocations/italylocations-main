'use client'

import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { useLanguage } from '@/contexts/LanguageContext'

const regions = [
  'Roma', 'Costiera Amalfitana', 'Umbria', 'Dolomiti', 'Sardegna',
  'Puglia', 'Lazio', "Cortina d'Ampezzo", 'Tuscia',
  'Abruzzo', 'Isola di Ponza', 'Emilia-Romagna', 'Piemonte',
]

export function RegionsSection() {
  const { t } = useLanguage()
  const r = t.home.regions

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-14">
          <SectionLabel>{r.label}</SectionLabel>
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
          >
            {r.h2}
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {regions.map((region) => (
              <Link
                key={region}
                href="/locations"
                className="region-tag bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.10)] backdrop-blur-sm rounded-xl px-5 py-2.5 text-sm font-medium text-[rgba(255,255,255,0.75)] hover:text-white transition-all duration-200"
              >
                {region}
              </Link>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200} className="text-center">
          <p className="text-[rgba(255,255,255,0.55)] max-w-3xl mx-auto leading-relaxed mb-6">
            {r.subtitle}
          </p>
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 text-sm font-semibold gold-text hover:opacity-80 transition-opacity"
          >
            {r.cta}
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

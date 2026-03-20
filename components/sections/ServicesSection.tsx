'use client'

import Link from 'next/link'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { useLanguage } from '@/contexts/LanguageContext'

const SERVICE_ICONS = ['🔍', '📋', '🚛', '🚁']

export function ServicesSection() {
  const { t } = useLanguage()
  const s = t.home.services

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-14">
          <SectionLabel>{s.label}</SectionLabel>
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
          >
            {s.h2}
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {s.items.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 100}>
              <GlassCard className="p-8 h-full group hover:border-[rgba(201,168,76,0.25)] transition-all duration-300">
                <div className="text-4xl mb-5">{SERVICE_ICONS[i]}</div>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-[rgba(255,255,255,0.60)] leading-relaxed text-sm">
                  {item.desc}
                </p>
              </GlassCard>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold gold-text hover:opacity-80 transition-opacity"
          >
            {s.more}
          </Link>
        </div>
      </div>
    </section>
  )
}

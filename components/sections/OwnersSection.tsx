'use client'

import { Gift, Banknote, Shield } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldButton } from '@/components/ui/GoldButton'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { useLanguage } from '@/contexts/LanguageContext'

const BENEFIT_ICONS: LucideIcon[] = [Gift, Banknote, Shield]

export function OwnersSection() {
  const { t } = useLanguage()
  const o = t.home.owners

  return (
    <section
      className="py-20 px-6 lg:px-8 border-t border-b border-[rgba(255,255,255,0.06)]"
      style={{
        background:
          'linear-gradient(135deg, rgba(201,168,76,0.03) 0%, transparent 50%, rgba(201,168,76,0.02) 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-14">
          <SectionLabel>{o.label}</SectionLabel>
          <h2
            className="text-3xl md:text-4xl font-bold gold-text mb-4"
            style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
          >
            {o.h2}
          </h2>
          <p className="text-[rgba(255,255,255,0.60)] max-w-2xl mx-auto leading-relaxed">
            {o.subtitle}
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {o.benefits.map((benefit, i) => {
            const Icon = BENEFIT_ICONS[i]
            return (
              <AnimateOnScroll key={benefit.title} delay={i * 100}>
                <GlassCard className="p-8 text-center h-full hover:border-[rgba(201,168,76,0.20)] transition-all duration-300">
                  <div className="mb-5 flex justify-center">
                    <Icon className="text-[#c9a84c]" size={24} strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-3"
                    style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[rgba(255,255,255,0.55)] leading-relaxed">
                    {benefit.desc}
                  </p>
                </GlassCard>
              </AnimateOnScroll>
            )
          })}
        </div>

        <AnimateOnScroll delay={300} className="text-center">
          <GoldButton
            href="https://locations.italylocations.com"
            filled
            external
            className="text-base px-12 py-4 shadow-[0_0_40px_rgba(201,168,76,0.35)] hover:shadow-[0_0_55px_rgba(201,168,76,0.55)]"
          >
            {o.cta}
          </GoldButton>

          <p className="mt-5 text-xs text-[rgba(255,255,255,0.30)]">
            {o.finePrint}
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

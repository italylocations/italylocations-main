'use client'

import { SectionLabel } from '@/components/ui/SectionLabel'
import { BlueButton } from '@/components/ui/BlueButton'
import { GoldButton } from '@/components/ui/GoldButton'
import { FaqAccordion } from '@/components/FaqAccordion'
import { useLanguage } from '@/contexts/LanguageContext'

export function FaqPageContent() {
  const { t } = useLanguage()
  const p = t.pages.faq

  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-16">
          <SectionLabel>{p.label}</SectionLabel>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-4"
            style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
          >
            {p.h1}
          </h1>
          <p className="text-[rgba(255,255,255,0.60)] text-lg max-w-xl mx-auto leading-relaxed">
            {p.subtitle}
          </p>
        </div>

        {/* Accordion + search */}
        <FaqAccordion />

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl px-10 py-10">
            <p
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              {p.ctaH2}
            </p>
            <p className="text-[rgba(255,255,255,0.50)] text-sm mb-8">
              Can&apos;t find what you&apos;re looking for? We&apos;re happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BlueButton href="/contact">{p.ctaContact}</BlueButton>
              <GoldButton href="https://wa.me/393895365864" external>
                {p.ctaWhatsapp}
              </GoldButton>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}

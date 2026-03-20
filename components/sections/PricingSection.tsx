'use client'

import Link from 'next/link'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { BlueButton } from '@/components/ui/BlueButton'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { useLanguage } from '@/contexts/LanguageContext'

const PLAN_DETAILS = [
  {
    price: '€600',
    unit: '/day',
    desc: 'Tuscany, Umbria, Lazio, Marche, Abruzzo',
    featured: false,
    includes: [
      'Up to 10 hours on location per day',
      'All travel within the scouting area',
      'High-resolution photo documentation',
      'Detailed location report (GPS, access, light conditions)',
      'Moodboard matching — locations selected for your brief',
      'Alternative options included',
    ],
  },
  {
    price: '€750',
    unit: '/day',
    desc: 'Lombardy, Veneto, Campania, Sicily, Sardinia',
    featured: true,
    includes: [
      'Up to 10 hours on location per day',
      'All travel within the scouting area',
      'High-resolution photo documentation',
      'Detailed location report (GPS, access, light conditions)',
      'Moodboard matching — locations selected for your brief',
      'Alternative options included',
    ],
  },
  {
    price: null,
    unit: '',
    desc: 'Multi-day shoots, specialized services, international productions',
    featured: false,
    includes: [
      'Multi-day scouting packages',
      'Specialized briefs (automotive, fashion, historical)',
      'Drone aerial documentation',
      'Full production support available',
      'International crew coordination',
    ],
  },
]

export function PricingSection() {
  const { t } = useLanguage()
  const p = t.home.pricing

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-8">
          <SectionLabel>{p.label}</SectionLabel>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
          >
            {p.h2}
          </h2>
          <p className="text-[rgba(255,255,255,0.60)] max-w-2xl mx-auto leading-relaxed">
            Our location scouting service means we do the legwork for you: we research, travel,
            photograph and document the exact locations that match your creative brief and
            moodboard — so your production team arrives knowing precisely where to shoot.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {PLAN_DETAILS.map((plan, i) => {
            const planT = p.plans[i]
            return (
              <AnimateOnScroll key={planT.title} delay={i * 100}>
                <GlassCard
                  goldBorder={plan.featured}
                  className={`p-8 h-full flex flex-col ${plan.featured ? 'relative' : ''}`}
                >
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="text-xs font-semibold tracking-[0.15em] uppercase px-4 py-1 rounded-full bg-gradient-to-r from-[#c9a84c] to-[#e8d5a0] text-[#0a0f1e]">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h3
                    className="text-xl font-bold text-white mb-4"
                    style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                  >
                    {planT.title}
                  </h3>

                  <div className="mb-4">
                    <span
                      className="text-4xl font-bold gold-text"
                      style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                    >
                      {plan.price ?? p.contactUs}
                    </span>
                    {plan.unit && (
                      <span className="text-[rgba(255,255,255,0.50)] text-sm ml-1">{plan.unit}</span>
                    )}
                  </div>

                  <p className="text-sm text-[rgba(255,255,255,0.45)] leading-relaxed mb-5">
                    {plan.desc}
                  </p>

                  <ul className="space-y-2.5 flex-1 mb-6">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-[rgba(255,255,255,0.65)]">
                        <span className="text-[#c9a84c] flex-shrink-0 leading-snug">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.featured ? (
                    <BlueButton href="/contact" className="mt-6 w-full">
                      {p.requestQuote}
                    </BlueButton>
                  ) : (
                    <Link
                      href="/contact"
                      className="mt-6 block text-center text-sm font-semibold py-3 px-6 rounded-full border border-[rgba(255,255,255,0.15)] text-[rgba(255,255,255,0.70)] hover:border-[rgba(255,255,255,0.30)] hover:text-white transition-all"
                    >
                      {p.requestQuote}
                    </Link>
                  )}
                </GlassCard>
              </AnimateOnScroll>
            )
          })}
        </div>

        <AnimateOnScroll delay={300}>
          <p className="text-center text-xs text-[rgba(255,255,255,0.40)] mb-6">
            Daily rate includes 10 hours scouting + all transportation + high-res photo documentation
          </p>
          <div className="text-center">
            <Link
              href="/rates"
              className="inline-flex items-center gap-2 text-sm font-semibold gold-text hover:opacity-80 transition-opacity"
            >
              {p.viewFull}
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

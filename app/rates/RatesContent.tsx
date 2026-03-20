'use client'

import Link from 'next/link'
import { Mail, FileText, UserCheck, FolderOpen } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { useLanguage } from '@/contexts/LanguageContext'

const STEP_ICONS: LucideIcon[] = [Mail, FileText, UserCheck, FolderOpen]

const INCLUDES = [
  '10 hours expert scouting',
  'All transportation costs',
  'High-resolution photo documentation',
  'Detailed location reports',
  'GPS coordinates & driving directions',
  'Moodboard matching',
  'Alternative options included',
]

const PRICING_STATIC = [
  {
    price: '€600',
    period: '/day',
    badge: 'Most Popular',
    popular: true,
    regions: ['Tuscany', 'Umbria', 'Lazio', 'Marche', 'Abruzzo'],
    locations: 'Rome, Florence, Siena, Tuscan countryside',
  },
  {
    price: '€750',
    period: '/day',
    badge: null,
    popular: false,
    regions: ['Emilia-Romagna', 'Lombardy', 'Veneto', 'Piedmont', 'Liguria', 'Trentino-Alto Adige'],
    locations: 'Milan, Venice, Italian Lakes, Dolomites, Cinque Terre',
  },
  {
    price: '€750',
    period: '/day',
    badge: null,
    popular: false,
    regions: ['Campania', 'Puglia', 'Calabria', 'Sicily', 'Sardinia'],
    locations: 'Amalfi Coast, Capri, Matera, Taormina, Costa Smeralda',
  },
]

const ADDITIONAL_SERVICES = [
  {
    emoji: '🚁',
    title: 'Drone Photography',
    description:
      'Aerial views and footage for a comprehensive understanding of locations. Subject to local regulations and permit requirements.',
  },
  {
    emoji: '🔄',
    title: '360° Virtual Tours',
    description:
      'Immersive virtual tours for complete spatial understanding. Pricing based on number of locations and complexity.',
  },
  {
    emoji: '📋',
    title: 'Filming Permits',
    description:
      'Complete permit acquisition and local authority liaison. Included in our standard scouting consultation.',
  },
  {
    emoji: '📊',
    title: 'Technical Reports',
    description:
      'In-depth analysis of location feasibility for specific shooting requirements. Complexity-based pricing.',
  },
]

interface PricingCardProps {
  price: string
  period: string
  badge: string | null
  popular: boolean
  regions: string[]
  locations: string
  planName: string
  requestQuote: string
}

function PricingCard({ price, period, badge, popular, regions, locations, planName, requestQuote }: PricingCardProps) {
  return (
    <div
      className={`
        h-full flex flex-col p-8 rounded-2xl backdrop-blur-sm transition-all duration-300
        ${
          popular
            ? 'bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.5)] gold-border-glow'
            : 'bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(201,168,76,0.3)]'
        }
      `}
    >
      <div className="flex items-start justify-between mb-6">
        <h2
          className="text-xl font-bold text-white"
          style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
        >
          {planName}
        </h2>
        {badge && (
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[rgba(201,168,76,0.15)] text-[#e8d5a0] border border-[rgba(201,168,76,0.4)] whitespace-nowrap ml-2">
            {badge}
          </span>
        )}
      </div>

      <div className="flex items-end gap-1 mb-6">
        <span
          className="text-5xl font-bold gold-text leading-none"
          style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
        >
          {price}
        </span>
        <span className="text-[rgba(255,255,255,0.4)] text-base mb-1">{period}</span>
      </div>

      <div className="mb-2">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[rgba(255,255,255,0.3)] mb-2">
          Regions
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {regions.map((r) => (
            <span
              key={r}
              className="text-xs px-2.5 py-0.5 rounded-full bg-[rgba(255,255,255,0.06)] text-[rgba(255,255,255,0.55)] border border-[rgba(255,255,255,0.1)]"
            >
              {r}
            </span>
          ))}
        </div>
      </div>

      <p className="text-[rgba(255,255,255,0.4)] text-xs mb-6 italic">{locations}</p>

      <div className="flex-1 mb-8">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[rgba(255,255,255,0.3)] mb-3">
          Includes
        </p>
        <ul className="flex flex-col gap-2.5">
          {INCLUDES.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-[rgba(255,255,255,0.65)]">
              <span
                className="mt-0.5 shrink-0 text-xs font-bold"
                style={{
                  background: 'linear-gradient(135deg, #c9a84c, #e8d5a0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="/contact"
        className={`
          block text-center font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5
          ${
            popular
              ? 'bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white blue-glow hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]'
              : 'bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]'
          }
        `}
      >
        {requestQuote}
      </Link>
    </div>
  )
}

export function RatesContent() {
  const { t } = useLanguage()
  const p = t.pages.rates

  return (
    <main className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-3xl mx-auto text-center relative">
          <AnimateOnScroll>
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
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Pricing Cards ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PRICING_STATIC.map((card, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <PricingCard
                {...card}
                planName={p.planNames[i] ?? card.locations}
                requestQuote={p.requestQuote}
              />
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={300}>
          <p className="text-center text-[rgba(255,255,255,0.35)] text-sm mt-8 max-w-2xl mx-auto leading-relaxed">
            Daily rate includes 10 hours scouting + all transportation within the area +
            high-resolution photo and video documentation of every potential location.
          </p>
        </AnimateOnScroll>
      </section>

      {/* ── Additional Services ───────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase gold-text mb-3">
              EXTRAS
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              Additional Services
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {ADDITIONAL_SERVICES.map((svc, i) => (
            <AnimateOnScroll key={svc.title} delay={i * 80}>
              <div className="flex gap-5 p-6 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-2xl transition-all duration-300 hover:border-[rgba(201,168,76,0.3)]">
                <span className="text-3xl shrink-0">{svc.emoji}</span>
                <div>
                  <h3
                    className="text-white font-semibold text-lg mb-1"
                    style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-[rgba(255,255,255,0.5)] text-sm leading-relaxed mb-3">
                    {svc.description}
                  </p>
                  <span className="text-xs font-semibold gold-text tracking-wide">
                    Contact for pricing
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* ── How to Book ───────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase gold-text mb-3">
              {p.howToBookLabel}
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              {p.howToBookH2}
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div
              className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px pointer-events-none"
              style={{
                background:
                  'repeating-linear-gradient(90deg, rgba(201,168,76,0.35) 0, rgba(201,168,76,0.35) 8px, transparent 8px, transparent 18px)',
              }}
            />

            {p.bookingSteps.map((text, i) => {
              const StepIcon = STEP_ICONS[i]
              return (
              <div key={i} className="flex flex-col items-center text-center gap-4 relative">
                <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 border border-[rgba(201,168,76,0.4)] bg-[rgba(201,168,76,0.08)] z-10">
                  <StepIcon className="text-[#c9a84c]" size={20} strokeWidth={1.5} />
                </div>
                <p className="text-[rgba(255,255,255,0.65)] text-sm leading-relaxed max-w-[160px]">
                  {text}
                </p>
              </div>
              )
            })}
          </div>
        </AnimateOnScroll>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="pb-28 px-6">
        <AnimateOnScroll>
          <div className="max-w-2xl mx-auto text-center bg-[rgba(255,255,255,0.04)] border border-[rgba(201,168,76,0.2)] rounded-3xl p-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase gold-text mb-4">
              GET STARTED
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              {p.ctaH2}
            </h2>
            <p className="text-[rgba(255,255,255,0.6)] mb-8 text-lg leading-relaxed">
              Contact us with your brief and we&apos;ll get back to you within 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 blue-glow hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            >
              {p.ctaButton}
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </main>
  )
}

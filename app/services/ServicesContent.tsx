'use client'

import Link from 'next/link'
import { MapPin, FileText, Truck, Users, Camera, Building2, Plane, Home } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { useLanguage } from '@/contexts/LanguageContext'

const SERVICE_ICONS: LucideIcon[] = [MapPin, FileText, Truck, Users, Camera, Building2, Plane, Home]

const SERVICE_NUMBERS = ['01', '02', '03', '04', '05', '06', '07', '08']

interface ServiceData {
  number: string
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  includes: string[]
  note: string
  serviceIncludes: string
}

function ServiceCard({ service }: { service: ServiceData }) {
  const Icon = service.icon
  return (
    <div className="relative group bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:border-[rgba(201,168,76,0.35)] hover:gold-border-glow p-8 md:p-10">
      <span
        className="absolute top-6 right-8 text-7xl md:text-8xl font-bold leading-none select-none pointer-events-none"
        style={{
          fontFamily: 'var(--font-playfair), "Playfair Display", serif',
          background: 'linear-gradient(135deg, #c9a84c, #e8d5a0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          opacity: 0.18,
        }}
      >
        {service.number}
      </span>

      <div className="flex items-center gap-3 mb-5">
        <Icon className="text-[#c9a84c]" size={24} strokeWidth={1.5} />
        <span className="text-xs font-semibold tracking-[0.18em] uppercase gold-text">
          {service.number}
        </span>
      </div>

      <h2
        className="text-2xl md:text-3xl font-bold mb-1 gold-text"
        style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
      >
        {service.title}
      </h2>
      <p className="text-[rgba(255,255,255,0.45)] text-sm mb-6 italic">{service.subtitle}</p>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-[60%]">
          <p className="text-[rgba(255,255,255,0.65)] leading-relaxed text-sm md:text-base">
            {service.description}
          </p>
          {service.note && (
            <p className="mt-4 text-xs text-[rgba(255,255,255,0.4)] border-l-2 border-[rgba(201,168,76,0.4)] pl-3 leading-relaxed">
              {service.note}
            </p>
          )}
        </div>

        <div className="md:w-[40%]">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[rgba(255,255,255,0.35)] mb-3">
            {service.serviceIncludes}
          </p>
          <ul className="flex flex-col gap-2">
            {service.includes.map((item) => (
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
      </div>
    </div>
  )
}

export function ServicesContent() {
  const { t } = useLanguage()
  const p = t.pages.services

  return (
    <main className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-28 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative">
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

      {/* ── Service Cards ─────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pb-24 flex flex-col gap-8">
        {SERVICE_NUMBERS.map((number, i) => (
          <AnimateOnScroll key={number} delay={i < 3 ? i * 80 : 0}>
            <ServiceCard
              service={{
                number,
                icon: SERVICE_ICONS[i],
                title: p.serviceTitles[i] ?? number,
                subtitle: p.serviceItems[i]?.subtitle ?? '',
                description: p.serviceItems[i]?.description ?? '',
                includes: p.serviceItems[i]?.includes ?? [],
                note: p.serviceItems[i]?.note ?? '',
                serviceIncludes: p.serviceIncludes,
              }}
            />
          </AnimateOnScroll>
        ))}
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="pb-28 px-6">
        <AnimateOnScroll>
          <div className="max-w-2xl mx-auto text-center bg-[rgba(255,255,255,0.04)] border border-[rgba(201,168,76,0.2)] rounded-3xl p-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase gold-text mb-4">
              {p.ctaLabel}
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              {p.ctaH2}
            </h2>
            <p className="text-[rgba(255,255,255,0.6)] mb-8 text-lg leading-relaxed">
              {p.ctaSubtitle}
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

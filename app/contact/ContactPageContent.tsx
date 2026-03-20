'use client'

import { Suspense } from 'react'
import { Mail, Phone, MapPin, Globe, Car, Home } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ContactFormWrapper } from '@/components/ContactFormWrapper'
import { useLanguage } from '@/contexts/LanguageContext'

const CONTACT_INFO: { icon: LucideIcon; label: string; value: string; href: string | null }[] = [
  { icon: Mail,  label: 'Email',     value: 'info@italylocations.com', href: 'mailto:info@italylocations.com' },
  { icon: Phone, label: 'WhatsApp',  value: '+39 389 536 5864',        href: 'https://wa.me/393895365864' },
  { icon: MapPin, label: 'Based in', value: 'Rome, Italy',             href: null },
  { icon: Globe, label: 'Languages', value: 'English, Italian, Spanish', href: null },
]

const SERVICES: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: MapPin, title: 'Location Scouting',   desc: 'Find the perfect backdrop for your production across Italy.' },
  { icon: Car,    title: 'Iconic Cars',          desc: 'Vintage and exotic production vehicles for your shoot.' },
  { icon: Home,   title: 'Private Locations',    desc: 'Exclusive database access — villas, castles, and more.' },
]

export function ContactPageContent() {
  const { t } = useLanguage()
  const p = t.pages.contact

  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

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

        {/* 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* LEFT — Contact info */}
          <div className="lg:col-span-2 space-y-8">

            <GlassCard className="p-6 space-y-4">
              <h2
                className="text-xl font-bold text-white mb-4"
                style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
              >
                Contact Details
              </h2>
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon className="text-[#c9a84c] mt-0.5 shrink-0" size={20} strokeWidth={1.5} />
                  <div>
                    <p className="text-xs text-[rgba(255,255,255,0.40)] uppercase tracking-widest mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-[rgba(255,255,255,0.85)] hover:text-white transition-colors text-sm"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-[rgba(255,255,255,0.85)] text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </GlassCard>

            <div className="space-y-3">
              {SERVICES.map(({ icon: Icon, title, desc }) => (
                <GlassCard key={title} className="p-5 flex items-start gap-4">
                  <Icon className="text-[#c9a84c] shrink-0 mt-0.5" size={20} strokeWidth={1.5} />
                  <div>
                    <p className="text-white font-semibold text-sm">{title}</p>
                    <p className="text-[rgba(255,255,255,0.50)] text-xs mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </GlassCard>
              ))}
            </div>

          </div>

          {/* RIGHT — Form */}
          <div className="lg:col-span-3">
            <Suspense fallback={<div className="text-[rgba(255,255,255,0.40)] text-sm">Loading form…</div>}>
              <ContactFormWrapper />
            </Suspense>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-16 text-center">
          <p className="text-[rgba(255,255,255,0.50)] text-sm">
            Prefer a faster response?{' '}
            <a
              href="https://wa.me/393895365864"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgba(201,168,76,0.9)] hover:text-[#e8d5a0] transition-colors font-medium"
            >
              Message us directly on WhatsApp →
            </a>
          </p>
        </div>

      </div>
    </main>
  )
}

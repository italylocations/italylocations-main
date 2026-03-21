'use client'

import Image from 'next/image'
import { BlueButton } from '@/components/ui/BlueButton'
import { GoldButton } from '@/components/ui/GoldButton'
import { Film, MapPin, Globe, LayoutGrid } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const HERO_IMAGE = 'https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/2024_02_rome-aerial-shot-drone-scouting-locations-italy.jpg'

export function HeroSection() {
  const { t } = useLanguage()
  const h = t.home.hero

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Aerial view of Rome at night - Italy Locations professional film location scouting services"
          fill
          priority
          quality={85}
          style={{ objectFit: 'cover' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(10,15,30,0.80) 100%)' }}
        />
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.25) 0%, transparent 65%)' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{ background: 'linear-gradient(to top, rgba(10,15,30,1), transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center animate-fade-up">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(201,168,76,0.35)] bg-[rgba(201,168,76,0.08)] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase gold-text">{h.eyebrow}</span>
        </div>

        {/* H1 */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 gold-text"
          style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
        >
          {h.h1}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[rgba(255,255,255,0.80)] max-w-3xl mx-auto leading-relaxed mb-10">
          {h.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <BlueButton href="/locations" className="min-w-[180px]">{h.cta1}</BlueButton>
          <GoldButton href="/contact" className="min-w-[180px]">{h.cta2}</GoldButton>
        </div>

        {/* Credibility badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 flex-wrap">
          {([Film, MapPin, Globe, LayoutGrid] as const).map((Icon, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-[rgba(255,255,255,0.65)]">
              <Icon size={16} strokeWidth={1.5} color="#c9a84c" />
              <span>{h.badges[i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs tracking-[0.2em] uppercase text-[rgba(255,255,255,0.5)]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[rgba(255,255,255,0.5)] to-transparent" />
      </div>
    </section>
  )
}

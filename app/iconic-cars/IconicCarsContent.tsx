'use client'

import Link from 'next/link'
import Image from 'next/image'
import { AlertTriangle, ClipboardList, Handshake, Film, Calendar, Palette, Flag, MessageCircle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { useLanguage } from '@/contexts/LanguageContext'

const cars = [
  {
    id: 'porsche-997-carrera-s-cabrio',
    brand: 'Porsche',
    model: '997 Carrera S Cabrio',
    year: 2006,
    color: 'Nero Pastello (Gloss Black)',
    origin: 'Official Italian market vehicle',
    productionType: 'Automotive · Fashion · Luxury Lifestyle',
    description:
      'Elegant black cabriolet with matching black canvas roof, ASI registered. Official dealer service history, last service December 2025. An exceptionally well-maintained vehicle for productions requiring style and authenticity.',
    features: ['19" Wheels', 'Sport exhaust', 'PCM', 'Wind deflector', 'ASI registered', 'Official service history'],
    image: {
      src: 'https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/cars/porsche-997-carrera-s-cabrio-2006.jpg',
      alt: 'Porsche 997 Carrera S Cabriolet 2006 black - available for advertising and film productions Italy',
    },
  },
  {
    id: 'lamborghini-gallardo-lp560-4',
    brand: 'Lamborghini',
    model: 'Gallardo LP-560 4',
    year: 2013,
    color: 'Contact for details',
    origin: 'Unique livery and condition',
    productionType: 'Supercar · Premium Automotive · Music Video',
    description:
      'A one-of-a-kind example in terms of colour and condition. One of the most iconic supercars ever produced, with an exceptional service history. Perfect for high-visual-impact productions and premium campaigns.',
    features: ['560 hp V10', 'Exclusive livery', 'Exceptional condition', 'Low mileage'],
    image: {
      src: 'https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/cars/lamborghini-gallardo-lp560-2013.avif',
      alt: 'Lamborghini Gallardo LP-560 4 2013 matte grey - available for film and advertising productions in Italy',
    },
  },
  {
    id: 'mercedes-sl350-amg-sport',
    brand: 'Mercedes',
    model: 'SL 350 AMG Sport (R230)',
    year: 2009,
    color: 'Metallic Silver',
    origin: 'AMG Sport Package',
    productionType: 'Luxury Lifestyle · Fashion · Automotive',
    description:
      '315 hp with the full AMG Sport package. Overhauled ABC suspension, Airscarf neck heating, electric wind deflector. A grand tourer cabriolet of timeless elegance — ideal for driving scenes and lifestyle campaigns.',
    features: ['315 hp', '19" Wheels', 'Airscarf', 'ABC suspension', 'Electric memory seats', 'Cruise control', 'Electric wind deflector'],
    image: {
      src: 'https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/cars/mercedes-sl350-amg-2009.jpg',
      alt: 'Mercedes SL 350 AMG Sport 2009 silver - available for film and advertising productions in Italy',
    },
  },
  {
    id: 'porsche-997-carrera-4s-coupe',
    brand: 'Porsche',
    model: '997 Carrera 4S Coupé',
    year: 2010,
    color: 'Carrara White',
    origin: 'Official Italian market, first paint',
    productionType: 'Automotive · Fashion · Urban Campaigns',
    description:
      'Carrara White with black leather interior and black 19" wheels — a perfect chromatic contrast for the lens. First original paint, purchase invoice from new. Bose audio, Xenon PDLS headlights, sunroof.',
    features: ['19" Black wheels', 'Sport exhaust', 'Xenon PDLS', 'Bose audio', 'Sunroof', 'PCM', 'First paint'],
    image: {
      src: 'https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/cars/porsche-997-carrera-4s-2010.jpg',
      alt: 'Porsche 997 Carrera 4S Coupe 2010 Carrara White - available for film productions in Italy',
    },
  },
  {
    id: 'porsche-911-32-carrera-targa-1986',
    brand: 'Porsche',
    model: '911 3.2 Carrera Targa',
    year: 1986,
    color: 'Apple Green (Daphne Grün) — Special Order',
    origin: 'Special order color, extremely rare',
    productionType: 'Vintage · Special Order',
    description:
      'One of a kind. This 1986 Porsche 911 3.2 Carrera Targa in Apple Green (Daphne Grün) was a rare special order color — virtually impossible to find today. An air-cooled icon that turns heads on any set. Perfect for vintage automotive campaigns, fashion editorials and productions requiring a genuinely unique hero vehicle.',
    features: ['Air-cooled', 'Targa roof', 'Special order color', 'Vintage icon', '3.2 Carrera'],
    image: {
      src: 'https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/cars/porsche-911-32-carrera-targa-1986.jpg',
      alt: 'Porsche 911 3.2 Carrera Targa 1986 Apple Green Daphne Grün special order - iconic vintage car for film productions Italy',
    },
  },
]

const STEP_ICONS: LucideIcon[] = [ClipboardList, Handshake, Film]

export function IconicCarsContent() {
  const { t } = useLanguage()
  const p = t.pages.cars

  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#0d1526] to-[#0a0f1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(201,168,76,0.08),transparent)]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-6 px-4 py-1.5 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.06)]">
              {p.label}
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h1
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
              dangerouslySetInnerHTML={{ __html: p.h1 }}
            />
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-[rgba(255,255,255,0.60)] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              {p.heroSubtitle}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 pb-20">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto">
            <div className="text-[rgba(255,255,255,0.55)] text-base md:text-lg leading-relaxed border-l-2 border-[rgba(201,168,76,0.4)] pl-6 space-y-4">
              {p.introParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Production Use Only Banner */}
      <section className="px-6 pb-12">
        <AnimateOnScroll>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.35)]">
              <AlertTriangle className="text-[#c9a84c] flex-shrink-0 mt-0.5" size={20} strokeWidth={1.5} />
              <div>
                <h2 className="text-base font-bold text-[#e8d5a0] mb-1">{p.bannerTitle}</h2>
                <p className="text-[rgba(255,255,255,0.55)] text-sm leading-relaxed">
                  {p.bannerDesc}
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Cars Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {cars.map((car, i) => (
            <AnimateOnScroll key={car.id} delay={i * 80}>
              <div className="rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(201,168,76,0.35)] transition-all duration-300 overflow-hidden group">

                <div className="relative w-full aspect-video bg-gradient-to-br from-[#0d1526] to-[#1a2744] overflow-hidden">
                  <Image
                    src={car.image.src}
                    alt={car.image.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {car.productionType.split('·').map((t) => (
                      <span
                        key={t}
                        className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-[rgba(59,130,246,0.12)] text-[rgba(147,197,253,0.85)] border border-[rgba(59,130,246,0.2)]"
                      >
                        {t.trim()}
                      </span>
                    ))}
                  </div>

                  <h2
                    className="text-2xl font-bold gold-text mb-3 leading-tight"
                    style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                  >
                    {car.brand} {car.model} {car.year}
                  </h2>

                  <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[rgba(251,146,60,0.12)] text-[rgba(251,146,60,0.9)] border border-[rgba(251,146,60,0.3)] mb-5">
                    {p.propOnly}
                  </span>

                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="flex items-start gap-2">
                      <Calendar className="text-[#c9a84c] shrink-0 mt-0.5" size={16} strokeWidth={1.5} />
                      <div>
                        <p className="text-[rgba(255,255,255,0.35)] text-xs uppercase tracking-wide font-medium">Year</p>
                        <p className="text-white text-sm font-semibold">{car.year}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Palette className="text-[#c9a84c] shrink-0 mt-0.5" size={16} strokeWidth={1.5} />
                      <div>
                        <p className="text-[rgba(255,255,255,0.35)] text-xs uppercase tracking-wide font-medium">Colour</p>
                        <p className="text-white text-sm font-semibold">{car.color}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 col-span-2">
                      <Flag className="text-[#c9a84c] shrink-0 mt-0.5" size={16} strokeWidth={1.5} />
                      <div>
                        <p className="text-[rgba(255,255,255,0.35)] text-xs uppercase tracking-wide font-medium">Origin</p>
                        <p className="text-white text-sm font-semibold leading-tight">{car.origin}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-[rgba(255,255,255,0.55)] text-sm leading-relaxed mb-5">
                    {car.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {car.features.map((f) => (
                      <span
                        key={f}
                        className="inline-block text-xs px-2.5 py-1 rounded-full bg-[rgba(255,255,255,0.04)] text-[rgba(255,255,255,0.45)] border border-[rgba(255,255,255,0.08)]"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/contact?vehicle=${car.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#c9a84c] hover:text-[#e8d5a0] transition-colors duration-200 group-hover:gap-3"
                  >
                    {p.requestCta}
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 border-t border-[rgba(255,255,255,0.05)]">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-4">
                {p.processLabel}
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-white"
                style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
              >
                {p.processH2}
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {p.steps.map((step, i) => {
              const StepIcon = STEP_ICONS[i]
              return (
              <AnimateOnScroll key={step.title} delay={i * 100}>
                <div className="text-center p-8 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)]">
                  <div className="mb-5 flex justify-center">
                    <StepIcon className="text-[#c9a84c]" size={24} strokeWidth={1.5} />
                  </div>
                  <div className="text-xs font-semibold tracking-widest text-[rgba(201,168,76,0.6)] uppercase mb-3">
                    {p.stepLabel} {i + 1}
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-3"
                    style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[rgba(255,255,255,0.50)] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* Also Available */}
      <section className="px-6 py-16 border-t border-[rgba(255,255,255,0.05)]">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[rgba(255,255,255,0.45)] text-sm uppercase tracking-widest font-medium mb-4">
              {p.alsoLabel}
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              {p.alsoH2}
            </h2>
            <p className="text-[rgba(255,255,255,0.55)] mb-8 leading-relaxed">
              {p.alsoDesc}
            </p>
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-[#c9a84c] hover:text-[#e8d5a0] font-semibold transition-colors duration-200"
            >
              {p.alsoCta}
            </Link>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 border-t border-[rgba(255,255,255,0.05)]">
        <AnimateOnScroll>
          <div className="max-w-2xl mx-auto text-center p-10 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(201,168,76,0.2)]">
            <p className="text-[rgba(255,255,255,0.45)] text-xs uppercase tracking-widest font-medium mb-3">
              {p.finalReadyLabel}
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              {p.finalH2}
            </h2>
            <p className="text-[rgba(255,255,255,0.55)] mb-8 leading-relaxed">
              {p.finalSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-block text-sm font-semibold px-8 py-3.5 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(59,130,246,0.45)]"
              >
                {p.finalCta}
              </Link>
              <a
                href="https://wa.me/393895365864"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[rgba(255,255,255,0.55)] hover:text-white transition-colors duration-200"
              >
                <MessageCircle className="text-[#c9a84c]" size={16} strokeWidth={1.5} />
                WhatsApp: +39 389 536 5864
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

    </main>
  )
}

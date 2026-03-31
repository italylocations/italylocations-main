'use client'

import { Suspense } from 'react'
import {
  Shirt,
  Factory,
  Landmark,
  Waves,
  Building2,
  Castle,
  CheckCircle2,
  MessageSquare,
  Search,
  FileCheck,
} from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldText } from '@/components/ui/GoldText'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { ContactFormWrapper } from '@/components/ContactFormWrapper'

const WHY_MILAN = [
  {
    icon: Shirt,
    title: 'Fashion & Design District',
    desc: 'Brera and Porta Nuova offer sleek showrooms, avant-garde galleries and designer courtyards ideal for editorial and commercial shoots.',
  },
  {
    icon: Factory,
    title: 'Industrial Loft Spaces',
    desc: 'Lambrate and Isola hide converted factories with raw concrete, exposed brick and dramatic natural light — perfect for editorial and music video productions.',
  },
  {
    icon: Landmark,
    title: 'Liberty Architecture',
    desc: 'Belle Époque villas with ornate facades, frescoed interiors and manicured gardens that evoke old-world European elegance.',
  },
  {
    icon: Waves,
    title: 'Navigli Canals',
    desc: 'Milan\'s canal district: cobbled towpaths, vine-covered trattorias and reflective water surfaces that shift from moody dawn mist to golden-hour glow.',
  },
  {
    icon: Building2,
    title: 'Modern Architecture',
    desc: 'CityLife\'s twisting towers and Porta Nuova\'s glass-and-steel skyline provide a contemporary Milan backdrop unlike any other Italian city.',
  },
  {
    icon: Castle,
    title: 'Historic Palaces & Courtyards',
    desc: 'Noble residences dating from the Renaissance to the 19th century, with frescoed halls, stone arcades and private gardens rarely seen by outsiders.',
  },
]

const LOCATION_TYPES = [
  'Modern minimalist villas with panoramic terraces',
  'Converted industrial lofts (Lambrate, Isola, NoLo)',
  'Liberty-style historic residences and villas',
  'Rooftop terraces with city skyline views',
  'Design showrooms and concept stores',
  'Private courtyards and internal gardens',
  'Navigli-side properties and canal-front venues',
  'Contemporary art galleries and creative spaces',
  'Luxury hotel suites and boutique properties',
  'Corporate headquarters with architectural interiors',
]

const HOW_IT_WORKS = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Send us your brief',
    desc: 'Share your moodboard, shooting dates, crew size and any style references. The more detail you give us, the more precisely we can match.',
  },
  {
    step: '02',
    icon: Search,
    title: 'We scout and present options',
    desc: 'Our team researches and visits Milan locations on your behalf — delivering a curated selection with high-res photos, GPS coordinates and access notes.',
  },
  {
    step: '03',
    icon: FileCheck,
    title: 'We handle permits and logistics',
    desc: 'From location owner agreements to municipality permits and on-site coordination, we manage the paperwork so your crew can focus on the shoot.',
  },
]

export function MilanContent() {
  return (
    <main className="min-h-screen pt-24 pb-20">

      {/* ── HERO ── */}
      <section className="px-6 pb-20 text-center">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-[rgba(201,168,76,0.8)] border border-[rgba(201,168,76,0.3)] rounded-full px-4 py-1.5 mb-6">
              MILANO • ITALIA
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              Location Scouting in{' '}
              <GoldText as="span">Milan</GoldText>
            </h1>
            <p className="text-[rgba(255,255,255,0.65)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Italy&apos;s capital of design and fashion is also one of Europe&apos;s most versatile
              filming destinations. From brutalist lofts to Baroque palaces, we unlock the Milan
              that productions dream about.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── WHY MILAN ── */}
      <section className="px-6 py-20 border-t border-[rgba(255,255,255,0.06)]">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="text-center mb-14">
            <SectionLabel>WHY MILAN</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mt-3"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              A City of Contrasts — On Camera
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_MILAN.map(({ icon: Icon, title, desc }) => (
              <GlassCard key={title} className="p-6 flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.2)] flex items-center justify-center shrink-0">
                  <Icon className="text-[#c9a84c]" size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3
                    className="text-white font-semibold text-base mb-2"
                    style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                  >
                    {title}
                  </h3>
                  <p className="text-[rgba(255,255,255,0.55)] text-sm leading-relaxed">{desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION TYPES ── */}
      <section className="px-6 py-20 border-t border-[rgba(255,255,255,0.06)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <SectionLabel>WHAT WE FIND FOR YOU</SectionLabel>
              <h2
                className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6"
                style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
              >
                Location Types We Scout in Milan
              </h2>
              <p className="text-[rgba(255,255,255,0.55)] text-sm leading-relaxed">
                Our Milan network spans private owners, property agencies and institutional contacts
                built over years of on-the-ground work. We access locations that are never
                advertised publicly.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <GlassCard goldBorder className="p-8">
                <ul className="space-y-3">
                  {LOCATION_TYPES.map((type) => (
                    <li key={type} className="flex items-start gap-3">
                      <CheckCircle2
                        className="text-[#c9a84c] shrink-0 mt-0.5"
                        size={16}
                        strokeWidth={1.5}
                      />
                      <span className="text-[rgba(255,255,255,0.75)] text-sm">{type}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="px-6 py-20 border-t border-[rgba(255,255,255,0.06)]">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll className="text-center mb-14">
            <SectionLabel>THE PROCESS</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mt-3"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              How It Works
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map(({ step, icon: Icon, title, desc }, i) => (
              <AnimateOnScroll key={step} delay={i * 100}>
                <GlassCard className="p-8 text-center h-full flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-[rgba(201,168,76,0.10)] border border-[rgba(201,168,76,0.25)] flex items-center justify-center">
                      <Icon className="text-[#c9a84c]" size={22} strokeWidth={1.5} />
                    </div>
                    <span className="absolute -top-2 -right-2 text-[10px] font-bold text-[#c9a84c] bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.3)] rounded-full w-5 h-5 flex items-center justify-center leading-none">
                      {step.slice(1)}
                    </span>
                  </div>
                  <h3
                    className="text-white font-semibold text-lg"
                    style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                  >
                    {title}
                  </h3>
                  <p className="text-[rgba(255,255,255,0.55)] text-sm leading-relaxed">{desc}</p>
                </GlassCard>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="px-6 py-20 border-t border-[rgba(255,255,255,0.06)]">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="text-center mb-14">
            <SectionLabel>GET IN TOUCH</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mt-3"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              Tell Us About Your Milan Project
            </h2>
            <p className="text-[rgba(255,255,255,0.55)] text-base mt-4 max-w-xl mx-auto">
              Send us your brief and we&apos;ll get back within 24 hours with location options
              tailored to your production.
            </p>
          </AnimateOnScroll>

          <div className="max-w-2xl mx-auto">
            <Suspense
              fallback={
                <div className="text-[rgba(255,255,255,0.40)] text-sm text-center py-8">
                  Loading form…
                </div>
              }
            >
              <ContactFormWrapper />
            </Suspense>
          </div>
        </div>
      </section>

      {/* ── WHATSAPP CTA ── */}
      <section className="px-6 pt-4 pb-12 text-center">
        <AnimateOnScroll>
          <p className="text-[rgba(255,255,255,0.45)] text-sm mb-5">
            Need a faster response? Reach us directly on WhatsApp.
          </p>
          <a
            href="https://wa.me/393895365864"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(37,211,102,0.4)] text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.544 5.877L0 24l6.266-1.519A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.032-1.384l-.361-.214-3.72.901.937-3.617-.236-.372A9.818 9.818 0 012.182 12C2.182 6.579 6.579 2.182 12 2.182S21.818 6.579 21.818 12 17.421 21.818 12 21.818z" />
            </svg>
            WhatsApp Us Now
          </a>
        </AnimateOnScroll>
      </section>

    </main>
  )
}

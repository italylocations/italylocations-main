import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'About — Nicolas Vanegas Sanchez | Italy Locations',
  description:
    '12+ years of professional film location scouting in Italy. Fluent in English, Italian and Spanish. Local expert for international productions across all of Italy.',
}

const equipment = [
  'Sony A7S III',
  'DJI Mavic 4 Pro',
  'Sony FX3',
  'Underwater Housing',
  'Profoto Flash',
  'Nanlite LED',
]

const strengths = [
  {
    emoji: '💬',
    title: 'No Language Barrier',
    description:
      'Direct communication in fluent English and Spanish. No middlemen, no misunderstandings — every brief understood exactly as intended.',
  },
  {
    emoji: '🎯',
    title: 'Single Point of Contact',
    description:
      'One person handles scouting, permits, logistics and local crew. You have one number to call for everything.',
  },
  {
    emoji: '🤝',
    title: '12 Years of Contacts',
    description:
      'Local authorities, private property owners, location managers and experienced crew — built over a decade of on-the-ground work.',
  },
]

const pillars = [
  {
    emoji: '🗺️',
    title: 'Local Knowledge',
    description:
      "Over 12 years scouting every corner of Italy — from Rome's hidden courtyards to remote Alpine passes. We know the locations that don't appear on Google.",
  },
  {
    emoji: '🌍',
    title: 'International Mindset',
    description:
      'We have worked with crews from the US, UK, Germany, France, Spain and beyond. We understand your workflow, your timeline, and your creative language.',
  },
  {
    emoji: '📸',
    title: 'Full Visual Documentation',
    description:
      'Every location is photographed professionally. You receive high-resolution images, drone footage where available, and detailed technical reports — everything you need before committing.',
  },
  {
    emoji: '🗣️',
    title: 'Trilingual Support',
    description:
      'English, Italian and Spanish. We handle all local communications, negotiations and paperwork — you focus on the creative.',
  },
]

export default function AboutPage() {
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
              ABOUT
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              Your Local Expert in Italy
            </h1>
            <p className="text-[rgba(255,255,255,0.65)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              12+ years on the ground. Fluent in English, Italian and Spanish. Born in Italy,
              thinking internationally.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── The Story ────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Text */}
          <AnimateOnScroll>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase gold-text mb-4">
              THE STORY
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 gold-text"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              Who We Are
            </h2>
            <div className="space-y-5 text-[rgba(255,255,255,0.65)] leading-relaxed text-base md:text-lg">
              <p>
                Italy Locations was founded by{' '}
                <span className="text-white font-semibold">Nicolas Vanegas Sanchez</span>, an
                Italian photographer and filmmaker of Colombian heritage who has been scouting
                locations across Italy since 2014.
              </p>
              <p>
                With over a decade of experience working exclusively with international productions
                — from advertising campaigns to documentary crews, from fashion shoots to automotive
                films — Nicolas built Italy Locations to solve a specific problem: international
                teams need someone on the ground who understands both the creative language of
                production and the complexity of the Italian territory.
              </p>
              <p>
                Speaking fluent English, Italian and Spanish, Nicolas bridges the gap between
                international creative vision and local Italian knowledge — from hidden locations no
                tourist map shows, to permits, logistics and local contacts built over 12 years.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Photo + Stats */}
          <AnimateOnScroll delay={150}>
            {/* Photo placeholder */}
            <div
              className="relative w-full rounded-2xl overflow-hidden border border-[rgba(201,168,76,0.3)] mb-4"
              style={{ paddingBottom: '133.33%' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a2744] to-[#0a0f1e] flex flex-col items-center justify-center gap-3">
                <span className="text-[rgba(255,255,255,0.15)] text-6xl">[ Photo ]</span>
                <span className="text-[rgba(255,255,255,0.1)] text-sm tracking-widest uppercase">
                  Professional portrait
                </span>
              </div>
            </div>

            {/* Caption */}
            <p className="text-center text-[rgba(255,255,255,0.35)] text-xs tracking-wide mb-6">
              Nicolas Vanegas Sanchez — Founder, Italy Locations
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: '12+', label: 'Years', sub: 'Experience' },
                { value: '3', label: 'Languages', sub: 'EN · IT · ES' },
                { value: '20', label: 'Regions', sub: 'Covered' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center py-4 px-2 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]"
                >
                  <span
                    className="text-2xl font-bold gold-text leading-none mb-0.5"
                    style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-white text-xs font-semibold">{stat.label}</span>
                  <span className="text-[rgba(255,255,255,0.35)] text-xs mt-0.5">{stat.sub}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

        </div>
      </section>

      {/* ── What We Bring ─────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase gold-text mb-3">
              WHAT WE BRING
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              The Italy Locations Difference
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {pillars.map((p, i) => (
            <AnimateOnScroll key={p.title} delay={i * 80}>
              <div className="h-full p-7 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-2xl transition-all duration-300 hover:border-[rgba(201,168,76,0.3)] hover:-translate-y-0.5">
                <span className="text-3xl mb-4 block">{p.emoji}</span>
                <h3
                  className="text-white font-bold text-xl mb-3"
                  style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                >
                  {p.title}
                </h3>
                <p className="text-[rgba(255,255,255,0.55)] text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* ── Equipment ─────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <AnimateOnScroll>
          <div className="p-8 md:p-10 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-2xl">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="md:w-48 shrink-0">
                <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase gold-text mb-1">
                  GEAR
                </span>
                <h2
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                >
                  Professional Equipment
                </h2>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {equipment.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-[rgba(201,168,76,0.08)] text-[#e8d5a0] border border-[rgba(201,168,76,0.25)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-[rgba(255,255,255,0.4)] text-sm leading-relaxed">
                  Professional photography and video equipment available for productions requiring
                  on-site visual documentation.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ── Why International Productions ─────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase gold-text mb-3">
              WHY US
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              Why International Productions Choose Us
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strengths.map((s, i) => (
            <AnimateOnScroll key={s.title} delay={i * 100}>
              <div className="flex flex-col items-center text-center p-8 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-2xl h-full transition-all duration-300 hover:border-[rgba(201,168,76,0.3)]">
                <span className="text-4xl mb-5">{s.emoji}</span>
                <h3
                  className="text-white font-bold text-lg mb-3"
                  style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                >
                  {s.title}
                </h3>
                <p className="text-[rgba(255,255,255,0.5)] text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="pb-28 px-6">
        <AnimateOnScroll>
          <div className="max-w-2xl mx-auto text-center bg-[rgba(255,255,255,0.04)] border border-[rgba(201,168,76,0.2)] rounded-3xl p-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase gold-text mb-4">
              GET IN TOUCH
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              Let&apos;s Work Together
            </h2>
            <p className="text-[rgba(255,255,255,0.6)] mb-8 text-lg leading-relaxed">
              Tell us about your project. We&apos;ll find the right locations.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 blue-glow hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] mb-8"
            >
              Start a Conversation &rarr;
            </Link>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-[rgba(255,255,255,0.35)]">
              <a
                href="mailto:info@italylocations.com"
                className="hover:text-[#e8d5a0] transition-colors"
              >
                info@italylocations.com
              </a>
              <span className="hidden sm:inline">·</span>
              <a
                href="https://wa.me/393895365864"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e8d5a0] transition-colors"
              >
                WhatsApp +39 389 536 5864
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

    </main>
  )
}

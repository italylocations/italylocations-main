import { BlueButton } from '@/components/ui/BlueButton'
import { GoldButton } from '@/components/ui/GoldButton'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.3) 0%, rgba(201,168,76,0.1) 50%, transparent 70%)',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background: 'linear-gradient(to top, rgba(10,15,30,0.8), transparent)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center animate-fade-up">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(201,168,76,0.25)] bg-[rgba(201,168,76,0.06)] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase gold-text">
            Professional Film Location Scouting
          </span>
        </div>

        {/* H1 */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 gold-text"
          style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
        >
          Discover Italy&apos;s Most Exclusive Filming Locations
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[rgba(255,255,255,0.70)] max-w-3xl mx-auto leading-relaxed mb-10">
          We scout Italy so you don&apos;t have to. We research, travel and document the exact
          locations that match your creative vision — delivering a curated photo report ready
          for your production team.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <BlueButton href="/locations" className="min-w-[180px]">
            Explore Locations
          </BlueButton>
          <GoldButton href="/contact" className="min-w-[180px]">
            Get a Quote
          </GoldButton>
        </div>

        {/* Credibility badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 flex-wrap">
          {[
            { icon: '🎬', text: '10+ Years Experience' },
            { icon: '📍', text: '20 Italian Regions' },
            { icon: '🌍', text: 'International Productions' },
            { icon: '🗺️', text: 'Moodboard Matching' },
          ].map(({ icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 text-sm text-[rgba(255,255,255,0.50)]"
            >
              <span>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs tracking-[0.2em] uppercase text-[rgba(255,255,255,0.5)]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[rgba(255,255,255,0.5)] to-transparent" />
      </div>
    </section>
  )
}

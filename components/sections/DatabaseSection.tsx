import Image from 'next/image'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { BlueButton } from '@/components/ui/BlueButton'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'

const BG_IMAGE = 'https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/2024_02_Caprarola-drone-vista-location-scouting-italy.jpg'

const features = [
  'Curated selection based on your brief',
  'Tailored PDF proposal within 48h',
  'Full privacy — addresses never shared',
  'Locations not available on any public platform',
]

export function DatabaseSection() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          {/* Card with background image */}
          <div className="relative overflow-hidden rounded-2xl border border-[rgba(201,168,76,0.35)] gold-border-glow">
            {/* Background photo */}
            <Image
              src={BG_IMAGE}
              alt="Aerial drone view of Palazzo Farnese Caprarola Tuscia - exclusive private filming location Italy"
              fill
              quality={85}
              style={{ objectFit: 'cover' }}
            />
            {/* Dark overlay */}
            <div
              className="absolute inset-0"
              style={{ background: 'rgba(0,0,0,0.70)' }}
            />

            {/* Content on top */}
            <div className="relative z-10 p-10 md:p-14">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <SectionLabel>Exclusive</SectionLabel>
                    <span className="text-xs font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-gradient-to-r from-[#c9a84c] to-[#e8d5a0] text-[#0a0f1e]">
                      By Invitation Only
                    </span>
                  </div>

                  <h2
                    className="text-3xl md:text-4xl font-bold text-white mb-5"
                    style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                  >
                    Private Location Database
                  </h2>

                  <p className="text-[rgba(255,255,255,0.75)] leading-relaxed mb-8">
                    Our curated database of 200+ verified private properties is accessible by
                    invitation only. Send us your creative brief or moodboard and we&apos;ll handpick
                    the perfect locations for your production — presented in a tailored PDF proposal
                    within 48 hours.
                  </p>

                  <BlueButton href="/contact">
                    Request a Location Proposal →
                  </BlueButton>
                </div>

                {/* Feature list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 p-4 rounded-xl bg-[rgba(201,168,76,0.10)] border border-[rgba(201,168,76,0.25)]"
                    >
                      <span className="text-[#c9a84c] mt-0.5 text-lg leading-none flex-shrink-0">✓</span>
                      <span className="text-sm text-[rgba(255,255,255,0.85)] leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}

                  {/* Stats mini */}
                  <div className="sm:col-span-2 mt-2 flex items-center gap-6 text-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold gold-text" style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}>200+</div>
                      <div className="text-xs text-[rgba(255,255,255,0.50)]">Properties</div>
                    </div>
                    <div className="w-px h-10 bg-[rgba(201,168,76,0.4)]" />
                    <div className="text-center">
                      <div className="text-2xl font-bold gold-text" style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}>20</div>
                      <div className="text-xs text-[rgba(255,255,255,0.50)]">Regions</div>
                    </div>
                    <div className="w-px h-10 bg-[rgba(201,168,76,0.4)]" />
                    <div className="text-center">
                      <div className="text-2xl font-bold gold-text" style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}>48h</div>
                      <div className="text-xs text-[rgba(255,255,255,0.50)]">Turnaround</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

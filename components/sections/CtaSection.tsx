import Image from 'next/image'
import { BlueButton } from '@/components/ui/BlueButton'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'

const BG_IMAGE = 'https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/2025_03_cortina-locations-italy-alps-0161.jpg'

export function CtaSection() {
  return (
    <section className="relative py-24 px-6 lg:px-8 overflow-hidden">
      {/* Background photo */}
      <Image
        src={BG_IMAGE}
        alt="Cortina d Ampezzo Dolomites aerial view - premium Alpine filming location Italy"
        fill
        quality={85}
        style={{ objectFit: 'cover' }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(10,15,30,0.80)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <AnimateOnScroll>
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-[rgba(201,168,76,0.5)]" />
            <span className="text-[#c9a84c] text-xl">✦</span>
            <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-[rgba(201,168,76,0.5)]" />
          </div>

          <h2
            className="text-3xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
          >
            Ready to Shoot in Italy?
          </h2>

          <p className="text-lg text-[rgba(255,255,255,0.70)] mb-10 leading-relaxed">
            Tell us about your project and we&apos;ll find the perfect locations within 48 hours.
          </p>

          <BlueButton href="/contact" className="text-base px-12 py-4 mb-8">
            Start Your Project →
          </BlueButton>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-[rgba(255,255,255,0.50)]">
            <a
              href="mailto:info@italylocations.com"
              className="flex items-center gap-2 hover:text-[rgba(255,255,255,0.85)] transition-colors"
            >
              <span>✉</span>
              <span>info@italylocations.com</span>
            </a>
            <a
              href="https://wa.me/393895365864"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[rgba(255,255,255,0.85)] transition-colors"
            >
              <span>📱</span>
              <span>+39 389 536 5864</span>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

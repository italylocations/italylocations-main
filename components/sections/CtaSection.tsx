import { BlueButton } from '@/components/ui/BlueButton'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'

export function CtaSection() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
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

          <p className="text-lg text-[rgba(255,255,255,0.60)] mb-10 leading-relaxed">
            Tell us about your project and we&apos;ll find the perfect locations within 48 hours.
          </p>

          <BlueButton href="/contact" className="text-base px-12 py-4 mb-8">
            Start Your Project →
          </BlueButton>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-[rgba(255,255,255,0.45)]">
            <a
              href="mailto:info@italylocations.com"
              className="flex items-center gap-2 hover:text-[rgba(255,255,255,0.80)] transition-colors"
            >
              <span>✉</span>
              <span>info@italylocations.com</span>
            </a>
            <a
              href="https://wa.me/393895365864"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[rgba(255,255,255,0.80)] transition-colors"
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

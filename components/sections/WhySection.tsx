import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'

const pillars = [
  {
    icon: '🗺️',
    title: 'Local Expertise',
    desc: 'Over a decade on the ground. We know the hidden access roads, the private estates, the local contacts that open doors no tourist map shows.',
  },
  {
    icon: '⚙️',
    title: 'End-to-End Support',
    desc: 'From the first brief to the final day of shoot. Permits, logistics, crew, equipment — we handle the complexity so you focus on the creative.',
  },
  {
    icon: '🌐',
    title: 'International Standards',
    desc: 'We work with international crews and understand your production workflow. Fluent in English. Reports in your format.',
  },
]

export function WhySection() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div
        className="max-w-6xl mx-auto rounded-3xl p-10 md:p-16"
        style={{ background: 'rgba(26,39,68,0.5)', border: '1px solid rgba(255,255,255,0.06)' }}
      >
        <AnimateOnScroll className="text-center mb-14">
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
          >
            Your Trusted Partner in Italy
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pillars.map((pillar, i) => (
            <AnimateOnScroll key={pillar.title} delay={i * 120}>
              <div className="text-center md:text-left">
                <div className="text-5xl mb-5">{pillar.icon}</div>
                <h3
                  className="text-xl font-bold text-white mb-4"
                  style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                >
                  {pillar.title}
                </h3>
                <p className="text-[rgba(255,255,255,0.60)] leading-relaxed text-sm">
                  {pillar.desc}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

import { GlassCard } from '@/components/ui/GlassCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldButton } from '@/components/ui/GoldButton'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'

const benefits = [
  {
    icon: '🆓',
    title: 'Registrazione Gratuita',
    desc: 'Nessun costo, nessun vincolo esclusivo. Ti registri in 5 minuti.',
  },
  {
    icon: '💰',
    title: 'Guadagno Garantito',
    desc: '€1.000 - €7.500+ al giorno. Pagamento 100% anticipato prima delle riprese.',
  },
  {
    icon: '🛡️',
    title: 'Massima Tutela',
    desc: 'Polizza danni obbligatoria, contratto regolare, supervisione professionale.',
  },
]

export function OwnersSection() {
  return (
    <section
      className="py-20 px-6 lg:px-8 border-t border-b border-[rgba(255,255,255,0.06)]"
      style={{
        background:
          'linear-gradient(135deg, rgba(201,168,76,0.03) 0%, transparent 50%, rgba(201,168,76,0.02) 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-14">
          <SectionLabel>Per i Proprietari</SectionLabel>
          <h2
            className="text-3xl md:text-4xl font-bold gold-text mb-4"
            style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
          >
            Hai una Location Privata in Italia?
          </h2>
          <p className="text-[rgba(255,255,255,0.60)] max-w-2xl mx-auto leading-relaxed">
            Registra gratuitamente la tua proprietà nel nostro database riservato e inizia a
            guadagnare con riprese fotografiche, pubblicitarie e cinematografiche.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, i) => (
            <AnimateOnScroll key={benefit.title} delay={i * 100}>
              <GlassCard className="p-8 text-center h-full hover:border-[rgba(201,168,76,0.20)] transition-all duration-300">
                <div className="text-5xl mb-5">{benefit.icon}</div>
                <h3
                  className="text-lg font-bold text-white mb-3"
                  style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                >
                  {benefit.title}
                </h3>
                <p className="text-sm text-[rgba(255,255,255,0.55)] leading-relaxed">
                  {benefit.desc}
                </p>
              </GlassCard>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={300} className="text-center">
          <GoldButton
            href="https://locations.italylocations.com"
            filled
            external
            className="text-base px-12 py-4 shadow-[0_0_40px_rgba(201,168,76,0.35)] hover:shadow-[0_0_55px_rgba(201,168,76,0.55)]"
          >
            Proponi la Tua Location →
          </GoldButton>

          <p className="mt-5 text-xs text-[rgba(255,255,255,0.30)]">
            Solo location private in Italia · Ville, castelli, casali, spazi industriali e molto altro
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

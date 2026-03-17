import Link from 'next/link'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'

const services = [
  {
    icon: '🔍',
    title: 'Location Scouting',
    desc: 'We travel across Italy to find and document locations that match your exact creative brief. Every scouting delivers high-resolution photos, GPS coordinates, access notes and light condition reports — everything your production needs before day one.',
  },
  {
    icon: '📋',
    title: 'Filming Permits',
    desc: 'Complete permit acquisition and local authority coordination — from historic centers to private estates.',
  },
  {
    icon: '🚛',
    title: 'Production Logistics',
    desc: 'Equipment, catering, accommodation and on-site support. Everything your crew needs, handled.',
  },
  {
    icon: '🚁',
    title: 'Drone Services',
    desc: 'ENAC-certified aerial photography and videography. Breathtaking perspectives from above.',
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-14">
          <SectionLabel>Our Services</SectionLabel>
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
          >
            Complete Production Support
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.title} delay={i * 100}>
              <GlassCard className="p-8 h-full group hover:border-[rgba(201,168,76,0.25)] transition-all duration-300">
                <div className="text-4xl mb-5">{service.icon}</div>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                >
                  {service.title}
                </h3>
                <p className="text-[rgba(255,255,255,0.60)] leading-relaxed text-sm">
                  {service.desc}
                </p>
              </GlassCard>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold gold-text hover:opacity-80 transition-opacity"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Iconic Cars for Film Production Italy | Italy Locations',
  description:
    'Premium classic and sports cars available for advertising campaigns, photo shoots and film productions in Italy. Porsche, Lamborghini, Mercedes AMG — fully managed by Italy Locations.',
}

const cars = [
  {
    id: 'porsche-997-carrera-s-cabrio',
    brand: 'Porsche',
    model: '997 Carrera S Cabrio',
    year: 2006,
    km: '54.000',
    color: 'Nero Pastello',
    interior: 'Pelle nero, capotte nera',
    origin: 'Vettura ufficiale italiana',
    productionType: 'Automotive · Fashion · Luxury Lifestyle',
    description:
      'Elegante cabrio nera con capotte in tela, iscritta ASI. Tagliandi rete ufficiale, ultimo dicembre 2025. Una vettura in condizioni eccellenti per produzioni che richiedono stile e autenticità.',
    features: ['Cerchi 19"', 'Scarico sportivo', 'PCM', 'Frangivento', 'Iscrizione ASI', 'Tagliandi ufficiali'],
    perfectFor: ['Automotive commercial', 'Fashion editorial', 'Cabrio scenes', 'Luxury lifestyle'],
  },
  {
    id: 'lamborghini-gallardo-lp560-4',
    brand: 'Lamborghini',
    model: 'Gallardo LP-560 4',
    year: 2013,
    km: '26.000',
    color: 'Contact for details',
    interior: 'Contact for details',
    origin: 'Vettura unica per condizioni e colorazione',
    productionType: 'Supercar · Premium Automotive · Music Video',
    description:
      'Esemplare unico per colorazione e condizioni. Una delle supercar più iconiche di sempre, con soli 26.000 km. Perfetta per produzioni ad alto impatto visivo e campagne premium.',
    features: ['LP-560 hp', '26.000 km', 'Colorazione esclusiva', 'Condizioni eccezionali'],
    perfectFor: ['Supercar campaigns', 'Music video', 'Luxury fashion', 'Premium automotive'],
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
    km: '150.000',
    color: 'Argento metallizzato',
    interior: 'Pelle totale',
    origin: 'Pacchetto AMG Sport',
    productionType: 'Luxury Lifestyle · Fashion · Automotive',
    description:
      '315CV con il lussuoso pacchetto AMG Sport. Sospensioni ABC revisionate, Airscarf, frangivento elettrico. Un grand tourer cabrio dall\'eleganza senza tempo, perfetto per scene di guida e lifestyle.',
    features: ['315 CV', 'Cerchi 19"', 'Airscarf', 'Sospensioni ABC', 'Sedili elettrici con memoria', 'Cruise control', 'Frangivento elettrico'],
    perfectFor: ['Cabrio elegance', 'Fashion editorial', 'Luxury lifestyle', 'Automotive campaigns'],
  },
  {
    id: 'porsche-997-carrera-4s-coupe',
    brand: 'Porsche',
    model: '997 Carrera 4S Coupé',
    year: 2010,
    km: '41.000',
    color: 'Bianca Carrara',
    interior: 'Pelle nero, cerchi 19" verniciati neri',
    origin: 'Vettura ufficiale italiana, prima vernice originale',
    productionType: 'Automotive · Fashion · Urban Campaigns',
    description:
      'Bianca Carrara con interni neri — contrasto cromatico perfetto per l\'obiettivo. Prima vernice originale, fattura d\'acquisto da nuova. Impianto Bose, fari Xenon PDLS, tetto apribile.',
    features: ['Cerchi 19" neri', 'Scarico sportivo', 'Fari Xenon PDLS', 'Impianto Bose', 'Tetto apribile', 'PCM', 'Prima vernice'],
    perfectFor: ['Automotive', 'Fashion editorial', 'Luxury campaigns', 'Urban production'],
  },
]

const steps = [
  {
    icon: '📋',
    title: 'Send Your Brief',
    description:
      'Tell us about your production, shooting date and creative vision. We\'ll confirm availability within 24 hours.',
  },
  {
    icon: '🤝',
    title: 'We Handle Everything',
    description:
      'From paperwork to on-set coordination. The vehicle arrives ready to shoot, fully prepared and insured.',
  },
  {
    icon: '🎬',
    title: 'Shoot with Confidence',
    description:
      'Professional support throughout the day. Insurance and logistics fully managed by our team.',
  },
]

export default function IconicCarsPage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#0d1526] to-[#0a0f1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(201,168,76,0.08),transparent)]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-6 px-4 py-1.5 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.06)]">
              Iconic Cars for Production
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h1
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              Iconic Cars for Film{' '}
              <span className="gold-text">&amp; Advertising</span>{' '}
              Productions
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-[rgba(255,255,255,0.60)] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              A curated selection of exceptional vehicles available for photo shoots, advertising campaigns,
              music videos and film productions across Italy.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 pb-20">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[rgba(255,255,255,0.55)] text-base md:text-lg leading-relaxed border-l-2 border-[rgba(201,168,76,0.4)] pl-6 text-left">
              Every vehicle in our fleet has been selected for its visual impact, condition and story.
              Available throughout Italy with full logistical support — from location coordination to
              on-set assistance. All vehicles are privately owned and managed exclusively by Italy Locations.
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Cars Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {cars.map((car, i) => (
            <AnimateOnScroll key={car.id} delay={i * 80}>
              <div className="rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(201,168,76,0.35)] transition-all duration-300 overflow-hidden group">

                {/* Photo */}
                <div className="relative w-full aspect-video bg-gradient-to-br from-[#0d1526] to-[#1a2744] overflow-hidden">
                  {'image' in car && car.image ? (
                    <Image
                      src={car.image.src}
                      alt={car.image.alt}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(201,168,76,0.04)] to-transparent" />
                      <p className="absolute inset-0 flex items-center justify-center text-[rgba(255,255,255,0.18)] text-sm font-medium tracking-wide text-center px-4">
                        [ Photo — {car.brand} {car.model} ]
                      </p>
                    </>
                  )}
                </div>

                <div className="p-6">
                  {/* Production type badge */}
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

                  {/* Title */}
                  <h2
                    className="text-2xl font-bold gold-text mb-5 leading-tight"
                    style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                  >
                    {car.brand} {car.model} {car.year}
                  </h2>

                  {/* Specs grid */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="flex items-start gap-2">
                      <span className="text-base leading-none mt-0.5">🗓</span>
                      <div>
                        <p className="text-[rgba(255,255,255,0.35)] text-xs uppercase tracking-wide font-medium">Anno</p>
                        <p className="text-white text-sm font-semibold">{car.year}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-base leading-none mt-0.5">📍</span>
                      <div>
                        <p className="text-[rgba(255,255,255,0.35)] text-xs uppercase tracking-wide font-medium">Km</p>
                        <p className="text-white text-sm font-semibold">{car.km} km</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-base leading-none mt-0.5">🎨</span>
                      <div>
                        <p className="text-[rgba(255,255,255,0.35)] text-xs uppercase tracking-wide font-medium">Colore</p>
                        <p className="text-white text-sm font-semibold">{car.color}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-base leading-none mt-0.5">🇮🇹</span>
                      <div>
                        <p className="text-[rgba(255,255,255,0.35)] text-xs uppercase tracking-wide font-medium">Origine</p>
                        <p className="text-white text-sm font-semibold leading-tight">{car.origin}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[rgba(255,255,255,0.55)] text-sm leading-relaxed mb-5">
                    {car.description}
                  </p>

                  {/* Feature tags */}
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

                  {/* CTA */}
                  <Link
                    href={`/contact?vehicle=${car.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#c9a84c] hover:text-[#e8d5a0] transition-colors duration-200 group-hover:gap-3"
                  >
                    Request This Vehicle
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
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
                Process
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-white"
                style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
              >
                How It Works
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.title} delay={i * 100}>
                <div className="text-center p-8 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)]">
                  <div className="text-4xl mb-5">{step.icon}</div>
                  <div className="text-xs font-semibold tracking-widest text-[rgba(201,168,76,0.6)] uppercase mb-3">
                    Step {i + 1}
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
            ))}
          </div>
        </div>
      </section>

      {/* Also Available */}
      <section className="px-6 py-16 border-t border-[rgba(255,255,255,0.05)]">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[rgba(255,255,255,0.45)] text-sm uppercase tracking-widest font-medium mb-4">
              Complete Your Production
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              Looking for the Perfect Backdrop?
            </h2>
            <p className="text-[rgba(255,255,255,0.55)] mb-8 leading-relaxed">
              Looking for the perfect backdrop for your vehicle shoot?
              Browse our 48+ scouted locations across Italy — from medieval citadels to coastal roads and mountain passes.
            </p>
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-[#c9a84c] hover:text-[#e8d5a0] font-semibold transition-colors duration-200"
            >
              Explore Filming Locations
              <span>→</span>
            </Link>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 border-t border-[rgba(255,255,255,0.05)]">
        <AnimateOnScroll>
          <div className="max-w-2xl mx-auto text-center p-10 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(201,168,76,0.2)]">
            <p className="text-[rgba(255,255,255,0.45)] text-xs uppercase tracking-widest font-medium mb-3">
              Ready to book?
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              Interested in One of These Vehicles?
            </h2>
            <p className="text-[rgba(255,255,255,0.55)] mb-8 leading-relaxed">
              Contact us with your project details and we&apos;ll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-block text-sm font-semibold px-8 py-3.5 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(59,130,246,0.45)]"
              >
                Get in Touch →
              </Link>
              <a
                href="https://wa.me/393895365864"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[rgba(255,255,255,0.55)] hover:text-white transition-colors duration-200"
              >
                <span className="text-base">💬</span>
                WhatsApp: +39 389 536 5864
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

    </main>
  )
}

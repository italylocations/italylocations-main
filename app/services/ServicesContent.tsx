'use client'

import Link from 'next/link'
import { MapPin, FileText, Truck, Users, Camera, Building2, Plane, Home } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { useLanguage } from '@/contexts/LanguageContext'

const SERVICE_ICONS: LucideIcon[] = [MapPin, FileText, Truck, Users, Camera, Building2, Plane, Home]

const SERVICE_STATIC = [
  {
    number: '01',
    subtitle: "Discover Italy's Hidden Cinematic Treasures",
    description:
      "Our expert location scouts research and identify the perfect filming locations based on your creative brief and production requirements. From Rome's iconic marble monuments to the dramatic Alpine passes and hidden coastal gems, we provide comprehensive location documentation with high-resolution photography, detailed technical specifications, and site accessibility reports.",
    includes: [
      'Detailed location research and identification',
      'Professional photo and video documentation',
      'Technical site specifications and measurements',
      'Accessibility and logistics assessments',
      'Alternative location recommendations',
      'GPS coordinates and detailed driving directions',
    ],
  },
  {
    number: '02',
    subtitle: 'Navigate Italian Bureaucracy with Confidence',
    description:
      'Securing filming permits in Italy requires specialized knowledge of local regulations and bureaucratic processes. Our permit specialists handle complete permit acquisition for commercial and film productions, ensuring full compliance with Italian filming regulations and local authority requirements.',
    includes: [
      'Complete permit application processing',
      'Local authority coordination and liaison',
      'Compliance management and documentation',
      'Legal requirement guidance',
      'Timeline planning (minimum 15 working days advance notice)',
      'Permit renewal and extension services',
    ],
    note: 'All commercial filming in Italy requires proper permits. Our team ensures your production meets all legal requirements for smooth, compliant shoots.',
  },
  {
    number: '03',
    subtitle: 'Seamless On-Site Production Support',
    description:
      'Professional production logistics coordination ensures your Italian shoot runs smoothly from pre-production through wrap. Our local expertise eliminates common production challenges and provides comprehensive on-site support for international filming teams.',
    includes: [
      'Equipment transportation and delivery coordination',
      'Professional catering arrangements',
      'Accommodation booking and management',
      'Local transportation logistics',
      'Security coordination when required',
      'Weather contingency planning',
      'Emergency contact and support services',
    ],
    note: 'Our Rome-based operations center provides 24/7 support throughout your production timeline.',
  },
  {
    number: '04',
    subtitle: "Connect with Italy's Top Film Professionals",
    description:
      'Access our vetted network of Italian film professionals with international production experience. Our crew database includes experienced technicians who understand both Italian working methods and international production standards. All crew members are pre-screened for technical competence, international experience, and English language proficiency.',
    includes: [
      'Cinematographers and camera operators',
      'Videographers for social media content',
      'EPK and BTS specialists',
      'Lighting technicians and gaffers',
      'Makeup artists and hair stylists',
      'Set designers and scenographers',
      'Props stylists and food stylists',
      'Sound recordists and boom operators',
    ],
  },
  {
    number: '05',
    subtitle: 'Professional Photography and Video Equipment',
    description:
      "Send us your equipment list for a detailed quotation. Our Rome warehouse stocks premium professional equipment for fashion campaigns, commercial shoots, and film productions, with Italy-wide delivery and optional technical support. Inventory includes Profoto flash systems, Sony mirrorless cameras, Nanlite LED systems, and underwater housing for Sony FX3.",
    includes: [
      'Profoto B1X, B3, B4 flash systems',
      'Sony mirrorless cameras and lenses',
      'Nanlite and Astera LED systems',
      'Tilta Hydra Alien car mount',
      'Underwater housing for Sony FX3',
      'DJI Osmo Pocket 3 and Insta360 X5',
      'Italy-wide delivery from Rome warehouse',
      'Optional lighting technician',
    ],
  },
  {
    number: '06',
    subtitle: 'Premium White Limbo Studios Across Italy',
    description:
      "Looking for professional photography studios with white limbo backgrounds for e-commerce shoots and commercial videos? We maintain relationships with Italy's best-equipped photography studios, ensuring access to premium facilities nationwide. We handle studio booking, logistics coordination, and ensure your chosen facility meets all technical requirements.",
    includes: [
      'Professional white limbo backgrounds',
      'High-ceiling spaces for large productions',
      'Professional lighting systems installed',
      'Makeup and wardrobe areas',
      'Equipment rental available on-site',
      'Studios in Milan, Rome, Florence, Naples',
    ],
  },
  {
    number: '07',
    subtitle: 'Certified Aerial Photography and Videography',
    description:
      'Capture stunning aerial footage with our certified drone pilots and professional equipment. All flights comply with Italian aviation regulations (ENAC) and include complete permit coordination for commercial aerial filming.',
    includes: [
      'ENAC-certified drone pilots',
      'Professional 4K+ drone equipment',
      'Flight permit acquisition and coordination',
      'No-fly zone navigation and compliance',
      'Insurance coverage for commercial ops',
      'Weather monitoring and flight planning',
      'Raw footage in preferred formats',
    ],
  },
  {
    number: '08',
    subtitle: 'International Property Investment Support',
    description:
      'Planning to buy property in Italy while living abroad? Our property scouting services provide comprehensive property evaluation with detailed photography, aerial footage, and complete assessment reports, giving you clear insights before visiting Italy in person.',
    includes: [
      'Interior and exterior photography',
      'Professional aerial footage and overview',
      'Property condition assessment report',
      'Neighbourhood analysis and amenities',
      'Transportation and accessibility review',
      'Local market insights',
      'Video walkthrough tours',
      'Follow-up consultation',
    ],
    note: 'Make informed property decisions with professional documentation and local expertise, reducing travel costs and investment risks.',
  },
]

interface ServiceData {
  number: string
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  includes: string[]
  note?: string
  serviceIncludes: string
}

function ServiceCard({ service }: { service: ServiceData }) {
  const Icon = service.icon
  return (
    <div className="relative group bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:border-[rgba(201,168,76,0.35)] hover:gold-border-glow p-8 md:p-10">
      <span
        className="absolute top-6 right-8 text-7xl md:text-8xl font-bold leading-none select-none pointer-events-none"
        style={{
          fontFamily: 'var(--font-playfair), "Playfair Display", serif',
          background: 'linear-gradient(135deg, #c9a84c, #e8d5a0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          opacity: 0.18,
        }}
      >
        {service.number}
      </span>

      <div className="flex items-center gap-3 mb-5">
        <Icon className="text-[#c9a84c]" size={24} strokeWidth={1.5} />
        <span className="text-xs font-semibold tracking-[0.18em] uppercase gold-text">
          {service.number}
        </span>
      </div>

      <h2
        className="text-2xl md:text-3xl font-bold mb-1 gold-text"
        style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
      >
        {service.title}
      </h2>
      <p className="text-[rgba(255,255,255,0.45)] text-sm mb-6 italic">{service.subtitle}</p>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-[60%]">
          <p className="text-[rgba(255,255,255,0.65)] leading-relaxed text-sm md:text-base">
            {service.description}
          </p>
          {service.note && (
            <p className="mt-4 text-xs text-[rgba(255,255,255,0.4)] border-l-2 border-[rgba(201,168,76,0.4)] pl-3 leading-relaxed">
              {service.note}
            </p>
          )}
        </div>

        <div className="md:w-[40%]">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[rgba(255,255,255,0.35)] mb-3">
            {service.serviceIncludes}
          </p>
          <ul className="flex flex-col gap-2">
            {service.includes.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-[rgba(255,255,255,0.65)]">
                <span
                  className="mt-0.5 shrink-0 text-xs font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #c9a84c, #e8d5a0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export function ServicesContent() {
  const { t } = useLanguage()
  const p = t.pages.services

  return (
    <main className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-28 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative">
          <AnimateOnScroll>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase gold-text mb-4">
              {p.label}
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              {p.h1}
            </h1>
            <p className="text-[rgba(255,255,255,0.65)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {p.subtitle}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Service Cards ─────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pb-24 flex flex-col gap-8">
        {SERVICE_STATIC.map((svc, i) => (
          <AnimateOnScroll key={svc.number} delay={i < 3 ? i * 80 : 0}>
            <ServiceCard
              service={{
                ...svc,
                icon: SERVICE_ICONS[i],
                title: p.serviceTitles[i] ?? svc.number,
                serviceIncludes: p.serviceIncludes,
              }}
            />
          </AnimateOnScroll>
        ))}
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="pb-28 px-6">
        <AnimateOnScroll>
          <div className="max-w-2xl mx-auto text-center bg-[rgba(255,255,255,0.04)] border border-[rgba(201,168,76,0.2)] rounded-3xl p-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase gold-text mb-4">
              {p.ctaLabel}
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              {p.ctaH2}
            </h2>
            <p className="text-[rgba(255,255,255,0.6)] mb-8 text-lg leading-relaxed">
              Tell us about your project and we&apos;ll put together the right team.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 blue-glow hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            >
              {p.ctaButton}
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </main>
  )
}

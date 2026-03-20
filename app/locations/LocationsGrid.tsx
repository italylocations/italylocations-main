'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import type { LocationFrontmatter } from '@/lib/locations'
import { useLanguage } from '@/contexts/LanguageContext'

const REGIONS = [
  'All',
  'Lazio',
  'Umbria',
  'Campania',
  'Toscana',
  'Emilia-Romagna',
  'Sardegna',
  'Trentino/Veneto',
  'Piemonte',
  'Abruzzo',
  'Marche',
  'Nord-Est',
]

const REGION_ALIASES: Record<string, string[]> = {
  'Trentino/Veneto': ['Trentino', 'Veneto', 'Trentino-Alto Adige'],
  'Nord-Est': ['Friuli', 'Friuli-Venezia Giulia'],
}

function matchesRegion(location: LocationFrontmatter, active: string): boolean {
  if (active === 'All') return true
  const aliases = REGION_ALIASES[active] ?? []
  return location.region === active || aliases.includes(location.region)
}

const TYPE_COLORS: Record<string, string> = {
  Urban: 'bg-[rgba(59,130,246,0.15)] text-[#93c5fd] border border-[rgba(59,130,246,0.3)]',
  Coastal: 'bg-[rgba(34,197,94,0.15)] text-[#86efac] border border-[rgba(34,197,94,0.3)]',
  Historic: 'bg-[rgba(201,168,76,0.12)] text-[#e8d5a0] border border-[rgba(201,168,76,0.3)]',
  Mountain: 'bg-[rgba(168,85,247,0.12)] text-[#d8b4fe] border border-[rgba(168,85,247,0.3)]',
  Rural: 'bg-[rgba(251,146,60,0.12)] text-[#fdba74] border border-[rgba(251,146,60,0.3)]',
  Industrial: 'bg-[rgba(156,163,175,0.15)] text-[#d1d5db] border border-[rgba(156,163,175,0.3)]',
}

function typeClass(t: string) {
  return (
    TYPE_COLORS[t] ??
    'bg-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.7)] border border-[rgba(255,255,255,0.15)]'
  )
}

interface Props {
  locations: LocationFrontmatter[]
}

export function LocationsGrid({ locations }: Props) {
  const { t } = useLanguage()
  const allFilter = t.pages.locations.allFilter
  const [activeRegion, setActiveRegion] = useState('All')

  const filtered = locations.filter((l) => matchesRegion(l, activeRegion))

  return (
    <section className="max-w-7xl mx-auto px-6">
      {/* Region filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {REGIONS.map((region) => {
          const isActive = activeRegion === region
          return (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`
                text-xs font-semibold tracking-wide px-4 py-2 rounded-full transition-all duration-200 cursor-pointer
                ${
                  isActive
                    ? 'border border-[rgba(201,168,76,0.7)] text-[#e8d5a0] bg-[rgba(201,168,76,0.1)] gold-border-glow'
                    : 'border border-[rgba(255,255,255,0.12)] text-[rgba(255,255,255,0.55)] bg-[rgba(255,255,255,0.03)] hover:border-[rgba(201,168,76,0.4)] hover:text-[#e8d5a0]'
                }
              `}
            >
              {region === 'All' ? allFilter : region}
              {region === 'All' ? (
                <span className="ml-1.5 text-[rgba(255,255,255,0.35)]">({locations.length})</span>
              ) : null}
            </button>
          )
        })}
      </div>

      {/* Count */}
      <p className="text-center text-[rgba(255,255,255,0.35)] text-sm mb-8">
        {filtered.length} location{filtered.length !== 1 ? 's' : ''}
        {activeRegion !== 'All' ? ` in ${activeRegion}` : ''}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((location, i) => (
          <LocationCard key={location.slug} location={location} index={i} />
        ))}
      </div>
    </section>
  )
}

function LocationCard({ location, index }: { location: LocationFrontmatter; index: number }) {
  return (
    <Link
      href={`/locations/${location.slug}`}
      className="group block"
      style={{ animationDelay: `${(index % 9) * 60}ms` }}
    >
      <div
        className="
          h-full flex flex-col
          bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]
          backdrop-blur-sm rounded-2xl overflow-hidden
          transition-all duration-300
          hover:-translate-y-1 hover:border-[rgba(201,168,76,0.35)] hover:gold-border-glow
        "
      >
        {/* Image */}
        <div className="relative w-full overflow-hidden" style={{ paddingBottom: '56.25%' }}>
          {location.featuredImage ? (
            <Image
              src={location.featuredImage}
              alt={location.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
          ) : (
            <div className="absolute inset-0 bg-[rgba(255,255,255,0.04)] flex items-center justify-center">
              <MapPin className="text-[rgba(255,255,255,0.2)]" size={32} strokeWidth={1.5} />
            </div>
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,15,30,0.5)] to-transparent pointer-events-none" />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            <span className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-[rgba(201,168,76,0.12)] text-[#e8d5a0] border border-[rgba(201,168,76,0.3)]">
              {location.region}
            </span>
            {location.locationType && (
              <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full ${typeClass(location.locationType)}`}>
                {location.locationType}
              </span>
            )}
          </div>

          {/* Title */}
          <h2
            className="text-white text-lg font-semibold leading-snug line-clamp-2 group-hover:text-[#e8d5a0] transition-colors duration-200"
            style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
          >
            {location.title}
          </h2>

          {/* Excerpt */}
          {location.excerpt && (
            <p className="text-[rgba(255,255,255,0.55)] text-sm leading-relaxed line-clamp-2 flex-1">
              {location.excerpt}
            </p>
          )}

          {/* CTA */}
          <div className="mt-auto pt-2">
            <span className="text-sm font-semibold gold-text group-hover:opacity-80 transition-opacity">
              View Location →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

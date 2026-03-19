import type { Metadata } from 'next'
import { getAllLocations } from '@/lib/locations'
import { LocationsGrid } from './LocationsGrid'

export const metadata: Metadata = {
  title: 'Filming Locations Across Italy | Italy Locations',
  description:
    '48 curated filming locations documented by our scouts. From Rome\'s ancient streets to the Dolomites alpine passes. Professional film location scouting in Italy.',
}

export default function LocationsPage() {
  const locations = getAllLocations()

  return (
    <main className="min-h-screen pt-24 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span
          className="inline-block text-xs font-semibold tracking-[0.2em] uppercase gold-text mb-4"
        >
          OUR LOCATIONS
        </span>
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
        >
          Filming Locations Across Italy
        </h1>
        <p className="text-[rgba(255,255,255,0.65)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          48 curated locations documented by our scouts. From Rome&apos;s ancient streets to the
          Dolomites alpine passes.
        </p>
      </section>

      {/* Grid with filters */}
      <LocationsGrid locations={locations} />
    </main>
  )
}

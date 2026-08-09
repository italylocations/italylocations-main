import type { Metadata } from 'next'
import { getAllLocations } from '@/lib/locations'
import { alternatesFor } from '@/lib/hreflang'
import { LocationsHeader } from './LocationsHeader'
import { LocationsGrid } from './LocationsGrid'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Filming Locations Across Italy | Italy Locations',
    description:
      "48 curated filming locations documented by our scouts. From Rome's ancient streets to the Dolomites alpine passes. Professional film location scouting in Italy.",
    alternates: alternatesFor(locale, '/locations'),
  }
}

export default function LocationsPage() {
  const locations = getAllLocations()

  return (
    <main className="min-h-screen pt-24 pb-24">
      <LocationsHeader count={locations.length} />
      <LocationsGrid locations={locations} />
    </main>
  )
}

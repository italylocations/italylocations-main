import type { Metadata } from 'next'
import { ComingSoon } from '@/components/ComingSoon'

export const metadata: Metadata = {
  title: 'Film Locations in Italy',
  description:
    'Explore 500+ filming locations across all 20 Italian regions. Rome, Tuscany, Sicily, Dolomites and more.',
}

export default function LocationsPage() {
  return (
    <ComingSoon
      emoji="📍"
      title="Film Locations in Italy"
      description="Browse our curated catalogue of 500+ filming locations across all 20 Italian regions — from Rome's historic streets to the dramatic Dolomites. Full catalogue launching soon."
    />
  )
}

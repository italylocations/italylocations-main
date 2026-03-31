import type { Metadata } from 'next'
import { RatesContent } from './RatesContent'

export const metadata: Metadata = {
  title: 'Rates & Pricing | Italy Locations',
  description:
    'Transparent location scouting rates: €600/day for Central Italy, €750/day for North & South Italy. No hidden fees.',
}

export default function RatesPage() {
  return <RatesContent />
}

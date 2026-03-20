import type { Metadata } from 'next'
import { RatesContent } from './RatesContent'

export const metadata: Metadata = {
  title: 'Location Scouting Rates Italy | Professional Film Services',
  description:
    'Transparent pricing for location scouting services in Italy. Competitive all-inclusive daily rates for film permits, crew coordination, and production support nationwide.',
}

export default function RatesPage() {
  return <RatesContent />
}

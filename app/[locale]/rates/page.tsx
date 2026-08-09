import type { Metadata } from 'next'
import { alternatesFor } from '@/lib/hreflang'
import { RatesContent } from './RatesContent'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Rates & Pricing | Italy Locations',
    description:
      'Transparent location scouting rates: €600/day for Central Italy, €750/day for North & South Italy. No hidden fees.',
    alternates: alternatesFor(locale, '/rates'),
  }
}

export default function RatesPage() {
  return <RatesContent />
}

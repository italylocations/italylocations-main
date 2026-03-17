import type { Metadata } from 'next'
import { ComingSoon } from '@/components/ComingSoon'

export const metadata: Metadata = {
  title: 'Rates & Pricing',
  description:
    'Transparent location scouting pricing for Italy. Daily rates from €600 — no hidden fees.',
}

export default function RatesPage() {
  return (
    <ComingSoon
      emoji="💶"
      title="Rates & Pricing"
      description="Clear, transparent pricing for every type of production. Daily scouting rates from €600 across all Italian regions. Full pricing breakdown coming soon."
    />
  )
}

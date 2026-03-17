import type { Metadata } from 'next'
import { ComingSoon } from '@/components/ComingSoon'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about film location scouting in Italy. Permits, pricing, logistics and more.',
}

export default function FaqPage() {
  return (
    <ComingSoon
      emoji="❓"
      title="Frequently Asked Questions"
      description="Everything you need to know about filming in Italy — permits, logistics, pricing, and how we work. Detailed FAQ section launching soon."
    />
  )
}

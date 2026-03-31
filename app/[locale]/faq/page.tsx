import type { Metadata } from 'next'
import { FaqPageContent } from './FaqPageContent'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about film location scouting in Italy. Permits, pricing, iconic cars, and private locations — everything you need to know.',
}

export default function FaqPage() {
  return <FaqPageContent />
}

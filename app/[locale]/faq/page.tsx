import type { Metadata } from 'next'
import { alternatesFor } from '@/lib/hreflang'
import { FaqPageContent } from './FaqPageContent'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'FAQ',
    description:
      'Frequently asked questions about film location scouting in Italy. Permits, pricing, iconic cars, and private locations — everything you need to know.',
    alternates: alternatesFor(locale, '/faq'),
  }
}

export default function FaqPage() {
  return <FaqPageContent />
}

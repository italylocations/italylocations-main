import type { Metadata } from 'next'
import { alternatesFor } from '@/lib/hreflang'
import { AboutContent } from './AboutContent'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'About — Nicolas Vanegas Sanchez | Italy Locations',
    description:
      '12+ years of professional film location scouting in Italy. Fluent in English, Italian and Spanish. Local expert for international productions across all of Italy.',
    alternates: alternatesFor(locale, '/about'),
  }
}

export default function AboutPage() {
  return <AboutContent />
}

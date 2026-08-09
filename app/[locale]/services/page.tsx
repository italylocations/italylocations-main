import type { Metadata } from 'next'
import { alternatesFor } from '@/lib/hreflang'
import { ServicesContent } from './ServicesContent'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Services | Italy Locations',
    description:
      'Professional location scouting, filming permits, production logistics, drone services and more across all of Italy.',
    alternates: alternatesFor(locale, '/services'),
  }
}

export default function ServicesPage() {
  return <ServicesContent />
}

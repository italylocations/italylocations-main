import type { Metadata } from 'next'
import { AboutContent } from './AboutContent'

export const metadata: Metadata = {
  title: 'About — Nicolas Vanegas Sanchez | Italy Locations',
  description:
    '12+ years of professional film location scouting in Italy. Fluent in English, Italian and Spanish. Local expert for international productions across all of Italy.',
}

export default function AboutPage() {
  return <AboutContent />
}

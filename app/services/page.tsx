import type { Metadata } from 'next'
import { ServicesContent } from './ServicesContent'

export const metadata: Metadata = {
  title: 'Professional Location Scouting Services Italy | Italy Locations',
  description:
    'Professional location scouting and film production services across Italy. Equipment rental, permits, crew network, and comprehensive production support for international clients.',
}

export default function ServicesPage() {
  return <ServicesContent />
}

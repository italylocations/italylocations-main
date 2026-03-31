import type { Metadata } from 'next'
import { ServicesContent } from './ServicesContent'

export const metadata: Metadata = {
  title: 'Services | Italy Locations',
  description:
    'Professional location scouting, filming permits, production logistics, drone services and more across all of Italy.',
}

export default function ServicesPage() {
  return <ServicesContent />
}

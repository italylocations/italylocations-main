import type { Metadata } from 'next'
import { ComingSoon } from '@/components/ComingSoon'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Full-service film location scouting in Italy: permits, logistics, drone, production support.',
}

export default function ServicesPage() {
  return (
    <ComingSoon
      emoji="⚙️"
      title="Our Services"
      description="Complete production support — from location scouting and filming permits to drone services and on-site logistics. We're building this page to show you everything we offer."
    />
  )
}

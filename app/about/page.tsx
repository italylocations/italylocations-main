import type { Metadata } from 'next'
import { ComingSoon } from '@/components/ComingSoon'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Over a decade of professional film location scouting in Italy. Meet the Italy Locations team.',
}

export default function AboutPage() {
  return (
    <ComingSoon
      emoji="🎬"
      title="About Italy Locations"
      description="Over a decade of on-the-ground expertise in Italian film location scouting. We're preparing our story — the team, the history, and the passion behind every production."
    />
  )
}

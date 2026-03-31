import type { Metadata } from 'next'
import { MilanContent } from './MilanContent'

export const metadata: Metadata = {
  title: 'Location Scouting Milan | Film & Commercial Production | Italy Locations',
  description:
    'Professional location scouting service in Milan. We find exclusive villas, lofts, palaces and unique spaces for film, advertising and fashion productions.',
  keywords: 'location scouting milan, location agency milan, film locations milan, commercial shoot milan',
}

export default function MilanPage() {
  return <MilanContent />
}

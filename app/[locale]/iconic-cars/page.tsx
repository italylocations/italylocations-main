import type { Metadata } from 'next'
import { IconicCarsContent } from './IconicCarsContent'

export const metadata: Metadata = {
  title: 'Vintage Porsche & Classic Cars for Film Production Italy | Italy Locations',
  description:
    "Italy's leading specialist in vintage Porsche and classic cars for film, advertising, editorial and photo shoot productions. Three Porsches available now. Any classic car sourced on request.",
  keywords:
    'vintage porsche for film production italy, classic porsche photo shoot italy, porsche 911 film car hire italy, classic cars for film production italy, iconic car hire italy film',
}

export default function IconicCarsPage() {
  return <IconicCarsContent />
}

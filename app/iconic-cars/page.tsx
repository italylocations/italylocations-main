import type { Metadata } from 'next'
import { IconicCarsContent } from './IconicCarsContent'

export const metadata: Metadata = {
  title: 'Iconic Cars for Film Production Italy | Italy Locations',
  description:
    'Premium classic and sports cars available for advertising campaigns, photo shoots and film productions in Italy. Porsche, Lamborghini, Mercedes AMG — fully managed by Italy Locations.',
}

export default function IconicCarsPage() {
  return <IconicCarsContent />
}

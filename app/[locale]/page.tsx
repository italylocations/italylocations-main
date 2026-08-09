import type { Metadata } from 'next'
import { alternatesFor } from '@/lib/hreflang'
import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { RegionsSection } from '@/components/sections/RegionsSection'
import { LatestWorkSection } from '@/components/sections/LatestWorkSection'
import { WhySection } from '@/components/sections/WhySection'
import { CtaSection } from '@/components/sections/CtaSection'
import { OwnersSection } from '@/components/sections/OwnersSection'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return { alternates: alternatesFor(locale, '/') }
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <LatestWorkSection />
      <RegionsSection />
      <WhySection />
      <CtaSection />
      <OwnersSection />
    </>
  )
}

import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { RegionsSection } from '@/components/sections/RegionsSection'
import { LatestWorkSection } from '@/components/sections/LatestWorkSection'
import { WhySection } from '@/components/sections/WhySection'
import { CtaSection } from '@/components/sections/CtaSection'
import { OwnersSection } from '@/components/sections/OwnersSection'

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

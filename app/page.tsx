import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { RegionsSection } from '@/components/sections/RegionsSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { WhySection } from '@/components/sections/WhySection'
import { DatabaseSection } from '@/components/sections/DatabaseSection'
import { OwnersSection } from '@/components/sections/OwnersSection'
import { CtaSection } from '@/components/sections/CtaSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <RegionsSection />
      <PricingSection />
      <WhySection />
      <DatabaseSection />
      <OwnersSection />
      <CtaSection />
    </>
  )
}

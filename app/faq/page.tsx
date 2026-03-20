import type { Metadata } from 'next'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { BlueButton } from '@/components/ui/BlueButton'
import { GoldButton } from '@/components/ui/GoldButton'
import { FaqAccordion } from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about film location scouting in Italy. Permits, pricing, iconic cars, and private locations — everything you need to know.',
}

export default function FaqPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-16">
          <SectionLabel>FAQ</SectionLabel>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-4"
            style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
          >
            Frequently Asked Questions
          </h1>
          <p className="text-[rgba(255,255,255,0.60)] text-lg max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our location scouting services in Italy.
          </p>
        </div>

        {/* Accordion + search */}
        <FaqAccordion />

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl px-10 py-10">
            <p
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              Still have questions?
            </p>
            <p className="text-[rgba(255,255,255,0.50)] text-sm mb-8">
              Can&apos;t find what you&apos;re looking for? We&apos;re happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BlueButton href="/contact">Contact Us →</BlueButton>
              <GoldButton href="https://wa.me/393895365864" external>
                WhatsApp →
              </GoldButton>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}

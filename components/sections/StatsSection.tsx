'use client'

import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { useLanguage } from '@/contexts/LanguageContext'

const STAT_VALUES = [
  { value: 20, suffix: '+', prefix: undefined },
  { value: 500, suffix: '+', prefix: undefined },
  { value: 10, suffix: '+', prefix: undefined },
]

export function StatsSection() {
  const { t } = useLanguage()
  const labels = t.home.stats.items

  return (
    <section className="py-8 px-6 lg:px-8">
      <AnimateOnScroll>
        <div className="max-w-6xl mx-auto">
          <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(201,168,76,0.20)] backdrop-blur-sm rounded-2xl px-6 py-8 md:py-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-0">
              {STAT_VALUES.map((stat, index) => (
                <div key={index} className="relative text-center">
                  {index < STAT_VALUES.length - 1 && (
                    <div className="stats-divider hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12" />
                  )}
                  <div
                    className="text-3xl md:text-4xl font-bold mb-1 gold-text"
                    style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                  >
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} duration={1800} />
                  </div>
                  <p className="text-xs md:text-sm text-[rgba(255,255,255,0.50)] font-medium">
                    {labels[index]?.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  )
}

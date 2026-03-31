'use client'

import { useState, useMemo } from 'react'
import { MapPin, FileText, Car, Database } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { GlassCard } from '@/components/ui/GlassCard'
import { useLanguage } from '@/contexts/LanguageContext'

const CATEGORY_ICONS: LucideIcon[] = [MapPin, FileText, Car, Database]

interface FaqItem {
  q: string
  a: string
}

interface FaqCategory {
  id: string
  label: string
  title: string
  items: FaqItem[]
}

const FAQ_STRUCTURE: { id: string; label: string; key: 'scouting' | 'permits' | 'cars' | 'database' }[] = [
  { id: 'scouting', label: '01', key: 'scouting' },
  { id: 'permits', label: '02', key: 'permits' },
  { id: 'cars', label: '03', key: 'cars' },
  { id: 'database', label: '04', key: 'database' },
]

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={`border rounded-xl transition-all duration-200 ${
        isOpen
          ? 'border-[rgba(201,168,76,0.35)] bg-[rgba(201,168,76,0.04)]'
          : 'border-[rgba(255,255,255,0.08)] hover:border-[rgba(201,168,76,0.20)] bg-[rgba(255,255,255,0.02)]'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-[rgba(255,255,255,0.90)] font-medium text-sm md:text-base leading-snug">
          {item.q}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 flex items-center justify-center text-lg font-light transition-transform duration-300 ${
            isOpen ? 'text-[#c9a84c] rotate-45' : 'text-[rgba(255,255,255,0.40)]'
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-6 pb-5 text-[rgba(255,255,255,0.60)] text-sm leading-relaxed">
          {item.a}
        </p>
      </div>
    </div>
  )
}

export function FaqAccordion() {
  const { t } = useLanguage()
  const fp = t.pages.faq
  // Track open items: "categoryId-index"
  const [openItems, setOpenItems] = useState<Set<string>>(
    new Set(['scouting-0'])
  )
  const [query, setQuery] = useState('')

  const normalizedQuery = query.trim().toLowerCase()

  const faqData = useMemo(() => FAQ_STRUCTURE.map((s) => ({
    id: s.id,
    label: s.label,
    items: fp.questions[s.key],
  })), [fp])

  const filteredData = useMemo(() => {
    if (!normalizedQuery) return faqData
    return faqData.map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.q.toLowerCase().includes(normalizedQuery) ||
          item.a.toLowerCase().includes(normalizedQuery)
      ),
    })).filter((cat) => cat.items.length > 0)
  }, [normalizedQuery, faqData])

  function toggle(key: string) {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(key)) {
        next.delete(key)
      } else {
        next.add(key)
      }
      return next
    })
  }

  return (
    <div>
      {/* Search bar */}
      <GlassCard className="mb-12 flex items-center gap-3 px-5 py-4 focus-within:border-[rgba(201,168,76,0.50)] transition-colors border border-[rgba(255,255,255,0.08)]">
        <span className="text-[rgba(255,255,255,0.35)] text-lg">🔍</span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={fp.searchPlaceholder}
          className="flex-1 bg-transparent text-white placeholder-[rgba(255,255,255,0.35)] focus:outline-none text-sm"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="text-[rgba(255,255,255,0.30)] hover:text-white transition-colors text-lg leading-none"
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </GlassCard>

      {/* No results */}
      {filteredData.length === 0 && (
        <p className="text-center text-[rgba(255,255,255,0.40)] py-12 text-sm">
          No questions match &ldquo;{query}&rdquo;. Try different keywords.
        </p>
      )}

      {/* Categories */}
      <div className="space-y-14">
        {filteredData.map((cat, catIdx) => {
          const originalIdx = FAQ_STRUCTURE.findIndex((s) => s.id === cat.id)
          const categoryTitle = fp.categories[originalIdx] ?? cat.id
          const CategoryIcon = CATEGORY_ICONS[originalIdx]
          return (
          <AnimateOnScroll key={cat.id} delay={catIdx * 100}>
            <div>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-xs font-semibold tracking-[0.15em] gold-text"
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                >
                  {cat.label}
                </span>
                <div className="flex-1 h-px bg-[rgba(201,168,76,0.15)]" />
                {CategoryIcon && (
                  <CategoryIcon className="text-[#c9a84c]" size={20} strokeWidth={1.5} />
                )}
                <h2
                  className="text-xl md:text-2xl font-bold text-white"
                  style={{
                    fontFamily: 'var(--font-playfair), "Playfair Display", serif',
                  }}
                >
                  {categoryTitle}
                </h2>
              </div>

              {/* Accordion items */}
              <div className="space-y-3">
                {cat.items.map((item, idx) => {
                  const key = `${cat.id}-${idx}`
                  return (
                    <AccordionItem
                      key={key}
                      item={item}
                      isOpen={openItems.has(key)}
                      onToggle={() => toggle(key)}
                    />
                  )
                })}
              </div>
            </div>
          </AnimateOnScroll>
          )
        })}
      </div>
    </div>
  )
}

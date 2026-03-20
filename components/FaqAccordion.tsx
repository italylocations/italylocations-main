'use client'

import { useState, useMemo } from 'react'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { GlassCard } from '@/components/ui/GlassCard'
import { useLanguage } from '@/contexts/LanguageContext'

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

const FAQ_DATA: FaqCategory[] = [
  {
    id: 'scouting',
    label: '01',
    title: 'Location Scouting',
    items: [
      {
        q: 'How far in advance should I book?',
        a: 'For permit-required productions, contact us at least 20 working days before your shoot date. This allows time for permit processing (minimum 15 working days) plus location confirmation and logistics planning. For location-only research without permits, 7–10 working days is typically sufficient. Earlier contact always means better location selection and crew availability — we recommend reaching out as soon as you have confirmed dates.',
      },
      {
        q: 'What is included in the daily rate?',
        a: 'Our daily scouting rate covers the full day of on-location work by a dedicated scout, professional photography and video documentation of all locations visited, GPS coordinates, technical site specifications (power sources, vehicle access, sun position, nearest facilities), accessibility assessments, and a detailed written report delivered digitally within 48 hours. Travel within the agreed region is included. Extended regions or multi-day operations are quoted transparently with no hidden fees.',
      },
      {
        q: 'Do you scout locations outside your listed regions?',
        a: 'Yes. While we have particular expertise in Rome/Lazio, Tuscany, Umbria, Emilia-Romagna, Veneto, Friuli-Venezia Giulia, the Dolomites/Alps, and Sardinia, we operate throughout Italy. For regions outside our primary coverage areas, we coordinate with trusted local contacts and extend the scouting timeline accordingly. Contact us with your specific region and we will provide a tailored proposal.',
      },
      {
        q: 'Can you scout specific locations from our moodboard?',
        a: 'Absolutely — this is one of our most common briefs. Send us your reference images, moodboard, or visual brief and we will identify Italian equivalents that match your aesthetic, light conditions, and production requirements. We specialize in matching international productions with locations that replicate specific looks from fashion editorials, automotive campaigns, and feature films. We can also suggest alternatives you may not have considered.',
      },
      {
        q: 'Do you provide drone footage during scouting?',
        a: 'Yes. We coordinate drone operations through ENAC (the Italian civil aviation authority) and work with certified commercial drone pilots. Aerial footage is available as an add-on to any scouting report and provides invaluable perspective for production planning. All flights comply with Italian aviation regulations, including restricted airspace navigation, insurance requirements, and maximum altitude rules. We handle all ENAC authorizations as part of the service.',
      },
    ],
  },
  {
    id: 'permits',
    label: '02',
    title: 'Filming Permits',
    items: [
      {
        q: 'Do you handle filming permits?',
        a: 'Yes, permit acquisition is a core part of our service. We manage the complete process: identifying the correct authority (municipality, regional government, park authority, or national body), preparing and submitting all required documentation, coordinating with local offices, and following up until approval is confirmed. We handle both simple one-day permits and complex multi-location, multi-week authorizations for large productions.',
      },
      {
        q: 'How long does it take to get a permit in Italy?',
        a: 'All commercial filming in Italy requires permits with a minimum processing time of 15 working days. This is a legal minimum set by Italian authorities and cannot be shortened. Permits for protected sites, UNESCO World Heritage locations, national parks, or historically sensitive areas may require additional time — sometimes up to 30 working days. We strongly recommend contacting us at least 20–25 working days before your planned shoot to allow buffer time for any administrative delays.',
      },
      {
        q: 'What permits are required for commercial filming?',
        a: 'Required documentation typically includes: production company details and registration, comprehensive insurance certificates covering public liability and third-party damage, a full equipment list, crew identification and roles, a detailed shooting schedule, and location-specific requirements that vary by site. For public spaces, municipalities issue a COSAP (Canone Occupazione Suolo Area Pubblica) permit. Historic sites require authorization from the local Soprintendenza (heritage authority). We guide you through every step and handle all submissions on your behalf.',
      },
      {
        q: 'Can you film in national parks or UNESCO sites?',
        a: 'Yes, but these locations require specialized permits and significantly more lead time. National parks are managed by the Ente Parco and require separate authorization, often with restrictions on crew size, vehicle access, and equipment. UNESCO sites are overseen by the Soprintendenza and may involve restoration fees or usage agreements. Italy has 58 UNESCO World Heritage Sites — we have experience working within all categories. Expect 25–30 working days for these permits and budget for site usage fees that vary per location.',
      },
    ],
  },
  {
    id: 'cars',
    label: '03',
    title: 'Iconic Cars',
    items: [
      {
        q: 'Are the vehicles available for personal rental?',
        a: 'No. Our iconic cars — including the Ferrari 488 Spider, Lamborghini Gallardo, Alfa Romeo GTV 916, and Ford Mustang Fastback 1968 — are available exclusively for professional production use: commercial shoots, photo campaigns, film and TV productions, and branded content. They are not available for personal road trips or leisure rental. This policy ensures the vehicles are properly covered, professionally handled, and available for the productions that need them.',
      },
      {
        q: 'What documentation is required to book a vehicle?',
        a: 'To confirm a vehicle booking we require: a signed production agreement, proof of insurance covering the vehicle for the duration of the shoot (or confirmation that our production insurance package will be used), a shoot brief or treatment outlining intended use, and designated responsibility for a qualified production liaison on set. For shoots involving the vehicle in motion, we require details of the driver and route in advance. All paperwork is handled efficiently — most bookings are confirmed within 48 hours.',
      },
      {
        q: 'Can the vehicles be driven during the shoot?',
        a: 'Yes, with appropriate arrangements. Static display requires only standard production insurance. Dynamic shots — the vehicle in motion on public roads — require prior route approval, road closure permits where applicable, a qualified driver, and appropriate insurance endorsements. We can arrange all of this. For tracking shots, we provide or coordinate camera cars and Tilta Hydra Alien mounting systems. We have extensive experience with automotive productions on Italian roads, from urban environments to Alpine passes.',
      },
      {
        q: 'Is insurance included?',
        a: 'Basic production liability is included for static use of our vehicles on set. For dynamic use, road movement, or shoots in locations with higher risk, we offer a comprehensive production insurance package as an add-on. We strongly recommend our clients confirm their own production insurance also covers third-party vehicles. Our team will review your existing coverage and identify any gaps before the shoot date, ensuring full protection for both parties throughout the production.',
      },
    ],
  },
  {
    id: 'database',
    label: '04',
    title: 'Private Location Database',
    items: [
      {
        q: 'How does the private location database work?',
        a: 'Our private database at locations.italylocations.com contains exclusive properties — villas, castles, aristocratic residences, private estates, and unusual spaces — whose owners have agreed to make them available for professional productions under strict confidentiality terms. Access requires registration and verification as a production professional. Once approved, you can browse detailed location profiles with full photography, technical specs, and availability. Bookings are arranged directly through us, with owner anonymity protected throughout the process.',
      },
      {
        q: 'Can I visit locations before booking?',
        a: 'Yes. For serious production enquiries, we arrange pre-booking site visits with the property owner\'s permission. These visits are accompanied by a member of our team and subject to an NDA between your production company and the owner. Site visits are typically scheduled within 5–7 working days of a confirmed production interest and are included in our standard service for productions above a minimum budget threshold. Virtual tours via video call are also available for international clients.',
      },
      {
        q: 'How is owner privacy protected?',
        a: 'Owner privacy is central to how our database operates. Property addresses and owner identities are not disclosed until a booking agreement is in place. All production companies accessing the database sign a confidentiality agreement. Scouting visits are conducted under NDA. We vet every production request before granting full database access. Owners retain the right to decline any booking without explanation. This discretion is why many of Italy\'s most exclusive private properties are accessible through our network and nowhere else.',
      },
      {
        q: 'What types of properties are available?',
        a: 'The database includes: aristocratic villas and palazzo residences from the Renaissance and Baroque periods, working vineyards and agriturismo estates in Tuscany and Umbria, medieval castles and fortified towers across Central Italy, modernist and brutalist private homes, industrial spaces and former factories converted for creative use, coastal properties on the Amalfi Coast, Sardinia, and the Lazio coast, and historic apartments in Rome\'s most cinematic neighborhoods. New properties are added regularly — contact us if you have a specific type in mind and we will check current availability.',
      },
    ],
  },
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

  const filteredData = useMemo(() => {
    if (!normalizedQuery) return FAQ_DATA
    return FAQ_DATA.map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.q.toLowerCase().includes(normalizedQuery) ||
          item.a.toLowerCase().includes(normalizedQuery)
      ),
    })).filter((cat) => cat.items.length > 0)
  }, [normalizedQuery])

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
          const originalIdx = FAQ_DATA.findIndex((c) => c.id === cat.id)
          const categoryTitle = fp.categories[originalIdx] ?? cat.title
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

'use client'

import { Suspense } from 'react'
import {
  Landmark,
  Waves,
  Map,
  Globe,
  Home,
  Building2,
  CheckCircle2,
  MessageSquare,
  Search,
  FileCheck,
} from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldText } from '@/components/ui/GoldText'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { ContactFormWrapper } from '@/components/ContactFormWrapper'
import { useLanguage } from '@/contexts/LanguageContext'

const TRANSLATIONS = {
  en: {
    badge: 'NAPLES \u2022 CAMPANIA',
    h1pre: 'Location Scouting in',
    h1city: 'Naples',
    subtitle:
      'Raw energy, baroque grandeur and the world\u2019s most dramatic coastline. Naples and the Amalfi Coast offer a cinematic intensity found nowhere else in Italy.',
    whyLabel: 'WHY NAPLES',
    whyHeading: 'Pure Cinematic Intensity \u2014 On Camera',
    whatLabel: 'WHAT WE FIND FOR YOU',
    whatHeading: 'Location Types We Scout in Naples',
    whatDesc:
      'Our Naples and Amalfi Coast network spans private villa owners, historic palaces, Campania estates and coastal contacts built over years of on-the-ground work. We access locations that are never advertised publicly.',
    processLabel: 'THE PROCESS',
    processHeading: 'How It Works',
    contactLabel: 'GET IN TOUCH',
    contactHeading: 'Tell Us About Your Naples Project',
    contactSubtitle:
      "Send us your brief and we\u2019ll get back within 24 hours with location options tailored to your production.",
    waDesc: 'Need a faster response? Reach us directly on WhatsApp.',
    waBtn: 'WhatsApp Us Now',
    whyCards: [
      {
        title: 'Historic Center',
        desc: "Naples\u2019 UNESCO-listed historic centre \u2014 the Spanish Quarter, Spaccanapoli and ancient decumani \u2014 offers an unfiltered intensity that no other Italian city can match.",
      },
      {
        title: 'Amalfi Coast',
        desc: 'Cliffside villages, serpentine coastal roads and turquoise waters: the world\u2019s most photographed coastline offers cinematic drama at every turn.',
      },
      {
        title: 'Pompeii & Herculaneum',
        desc: 'Ancient ruins frozen in time offer a unique worldwide backdrop for epic productions, documentary filmmaking and high-concept advertising.',
      },
      {
        title: 'Posillipo & Marechiaro',
        desc: 'Aristocratic seafront villas, panoramic terraces and private jetties overlooking the Gulf of Naples and Vesuvius \u2014 an unparalleled setting for luxury productions.',
      },
      {
        title: 'Masserie & Countryside',
        desc: 'Traditional Campania farmhouses, rural estates and olive groves provide an authentic southern Italian backdrop far from the tourist trail.',
      },
      {
        title: 'Vesuvius & Volcanic Landscape',
        desc: 'The dramatic volcanic backdrop of Vesuvius, the Campi Flegrei and volcanic coastlines provides a cinematic intensity found nowhere else in Western Europe.',
      },
    ],
    locationTypes: [
      'UNESCO historic centre streets (Spanish Quarter, Spaccanapoli)',
      'Amalfi Coast cliffside villages and coastal roads',
      'Pompeii and Herculaneum ancient ruins (private access sessions)',
      'Posillipo seafront villas with Gulf of Naples views',
      'Panoramic terraces overlooking Vesuvius and the bay',
      'Traditional masserie and rural estates in Campania',
      'Underground Naples \u2014 ancient tunnels and cisterns',
      'Historic Bourbon palaces and noble residences',
      'Volcanic landscape and black-sand beaches',
      'Seafront properties along the Lungomare Caracciolo',
    ],
    howItWorks: [
      {
        title: 'Send us your brief',
        desc: 'Share your moodboard, shooting dates, crew size and any style references. The more detail you give us, the more precisely we can match.',
      },
      {
        title: 'We scout and present options',
        desc: 'Our team researches and visits Naples and Amalfi locations on your behalf \u2014 delivering a curated selection with high-res photos, GPS coordinates and access notes.',
      },
      {
        title: 'We handle permits and logistics',
        desc: 'From location owner agreements to municipality permits and on-site coordination, we manage the paperwork so your crew can focus on the shoot.',
      },
    ],
  },
  it: {
    badge: 'NAPOLI \u2022 CAMPANIA',
    h1pre: 'Location Scouting a',
    h1city: 'Napoli',
    subtitle:
      'Energia grezza, grandiosit\u00e0 barocca e la costiera pi\u00f9 drammatica al mondo. Napoli e la Costiera Amalfitana offrono un\u2019intensit\u00e0 cinematografica che non si trova da nessun\u2019altra parte in Italia.',
    whyLabel: 'PERCH\u00c9 NAPOLI',
    whyHeading: 'Intensit\u00e0 Cinematografica Pura \u2014 In Camera',
    whatLabel: 'COSA TROVIAMO PER TE',
    whatHeading: 'Tipologie di Location che Scouting a Napoli',
    whatDesc:
      'La nostra rete a Napoli e sulla Costiera Amalfitana comprende proprietari privati di ville, palazzi storici, tenute campane e contatti costieri costruiti in anni di lavoro sul campo. Accediamo a location che non vengono mai pubblicizzate.',
    processLabel: 'IL PROCESSO',
    processHeading: 'Come Funziona',
    contactLabel: 'CONTATTACI',
    contactHeading: 'Raccontaci il Tuo Progetto a Napoli',
    contactSubtitle:
      'Inviaci il tuo brief e ti risponderemo entro 24 ore con opzioni di location su misura per la tua produzione.',
    waDesc: 'Hai bisogno di una risposta pi\u00f9 rapida? Scrivici direttamente su WhatsApp.',
    waBtn: 'Scrivici su WhatsApp',
    whyCards: [
      {
        title: 'Centro Storico',
        desc: 'Il centro storico di Napoli patrimonio UNESCO \u2014 i Quartieri Spagnoli, Spaccanapoli e gli antichi decumani \u2014 offre un\u2019intensit\u00e0 senza filtri che nessun\u2019altra citt\u00e0 italiana pu\u00f2 eguagliare.',
      },
      {
        title: 'Costiera Amalfitana',
        desc: 'Paesi aggrappati alle scogliere, strade costiere tortuose e acque turchesi: la costiera pi\u00f9 fotografata al mondo offre dramma cinematografico ad ogni curva.',
      },
      {
        title: 'Pompei ed Ercolano',
        desc: 'Rovine antiche congelate nel tempo offrono uno sfondo unico al mondo per produzioni epiche, documentari e pubblicit\u00e0 ad alto concept.',
      },
      {
        title: 'Posillipo e Marechiaro',
        desc: 'Ville aristocratiche sul lungomare, terrazze panoramiche e pontili privati che si affacciano sul Golfo di Napoli e il Vesuvio \u2014 una location senza pari per produzioni di lusso.',
      },
      {
        title: 'Masserie e Campagna',
        desc: 'Masserie tradizionali campane, tenute rurali e uliveti offrono un\u2019autentica ambientazione del sud Italia lontana dalle rotte turistiche.',
      },
      {
        title: 'Vesuvio e Paesaggio Vulcanico',
        desc: 'Lo scenario vulcanico drammatico del Vesuvio, dei Campi Flegrei e delle coste vulcaniche offre un\u2019intensit\u00e0 cinematografica che non si trova da nessun\u2019altra parte in Europa occidentale.',
      },
    ],
    locationTypes: [
      'Strade del centro storico UNESCO (Quartieri Spagnoli, Spaccanapoli)',
      'Paesi della Costiera Amalfitana e strade costiere',
      'Rovine antiche di Pompei ed Ercolano (sessioni ad accesso privato)',
      'Ville sul lungomare di Posillipo con vista sul Golfo di Napoli',
      'Terrazze panoramiche con vista sul Vesuvio e la baia',
      'Masserie tradizionali e tenute rurali in Campania',
      'Napoli sotterranea \u2014 antichi tunnel e cisterne',
      'Palazzi borbonici storici e residenze nobiliari',
      'Paesaggio vulcanico e spiagge di sabbia nera',
      'Propriet\u00e0 sul lungomare Caracciolo',
    ],
    howItWorks: [
      {
        title: 'Inviaci il tuo brief',
        desc: 'Condividi moodboard, date di ripresa, dimensioni del crew e riferimenti stilistici. Pi\u00f9 dettagli ci fornisci, pi\u00f9 precisa sar\u00e0 la nostra selezione.',
      },
      {
        title: 'Scouting e presentazione delle opzioni',
        desc: 'Il nostro team ricerca e visita le location di Napoli e della Costiera Amalfitana per te \u2014 consegnando una selezione curata con foto ad alta risoluzione, coordinate GPS e note di accesso.',
      },
      {
        title: 'Gestione permessi e logistica',
        desc: 'Dagli accordi con i proprietari ai permessi comunali e al coordinamento in loco, gestiamo la burocrazia affinch\u00e9 il tuo crew possa concentrarsi sulle riprese.',
      },
    ],
  },
  es: {
    badge: 'N\u00c1POLES \u2022 CAMPANIA',
    h1pre: 'Location Scouting en',
    h1city: 'N\u00e1poles',
    subtitle:
      'Energ\u00eda cruda, grandiosidad barroca y la costa m\u00e1s dram\u00e1tica del mundo. N\u00e1poles y la Costa Amalfitana ofrecen una intensidad cinematogr\u00e1fica que no se encuentra en ning\u00fan otro lugar de Italia.',
    whyLabel: 'POR QU\u00c9 N\u00c1POLES',
    whyHeading: 'Intensidad Cinematogr\u00e1fica Pura \u2014 En C\u00e1mara',
    whatLabel: 'QU\u00c9 ENCONTRAMOS PARA TI',
    whatHeading: 'Tipos de Locaciones que Buscamos en N\u00e1poles',
    whatDesc:
      'Nuestra red en N\u00e1poles y la Costa Amalfitana abarca propietarios privados de villas, palacios hist\u00f3ricos, fincas campanas y contactos costeros construidos durante a\u00f1os de trabajo sobre el terreno. Accedemos a locaciones que nunca se anuncian p\u00fablicamente.',
    processLabel: 'EL PROCESO',
    processHeading: 'C\u00f3mo Funciona',
    contactLabel: 'CONT\u00c1CTANOS',
    contactHeading: 'Cu\u00e9ntanos tu Proyecto en N\u00e1poles',
    contactSubtitle:
      'Env\u00edanos tu brief y te responderemos en 24 horas con opciones de locaci\u00f3n adaptadas a tu producci\u00f3n.',
    waDesc: '\u00bfNecesitas una respuesta m\u00e1s r\u00e1pida? Escr\u00edbenos directamente por WhatsApp.',
    waBtn: 'Escr\u00edbenos por WhatsApp',
    whyCards: [
      {
        title: 'Centro Hist\u00f3rico',
        desc: 'El centro hist\u00f3rico de N\u00e1poles, patrimonio UNESCO \u2014 el barrio espa\u00f1ol, Spaccanapoli y los antiguos decumanos \u2014 ofrece una intensidad sin filtros que ninguna otra ciudad italiana puede igualar.',
      },
      {
        title: 'Costa Amalfitana',
        desc: 'Pueblos en acantilados, carreteras costeras serpenteantes y aguas turquesas: la costa m\u00e1s fotografiada del mundo ofrece drama cinematogr\u00e1fico en cada curva.',
      },
      {
        title: 'Pompeya y Herculano',
        desc: 'Ruinas antiguas congeladas en el tiempo ofrecen un tel\u00f3n de fondo \u00fanico en el mundo para producciones \u00e9picas, documentales y publicidad de alto concepto.',
      },
      {
        title: 'Posillipo y Marechiaro',
        desc: 'Villas aristocr\u00e1ticas frente al mar, terrazas panor\u00e1micas y embarcaderos privados con vistas al Golfo de N\u00e1poles y el Vesubio \u2014 un escenario sin igual para producciones de lujo.',
      },
      {
        title: 'Massar\u00edas y Campi\u00f1a',
        desc: 'Masserie campanas tradicionales, fincas rurales y olivares proporcionan un aut\u00e9ntico tel\u00f3n de fondo del sur de Italia lejos de las rutas tur\u00edsticas.',
      },
      {
        title: 'Vesubio y Paisaje Volc\u00e1nico',
        desc: 'El dram\u00e1tico tel\u00f3n de fondo volc\u00e1nico del Vesubio, los Campos Fl\u00e9greos y las costas volc\u00e1nicas proporciona una intensidad cinematogr\u00e1fica que no se encuentra en ning\u00fan otro lugar de Europa occidental.',
      },
    ],
    locationTypes: [
      'Calles del centro hist\u00f3rico UNESCO (Barrio Espa\u00f1ol, Spaccanapoli)',
      'Pueblos de la Costa Amalfitana y carreteras costeras',
      'Ruinas antiguas de Pompeya y Herculano (sesiones de acceso privado)',
      'Villas frente al mar en Posillipo con vistas al Golfo de N\u00e1poles',
      'Terrazas panor\u00e1micas con vistas al Vesubio y la bah\u00eda',
      'Masserie tradicionales y fincas rurales en Campania',
      'N\u00e1poles subterr\u00e1nea \u2014 t\u00faneles y cisternas antiguas',
      'Palacios borb\u00f3nicos hist\u00f3ricos y residencias nobiliarias',
      'Paisaje volc\u00e1nico y playas de arena negra',
      'Propiedades frente al mar en el Lungomare Caracciolo',
    ],
    howItWorks: [
      {
        title: 'Env\u00edanos tu brief',
        desc: 'Comparte tu moodboard, fechas de rodaje, tama\u00f1o del equipo y referencias de estilo. Cuantos m\u00e1s detalles nos des, m\u00e1s precisa ser\u00e1 nuestra selecci\u00f3n.',
      },
      {
        title: 'Investigamos y presentamos opciones',
        desc: 'Nuestro equipo investiga y visita las locaciones de N\u00e1poles y la Costa Amalfitana en tu nombre \u2014 entregando una selecci\u00f3n curada con fotos de alta resoluci\u00f3n, coordenadas GPS y notas de acceso.',
      },
      {
        title: 'Gestionamos permisos y log\u00edstica',
        desc: 'Desde acuerdos con propietarios hasta permisos municipales y coordinaci\u00f3n en el lugar, gestionamos el papeleo para que tu equipo pueda centrarse en el rodaje.',
      },
    ],
  },
} as const

const HOW_IT_WORKS_ICONS = [MessageSquare, Search, FileCheck]
const WHY_NAPLES_ICONS = [Landmark, Waves, Map, Globe, Home, Building2]

export function NaplesContent() {
  const { lang } = useLanguage()
  const tr = TRANSLATIONS[lang] ?? TRANSLATIONS.en

  return (
    <main className="min-h-screen pt-24 pb-20">

      {/* ── HERO ── */}
      <section className="px-6 pb-20 text-center">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-[rgba(201,168,76,0.8)] border border-[rgba(201,168,76,0.3)] rounded-full px-4 py-1.5 mb-6">
              {tr.badge}
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              {tr.h1pre}{' '}
              <GoldText as="span">{tr.h1city}</GoldText>
            </h1>
            <p className="text-[rgba(255,255,255,0.65)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {tr.subtitle}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── WHY NAPLES ── */}
      <section className="px-6 py-20 border-t border-[rgba(255,255,255,0.06)]">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="text-center mb-14">
            <SectionLabel>{tr.whyLabel}</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mt-3"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              {tr.whyHeading}
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tr.whyCards.map(({ title, desc }, i) => {
              const Icon = WHY_NAPLES_ICONS[i]
              return (
                <GlassCard key={title} className="p-6 flex flex-col gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.2)] flex items-center justify-center shrink-0">
                    <Icon className="text-[#c9a84c]" size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3
                      className="text-white font-semibold text-base mb-2"
                      style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                    >
                      {title}
                    </h3>
                    <p className="text-[rgba(255,255,255,0.55)] text-sm leading-relaxed">{desc}</p>
                  </div>
                </GlassCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── LOCATION TYPES ── */}
      <section className="px-6 py-20 border-t border-[rgba(255,255,255,0.06)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <SectionLabel>{tr.whatLabel}</SectionLabel>
              <h2
                className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6"
                style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
              >
                {tr.whatHeading}
              </h2>
              <p className="text-[rgba(255,255,255,0.55)] text-sm leading-relaxed">
                {tr.whatDesc}
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <GlassCard goldBorder className="p-8">
                <ul className="space-y-3">
                  {tr.locationTypes.map((type) => (
                    <li key={type} className="flex items-start gap-3">
                      <CheckCircle2
                        className="text-[#c9a84c] shrink-0 mt-0.5"
                        size={16}
                        strokeWidth={1.5}
                      />
                      <span className="text-[rgba(255,255,255,0.75)] text-sm">{type}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="px-6 py-20 border-t border-[rgba(255,255,255,0.06)]">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll className="text-center mb-14">
            <SectionLabel>{tr.processLabel}</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mt-3"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              {tr.processHeading}
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tr.howItWorks.map(({ title, desc }, i) => {
              const Icon = HOW_IT_WORKS_ICONS[i]
              return (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <GlassCard className="p-8 text-center h-full flex flex-col items-center gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-[rgba(201,168,76,0.10)] border border-[rgba(201,168,76,0.25)] flex items-center justify-center">
                        <Icon className="text-[#c9a84c]" size={22} strokeWidth={1.5} />
                      </div>
                      <span className="absolute -top-2 -right-2 text-[10px] font-bold text-[#c9a84c] bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.3)] rounded-full w-5 h-5 flex items-center justify-center leading-none">
                        {i + 1}
                      </span>
                    </div>
                    <h3
                      className="text-white font-semibold text-lg"
                      style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                    >
                      {title}
                    </h3>
                    <p className="text-[rgba(255,255,255,0.55)] text-sm leading-relaxed">{desc}</p>
                  </GlassCard>
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="px-6 py-20 border-t border-[rgba(255,255,255,0.06)]">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="text-center mb-14">
            <SectionLabel>{tr.contactLabel}</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mt-3"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              {tr.contactHeading}
            </h2>
            <p className="text-[rgba(255,255,255,0.55)] text-base mt-4 max-w-xl mx-auto">
              {tr.contactSubtitle}
            </p>
          </AnimateOnScroll>

          <div className="max-w-2xl mx-auto">
            <Suspense
              fallback={
                <div className="text-[rgba(255,255,255,0.40)] text-sm text-center py-8">
                  Loading form…
                </div>
              }
            >
              <ContactFormWrapper />
            </Suspense>
          </div>
        </div>
      </section>

      {/* ── WHATSAPP CTA ── */}
      <section className="px-6 pt-4 pb-12 text-center">
        <AnimateOnScroll>
          <p className="text-[rgba(255,255,255,0.45)] text-sm mb-5">{tr.waDesc}</p>
          <a
            href="https://wa.me/393895365864"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(37,211,102,0.4)] text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.544 5.877L0 24l6.266-1.519A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.032-1.384l-.361-.214-3.72.901.937-3.617-.236-.372A9.818 9.818 0 012.182 12C2.182 6.579 6.579 2.182 12 2.182S21.818 6.579 21.818 12 17.421 21.818 12 21.818z" />
            </svg>
            {tr.waBtn}
          </a>
        </AnimateOnScroll>
      </section>

    </main>
  )
}

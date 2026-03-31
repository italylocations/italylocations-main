'use client'

import { Suspense } from 'react'
import {
  Landmark,
  MapPin,
  Castle,
  Home,
  Camera,
  Globe,
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
    badge: 'FLORENCE \u2022 TUSCANY',
    h1pre: 'Location Scouting in',
    h1city: 'Florence',
    subtitle:
      'Renaissance perfection meets Tuscan countryside. Florence and its surroundings offer the most iconic Italian aesthetic for fashion, automotive and film productions.',
    whyLabel: 'WHY FLORENCE',
    whyHeading: 'Aesthetic Perfection \u2014 On Camera',
    whatLabel: 'WHAT WE FIND FOR YOU',
    whatHeading: 'Location Types We Scout in Florence',
    whatDesc:
      'Our Florence and Tuscany network spans private villa owners, noble families, agricultural estates and institutional contacts built over years of on-the-ground work. We access locations that are never advertised publicly.',
    processLabel: 'THE PROCESS',
    processHeading: 'How It Works',
    contactLabel: 'GET IN TOUCH',
    contactHeading: 'Tell Us About Your Florence Project',
    contactSubtitle:
      "Send us your brief and we\u2019ll get back within 24 hours with location options tailored to your production.",
    waDesc: 'Need a faster response? Reach us directly on WhatsApp.',
    waBtn: 'WhatsApp Us Now',
    whyCards: [
      {
        title: 'Historic Center',
        desc: 'The Duomo, Ponte Vecchio and Uffizi area form the most iconic Renaissance backdrop in existence \u2014 instantly recognisable and endlessly versatile for fashion and film.',
      },
      {
        title: 'Tuscan Countryside',
        desc: "Val d\u2019Orcia, Chianti and the classic cypress-lined roads: the quintessential Italian rural aesthetic that dominates global luxury and automotive advertising.",
      },
      {
        title: 'Noble Palaces',
        desc: 'Private historic residences with frescoed salons, stone courtyards and centuries of aristocratic history \u2014 accessible exclusively through our professional network.',
      },
      {
        title: 'Oltrarno',
        desc: "Florence\u2019s artisan quarter: craft workshops, antique studios and an authentic neighbourhood character that retains the spirit of medieval Florence.",
      },
      {
        title: 'Fashion & Editorial',
        desc: "Florence\u2019s perfect natural light, Renaissance proportions and aesthetic heritage make it the ideal city for fashion campaigns and high-end editorial productions.",
      },
      {
        title: 'Villa & Gardens',
        desc: 'Medici villas, formal Italian gardens and cypress avenues surrounding Florence \u2014 iconic settings for luxury, fashion and period productions.',
      },
    ],
    locationTypes: [
      'Historic center streets and piazzas (Duomo, Signoria area)',
      'Ponte Vecchio and Arno riverside locations',
      "Tuscan countryside with cypress roads (Val d\u2019Orcia, Chianti)",
      'Private noble palaces with frescoed interiors',
      'Oltrarno artisan workshops and medieval streets',
      'Medici villas and Italian formal gardens',
      'Fashion boutiques and concept stores',
      'Rooftop terraces overlooking the Duomo',
      'Farmhouses and agriturismo properties (Chianti, Mugello)',
      'Contemporary art spaces and converted historic buildings',
    ],
    howItWorks: [
      {
        title: 'Send us your brief',
        desc: 'Share your moodboard, shooting dates, crew size and any style references. The more detail you give us, the more precisely we can match.',
      },
      {
        title: 'We scout and present options',
        desc: 'Our team researches and visits Florence locations on your behalf \u2014 delivering a curated selection with high-res photos, GPS coordinates and access notes.',
      },
      {
        title: 'We handle permits and logistics',
        desc: 'From location owner agreements to municipality permits and on-site coordination, we manage the paperwork so your crew can focus on the shoot.',
      },
    ],
  },
  it: {
    badge: 'FIRENZE \u2022 TOSCANA',
    h1pre: 'Location Scouting a',
    h1city: 'Firenze',
    subtitle:
      'La perfezione rinascimentale incontra la campagna toscana. Firenze e dintorni offrono l\u2019estetica italiana pi\u00f9 iconica per produzioni di moda, automotive e cinematografiche.',
    whyLabel: 'PERCH\u00c9 FIRENZE',
    whyHeading: 'La Perfezione Estetica \u2014 In Camera',
    whatLabel: 'COSA TROVIAMO PER TE',
    whatHeading: 'Tipologie di Location che Scouting a Firenze',
    whatDesc:
      'La nostra rete a Firenze e in Toscana comprende proprietari privati di ville, famiglie nobiliari, tenute agricole e contatti istituzionali costruiti in anni di lavoro sul campo. Accediamo a location che non vengono mai pubblicizzate.',
    processLabel: 'IL PROCESSO',
    processHeading: 'Come Funziona',
    contactLabel: 'CONTATTACI',
    contactHeading: 'Raccontaci il Tuo Progetto a Firenze',
    contactSubtitle:
      'Inviaci il tuo brief e ti risponderemo entro 24 ore con opzioni di location su misura per la tua produzione.',
    waDesc: 'Hai bisogno di una risposta pi\u00f9 rapida? Scrivici direttamente su WhatsApp.',
    waBtn: 'Scrivici su WhatsApp',
    whyCards: [
      {
        title: 'Centro Storico',
        desc: 'Il Duomo, Ponte Vecchio e l\u2019area degli Uffizi formano lo sfondo rinascimentale pi\u00f9 iconico al mondo \u2014 immediatamente riconoscibile e infinitamente versatile per moda e cinema.',
      },
      {
        title: 'Campagna Toscana',
        desc: 'Val d\u2019Orcia, Chianti e le classiche strade fiancheggiate da cipressi: l\u2019estetica rurale italiana per eccellenza che domina la pubblicit\u00e0 globale di lusso e automotive.',
      },
      {
        title: 'Palazzi Nobiliari',
        desc: 'Residenze storiche private con saloni affrescati, cortili in pietra e secoli di storia aristocratica \u2014 accessibili esclusivamente attraverso la nostra rete professionale.',
      },
      {
        title: 'Oltrarno',
        desc: 'Il quartiere artigianale di Firenze: botteghe artigiane, studi d\u2019antiquariato e un carattere autentico di quartiere che conserva lo spirito della Firenze medievale.',
      },
      {
        title: 'Moda e Editoriale',
        desc: 'La luce naturale perfetta di Firenze, le proporzioni rinascimentali e il patrimonio estetico la rendono la citt\u00e0 ideale per campagne moda e produzioni editoriali di alta gamma.',
      },
      {
        title: 'Ville e Giardini',
        desc: 'Ville medicee, giardini all\u2019italiana formali e viali di cipressi intorno a Firenze \u2014 location iconiche per produzioni di lusso, moda e in costume.',
      },
    ],
    locationTypes: [
      'Strade e piazze del centro storico (Duomo, area della Signoria)',
      'Ponte Vecchio e location lungo l\u2019Arno',
      'Campagna toscana con strade di cipressi (Val d\u2019Orcia, Chianti)',
      'Palazzi nobiliari privati con interni affrescati',
      'Botteghe artigiane e strade medievali dell\u2019Oltrarno',
      'Ville medicee e giardini formali all\u2019italiana',
      'Boutique di moda e concept store',
      'Terrazze panoramiche con vista sul Duomo',
      'Casali e agriturismi (Chianti, Mugello)',
      'Spazi d\u2019arte contemporanea e edifici storici riconvertiti',
    ],
    howItWorks: [
      {
        title: 'Inviaci il tuo brief',
        desc: 'Condividi moodboard, date di ripresa, dimensioni del crew e riferimenti stilistici. Pi\u00f9 dettagli ci fornisci, pi\u00f9 precisa sar\u00e0 la nostra selezione.',
      },
      {
        title: 'Scouting e presentazione delle opzioni',
        desc: 'Il nostro team ricerca e visita le location di Firenze per te \u2014 consegnando una selezione curata con foto ad alta risoluzione, coordinate GPS e note di accesso.',
      },
      {
        title: 'Gestione permessi e logistica',
        desc: 'Dagli accordi con i proprietari ai permessi comunali e al coordinamento in loco, gestiamo la burocrazia affinch\u00e9 il tuo crew possa concentrarsi sulle riprese.',
      },
    ],
  },
  es: {
    badge: 'FLORENCIA \u2022 TOSCANA',
    h1pre: 'Location Scouting en',
    h1city: 'Florencia',
    subtitle:
      'La perfecci\u00f3n renacentista se encuentra con la campi\u00f1a toscana. Florencia y sus alrededores ofrecen la est\u00e9tica italiana m\u00e1s ic\u00f3nica para producciones de moda, automoci\u00f3n y cine.',
    whyLabel: 'POR QU\u00c9 FLORENCIA',
    whyHeading: 'La Perfecci\u00f3n Est\u00e9tica \u2014 En C\u00e1mara',
    whatLabel: 'QU\u00c9 ENCONTRAMOS PARA TI',
    whatHeading: 'Tipos de Locaciones que Buscamos en Florencia',
    whatDesc:
      'Nuestra red en Florencia y Toscana abarca propietarios privados de villas, familias nobles, fincas agr\u00edcolas y contactos institucionales construidos durante a\u00f1os de trabajo sobre el terreno. Accedemos a locaciones que nunca se anuncian p\u00fablicamente.',
    processLabel: 'EL PROCESO',
    processHeading: 'C\u00f3mo Funciona',
    contactLabel: 'CONT\u00c1CTANOS',
    contactHeading: 'Cu\u00e9ntanos tu Proyecto en Florencia',
    contactSubtitle:
      'Env\u00edanos tu brief y te responderemos en 24 horas con opciones de locaci\u00f3n adaptadas a tu producci\u00f3n.',
    waDesc: '\u00bfNecesitas una respuesta m\u00e1s r\u00e1pida? Escr\u00edbenos directamente por WhatsApp.',
    waBtn: 'Escr\u00edbenos por WhatsApp',
    whyCards: [
      {
        title: 'Centro Hist\u00f3rico',
        desc: 'El Duomo, el Ponte Vecchio y la zona de los Uffizi forman el tel\u00f3n de fondo renacentista m\u00e1s ic\u00f3nico del mundo \u2014 inmediatamente reconocible e infinitamente vers\u00e1til para moda y cine.',
      },
      {
        title: 'Campi\u00f1a Toscana',
        desc: "Val d\u2019Orcia, Chianti y las cl\u00e1sicas carreteras bordeadas de cipreses: la est\u00e9tica rural italiana por excelencia que domina la publicidad global de lujo y automoci\u00f3n.",
      },
      {
        title: 'Palacios Nobiliarios',
        desc: 'Residencias hist\u00f3ricas privadas con salones fresqueados, patios de piedra y siglos de historia aristocr\u00e1tica \u2014 accesibles exclusivamente a trav\u00e9s de nuestra red profesional.',
      },
      {
        title: 'Oltrarno',
        desc: 'El barrio artesanal de Florencia: talleres artesanales, estudios de antig\u00fcedades y un car\u00e1cter aut\u00e9ntico de barrio que conserva el esp\u00edritu de la Florencia medieval.',
      },
      {
        title: 'Moda y Editorial',
        desc: 'La perfecta luz natural de Florencia, las proporciones renacentistas y el patrimonio est\u00e9tico la convierten en la ciudad ideal para campa\u00f1as de moda y producciones editoriales de alto nivel.',
      },
      {
        title: 'Villas y Jardines',
        desc: 'Villas mediceas, jardines formales a la italiana y avenidas de cipreses alrededor de Florencia \u2014 escenarios ic\u00f3nicos para producciones de lujo, moda y de \u00e9poca.',
      },
    ],
    locationTypes: [
      'Calles y plazas del centro hist\u00f3rico (Duomo, \u00e1rea de la Signoria)',
      'Ponte Vecchio y ubicaciones junto al Arno',
      "Campi\u00f1a toscana con carreteras de cipreses (Val d\u2019Orcia, Chianti)",
      'Palacios nobiliarios privados con interiores fresqueados',
      'Talleres artesanales y calles medievales del Oltrarno',
      'Villas mediceas y jardines formales italianos',
      'Boutiques de moda y concept stores',
      'Terrazas panor\u00e1micas con vistas al Duomo',
      'Caser\u00edos y agriturismos (Chianti, Mugello)',
      'Espacios de arte contempor\u00e1neo y edificios hist\u00f3ricos reconvertidos',
    ],
    howItWorks: [
      {
        title: 'Env\u00edanos tu brief',
        desc: 'Comparte tu moodboard, fechas de rodaje, tama\u00f1o del equipo y referencias de estilo. Cuantos m\u00e1s detalles nos des, m\u00e1s precisa ser\u00e1 nuestra selecci\u00f3n.',
      },
      {
        title: 'Investigamos y presentamos opciones',
        desc: 'Nuestro equipo investiga y visita las locaciones de Florencia en tu nombre \u2014 entregando una selecci\u00f3n curada con fotos de alta resoluci\u00f3n, coordenadas GPS y notas de acceso.',
      },
      {
        title: 'Gestionamos permisos y log\u00edstica',
        desc: 'Desde acuerdos con propietarios hasta permisos municipales y coordinaci\u00f3n en el lugar, gestionamos el papeleo para que tu equipo pueda centrarse en el rodaje.',
      },
    ],
  },
} as const

const HOW_IT_WORKS_ICONS = [MessageSquare, Search, FileCheck]
const WHY_FLORENCE_ICONS = [Landmark, MapPin, Castle, Home, Camera, Globe]

export function FlorenceContent() {
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

      {/* ── WHY FLORENCE ── */}
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
              const Icon = WHY_FLORENCE_ICONS[i]
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

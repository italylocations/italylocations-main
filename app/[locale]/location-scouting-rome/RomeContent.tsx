'use client'

import { Suspense } from 'react'
import {
  Map,
  Landmark,
  Home,
  Building2,
  Globe,
  Castle,
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
    badge: 'ROME \u2022 ITALY',
    h1pre: 'Location Scouting in',
    h1city: 'Rome',
    subtitle:
      'The Eternal City offers an unmatched variety of filming backdrops \u2014 from ancient ruins to Renaissance palaces, Baroque fountains to modern EUR architecture.',
    whyLabel: 'WHY ROME',
    whyHeading: 'Millennia of History \u2014 On Camera',
    whatLabel: 'WHAT WE FIND FOR YOU',
    whatHeading: 'Location Types We Scout in Rome',
    whatDesc:
      'Our Rome network spans private owners, noble families, archaeological contacts and institutional partners built over years of on-the-ground work. We access locations that are never advertised publicly.',
    processLabel: 'THE PROCESS',
    processHeading: 'How It Works',
    contactLabel: 'GET IN TOUCH',
    contactHeading: 'Tell Us About Your Rome Project',
    contactSubtitle:
      "Send us your brief and we\u2019ll get back within 24 hours with location options tailored to your production.",
    waDesc: 'Need a faster response? Reach us directly on WhatsApp.',
    waBtn: 'WhatsApp Us Now',
    whyCards: [
      {
        title: 'Ancient Rome',
        desc: 'Colosseum surroundings, Appia Antica and ancient aqueducts provide a monumental backdrop found nowhere else on Earth \u2014 perfect for epic productions and luxury advertising.',
      },
      {
        title: 'Baroque & Renaissance',
        desc: 'Iconic piazzas, dramatic fountains and centuries-old churches provide Rome\u2019s most recognisable aesthetic \u2014 endlessly versatile for fashion, film and commercial productions.',
      },
      {
        title: 'Trastevere & Pigneto',
        desc: 'Authentic neighbourhood character: cobbled alleys, terracotta facades, ivy-clad walls and a cinematic atmosphere that no studio set could replicate.',
      },
      {
        title: 'EUR \u2014 Rationalist Architecture',
        desc: "Rome\u2019s modernist district features clean geometric forms, marble-clad symmetry and a surreal monumentality unique in the world \u2014 a favourite for contemporary and sci-fi productions.",
      },
      {
        title: 'Rooftop Terraces',
        desc: 'Panoramic terraces overlooking the Roman skyline \u2014 domes, bell towers and ancient roofscapes stretching to the horizon. Unmatched for luxury and fashion editorial work.',
      },
      {
        title: 'Private Palaces & Villas',
        desc: 'Historic noble residences with frescoed interiors, formal gardens and centuries of history. Accessible exclusively through our professional network \u2014 never advertised publicly.',
      },
    ],
    locationTypes: [
      'Ancient ruins and archaeological sites (private access)',
      'Baroque piazzas and fountain surroundings',
      'Trastevere and Pigneto neighbourhood streets',
      'EUR rationalist buildings and open spaces',
      'Panoramic rooftop terraces over the Roman skyline',
      'Private noble palaces and frescoed interiors',
      'Historic villas with Italian gardens',
      'Cobbled alleys and medieval courtyards',
      'Modern architecture and glass-facade offices',
      'Waterfront locations along the Tiber',
    ],
    howItWorks: [
      {
        title: 'Send us your brief',
        desc: 'Share your moodboard, shooting dates, crew size and any style references. The more detail you give us, the more precisely we can match.',
      },
      {
        title: 'We scout and present options',
        desc: 'Our team researches and visits Rome locations on your behalf \u2014 delivering a curated selection with high-res photos, GPS coordinates and access notes.',
      },
      {
        title: 'We handle permits and logistics',
        desc: 'From location owner agreements to municipality permits and on-site coordination, we manage the paperwork so your crew can focus on the shoot.',
      },
    ],
  },
  it: {
    badge: 'ROMA \u2022 ITALIA',
    h1pre: 'Location Scouting a',
    h1city: 'Roma',
    subtitle:
      'La Citt\u00e0 Eterna offre una variet\u00e0 ineguagliabile di ambientazioni cinematografiche \u2014 dalle rovine antiche ai palazzi rinascimentali, dalle fontane barocche all\u2019architettura moderna dell\u2019EUR.',
    whyLabel: 'PERCH\u00c9 ROMA',
    whyHeading: 'Millenni di Storia \u2014 In Camera',
    whatLabel: 'COSA TROVIAMO PER TE',
    whatHeading: 'Tipologie di Location che Scouting a Roma',
    whatDesc:
      'La nostra rete romana comprende proprietari privati, famiglie nobiliari, contatti archeologici e partner istituzionali costruiti in anni di lavoro sul campo. Accediamo a location che non vengono mai pubblicizzate.',
    processLabel: 'IL PROCESSO',
    processHeading: 'Come Funziona',
    contactLabel: 'CONTATTACI',
    contactHeading: 'Raccontaci il Tuo Progetto a Roma',
    contactSubtitle:
      'Inviaci il tuo brief e ti risponderemo entro 24 ore con opzioni di location su misura per la tua produzione.',
    waDesc: 'Hai bisogno di una risposta pi\u00f9 rapida? Scrivici direttamente su WhatsApp.',
    waBtn: 'Scrivici su WhatsApp',
    whyCards: [
      {
        title: 'Roma Antica',
        desc: 'I dintorni del Colosseo, l\u2019Appia Antica e gli antichi acquedotti offrono uno sfondo monumentale che non ha eguali al mondo \u2014 perfetto per produzioni epiche e pubblicit\u00e0 di lusso.',
      },
      {
        title: 'Barocco e Rinascimento',
        desc: 'Piazze iconiche, fontane drammatiche e chiese centenarie offrono l\u2019estetica pi\u00f9 riconoscibile di Roma \u2014 infinitamente versatile per moda, cinema e produzione commerciale.',
      },
      {
        title: 'Trastevere e Pigneto',
        desc: 'Carattere di quartiere autentico: vicoli acciottolati, facciate in terracotta, muri ricoperti d\u2019edera e un\u2019atmosfera cinematografica che nessun set in studio potrebbe replicare.',
      },
      {
        title: 'EUR \u2014 Architettura Razionalista',
        desc: 'Il quartiere modernista di Roma con forme geometriche pulite, simmetria rivestita in marmo e una monumentalit\u00e0 surreale unica al mondo \u2014 un favorito per produzioni contemporanee e sci-fi.',
      },
      {
        title: 'Terrazze Panoramiche',
        desc: 'Terrazze panoramiche che si affacciano sullo skyline romano \u2014 cupole, campanili e tetti antichi fino all\u2019orizzonte. Insuperabili per editoriale di lusso e moda.',
      },
      {
        title: 'Palazzi e Ville Private',
        desc: 'Residenze nobiliari storiche con interni affrescati, giardini formali e secoli di storia. Accessibili esclusivamente attraverso la nostra rete professionale \u2014 mai pubblicizzate.',
      },
    ],
    locationTypes: [
      'Rovine antiche e siti archeologici (accesso privato)',
      'Piazze barocche e dintorni delle fontane',
      'Strade dei quartieri Trastevere e Pigneto',
      'Edifici razionalisti e spazi aperti dell\u2019EUR',
      'Terrazze panoramiche sui tetti di Roma',
      'Palazzi nobiliari privati e interni affrescati',
      'Ville storiche con giardini all\u2019italiana',
      'Vicoli acciottolati e cortili medievali',
      'Architettura moderna e uffici con facciate in vetro',
      'Location sul lungofiume del Tevere',
    ],
    howItWorks: [
      {
        title: 'Inviaci il tuo brief',
        desc: 'Condividi moodboard, date di ripresa, dimensioni del crew e riferimenti stilistici. Pi\u00f9 dettagli ci fornisci, pi\u00f9 precisa sar\u00e0 la nostra selezione.',
      },
      {
        title: 'Scouting e presentazione delle opzioni',
        desc: 'Il nostro team ricerca e visita le location di Roma per te \u2014 consegnando una selezione curata con foto ad alta risoluzione, coordinate GPS e note di accesso.',
      },
      {
        title: 'Gestione permessi e logistica',
        desc: 'Dagli accordi con i proprietari ai permessi comunali e al coordinamento in loco, gestiamo la burocrazia affinch\u00e9 il tuo crew possa concentrarsi sulle riprese.',
      },
    ],
  },
  es: {
    badge: 'ROMA \u2022 ITALIA',
    h1pre: 'Location Scouting en',
    h1city: 'Roma',
    subtitle:
      'La Ciudad Eterna ofrece una variedad inigualable de escenarios cinematogr\u00e1ficos \u2014 desde ruinas antiguas hasta palacios renacentistas, desde fuentes barrocas hasta la arquitectura moderna del EUR.',
    whyLabel: 'POR QU\u00c9 ROMA',
    whyHeading: 'Milenios de Historia \u2014 En C\u00e1mara',
    whatLabel: 'QU\u00c9 ENCONTRAMOS PARA TI',
    whatHeading: 'Tipos de Locaciones que Buscamos en Roma',
    whatDesc:
      'Nuestra red en Roma abarca propietarios privados, familias nobles, contactos arqueol\u00f3gicos y socios institucionales construidos durante a\u00f1os de trabajo sobre el terreno. Accedemos a locaciones que nunca se anuncian p\u00fablicamente.',
    processLabel: 'EL PROCESO',
    processHeading: 'C\u00f3mo Funciona',
    contactLabel: 'CONT\u00c1CTANOS',
    contactHeading: 'Cu\u00e9ntanos tu Proyecto en Roma',
    contactSubtitle:
      'Env\u00edanos tu brief y te responderemos en 24 horas con opciones de locaci\u00f3n adaptadas a tu producci\u00f3n.',
    waDesc: '\u00bfNecesitas una respuesta m\u00e1s r\u00e1pida? Escr\u00edbenos directamente por WhatsApp.',
    waBtn: 'Escr\u00edbenos por WhatsApp',
    whyCards: [
      {
        title: 'Roma Antigua',
        desc: 'Los alrededores del Coliseo, la Appia Antica y los acueductos romanos ofrecen un tel\u00f3n de fondo monumental sin igual en el mundo \u2014 perfecto para producciones \u00e9picas y publicidad de lujo.',
      },
      {
        title: 'Barroco y Renacimiento',
        desc: 'Plazas ic\u00f3nicas, fuentes dram\u00e1ticas e iglesias centenarias ofrecen la est\u00e9tica m\u00e1s reconocible de Roma \u2014 infinitamente vers\u00e1til para moda, cine y producci\u00f3n comercial.',
      },
      {
        title: 'Trastevere y Pigneto',
        desc: 'Car\u00e1cter de barrio aut\u00e9ntico: callejones adoquinados, fachadas de terracota, muros cubiertos de hiedra y una atm\u00f3sfera cinematogr\u00e1fica que ning\u00fan plat\u00f3 podr\u00eda replicar.',
      },
      {
        title: 'EUR \u2014 Arquitectura Racionalista',
        desc: 'El distrito modernista de Roma ofrece formas geom\u00e9tricas limpias, simetr\u00eda revestida de m\u00e1rmol y una monumentalidad surrealista \u00fanica en el mundo \u2014 favorita para producciones contempor\u00e1neas y sci-fi.',
      },
      {
        title: 'Terrazas Panor\u00e1micas',
        desc: 'Terrazas panor\u00e1micas con vistas al skyline romano \u2014 c\u00fapulas, campanarios y tejados antiguos hasta el horizonte. Insuperables para editoriales de lujo y moda.',
      },
      {
        title: 'Palacios y Villas Privadas',
        desc: 'Residencias nobiliarias hist\u00f3ricas con interiores fresqueados, jardines formales y siglos de historia. Accesibles exclusivamente a trav\u00e9s de nuestra red profesional \u2014 nunca anunciadas p\u00fablicamente.',
      },
    ],
    locationTypes: [
      'Ruinas antiguas y sitios arqueol\u00f3gicos (acceso privado)',
      'Plazas barrocas y entornos de fuentes',
      'Calles de los barrios Trastevere y Pigneto',
      'Edificios racionalistas y espacios abiertos del EUR',
      'Terrazas panor\u00e1micas sobre el skyline de Roma',
      'Palacios nobiliarios privados e interiores fresqueados',
      'Villas hist\u00f3ricas con jardines italianos',
      'Callejones adoquinados y patios medievales',
      'Arquitectura moderna y oficinas con fachadas de cristal',
      'Ubicaciones rib\u00e4re\u00f1as a lo largo del T\u00edber',
    ],
    howItWorks: [
      {
        title: 'Env\u00edanos tu brief',
        desc: 'Comparte tu moodboard, fechas de rodaje, tama\u00f1o del equipo y referencias de estilo. Cuantos m\u00e1s detalles nos des, m\u00e1s precisa ser\u00e1 nuestra selecci\u00f3n.',
      },
      {
        title: 'Investigamos y presentamos opciones',
        desc: 'Nuestro equipo investiga y visita las locaciones de Roma en tu nombre \u2014 entregando una selecci\u00f3n curada con fotos de alta resoluci\u00f3n, coordenadas GPS y notas de acceso.',
      },
      {
        title: 'Gestionamos permisos y log\u00edstica',
        desc: 'Desde acuerdos con propietarios hasta permisos municipales y coordinaci\u00f3n en el lugar, gestionamos el papeleo para que tu equipo pueda centrarse en el rodaje.',
      },
    ],
  },
} as const

const HOW_IT_WORKS_ICONS = [MessageSquare, Search, FileCheck]
const WHY_ROME_ICONS = [Map, Landmark, Home, Building2, Globe, Castle]

export function RomeContent() {
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

      {/* ── WHY ROME ── */}
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
              const Icon = WHY_ROME_ICONS[i]
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

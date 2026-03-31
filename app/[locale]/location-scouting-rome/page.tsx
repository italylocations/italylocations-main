import type { Metadata } from 'next'
import { RomeContent } from './RomeContent'

interface Props {
  params: Promise<{ locale: string }>
}

const CANONICAL = 'https://italylocations.com/location-scouting-rome'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  if (locale === 'it') {
    return {
      title: 'Location Scouting a Roma | Film & Produzioni Commerciali | Italy Locations',
      description:
        'Servizio professionale di location scouting a Roma. Troviamo rovine antiche, palazzi nobiliari, ville storiche e spazi unici per produzioni cinematografiche, pubblicitarie e di moda.',
      keywords: 'location scouting roma, location film roma, riprese a roma, shooting commerciale roma',
      alternates: { canonical: CANONICAL },
    }
  }

  if (locale === 'es') {
    return {
      title: 'Location Scouting en Roma | Producciones Film y Comerciales | Italy Locations',
      description:
        'Servicio profesional de location scouting en Roma. Encontramos ruinas antiguas, palacios nobles, villas hist\u00f3ricas y espacios \u00fanicos para producciones de cine, publicidad y moda.',
      keywords: 'location scouting roma, locaciones film roma, rodaje en roma, shooting comercial roma',
      alternates: { canonical: CANONICAL },
    }
  }

  return {
    title: 'Location Scouting Rome | Film & Commercial Production | Italy Locations',
    description:
      'Professional location scouting service in Rome. We find ancient ruins, noble palaces, historic villas and unique spaces for film, advertising and fashion productions.',
    keywords: 'location scouting rome, film locations rome, filming in rome, commercial shoot rome',
    alternates: { canonical: CANONICAL },
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Location Scouting Rome',
  serviceType: 'Film Location Scouting',
  url: CANONICAL,
  provider: {
    '@type': 'ProfessionalService',
    name: 'Italy Locations',
    url: 'https://italylocations.com',
  },
  areaServed: {
    '@type': 'City',
    name: 'Rome',
    sameAs: 'https://www.wikidata.org/wiki/Q220',
  },
}

export default function RomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RomeContent />
    </>
  )
}

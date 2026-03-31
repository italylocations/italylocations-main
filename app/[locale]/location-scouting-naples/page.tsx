import type { Metadata } from 'next'
import { NaplesContent } from './NaplesContent'

interface Props {
  params: Promise<{ locale: string }>
}

const CANONICAL = 'https://italylocations.com/location-scouting-naples'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  if (locale === 'it') {
    return {
      title: 'Location Scouting a Napoli | Film & Produzioni Commerciali | Italy Locations',
      description:
        'Servizio professionale di location scouting a Napoli e sulla Costiera Amalfitana. Troviamo centri storici UNESCO, ville di Posillipo, masserie campane e paesaggi vulcanici per produzioni cinematografiche.',
      keywords: 'location scouting napoli, location costiera amalfitana, riprese a napoli, location film campania',
      alternates: { canonical: CANONICAL },
    }
  }

  if (locale === 'es') {
    return {
      title: 'Location Scouting en N\u00e1poles | Producciones Film y Comerciales | Italy Locations',
      description:
        'Servicio profesional de location scouting en N\u00e1poles y la Costa Amalfitana. Encontramos centros hist\u00f3ricos UNESCO, villas de Posillipo, masserie campanas y paisajes volc\u00e1nicos para producciones cinematogr\u00e1ficas.',
      keywords: 'location scouting n\u00e1poles, locaciones costa amalfitana, rodaje en n\u00e1poles, shooting comercial amalfi',
      alternates: { canonical: CANONICAL },
    }
  }

  return {
    title: 'Location Scouting Naples | Film & Commercial Production | Italy Locations',
    description:
      'Professional location scouting service in Naples and the Amalfi Coast. We find UNESCO historic centres, Posillipo villas, Campania masserie and volcanic landscapes for film and commercial productions.',
    keywords: 'location scouting naples, amalfi coast film locations, filming in naples italy, commercial shoot amalfi',
    alternates: { canonical: CANONICAL },
  }
}

export default function NaplesPage() {
  return <NaplesContent />
}

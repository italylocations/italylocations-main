import type { Metadata } from 'next'
import { MilanContent } from './MilanContent'

interface Props {
  params: Promise<{ locale: string }>
}

const CANONICAL = 'https://italylocations.com/location-scouting-milan'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  if (locale === 'it') {
    return {
      title: 'Location Scouting a Milano | Film & Produzioni Commerciali | Italy Locations',
      description:
        'Servizio professionale di location scouting a Milano. Troviamo ville esclusive, loft, palazzi e spazi unici per produzioni cinematografiche, pubblicitarie e di moda.',
      keywords: 'location scouting milano, agenzia location milano, location film milano, riprese commerciali milano',
      alternates: { canonical: CANONICAL },
    }
  }

  if (locale === 'es') {
    return {
      title: 'Location Scouting en Mil\u00e1n | Producciones Film y Comerciales | Italy Locations',
      description:
        'Servicio profesional de location scouting en Mil\u00e1n. Encontramos villas exclusivas, lofts, palacios y espacios \u00fanicos para producciones de cine, publicidad y moda.',
      keywords: 'location scouting mil\u00e1n, agencia locaciones mil\u00e1n, locaciones film mil\u00e1n, rodaje comercial mil\u00e1n',
      alternates: { canonical: CANONICAL },
    }
  }

  return {
    title: 'Location Scouting Milan | Film & Commercial Production | Italy Locations',
    description:
      'Professional location scouting service in Milan. We find exclusive villas, lofts, palaces and unique spaces for film, advertising and fashion productions.',
    keywords: 'location scouting milan, location agency milan, film locations milan, commercial shoot milan',
    alternates: { canonical: CANONICAL },
  }
}

export default function MilanPage() {
  return <MilanContent />
}

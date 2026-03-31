import type { Metadata } from 'next'
import { FlorenceContent } from './FlorenceContent'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  if (locale === 'it') {
    return {
      title: 'Location Scouting a Firenze | Film & Produzioni Commerciali | Italy Locations',
      description:
        'Servizio professionale di location scouting a Firenze e in Toscana. Troviamo palazzi storici, ville medicee, campagna toscana e spazi unici per produzioni di moda, automotive e cinema.',
      keywords: 'location scouting firenze, location film toscana, riprese a firenze, shooting moda firenze',
    }
  }

  if (locale === 'es') {
    return {
      title: 'Location Scouting en Florencia | Producciones Film y Comerciales | Italy Locations',
      description:
        'Servicio profesional de location scouting en Florencia y Toscana. Encontramos palacios hist\u00f3ricos, villas mediceas, campi\u00f1a toscana y espacios \u00fanicos para producciones de moda, automoci\u00f3n y cine.',
      keywords: 'location scouting florencia, locaciones film toscana, rodaje en florencia, shooting moda florencia',
    }
  }

  return {
    title: 'Location Scouting Florence | Film & Commercial Production | Italy Locations',
    description:
      'Professional location scouting service in Florence and Tuscany. We find historic palaces, Medici villas, Tuscan countryside and unique spaces for fashion, automotive and film productions.',
    keywords: 'location scouting florence, film locations tuscany, filming in florence italy, fashion shoot florence',
  }
}

export default function FlorencePage() {
  return <FlorenceContent />
}

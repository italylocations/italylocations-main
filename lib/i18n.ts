export type Lang = 'en' | 'it' | 'es'

const en = {
  nav: {
    locations: 'Locations',
    cars: 'Iconic Cars',
    services: 'Services',
    rates: 'Rates',
    about: 'About',
    contact: 'Contact',
    cta: 'Get a Quote',
  },
  home: {
    hero: {
      eyebrow: 'Professional Film Location Scouting',
      h1: "Discover Italy's Most Exclusive Filming Locations",
      subtitle:
        'Professional location scouting for film, advertising & photography productions across Italy.',
      cta1: 'Explore Locations',
      cta2: 'Get a Quote',
      badges: [
        '10+ Years Experience',
        '20 Italian Regions',
        'International Productions',
        'Moodboard Matching',
      ],
    },
    stats: {
      items: [
        { label: 'Italian Regions Covered' },
        { label: 'Locations Documented' },
        { label: 'Years of Experience' },
        { label: 'Starting Daily Rate' },
      ],
    },
    services: {
      label: 'OUR SERVICES',
      h2: 'Complete Production Support',
      items: [
        {
          title: 'Location Scouting',
          desc: 'We travel across Italy to find and document locations that match your exact creative brief. Every scouting delivers high-resolution photos, GPS coordinates, access notes and light condition reports.',
        },
        {
          title: 'Filming Permits',
          desc: 'Complete permit acquisition and local authority coordination — from historic centers to private estates.',
        },
        {
          title: 'Production Logistics',
          desc: 'Equipment, catering, accommodation and on-site support. Everything your crew needs, handled.',
        },
        {
          title: 'Drone Services',
          desc: 'ENAC-certified aerial photography and videography. Breathtaking perspectives from above.',
        },
      ],
      more: 'View All Services →',
    },
    regions: {
      label: 'WHERE WE OPERATE',
      h2: 'Every Corner of Italy',
      subtitle:
        "From the rolling hills of Tuscany to the dramatic Dolomites, from Rome's ancient streets to Sardinia's wild coastlines — we know every corner of Italy that makes cinema.",
      cta: 'Browse All Locations →',
    },
    pricing: {
      label: 'TRANSPARENT PRICING',
      h2: 'Clear Rates. No Surprises.',
      intro:
        'Our location scouting service means we do the legwork for you: we research, travel, photograph and document the exact locations that match your creative brief and moodboard — so your production team arrives knowing precisely where to shoot.',
      plans: [
        { title: 'Central Italy', contact: false },
        { title: 'North & South Italy', contact: false },
        { title: 'Custom Projects', contact: true },
      ],
      requestQuote: 'Request Quote',
      contactUs: 'Contact Us',
      viewFull: 'View Full Pricing →',
    },
    why: {
      label: 'WHY CHOOSE US',
      h2: 'Your Trusted Partner in Italy',
      items: [
        {
          title: 'Local Expertise',
          desc: 'Over a decade on the ground. We know the hidden access roads, the private estates, the local contacts that open doors no tourist map shows.',
        },
        {
          title: 'End-to-End Support',
          desc: 'From the first brief to the final day of shoot. Permits, logistics, crew, equipment — we handle the complexity so you focus on the creative.',
        },
        {
          title: 'International Standards',
          desc: 'We work with international crews and understand your production workflow. Fluent in English. Reports in your format.',
        },
      ],
    },
    database: {
      label: 'EXCLUSIVE',
      badge: 'NEW',
      h2: 'Private Location Database',
      subtitle:
        "Our curated database of 200+ verified private properties. Send us your creative brief and we'll handpick the perfect locations — presented in a tailored PDF proposal within 48 hours.",
      features: [
        'Curated selection based on your brief',
        'Tailored PDF proposal within 48h',
        'Full privacy — addresses never shared',
        'Locations not available on any public platform',
      ],
      cta: 'Browse Private Locations →',
    },
    owners: {
      label: 'FOR PROPERTY OWNERS',
      h2: 'Do You Have a Private Location in Italy?',
      subtitle:
        'List your property in our exclusive database and start earning from photo shoots, commercials and film productions.',
      benefits: [
        {
          title: 'Free Registration',
          desc: 'No costs, no exclusive commitment. Sign up in 5 minutes.',
        },
        {
          title: 'Guaranteed Earnings',
          desc: '€1,000 - €7,500+ per day. 100% payment in advance before the shoot.',
        },
        {
          title: 'Full Protection',
          desc: 'Mandatory damage insurance, regular contract, professional supervision.',
        },
      ],
      cta: 'Submit Your Location →',
      finePrint:
        'Private locations in Italy only · Villas, castles, farmhouses, industrial spaces and more',
    },
    cta: {
      h2: 'Ready to Shoot in Italy?',
      subtitle: "Tell us about your project and we'll find the perfect locations within 48 hours.",
      cta: 'Start Your Project →',
    },
  },
  footer: {
    tagline: 'Professional Film Location Scouting in Italy',
    rights: 'All Rights Reserved',
    links: {
      locations: ['Rome & Lazio', 'Amalfi Coast', 'Dolomites', 'Sardinia', 'All Regions'],
      services: [
        'Location Scouting',
        'Filming Permits',
        'Production Logistics',
        'Drone Services',
        'Pricing',
        'Private Database',
      ],
      legal: ['Privacy Policy', 'Cookie Policy', 'Terms of Service', 'FAQ'],
    },
  },
  pages: {
    locations: {
      label: 'OUR LOCATIONS',
      h1: 'Filming Locations Across Italy',
      subtitle: '48 curated locations documented by our scouts.',
      allFilter: 'All',
    },
    services: {
      label: 'WHAT WE OFFER',
      h1: 'Professional Location Scouting Services',
      subtitle: 'Complete production support from brief to wrap day.',
      serviceIncludes: 'Service Includes',
      ctaLabel: "LET'S WORK TOGETHER",
      ctaH2: 'Ready to Start?',
      ctaButton: 'Get in Touch →',
      serviceTitles: [
        'Location Scouting',
        'Filming Permits & Legal Compliance',
        'Production Logistics Coordination',
        'Local Crew Network Access',
        'Professional Equipment Rental',
        'Photography Studio Network',
        'Professional Drone Services',
        'Property Scouting Services',
      ],
    },
    rates: {
      label: 'PRICING',
      h1: 'Transparent Pricing for Professional Productions',
      subtitle: 'All-inclusive daily rates. No hidden fees.',
      planNames: ['Central Italy', 'Northern Italy', 'Southern Italy & Islands'],
      howToBookLabel: 'PROCESS',
      howToBookH2: 'How to Book',
      bookingSteps: [
        'Contact us with your project details and desired locations',
        'We provide a custom quote based on your specific needs',
        'Expert scout assigned to your project',
        'Receive comprehensive scouting reports and visuals',
      ],
      requestQuote: 'Request a Quote',
      ctaH2: 'Ready to Start Scouting?',
      ctaButton: 'Get Your Quote →',
    },
    about: {
      label: 'ABOUT',
      h1: 'Your Local Expert in Italy',
      subtitle: '12+ years on the ground. Fluent in English, Italian and Spanish.',
      storyLabel: 'THE STORY',
      storyH2: 'Who We Are',
      whatWeBringLabel: 'WHAT WE BRING',
      whatWeBringH2: 'The Italy Locations Difference',
      pillarTitles: [
        'Local Knowledge',
        'International Mindset',
        'Full Visual Documentation',
        'Trilingual Support',
      ],
      gearLabel: 'GEAR',
      gearH2: 'Professional Equipment',
      whyLabel: 'WHY US',
      whyH2: 'Why International Productions Choose Us',
      strengthTitles: ['No Language Barrier', 'Single Point of Contact', '12 Years of Contacts'],
      ctaLabel: 'GET IN TOUCH',
      ctaH2: "Let's Work Together",
      ctaButton: 'Get in Touch →',
    },
    contact: {
      label: 'GET IN TOUCH',
      h1: "Let's Work Together",
      subtitle: "Tell us about your project. We'll get back to you within 24 hours.",
      formTitle: 'Tell Us About Your Project',
      fields: {
        name: 'Name',
        email: 'Email',
        company: 'Company / Production House',
        projectType: 'Project Type',
        shootingDate: 'Shooting Date',
        message: 'Message',
        budget: 'Budget Range',
      },
      projectTypes: [
        'Location Scouting',
        'Iconic Cars for Production',
        'Private Location Database',
        'Filming Permits',
        'Production Logistics',
        'Other',
      ],
      sendButton: 'Send Message →',
      successMsg: "Message sent! We'll get back to you within 24 hours.",
    },
    faq: {
      label: 'FAQ',
      h1: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about our location scouting services in Italy.',
      searchPlaceholder: 'Search questions...',
      categories: [
        'Location Scouting',
        'Filming Permits',
        'Iconic Cars',
        'Private Location Database',
      ],
      ctaH2: 'Still have questions?',
      ctaContact: 'Contact Us →',
      ctaWhatsapp: 'WhatsApp →',
    },
    cars: {
      label: 'ICONIC CARS FOR PRODUCTION',
      h1: 'Iconic Cars for Film & Advertising Productions',
      bannerTitle: 'Production Use Only',
      bannerDesc:
        'These vehicles are available exclusively for professional film, advertising and photography productions. Valid production insurance and documentation required.',
      requestCta: 'Request This Vehicle →',
      finalH2: 'Interested in One of These Vehicles?',
      finalCta: 'Get in Touch →',
    },
  },
}

const it: typeof en = {
  nav: {
    locations: 'Locations',
    cars: 'Auto',
    services: 'Servizi',
    rates: 'Tariffe',
    about: 'Chi Siamo',
    contact: 'Contatti',
    cta: 'Richiedi Preventivo',
  },
  home: {
    hero: {
      eyebrow: 'Scouting Professionale di Location',
      h1: "Scopri le Location Cinematografiche Più Esclusive d'Italia",
      subtitle:
        'Scouting professionale di location per produzioni cinematografiche, pubblicitarie e fotografiche in tutta Italia.',
      cta1: 'Esplora le Location',
      cta2: 'Richiedi Preventivo',
      badges: [
        'Oltre 10 Anni di Esperienza',
        '20 Regioni Italiane',
        'Produzioni Internazionali',
        'Matching con Moodboard',
      ],
    },
    stats: {
      items: [
        { label: 'Regioni Italiane Coperte' },
        { label: 'Location Documentate' },
        { label: 'Anni di Esperienza' },
        { label: 'Tariffa Giornaliera da' },
      ],
    },
    services: {
      label: 'I NOSTRI SERVIZI',
      h2: 'Supporto Completo alla Produzione',
      items: [
        {
          title: 'Scouting Location',
          desc: "Percorriamo l'Italia per trovare e documentare location che corrispondono al tuo brief creativo. Ogni scouting include foto ad alta risoluzione, coordinate GPS, note di accesso e relazioni sulle condizioni di luce.",
        },
        {
          title: 'Permessi di Ripresa',
          desc: 'Acquisizione completa dei permessi e coordinamento con le autorità locali — dai centri storici alle proprietà private.',
        },
        {
          title: 'Logistica di Produzione',
          desc: "Attrezzatura, catering, alloggio e supporto in loco. Tutto ciò di cui ha bisogno la tua troupe, gestito da noi.",
        },
        {
          title: 'Servizi Drone',
          desc: "Fotografia e videografia aerea con piloti certificati ENAC. Prospettive mozzafiato dall'alto.",
        },
      ],
      more: 'Tutti i Servizi →',
    },
    regions: {
      label: 'DOVE OPERIAMO',
      h2: "Ogni Angolo d'Italia",
      subtitle:
        "Dalle colline della Toscana alle Dolomiti, dalle strade antiche di Roma alle coste selvagge della Sardegna — conosciamo ogni angolo d'Italia che fa cinema.",
      cta: 'Sfoglia Tutte le Location →',
    },
    pricing: {
      label: 'PREZZI TRASPARENTI',
      h2: 'Tariffe Chiare. Nessuna Sorpresa.',
      intro:
        "Il nostro servizio di location scouting significa che facciamo noi il lavoro sul campo: ricerchiamo, viaggiamo, fotografiamo e documentiamo le location esatte che corrispondono al tuo brief creativo e moodboard — così il tuo team di produzione arriva sapendo esattamente dove girare.",
      plans: [
        { title: 'Italia Centrale', contact: false },
        { title: 'Italia Nord e Sud', contact: false },
        { title: 'Progetti Su Misura', contact: true },
      ],
      requestQuote: 'Richiedi Preventivo',
      contactUs: 'Contattaci',
      viewFull: 'Vedi Tariffe Complete →',
    },
    why: {
      label: 'PERCHÉ SCEGLIERCI',
      h2: 'Il Tuo Partner di Fiducia in Italia',
      items: [
        {
          title: 'Esperienza Locale',
          desc: "Oltre un decennio sul campo. Conosciamo le strade di accesso nascoste, le proprietà private, i contatti locali che aprono porte che nessuna mappa turistica mostra.",
        },
        {
          title: 'Supporto Completo',
          desc: "Dal primo brief all'ultimo giorno di riprese. Permessi, logistica, troupe, attrezzatura — gestiamo noi la complessità perché tu possa concentrarti sul creativo.",
        },
        {
          title: 'Standard Internazionali',
          desc: 'Lavoriamo con troupe internazionali e conosciamo il tuo flusso di produzione. Fluenti in inglese. Report nel tuo formato.',
        },
      ],
    },
    database: {
      label: 'ESCLUSIVO',
      badge: 'NOVITÀ',
      h2: 'Database Location Private',
      subtitle:
        "Il nostro database curato di oltre 200 proprietà private verificate. Inviaci il tuo brief creativo e selezioneremo le location perfette — in una proposta PDF personalizzata entro 48 ore.",
      features: [
        'Selezione personalizzata in base al tuo brief',
        'Proposta PDF su misura entro 48h',
        'Totale riservatezza — indirizzi mai condivisi',
        'Location non disponibili su nessuna piattaforma pubblica',
      ],
      cta: 'Esplora le Location Private →',
    },
    owners: {
      label: 'PER I PROPRIETARI',
      h2: 'Hai una Location Privata in Italia?',
      subtitle:
        'Registra gratuitamente la tua proprietà nel nostro database riservato e inizia a guadagnare con riprese fotografiche, pubblicitarie e cinematografiche.',
      benefits: [
        {
          title: 'Registrazione Gratuita',
          desc: 'Nessun costo, nessun vincolo esclusivo. Ti registri in 5 minuti.',
        },
        {
          title: 'Guadagno Garantito',
          desc: '€1.000 - €7.500+ al giorno. Pagamento 100% anticipato prima delle riprese.',
        },
        {
          title: 'Massima Tutela',
          desc: 'Polizza danni obbligatoria, contratto regolare, supervisione professionale.',
        },
      ],
      cta: 'Proponi la Tua Location →',
      finePrint:
        'Solo location private in Italia · Ville, castelli, casali, spazi industriali e molto altro',
    },
    cta: {
      h2: 'Pronto a Girare in Italia?',
      subtitle: 'Raccontaci il tuo progetto e troveremo le location perfette entro 48 ore.',
      cta: 'Inizia il Tuo Progetto →',
    },
  },
  footer: {
    tagline: 'Scouting Professionale di Location Cinematografiche in Italia',
    rights: 'Tutti i Diritti Riservati',
    links: {
      locations: ['Roma & Lazio', 'Costiera Amalfitana', 'Dolomiti', 'Sardegna', 'Tutte le Regioni'],
      services: [
        'Location Scouting',
        'Permessi di Ripresa',
        'Logistica di Produzione',
        'Servizi Drone',
        'Tariffe',
        'Database Privato',
      ],
      legal: ['Privacy Policy', 'Cookie Policy', 'Termini di Servizio', 'FAQ'],
    },
  },
  pages: {
    locations: {
      label: 'LE NOSTRE LOCATION',
      h1: 'Location Cinematografiche in Tutta Italia',
      subtitle: '48 location selezionate e documentate dai nostri scout.',
      allFilter: 'Tutte',
    },
    services: {
      label: 'COSA OFFRIAMO',
      h1: 'Servizi Professionali di Scouting Location',
      subtitle: "Supporto completo alla produzione dal brief all'ultimo giorno.",
      serviceIncludes: 'Il Servizio Include',
      ctaLabel: 'LAVORIAMO INSIEME',
      ctaH2: 'Pronti a Iniziare?',
      ctaButton: 'Contattaci →',
      serviceTitles: [
        'Scouting Location',
        'Permessi di Ripresa e Conformità Legale',
        'Coordinamento Logistico',
        'Rete di Professionisti Locali',
        'Noleggio Attrezzatura Professionale',
        'Rete di Studi Fotografici',
        'Servizi Drone Professionali',
        'Scouting Proprietà Immobiliari',
      ],
    },
    rates: {
      label: 'TARIFFE',
      h1: 'Prezzi Trasparenti per Produzioni Professionali',
      subtitle: 'Tariffe giornaliere all-inclusive. Nessun costo nascosto.',
      planNames: ['Italia Centrale', 'Italia del Nord', 'Italia del Sud e Isole'],
      howToBookLabel: 'PROCESSO',
      howToBookH2: 'Come Prenotare',
      bookingSteps: [
        'Contattaci con i dettagli del tuo progetto e le location desiderate',
        'Ti forniamo un preventivo personalizzato in base alle tue esigenze',
        'Scout esperto assegnato al tuo progetto',
        'Ricevi report di scouting completi e documentazione visiva',
      ],
      requestQuote: 'Richiedi Preventivo',
      ctaH2: 'Pronto per Iniziare lo Scouting?',
      ctaButton: 'Richiedi Preventivo →',
    },
    about: {
      label: 'CHI SIAMO',
      h1: 'Il Tuo Esperto Locale in Italia',
      subtitle: '12+ anni sul campo. Fluente in inglese, italiano e spagnolo.',
      storyLabel: 'LA STORIA',
      storyH2: 'Chi Siamo',
      whatWeBringLabel: 'COSA PORTIAMO',
      whatWeBringH2: 'La Differenza di Italy Locations',
      pillarTitles: [
        'Conoscenza Locale',
        'Mentalità Internazionale',
        'Documentazione Visiva Completa',
        'Supporto Trilingue',
      ],
      gearLabel: 'ATTREZZATURA',
      gearH2: 'Attrezzatura Professionale',
      whyLabel: 'PERCHÉ NOI',
      whyH2: 'Perché le Produzioni Internazionali Scelgono Noi',
      strengthTitles: ['Nessuna Barriera Linguistica', 'Un Solo Referente', '12 Anni di Contatti'],
      ctaLabel: 'CONTATTACI',
      ctaH2: 'Lavoriamo Insieme',
      ctaButton: 'Contattaci →',
    },
    contact: {
      label: 'CONTATTACI',
      h1: 'Lavoriamo Insieme',
      subtitle: 'Raccontaci il tuo progetto. Ti risponderemo entro 24 ore.',
      formTitle: 'Raccontaci il Tuo Progetto',
      fields: {
        name: 'Nome',
        email: 'Email',
        company: 'Azienda / Casa di Produzione',
        projectType: 'Tipo di Progetto',
        shootingDate: 'Data delle Riprese',
        message: 'Messaggio',
        budget: 'Budget',
      },
      projectTypes: [
        'Location Scouting',
        'Auto Iconiche per Produzioni',
        'Database Location Private',
        'Permessi di Ripresa',
        'Logistica di Produzione',
        'Altro',
      ],
      sendButton: 'Invia Messaggio →',
      successMsg: 'Messaggio inviato! Ti risponderemo entro 24 ore.',
    },
    faq: {
      label: 'FAQ',
      h1: 'Domande Frequenti',
      subtitle: 'Tutto quello che devi sapere sui nostri servizi di scouting location in Italia.',
      searchPlaceholder: 'Cerca domande...',
      categories: [
        'Location Scouting',
        'Permessi di Ripresa',
        'Auto Iconiche',
        'Database Location Private',
      ],
      ctaH2: 'Hai altre domande?',
      ctaContact: 'Contattaci →',
      ctaWhatsapp: 'WhatsApp →',
    },
    cars: {
      label: 'AUTO ICONICHE PER PRODUZIONI',
      h1: 'Auto Iconiche per Produzioni Cinematografiche e Pubblicitarie',
      bannerTitle: 'Solo per Produzioni Professionali',
      bannerDesc:
        'Questi veicoli sono disponibili esclusivamente per produzioni professionali di film, pubblicità e fotografia. Richiesta documentazione di produzione e assicurazione valida.',
      requestCta: 'Richiedi Questo Veicolo →',
      finalH2: 'Interessato a Uno di Questi Veicoli?',
      finalCta: 'Contattaci →',
    },
  },
}

const es: typeof en = {
  nav: {
    locations: 'Locations',
    cars: 'Iconic Cars',
    services: 'Servicios',
    rates: 'Tarifas',
    about: 'Nosotros',
    contact: 'Contacto',
    cta: 'Solicitar Presupuesto',
  },
  home: {
    hero: {
      eyebrow: 'Scouting Profesional de Locations',
      h1: 'Descubre las Film Locations Más Exclusivas de Italia',
      subtitle:
        'Scouting profesional de locations para producciones de cine, publicidad y fotografía en toda Italia.',
      cta1: 'Explore Locations',
      cta2: 'Solicitar Presupuesto',
      badges: [
        'Más de 10 Años de Experiencia',
        '20 Regiones Italianas',
        'Producciones Internacionales',
        'Matching con Moodboard',
      ],
    },
    stats: {
      items: [
        { label: 'Regiones Italianas' },
        { label: 'Locations Documentadas' },
        { label: 'Años de Experiencia' },
        { label: 'Tarifa Diaria desde' },
      ],
    },
    services: {
      label: 'NUESTROS SERVICIOS',
      h2: 'Soporte Completo a la Producción',
      items: [
        {
          title: 'Location Scouting',
          desc: 'Recorremos Italia para encontrar y documentar locations que se ajustan a tu brief creativo. Cada scouting incluye fotos de alta resolución, coordenadas GPS, notas de acceso e informes de condiciones de luz.',
        },
        {
          title: 'Permisos de Rodaje',
          desc: 'Obtención completa de permisos y coordinación con las autoridades locales — desde centros históricos hasta fincas privadas.',
        },
        {
          title: 'Logística de Producción',
          desc: 'Equipamiento, catering, alojamiento y soporte en set. Todo lo que necesita tu equipo, gestionado por nosotros.',
        },
        {
          title: 'Servicios de Dron',
          desc: 'Fotografía y videografía aérea con pilotos certificados ENAC. Perspectivas impresionantes desde el aire.',
        },
      ],
      more: 'Ver Todos los Servicios →',
    },
    regions: {
      label: 'DÓNDE OPERAMOS',
      h2: 'Cada Rincón de Italia',
      subtitle:
        'Desde las colinas de la Toscana hasta los Dolomitas, desde las calles antiguas de Roma hasta las costas salvajes de Cerdeña — conocemos cada rincón de Italia que hace cine.',
      cta: 'Ver Todas las Locations →',
    },
    pricing: {
      label: 'PRECIOS TRANSPARENTES',
      h2: 'Tarifas Claras. Sin Sorpresas.',
      intro:
        'Nuestro servicio de location scouting significa que hacemos el trabajo de campo por ti: investigamos, viajamos, fotografiamos y documentamos las locations exactas que se ajustan a tu brief creativo y moodboard — para que tu equipo llegue al set sabiendo exactamente dónde rodar.',
      plans: [
        { title: 'Italia Central', contact: false },
        { title: 'Italia Norte y Sur', contact: false },
        { title: 'Proyectos Personalizados', contact: true },
      ],
      requestQuote: 'Solicitar Presupuesto',
      contactUs: 'Contáctenos',
      viewFull: 'Ver Tarifas Completas →',
    },
    why: {
      label: 'POR QUÉ ELEGIRNOS',
      h2: 'Tu Socio de Confianza en Italia',
      items: [
        {
          title: 'Experiencia Local',
          desc: 'Más de una década sobre el terreno. Conocemos los caminos de acceso ocultos, las fincas privadas, los contactos locales que abren puertas que ningún mapa turístico muestra.',
        },
        {
          title: 'Soporte Integral',
          desc: 'Desde el primer brief hasta el último día de rodaje. Permisos, logística, equipo, equipamiento — gestionamos la complejidad para que tú te concentres en lo creativo.',
        },
        {
          title: 'Estándares Internacionales',
          desc: 'Trabajamos con equipos internacionales y entendemos tu flujo de producción. Inglés fluido. Informes en tu formato.',
        },
      ],
    },
    database: {
      label: 'EXCLUSIVO',
      badge: 'NUEVO',
      h2: 'Base de Datos de Locations Privadas',
      subtitle:
        'Nuestra base de datos curada de más de 200 propiedades privadas verificadas. Envíanos tu brief creativo y seleccionaremos las locations perfectas — en una propuesta PDF personalizada en 48 horas.',
      features: [
        'Selección personalizada según tu brief',
        'Propuesta PDF personalizada en 48h',
        'Total privacidad — direcciones nunca compartidas',
        'Locations no disponibles en ninguna plataforma pública',
      ],
      cta: 'Explore Private Locations →',
    },
    owners: {
      label: 'PARA PROPIETARIOS',
      h2: '¿Tienes una Location Privada en Italia?',
      subtitle:
        'Registra gratuitamente tu propiedad en nuestra base de datos exclusiva y empieza a ganar con rodajes fotográficos, publicitarios y cinematográficos.',
      benefits: [
        {
          title: 'Registro Gratuito',
          desc: 'Sin costes, sin exclusividad. Registro en 5 minutos.',
        },
        {
          title: 'Ingresos Garantizados',
          desc: '€1.000 - €7.500+ al día. Pago 100% anticipado antes del rodaje.',
        },
        {
          title: 'Máxima Protección',
          desc: 'Seguro obligatorio, contrato regular, supervisión profesional.',
        },
      ],
      cta: 'Propón Tu Location →',
      finePrint:
        'Solo locations privadas en Italia · Villas, castillos, masías, espacios industriales y más',
    },
    cta: {
      h2: '¿Listo para Rodar en Italia?',
      subtitle: 'Cuéntanos tu proyecto y encontraremos las locations perfectas en 48 horas.',
      cta: 'Inicia Tu Proyecto →',
    },
  },
  footer: {
    tagline: 'Scouting Profesional de Locations Cinematográficas en Italia',
    rights: 'Todos los Derechos Reservados',
    links: {
      locations: ['Roma & Lazio', 'Costa Amalfitana', 'Dolomitas', 'Cerdeña', 'Todas las Regiones'],
      services: [
        'Location Scouting',
        'Permisos de Rodaje',
        'Logística de Producción',
        'Servicios de Dron',
        'Tarifas',
        'Base de Datos Privada',
      ],
      legal: ['Privacy Policy', 'Cookie Policy', 'Términos de Servicio', 'FAQ'],
    },
  },
  pages: {
    locations: {
      label: 'NUESTRAS LOCATIONS',
      h1: 'Film Locations en Toda Italia',
      subtitle: '48 locations seleccionadas y documentadas por nuestros scouts.',
      allFilter: 'Todas',
    },
    services: {
      label: 'LO QUE OFRECEMOS',
      h1: 'Servicios Profesionales de Location Scouting',
      subtitle: 'Soporte completo a la producción desde el brief hasta el último día.',
      serviceIncludes: 'El Servicio Incluye',
      ctaLabel: 'TRABAJEMOS JUNTOS',
      ctaH2: '¿Listos para Empezar?',
      ctaButton: 'Contáctanos →',
      serviceTitles: [
        'Location Scouting',
        'Permisos de Rodaje y Cumplimiento Legal',
        'Coordinación Logística',
        'Red de Profesionales Locales',
        'Alquiler de Equipamiento Profesional',
        'Red de Estudios Fotográficos',
        'Servicios de Dron Profesionales',
        'Scouting de Propiedades',
      ],
    },
    rates: {
      label: 'TARIFAS',
      h1: 'Precios Transparentes para Producciones Profesionales',
      subtitle: 'Tarifas diarias todo incluido. Sin costes ocultos.',
      planNames: ['Italia Central', 'Italia del Norte', 'Italia del Sur e Islas'],
      howToBookLabel: 'PROCESO',
      howToBookH2: 'Cómo Reservar',
      bookingSteps: [
        'Contáctanos con los detalles de tu proyecto y las locations deseadas',
        'Te proporcionamos un presupuesto personalizado según tus necesidades',
        'Scout experto asignado a tu proyecto',
        'Recibe informes de scouting completos y documentación visual',
      ],
      requestQuote: 'Solicitar Presupuesto',
      ctaH2: '¿Listo para Empezar el Scouting?',
      ctaButton: 'Solicita Presupuesto →',
    },
    about: {
      label: 'NOSOTROS',
      h1: 'Tu Experto Local en Italia',
      subtitle: '12+ años sobre el terreno. Fluido en inglés, italiano y español.',
      storyLabel: 'LA HISTORIA',
      storyH2: 'Quiénes Somos',
      whatWeBringLabel: 'LO QUE APORTAMOS',
      whatWeBringH2: 'La Diferencia de Italy Locations',
      pillarTitles: [
        'Conocimiento Local',
        'Mentalidad Internacional',
        'Documentación Visual Completa',
        'Soporte Trilingüe',
      ],
      gearLabel: 'EQUIPO',
      gearH2: 'Equipamiento Profesional',
      whyLabel: 'POR QUÉ NOSOTROS',
      whyH2: 'Por Qué las Producciones Internacionales nos Eligen',
      strengthTitles: [
        'Sin Barrera Lingüística',
        'Un Solo Punto de Contacto',
        '12 Años de Contactos',
      ],
      ctaLabel: 'CONTÁCTANOS',
      ctaH2: 'Trabajemos Juntos',
      ctaButton: 'Contáctanos →',
    },
    contact: {
      label: 'CONTACTO',
      h1: 'Trabajemos Juntos',
      subtitle: 'Cuéntanos tu proyecto. Te responderemos en 24 horas.',
      formTitle: 'Cuéntanos Tu Proyecto',
      fields: {
        name: 'Nombre',
        email: 'Email',
        company: 'Empresa / Productora',
        projectType: 'Tipo de Proyecto',
        shootingDate: 'Fecha de Rodaje',
        message: 'Mensaje',
        budget: 'Presupuesto',
      },
      projectTypes: [
        'Location Scouting',
        'Coches Icónicos para Producciones',
        'Base de Datos Privada',
        'Permisos de Rodaje',
        'Logística de Producción',
        'Otro',
      ],
      sendButton: 'Enviar Mensaje →',
      successMsg: '¡Mensaje enviado! Te responderemos en 24 horas.',
    },
    faq: {
      label: 'FAQ',
      h1: 'Preguntas Frecuentes',
      subtitle: 'Todo lo que necesitas saber sobre nuestros servicios de location scouting en Italia.',
      searchPlaceholder: 'Buscar preguntas...',
      categories: [
        'Location Scouting',
        'Permisos de Rodaje',
        'Coches Icónicos',
        'Base de Datos Privada',
      ],
      ctaH2: '¿Tienes más preguntas?',
      ctaContact: 'Contáctanos →',
      ctaWhatsapp: 'WhatsApp →',
    },
    cars: {
      label: 'COCHES ICÓNICOS PARA PRODUCCIONES',
      h1: 'Iconic Cars para Producciones Cinematográficas y Publicitarias',
      bannerTitle: 'Solo para Producciones Profesionales',
      bannerDesc:
        'Estos vehículos están disponibles exclusivamente para producciones profesionales de cine, publicidad y fotografía. Se requiere documentación de producción y seguro válido.',
      requestCta: 'Solicitar Este Vehículo →',
      finalH2: '¿Interesado en Uno de Estos Vehículos?',
      finalCta: 'Contáctanos →',
    },
  },
}

export const translations = { en, it, es }
export type Translations = typeof en

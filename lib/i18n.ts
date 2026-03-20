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
      ctaSubtitle: "Tell us about your project and we'll put together the right team.",
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
      serviceItems: [
        {
          subtitle: "Discover Italy's Hidden Cinematic Treasures",
          description:
            "Our expert location scouts research and identify the perfect filming locations based on your creative brief and production requirements. From Rome's iconic marble monuments to the dramatic Alpine passes and hidden coastal gems, we provide comprehensive location documentation with high-resolution photography, detailed technical specifications, and site accessibility reports.",
          includes: [
            'Detailed location research and identification',
            'Professional photo and video documentation',
            'Technical site specifications and measurements',
            'Accessibility and logistics assessments',
            'Alternative location recommendations',
            'GPS coordinates and detailed driving directions',
          ],
          note: '',
        },
        {
          subtitle: 'Navigate Italian Bureaucracy with Confidence',
          description:
            'Securing filming permits in Italy requires specialized knowledge of local regulations and bureaucratic processes. Our permit specialists handle complete permit acquisition for commercial and film productions, ensuring full compliance with Italian filming regulations and local authority requirements.',
          includes: [
            'Complete permit application processing',
            'Local authority coordination and liaison',
            'Compliance management and documentation',
            'Legal requirement guidance',
            'Timeline planning (minimum 15 working days advance notice)',
            'Permit renewal and extension services',
          ],
          note: 'All commercial filming in Italy requires proper permits. Our team ensures your production meets all legal requirements for smooth, compliant shoots.',
        },
        {
          subtitle: 'Seamless On-Site Production Support',
          description:
            'Professional production logistics coordination ensures your Italian shoot runs smoothly from pre-production through wrap. Our local expertise eliminates common production challenges and provides comprehensive on-site support for international filming teams.',
          includes: [
            'Equipment transportation and delivery coordination',
            'Professional catering arrangements',
            'Accommodation booking and management',
            'Local transportation logistics',
            'Security coordination when required',
            'Weather contingency planning',
            'Emergency contact and support services',
          ],
          note: 'Our Rome-based operations center provides 24/7 support throughout your production timeline.',
        },
        {
          subtitle: "Connect with Italy's Top Film Professionals",
          description:
            'Access our vetted network of Italian film professionals with international production experience. Our crew database includes experienced technicians who understand both Italian working methods and international production standards. All crew members are pre-screened for technical competence, international experience, and English language proficiency.',
          includes: [
            'Cinematographers and camera operators',
            'Videographers for social media content',
            'EPK and BTS specialists',
            'Lighting technicians and gaffers',
            'Makeup artists and hair stylists',
            'Set designers and scenographers',
            'Props stylists and food stylists',
            'Sound recordists and boom operators',
          ],
          note: '',
        },
        {
          subtitle: 'Professional Photography and Video Equipment',
          description:
            "Send us your equipment list for a detailed quotation. Our Rome warehouse stocks premium professional equipment for fashion campaigns, commercial shoots, and film productions, with Italy-wide delivery and optional technical support. Inventory includes Profoto flash systems, Sony mirrorless cameras, Nanlite LED systems, and underwater housing for Sony FX3.",
          includes: [
            'Profoto B1X, B3, B4 flash systems',
            'Sony mirrorless cameras and lenses',
            'Nanlite and Astera LED systems',
            'Tilta Hydra Alien car mount',
            'Underwater housing for Sony FX3',
            'DJI Osmo Pocket 3 and Insta360 X5',
            'Italy-wide delivery from Rome warehouse',
            'Optional lighting technician',
          ],
          note: '',
        },
        {
          subtitle: 'Premium White Limbo Studios Across Italy',
          description:
            "Looking for professional photography studios with white limbo backgrounds for e-commerce shoots and commercial videos? We maintain relationships with Italy's best-equipped photography studios, ensuring access to premium facilities nationwide. We handle studio booking, logistics coordination, and ensure your chosen facility meets all technical requirements.",
          includes: [
            'Professional white limbo backgrounds',
            'High-ceiling spaces for large productions',
            'Professional lighting systems installed',
            'Makeup and wardrobe areas',
            'Equipment rental available on-site',
            'Studios in Milan, Rome, Florence, Naples',
          ],
          note: '',
        },
        {
          subtitle: 'Certified Aerial Photography and Videography',
          description:
            'Capture stunning aerial footage with our certified drone pilots and professional equipment. All flights comply with Italian aviation regulations (ENAC) and include complete permit coordination for commercial aerial filming.',
          includes: [
            'ENAC-certified drone pilots',
            'Professional 4K+ drone equipment',
            'Flight permit acquisition and coordination',
            'No-fly zone navigation and compliance',
            'Insurance coverage for commercial ops',
            'Weather monitoring and flight planning',
            'Raw footage in preferred formats',
          ],
          note: '',
        },
        {
          subtitle: 'International Property Investment Support',
          description:
            'Planning to buy property in Italy while living abroad? Our property scouting services provide comprehensive property evaluation with detailed photography, aerial footage, and complete assessment reports, giving you clear insights before visiting Italy in person.',
          includes: [
            'Interior and exterior photography',
            'Professional aerial footage and overview',
            'Property condition assessment report',
            'Neighbourhood analysis and amenities',
            'Transportation and accessibility review',
            'Local market insights',
            'Video walkthrough tours',
            'Follow-up consultation',
          ],
          note: 'Make informed property decisions with professional documentation and local expertise, reducing travel costs and investment risks.',
        },
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
      ctaSubtitle: "Contact us with your brief and we'll get back to you within 24 hours.",
      dailyNote:
        'Daily rate includes 10 hours scouting + all transportation within the area + high-resolution photo and video documentation of every potential location.',
      includes: [
        '10 hours expert scouting',
        'All transportation costs',
        'High-resolution photo documentation',
        'Detailed location reports',
        'GPS coordinates & driving directions',
        'Moodboard matching',
        'Alternative options included',
      ],
      additionalServices: [
        {
          title: 'Drone Photography',
          desc: 'Aerial views and footage for a comprehensive understanding of locations. Subject to local regulations and permit requirements.',
        },
        {
          title: '360° Virtual Tours',
          desc: 'Immersive virtual tours for complete spatial understanding. Pricing based on number of locations and complexity.',
        },
        {
          title: 'Filming Permits',
          desc: 'Complete permit acquisition and local authority liaison. Included in our standard scouting consultation.',
        },
        {
          title: 'Technical Reports',
          desc: 'In-depth analysis of location feasibility for specific shooting requirements. Complexity-based pricing.',
        },
      ],
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
      ctaSubtitle: "Tell us about your project. We'll find the right locations.",
      bio: [
        'Italy Locations was founded by Nicolas Vanegas Sanchez, an Italian photographer and filmmaker of Colombian heritage who has been scouting locations across Italy since 2014.',
        'With over a decade of experience working exclusively with international productions — from advertising campaigns to documentary crews, from fashion shoots to automotive films — Nicolas built Italy Locations to solve a specific problem: international teams need someone on the ground who understands both the creative language of production and the complexity of the Italian territory.',
        'Speaking fluent English, Italian and Spanish, Nicolas bridges the gap between international creative vision and local Italian knowledge — from hidden locations no tourist map shows, to permits, logistics and local contacts built over 12 years.',
      ],
      pillarDescs: [
        "Over 12 years scouting every corner of Italy — from Rome's hidden courtyards to remote Alpine passes. We know the locations that don't appear on Google.",
        'We have worked with crews from the US, UK, Germany, France, Spain and beyond. We understand your workflow, your timeline, and your creative language.',
        'Every location is photographed professionally. You receive high-resolution images, drone footage where available, and detailed technical reports — everything you need before committing.',
        'English, Italian and Spanish. We handle all local communications, negotiations and paperwork — you focus on the creative.',
      ],
      strengthDescs: [
        'Direct communication in fluent English and Spanish. No middlemen, no misunderstandings — every brief understood exactly as intended.',
        'One person handles scouting, permits, logistics and local crew. You have one number to call for everything.',
        'Local authorities, private property owners, location managers and experienced crew — built over a decade of on-the-ground work.',
      ],
      gearNote:
        'Professional photography and video equipment available for productions requiring on-site visual documentation.',
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
      questions: {
        scouting: [
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
        permits: [
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
        cars: [
          {
            q: 'Are the vehicles available for personal rental?',
            a: 'No. Our iconic cars — including the Porsche 997 Carrera S Cabrio, Lamborghini Gallardo, Mercedes SL 350 AMG, and Porsche 997 Carrera 4S — are available exclusively for professional production use: commercial shoots, photo campaigns, film and TV productions, and branded content. They are not available for personal road trips or leisure rental. This policy ensures the vehicles are properly covered, professionally handled, and available for the productions that need them.',
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
        database: [
          {
            q: 'How does the private location database work?',
            a: "Our private database at locations.italylocations.com contains exclusive properties — villas, castles, aristocratic residences, private estates, and unusual spaces — whose owners have agreed to make them available for professional productions under strict confidentiality terms. Access requires registration and verification as a production professional. Once approved, you can browse detailed location profiles with full photography, technical specs, and availability. Bookings are arranged directly through us, with owner anonymity protected throughout the process.",
          },
          {
            q: 'Can I visit locations before booking?',
            a: "Yes. For serious production enquiries, we arrange pre-booking site visits with the property owner's permission. These visits are accompanied by a member of our team and subject to an NDA between your production company and the owner. Site visits are typically scheduled within 5–7 working days of a confirmed production interest and are included in our standard service for productions above a minimum budget threshold. Virtual tours via video call are also available for international clients.",
          },
          {
            q: 'How is owner privacy protected?',
            a: "Owner privacy is central to how our database operates. Property addresses and owner identities are not disclosed until a booking agreement is in place. All production companies accessing the database sign a confidentiality agreement. Scouting visits are conducted under NDA. We vet every production request before granting full database access. Owners retain the right to decline any booking without explanation. This discretion is why many of Italy's most exclusive private properties are accessible through our network and nowhere else.",
          },
          {
            q: 'What types of properties are available?',
            a: "The database includes: aristocratic villas and palazzo residences from the Renaissance and Baroque periods, working vineyards and agriturismo estates in Tuscany and Umbria, medieval castles and fortified towers across Central Italy, modernist and brutalist private homes, industrial spaces and former factories converted for creative use, coastal properties on the Amalfi Coast, Sardinia, and the Lazio coast, and historic apartments in Rome's most cinematic neighborhoods. New properties are added regularly — contact us if you have a specific type in mind and we will check current availability.",
          },
        ],
      },
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
      heroSubtitle:
        'A curated selection of exceptional vehicles available for photo shoots, advertising campaigns, music videos and film productions across Italy.',
      introParagraphs: [
        'Every vehicle in our fleet is available exclusively as a production prop for advertising campaigns, photo shoots, music videos and film productions. These vehicles are NOT available for rental or personal driving under any circumstances.',
        'All bookings require full production documentation, valid insurance coverage for the vehicle and professional liability. Italy Locations manages every booking directly to ensure the safety and integrity of each vehicle.',
      ],
      propOnly: 'Production Prop Only',
      processLabel: 'Process',
      processH2: 'How It Works',
      stepLabel: 'Step',
      steps: [
        {
          title: 'Send Your Brief',
          description:
            "Tell us about your production, shooting date and creative vision. Include your production insurance documentation. We'll confirm availability within 24 hours.",
        },
        {
          title: 'We Handle Everything',
          description:
            'From paperwork to on-set coordination. The vehicle arrives ready to shoot, fully prepared and insured.',
        },
        {
          title: 'Shoot with Confidence',
          description:
            'Professional support throughout the day. Insurance and logistics fully managed by our team.',
        },
      ],
      alsoLabel: 'Complete Your Production',
      alsoH2: 'Looking for the Perfect Backdrop?',
      alsoDesc:
        'Browse our 48+ scouted locations across Italy — from medieval citadels to coastal roads and mountain passes. Find the ideal setting for your vehicle shoot.',
      alsoCta: 'Explore Filming Locations →',
      finalReadyLabel: 'Ready to book?',
      finalSubtitle:
        "Contact us with your production details and insurance documentation. We'll confirm availability and terms within 24 hours.",
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
      ctaSubtitle: 'Raccontaci il tuo progetto e metteremo insieme il team giusto.',
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
      serviceItems: [
        {
          subtitle: "Scopri i Tesori Cinematografici Nascosti d'Italia",
          description:
            "I nostri esperti ricercano e identificano le location di ripresa perfette in base al tuo brief creativo e alle esigenze di produzione. Dai monumenti iconici di Roma alle drammatiche passerelle alpine e alle gemme costiere nascoste, forniamo documentazione completa con fotografia ad alta risoluzione, specifiche tecniche dettagliate e report di accessibilità.",
          includes: [
            'Ricerca e identificazione approfondita della location',
            'Documentazione fotografica e video professionale',
            'Specifiche tecniche e misurazioni del sito',
            'Valutazioni di accessibilità e logistica',
            'Raccomandazioni di location alternative',
            'Coordinate GPS e indicazioni di guida dettagliate',
          ],
          note: '',
        },
        {
          subtitle: 'Naviga la Burocrazia Italiana con Sicurezza',
          description:
            "Ottenere permessi di ripresa in Italia richiede una conoscenza specializzata delle normative locali e dei processi burocratici. I nostri specialisti gestiscono l'acquisizione completa dei permessi per produzioni commerciali e cinematografiche, garantendo la piena conformità con le normative di ripresa italiane.",
          includes: [
            'Elaborazione completa della domanda di permesso',
            'Coordinamento e collegamento con le autorità locali',
            'Gestione della conformità e documentazione',
            'Orientamento sui requisiti legali',
            'Pianificazione dei tempi (preavviso minimo 15 giorni lavorativi)',
            'Servizi di rinnovo e proroga del permesso',
          ],
          note: 'Tutte le riprese commerciali in Italia richiedono permessi appropriati. Il nostro team garantisce che la tua produzione rispetti tutti i requisiti legali per riprese regolari e conformi.',
        },
        {
          subtitle: 'Supporto Professionale In Loco',
          description:
            'Il coordinamento professionale della logistica di produzione garantisce che le riprese in Italia si svolgano senza intoppi dalla pre-produzione al wrap. La nostra esperienza locale elimina le sfide produttive comuni e fornisce supporto completo in loco per i team di ripresa internazionali.',
          includes: [
            'Coordinamento trasporto e consegna attrezzatura',
            'Organizzazione catering professionale',
            'Prenotazione e gestione alloggi',
            'Logistica dei trasporti locali',
            'Coordinamento sicurezza quando richiesto',
            'Pianificazione contingenze meteo',
            'Contatto di emergenza e servizi di supporto',
          ],
          note: 'Il nostro centro operativo a Roma fornisce supporto 24/7 durante tutta la timeline di produzione.',
        },
        {
          subtitle: 'Connettiti con i Migliori Professionisti del Cinema Italiano',
          description:
            'Accedi alla nostra rete selezionata di professionisti del cinema italiani con esperienza in produzioni internazionali. Il nostro database di professionisti include tecnici esperti che comprendono sia i metodi di lavoro italiani che gli standard di produzione internazionali. Tutti i membri del team vengono pre-selezionati per competenza tecnica, esperienza internazionale e conoscenza della lingua inglese.',
          includes: [
            'Direttori della fotografia e operatori camera',
            'Videomaker per contenuti social media',
            'Specialisti EPK e BTS',
            'Tecnici luci e gaffer',
            'Truccatori e parrucchieri',
            'Scenografi e arredatori',
            'Stilisti di oggetti di scena e food stylist',
            'Fonici e operatori di boom',
          ],
          note: '',
        },
        {
          subtitle: 'Attrezzatura Professionale per Fotografia e Video',
          description:
            "Inviaci la tua lista attrezzatura per un preventivo dettagliato. Il nostro magazzino a Roma dispone di attrezzatura professionale di alta qualità per campagne di moda, produzioni commerciali e film, con consegna in tutta Italia e supporto tecnico opzionale. L'inventario include sistemi flash Profoto, fotocamere mirrorless Sony, sistemi LED Nanlite e housing subacqueo per Sony FX3.",
          includes: [
            'Sistemi flash Profoto B1X, B3, B4',
            'Fotocamere mirrorless Sony e obiettivi',
            'Sistemi LED Nanlite e Astera',
            'Tilta Hydra Alien car mount',
            'Housing subacqueo per Sony FX3',
            'DJI Osmo Pocket 3 e Insta360 X5',
            'Consegna in tutta Italia dal magazzino di Roma',
            'Tecnico luci opzionale',
          ],
          note: '',
        },
        {
          subtitle: 'Studi Fotografici Premium con Limbo Bianco in Tutta Italia',
          description:
            "Cerchi studi fotografici professionali con fondali bianchi limbo per riprese e-commerce e video commerciali? Manteniamo rapporti con i migliori studi fotografici attrezzati in Italia, garantendo l'accesso a strutture premium in tutto il paese. Gestiamo la prenotazione degli studi, il coordinamento logistico e verifichiamo che la struttura scelta soddisfi tutti i requisiti tecnici.",
          includes: [
            'Fondali bianchi limbo professionali',
            'Spazi ad alto soffitto per grandi produzioni',
            'Sistemi di illuminazione professionale installati',
            'Aree trucco e guardaroba',
            'Noleggio attrezzatura disponibile in loco',
            'Studi a Milano, Roma, Firenze, Napoli',
          ],
          note: '',
        },
        {
          subtitle: 'Fotografia e Videografia Aerea Certificata',
          description:
            "Cattura riprese aeree mozzafiato con i nostri piloti di droni certificati e attrezzatura professionale. Tutti i voli rispettano le normative aeronautiche italiane (ENAC) e includono il coordinamento completo dei permessi per le riprese aeree commerciali.",
          includes: [
            'Piloti di droni certificati ENAC',
            'Attrezzatura drone professionale 4K+',
            'Acquisizione e coordinamento permessi di volo',
            'Navigazione e conformità zone di divieto di volo',
            'Copertura assicurativa per operazioni commerciali',
            'Monitoraggio meteo e pianificazione voli',
            'Footage grezzo nei formati preferiti',
          ],
          note: '',
        },
        {
          subtitle: 'Supporto per Investimenti Immobiliari Internazionali',
          description:
            "Stai pianificando di acquistare una proprietà in Italia dall'estero? I nostri servizi di scouting immobiliare forniscono una valutazione completa con fotografia dettagliata, riprese aeree e report di valutazione completi, dandoti informazioni chiare prima di visitare l'Italia di persona.",
          includes: [
            'Fotografia interni ed esterni',
            'Riprese aeree professionali e panoramica',
            'Report di valutazione delle condizioni della proprietà',
            'Analisi del quartiere e servizi',
            'Valutazione trasporti e accessibilità',
            'Analisi del mercato locale',
            'Tour video walkthrough',
            'Consultazione di follow-up',
          ],
          note: 'Prendi decisioni immobiliari informate con documentazione professionale e competenza locale, riducendo i costi di viaggio e i rischi di investimento.',
        },
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
      ctaSubtitle: 'Contattaci con il tuo brief e ti risponderemo entro 24 ore.',
      dailyNote:
        "La tariffa giornaliera include 10 ore di scouting + tutti i costi di trasporto nell'area + documentazione fotografica e video ad alta risoluzione di ogni potenziale location.",
      includes: [
        '10 ore di scouting esperto',
        'Tutti i costi di trasporto',
        'Documentazione fotografica ad alta risoluzione',
        'Report di location dettagliati',
        'Coordinate GPS e indicazioni stradali',
        'Matching con moodboard',
        'Opzioni alternative incluse',
      ],
      additionalServices: [
        {
          title: 'Fotografia con Drone',
          desc: "Viste aeree e riprese per una comprensione completa delle location. Soggetto a regolamenti locali e requisiti di autorizzazione.",
        },
        {
          title: 'Tour Virtuali 360°',
          desc: 'Tour virtuali immersivi per una comprensione spaziale completa. Prezzi in base al numero di location e complessità.',
        },
        {
          title: 'Permessi di Ripresa',
          desc: 'Acquisizione completa dei permessi e collegamento con le autorità locali. Incluso nella nostra consulenza standard di scouting.',
        },
        {
          title: 'Report Tecnici',
          desc: 'Analisi approfondita della fattibilità della location per specifici requisiti di ripresa. Prezzi in base alla complessità.',
        },
      ],
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
      ctaSubtitle: 'Raccontaci il tuo progetto. Troveremo le location giuste.',
      bio: [
        'Italy Locations è stata fondata da Nicolas Vanegas Sanchez, fotografo e filmmaker italiano di origini colombiane che effettua scouting di location in tutta Italia dal 2014.',
        'Con oltre un decennio di esperienza lavorando esclusivamente con produzioni internazionali — da campagne pubblicitarie a troupe documentaristiche, da shooting di moda a film automobilistici — Nicolas ha creato Italy Locations per risolvere un problema specifico: i team internazionali hanno bisogno di qualcuno sul campo che comprenda sia il linguaggio creativo della produzione che la complessità del territorio italiano.',
        'Parlando fluentemente inglese, italiano e spagnolo, Nicolas fa da ponte tra la visione creativa internazionale e la conoscenza locale italiana — dalle location nascoste che nessuna mappa turistica mostra, ai permessi, alla logistica e ai contatti locali costruiti in 12 anni.',
      ],
      pillarDescs: [
        "Oltre 12 anni a fare scouting in ogni angolo d'Italia — dai cortili nascosti di Roma ai remoti passi alpini. Conosciamo le location che non appaiono su Google.",
        'Abbiamo lavorato con troupe da USA, UK, Germania, Francia, Spagna e oltre. Comprendiamo il tuo flusso di lavoro, le tue tempistiche e il tuo linguaggio creativo.',
        'Ogni location viene fotografata professionalmente. Ricevi immagini ad alta risoluzione, riprese drone dove disponibili e report tecnici dettagliati — tutto ciò di cui hai bisogno prima di impegnarti.',
        'Inglese, italiano e spagnolo. Gestiamo tutte le comunicazioni locali, le trattative e la burocrazia — tu ti concentri sul creativo.',
      ],
      strengthDescs: [
        'Comunicazione diretta in inglese e spagnolo fluente. Nessun intermediario, nessun malinteso — ogni brief compreso esattamente come previsto.',
        'Una sola persona gestisce scouting, permessi, logistica e troupe locale. Hai un solo numero da chiamare per tutto.',
        'Autorità locali, proprietari di immobili privati, location manager e troupe esperta — costruita nel corso di un decennio di lavoro sul campo.',
      ],
      gearNote:
        'Attrezzatura professionale per fotografia e video disponibile per produzioni che richiedono documentazione visiva in loco.',
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
      questions: {
        scouting: [
          {
            q: 'Con quanto anticipo devo prenotare?',
            a: 'Per produzioni che richiedono permessi, contattaci almeno 20 giorni lavorativi prima della data delle riprese. Questo consente il tempo per l\'elaborazione dei permessi (minimo 15 giorni lavorativi) più la conferma della location e la pianificazione logistica. Per ricerche solo di location senza permessi, 7–10 giorni lavorativi sono in genere sufficienti. Contattarci prima significa sempre una migliore selezione di location e disponibilità del team — ti consigliamo di farlo appena hai date confermate.',
          },
          {
            q: 'Cosa è incluso nella tariffa giornaliera?',
            a: 'La nostra tariffa giornaliera di scouting copre l\'intera giornata di lavoro in loco da parte di uno scout dedicato, fotografia e video professionale di tutte le location visitate, coordinate GPS, specifiche tecniche del sito (fonti di alimentazione, accesso veicoli, posizione del sole, strutture più vicine), valutazioni dell\'accessibilità e un report scritto dettagliato consegnato digitalmente entro 48 ore. I viaggi all\'interno della regione concordata sono inclusi. Regioni estese o operazioni multi-giorno vengono quotate in modo trasparente senza costi nascosti.',
          },
          {
            q: 'Fate scouting in location al di fuori delle vostre regioni elencate?',
            a: "Sì. Sebbene abbiamo particolare esperienza a Roma/Lazio, Toscana, Umbria, Emilia-Romagna, Veneto, Friuli-Venezia Giulia, Dolomiti/Alpi e Sardegna, operiamo in tutta Italia. Per le regioni al di fuori delle nostre aree di copertura principale, ci coordiniamo con contatti locali di fiducia ed estendiamo i tempi di scouting di conseguenza. Contattaci con la tua regione specifica e ti forniremo una proposta su misura.",
          },
          {
            q: 'Potete cercare location specifiche dal nostro moodboard?',
            a: "Assolutamente — questo è uno dei nostri brief più comuni. Inviaci le tue immagini di riferimento, moodboard o brief visivo e identificheremo gli equivalenti italiani che corrispondono alla tua estetica, alle condizioni di luce e ai requisiti di produzione. Siamo specializzati nel trovare per le produzioni internazionali location che replicano look specifici da editoriali di moda, campagne automotive e film. Possiamo anche suggerire alternative che potresti non aver considerato.",
          },
          {
            q: 'Fornite riprese drone durante lo scouting?',
            a: "Sì. Coordiniamo le operazioni drone tramite ENAC (l'ente italiano per l'aviazione civile) e lavoriamo con piloti drone commerciali certificati. Le riprese aeree sono disponibili come add-on a qualsiasi report di scouting e offrono una prospettiva preziosa per la pianificazione della produzione. Tutti i voli rispettano le normative aeronautiche italiane, inclusa la navigazione nello spazio aereo limitato, i requisiti assicurativi e le regole di altitudine massima. Gestiamo tutte le autorizzazioni ENAC come parte del servizio.",
          },
        ],
        permits: [
          {
            q: 'Gestite i permessi di ripresa?',
            a: "Sì, l'acquisizione dei permessi è una parte fondamentale del nostro servizio. Gestiamo l'intero processo: identificare l'autorità competente (comune, governo regionale, ente parco o organo nazionale), preparare e presentare tutta la documentazione richiesta, coordinarci con gli uffici locali e seguire la pratica fino alla conferma dell'approvazione. Gestiamo sia semplici permessi di un giorno che complesse autorizzazioni multi-location e multi-settimana per grandi produzioni.",
          },
          {
            q: 'Quanto tempo ci vuole per ottenere un permesso in Italia?',
            a: "Tutte le riprese commerciali in Italia richiedono permessi con un tempo minimo di elaborazione di 15 giorni lavorativi. Questo è un minimo legale stabilito dalle autorità italiane e non può essere abbreviato. I permessi per siti protetti, patrimoni UNESCO, parchi nazionali o aree storicamente sensibili possono richiedere tempo aggiuntivo — a volte fino a 30 giorni lavorativi. Raccomandiamo vivamente di contattarci almeno 20–25 giorni lavorativi prima delle riprese previste per avere un margine per eventuali ritardi amministrativi.",
          },
          {
            q: 'Quali permessi sono richiesti per le riprese commerciali?',
            a: "La documentazione richiesta include generalmente: dettagli e registrazione della società di produzione, certificati assicurativi completi che coprono la responsabilità civile e i danni a terzi, una lista completa delle attrezzature, identificazione e ruoli del cast e della troupe, un calendario dettagliato delle riprese e requisiti specifici della location che variano per sito. Per gli spazi pubblici, i comuni rilasciano un permesso COSAP (Canone Occupazione Suolo Area Pubblica). I siti storici richiedono l'autorizzazione della Soprintendenza locale. Ti guidiamo in ogni passaggio e gestiamo tutte le pratiche per tuo conto.",
          },
          {
            q: 'È possibile girare nei parchi nazionali o nei siti UNESCO?',
            a: "Sì, ma queste location richiedono permessi specializzati e tempi di anticipo significativamente maggiori. I parchi nazionali sono gestiti dall'Ente Parco e richiedono autorizzazioni separate, spesso con limitazioni sul numero della troupe, accesso dei veicoli e attrezzatura. I siti UNESCO sono supervisionati dalla Soprintendenza e possono comportare contributi per il restauro o accordi di utilizzo. L'Italia conta 58 siti patrimonio UNESCO — abbiamo esperienza con tutte le categorie. Prevedete 25–30 giorni lavorativi per questi permessi e un budget per le tariffe d'uso del sito che variano per location.",
          },
        ],
        cars: [
          {
            q: 'I veicoli sono disponibili per il noleggio personale?',
            a: "No. Le nostre auto iconiche — tra cui la Porsche 997 Carrera S Cabrio, la Lamborghini Gallardo, la Mercedes SL 350 AMG e la Porsche 997 Carrera 4S — sono disponibili esclusivamente per uso professionale in produzione: shooting commerciali, campagne fotografiche, produzioni cinematografiche e televisive e branded content. Non sono disponibili per viaggi personali o noleggio ricreativo. Questa politica garantisce che i veicoli siano adeguatamente coperti, gestiti professionalmente e disponibili per le produzioni che ne hanno bisogno.",
          },
          {
            q: 'Quale documentazione è necessaria per prenotare un veicolo?',
            a: "Per confermare la prenotazione di un veicolo sono necessari: un accordo di produzione firmato, prova assicurativa che copra il veicolo per la durata dello shooting (o conferma che verrà utilizzato il nostro pacchetto assicurativo di produzione), un brief o trattamento dello shooting che delinei l'utilizzo previsto e la responsabilità designata di un referente di produzione qualificato sul set. Per gli shooting che prevedono il veicolo in movimento, richiediamo i dettagli del conducente e del percorso in anticipo. Tutta la documentazione viene gestita in modo efficiente — la maggior parte delle prenotazioni viene confermata entro 48 ore.",
          },
          {
            q: 'I veicoli possono essere guidati durante lo shooting?',
            a: "Sì, con le opportune disposizioni. L'esposizione statica richiede solo la normale assicurazione di produzione. Le riprese dinamiche — il veicolo in movimento su strade pubbliche — richiedono approvazione preventiva del percorso, permessi di chiusura stradale dove applicabile, un conducente qualificato e le appropriate garanzie assicurative. Possiamo organizzare tutto questo. Per le riprese in movimento, forniamo o coordiniamo auto camera e sistemi di montaggio Tilta Hydra Alien. Abbiamo grande esperienza con le produzioni automotive sulle strade italiane, dagli ambienti urbani ai passi alpini.",
          },
          {
            q: "L'assicurazione è inclusa?",
            a: "La responsabilità civile di base è inclusa per l'uso statico dei nostri veicoli sul set. Per l'uso dinamico, il movimento su strada o gli shooting in location ad alto rischio, offriamo un pacchetto assicurativo di produzione completo come add-on. Raccomandiamo vivamente ai nostri clienti di verificare che la propria assicurazione di produzione copra anche i veicoli di terzi. Il nostro team esaminerà la tua copertura esistente e identificherà eventuali lacune prima della data di ripresa, garantendo la piena protezione di entrambe le parti durante tutta la produzione.",
          },
        ],
        database: [
          {
            q: 'Come funziona il database privato di location?',
            a: "Il nostro database privato su locations.italylocations.com contiene proprietà esclusive — ville, castelli, residenze aristocratiche, tenute private e spazi insoliti — i cui proprietari hanno accettato di renderle disponibili per produzioni professionali in condizioni di stretta riservatezza. L'accesso richiede la registrazione e la verifica come professionista della produzione. Una volta approvato, puoi sfogliare profili dettagliati delle location con fotografia completa, specifiche tecniche e disponibilità. Le prenotazioni vengono gestite direttamente tramite noi, con l'anonimato del proprietario protetto durante tutto il processo.",
          },
          {
            q: 'Posso visitare le location prima della prenotazione?',
            a: "Sì. Per le richieste di produzione serie, organizziamo visite pre-prenotazione con il permesso del proprietario dell'immobile. Queste visite sono accompagnate da un membro del nostro team e soggette a un NDA tra la tua società di produzione e il proprietario. Le visite in loco sono in genere programmate entro 5–7 giorni lavorativi da un interesse di produzione confermato e sono incluse nel nostro servizio standard per produzioni oltre una soglia minima di budget. I tour virtuali tramite videochiamata sono disponibili anche per i clienti internazionali.",
          },
          {
            q: 'Come viene protetta la privacy dei proprietari?',
            a: "La privacy dei proprietari è centrale nel funzionamento del nostro database. Gli indirizzi delle proprietà e le identità dei proprietari non vengono divulgati fino a quando non è stato siglato un accordo di prenotazione. Tutte le società di produzione che accedono al database firmano un accordo di riservatezza. Le visite di scouting vengono condotte sotto NDA. Verifichiamo ogni richiesta di produzione prima di concedere l'accesso completo al database. I proprietari conservano il diritto di rifiutare qualsiasi prenotazione senza fornire spiegazioni. Questa discrezione è il motivo per cui molte delle proprietà private più esclusive d'Italia sono accessibili attraverso la nostra rete e da nessun'altra parte.",
          },
          {
            q: 'Che tipo di proprietà sono disponibili?',
            a: "Il database include: ville aristocratiche e residenze palaziali dei periodi rinascimentale e barocco, aziende vitivinicole e tenute agrituristiche in Toscana e Umbria, castelli medievali e torri fortificate in tutta l'Italia centrale, abitazioni private moderniste e brutaliste, spazi industriali ed ex fabbriche convertite per uso creativo, proprietà costiere sulla Costiera Amalfitana, in Sardegna e sulla costa laziale, e appartamenti storici nei quartieri più cinematografici di Roma. Nuove proprietà vengono aggiunte regolarmente — contattaci se hai in mente un tipo specifico e verificheremo la disponibilità attuale.",
          },
        ],
      },
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
      heroSubtitle:
        'Una selezione curata di veicoli eccezionali disponibili per shooting fotografici, campagne pubblicitarie, video musicali e produzioni cinematografiche in tutta Italia.',
      introParagraphs: [
        'Ogni veicolo della nostra flotta è disponibile esclusivamente come prop di produzione per campagne pubblicitarie, shooting fotografici, video musicali e produzioni cinematografiche. Questi veicoli NON sono disponibili per noleggio o guida personale in nessuna circostanza.',
        'Tutte le prenotazioni richiedono documentazione di produzione completa, copertura assicurativa valida per il veicolo e responsabilità civile professionale. Italy Locations gestisce ogni prenotazione direttamente per garantire la sicurezza e l\'integrità di ogni veicolo.',
      ],
      propOnly: 'Solo Uso Produzione',
      processLabel: 'Processo',
      processH2: 'Come Funziona',
      stepLabel: 'Passo',
      steps: [
        {
          title: 'Invia il Tuo Brief',
          description:
            "Raccontaci la tua produzione, la data delle riprese e la tua visione creativa. Includi la documentazione assicurativa di produzione. Confermeremo la disponibilità entro 24 ore.",
        },
        {
          title: 'Pensiamo a Tutto Noi',
          description:
            'Dalla burocrazia al coordinamento sul set. Il veicolo arriva pronto per le riprese, completamente preparato e assicurato.',
        },
        {
          title: 'Gira con Fiducia',
          description:
            'Supporto professionale per tutta la giornata. Assicurazione e logistica interamente gestite dal nostro team.',
        },
      ],
      alsoLabel: 'Completa la Tua Produzione',
      alsoH2: 'Cerchi la Location Perfetta?',
      alsoDesc:
        'Sfoglia le nostre 48+ location scoutate in tutta Italia — dalle cittadelle medievali alle strade costiere e ai passi di montagna. Trova l\'ambientazione ideale per il tuo shooting automobilistico.',
      alsoCta: 'Esplora le Location →',
      finalReadyLabel: 'Pronti a prenotare?',
      finalSubtitle:
        "Contattaci con i dettagli della tua produzione e la documentazione assicurativa. Confermeremo disponibilità e condizioni entro 24 ore.",
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
      ctaSubtitle: 'Cuéntanos tu proyecto y formaremos el equipo adecuado.',
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
      serviceItems: [
        {
          subtitle: 'Descubre los Tesoros Cinematográficos Ocultos de Italia',
          description:
            'Nuestros scouts expertos investigan e identifican las locations de rodaje perfectas según tu brief creativo y los requisitos de producción. Desde los monumentos de mármol de Roma hasta los dramáticos pasos alpinos y las gemas costeras ocultas, proporcionamos documentación completa con fotografía de alta resolución, especificaciones técnicas detalladas e informes de accesibilidad.',
          includes: [
            'Investigación e identificación detallada de la location',
            'Documentación fotográfica y de video profesional',
            'Especificaciones técnicas y mediciones del lugar',
            'Evaluaciones de accesibilidad y logística',
            'Recomendaciones de locations alternativas',
            'Coordenadas GPS e indicaciones de conducción detalladas',
          ],
          note: '',
        },
        {
          subtitle: 'Navega la Burocracia Italiana con Confianza',
          description:
            'Obtener permisos de rodaje en Italia requiere un conocimiento especializado de las regulaciones locales y los procesos burocráticos. Nuestros especialistas en permisos gestionan la obtención completa de permisos para producciones comerciales y cinematográficas, garantizando el pleno cumplimiento de las normativas de rodaje italianas.',
          includes: [
            'Tramitación completa de solicitudes de permiso',
            'Coordinación y enlace con las autoridades locales',
            'Gestión del cumplimiento y documentación',
            'Orientación sobre requisitos legales',
            'Planificación de plazos (aviso mínimo de 15 días laborables)',
            'Servicios de renovación y prórroga de permisos',
          ],
          note: 'Todo rodaje comercial en Italia requiere los permisos adecuados. Nuestro equipo garantiza que tu producción cumpla todos los requisitos legales para rodajes sin problemas.',
        },
        {
          subtitle: 'Soporte Profesional en Set sin Interrupciones',
          description:
            'La coordinación logística profesional garantiza que tu rodaje en Italia transcurra sin problemas desde la preproducción hasta el wrap. Nuestra experiencia local elimina los desafíos habituales de producción y proporciona soporte integral en set para equipos de rodaje internacionales.',
          includes: [
            'Coordinación de transporte y entrega de equipamiento',
            'Organización de catering profesional',
            'Reserva y gestión de alojamiento',
            'Logística de transporte local',
            'Coordinación de seguridad cuando sea necesario',
            'Planificación de contingencias meteorológicas',
            'Contacto de emergencia y servicios de apoyo',
          ],
          note: 'Nuestro centro de operaciones en Roma proporciona soporte 24/7 durante toda la línea de tiempo de tu producción.',
        },
        {
          subtitle: 'Conecta con los Mejores Profesionales del Cine Italiano',
          description:
            'Accede a nuestra red seleccionada de profesionales del cine italiano con experiencia en producciones internacionales. Nuestra base de datos de profesionales incluye técnicos experimentados que comprenden tanto los métodos de trabajo italianos como los estándares de producción internacionales. Todos los miembros del equipo son preseleccionados por competencia técnica, experiencia internacional y dominio del inglés.',
          includes: [
            'Directores de fotografía y operadores de cámara',
            'Videógrafos para contenido en redes sociales',
            'Especialistas en EPK y BTS',
            'Técnicos de iluminación y gaffers',
            'Maquilladores y estilistas de cabello',
            'Directores de arte y escenógrafos',
            'Estilistas de atrezzo y food stylists',
            'Técnicos de sonido y operadores de boom',
          ],
          note: '',
        },
        {
          subtitle: 'Equipamiento Profesional de Fotografía y Video',
          description:
            'Envíanos tu lista de equipamiento para un presupuesto detallado. Nuestro almacén en Roma dispone de equipamiento profesional premium para campañas de moda, rodajes comerciales y producciones cinematográficas, con entrega en toda Italia y soporte técnico opcional. El inventario incluye sistemas de flash Profoto, cámaras mirrorless Sony, sistemas LED Nanlite y housing subacuático para Sony FX3.',
          includes: [
            'Sistemas de flash Profoto B1X, B3, B4',
            'Cámaras mirrorless Sony y objetivos',
            'Sistemas LED Nanlite y Astera',
            'Tilta Hydra Alien car mount',
            'Housing subacuático para Sony FX3',
            'DJI Osmo Pocket 3 e Insta360 X5',
            'Entrega en toda Italia desde almacén en Roma',
            'Técnico de iluminación opcional',
          ],
          note: '',
        },
        {
          subtitle: 'Estudios Fotográficos Premium con Fondo Blanco en Toda Italia',
          description:
            '¿Buscas estudios fotográficos profesionales con fondos blancos para rodajes de e-commerce y videos comerciales? Mantenemos relaciones con los estudios fotográficos mejor equipados de Italia, garantizando acceso a instalaciones premium en todo el país. Gestionamos la reserva del estudio, la coordinación logística y verificamos que la instalación elegida cumpla todos los requisitos técnicos.',
          includes: [
            'Fondos blancos profesionales',
            'Espacios de gran altura para grandes producciones',
            'Sistemas de iluminación profesional instalados',
            'Zonas de maquillaje y vestuario',
            'Alquiler de equipamiento disponible en el lugar',
            'Estudios en Milán, Roma, Florencia, Nápoles',
          ],
          note: '',
        },
        {
          subtitle: 'Fotografía y Videografía Aérea Certificada',
          description:
            'Captura imágenes aéreas impresionantes con nuestros pilotos de drones certificados y equipamiento profesional. Todos los vuelos cumplen con las regulaciones de aviación italianas (ENAC) e incluyen coordinación completa de permisos para rodajes aéreos comerciales.',
          includes: [
            'Pilotos de drones certificados ENAC',
            'Equipamiento de dron profesional 4K+',
            'Obtención y coordinación de permisos de vuelo',
            'Navegación y cumplimiento de zonas de exclusión aérea',
            'Cobertura de seguro para operaciones comerciales',
            'Monitorización meteorológica y planificación de vuelos',
            'Footage en bruto en los formatos preferidos',
          ],
          note: '',
        },
        {
          subtitle: 'Soporte para Inversión Inmobiliaria Internacional',
          description:
            '¿Planeas comprar una propiedad en Italia desde el extranjero? Nuestros servicios de scouting inmobiliario proporcionan una evaluación integral con fotografía detallada, imágenes aéreas e informes de evaluación completos, dándote información clara antes de visitar Italia en persona.',
          includes: [
            'Fotografía de interior y exterior',
            'Imágenes aéreas profesionales y panorámica',
            'Informe de evaluación del estado de la propiedad',
            'Análisis del barrio y servicios',
            'Revisión de transporte y accesibilidad',
            'Perspectiva del mercado local',
            'Tours en video walkthrough',
            'Consulta de seguimiento',
          ],
          note: 'Toma decisiones inmobiliarias informadas con documentación profesional y experiencia local, reduciendo costes de viaje y riesgos de inversión.',
        },
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
      ctaSubtitle: 'Contáctanos con tu brief y te responderemos en 24 horas.',
      dailyNote:
        'La tarifa diaria incluye 10 horas de scouting + todos los desplazamientos dentro del área + documentación fotográfica y de video de alta resolución de cada location potencial.',
      includes: [
        '10 horas de scouting experto',
        'Todos los costes de transporte',
        'Documentación fotográfica de alta resolución',
        'Informes detallados de locations',
        'Coordenadas GPS e indicaciones de conducción',
        'Matching con moodboard',
        'Opciones alternativas incluidas',
      ],
      additionalServices: [
        {
          title: 'Fotografía con Dron',
          desc: 'Vistas aéreas y filmación para una comprensión completa de las locations. Sujeto a regulaciones locales y requisitos de permisos.',
        },
        {
          title: 'Tours Virtuales 360°',
          desc: 'Tours virtuales inmersivos para una comprensión espacial completa. Precio según número de locations y complejidad.',
        },
        {
          title: 'Permisos de Rodaje',
          desc: 'Obtención completa de permisos y enlace con las autoridades locales. Incluido en nuestra consultoría estándar de scouting.',
        },
        {
          title: 'Informes Técnicos',
          desc: 'Análisis en profundidad de la viabilidad de la location para requisitos específicos de rodaje. Precio según complejidad.',
        },
      ],
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
      ctaSubtitle: 'Cuéntanos tu proyecto. Encontraremos las locations adecuadas.',
      bio: [
        'Italy Locations fue fundada por Nicolas Vanegas Sanchez, fotógrafo y cineasta italiano de herencia colombiana que lleva haciendo scouting de locations en toda Italia desde 2014.',
        'Con más de una década de experiencia trabajando exclusivamente con producciones internacionales — desde campañas publicitarias hasta equipos de documentales, desde rodajes de moda hasta películas de automoción — Nicolas creó Italy Locations para resolver un problema específico: los equipos internacionales necesitan a alguien sobre el terreno que comprenda tanto el lenguaje creativo de la producción como la complejidad del territorio italiano.',
        'Hablando inglés, italiano y español con fluidez, Nicolas hace de puente entre la visión creativa internacional y el conocimiento local italiano — desde locations ocultas que no aparecen en ningún mapa turístico, hasta permisos, logística y contactos locales construidos a lo largo de 12 años.',
      ],
      pillarDescs: [
        'Más de 12 años haciendo scouting en cada rincón de Italia — desde los patios ocultos de Roma hasta los remotos pasos alpinos. Conocemos las locations que no aparecen en Google.',
        'Hemos trabajado con equipos de EE.UU., Reino Unido, Alemania, Francia, España y más. Entendemos tu flujo de trabajo, tus plazos y tu lenguaje creativo.',
        'Cada location es fotografiada profesionalmente. Recibes imágenes de alta resolución, imágenes de dron donde estén disponibles e informes técnicos detallados — todo lo que necesitas antes de comprometerte.',
        'Inglés, italiano y español. Gestionamos todas las comunicaciones locales, negociaciones y papeleo — tú te concentras en lo creativo.',
      ],
      strengthDescs: [
        'Comunicación directa en inglés y español fluido. Sin intermediarios, sin malentendidos — cada brief comprendido exactamente como se pretendía.',
        'Una sola persona gestiona el scouting, los permisos, la logística y el equipo local. Tienes un solo número al que llamar para todo.',
        'Autoridades locales, propietarios de propiedades privadas, directores de location y equipo experimentado — construido a lo largo de una década de trabajo sobre el terreno.',
      ],
      gearNote:
        'Equipamiento profesional de fotografía y video disponible para producciones que requieren documentación visual en el lugar.',
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
      questions: {
        scouting: [
          {
            q: '¿Con cuánta antelación debo reservar?',
            a: 'Para producciones que requieren permisos, contáctanos al menos 20 días laborables antes de tu fecha de rodaje. Esto permite el tiempo para el procesamiento de permisos (mínimo 15 días laborables) más la confirmación de la location y la planificación logística. Para investigación solo de locations sin permisos, 7–10 días laborables suelen ser suficientes. El contacto anticipado siempre significa mejor selección de locations y disponibilidad del equipo — recomendamos ponerse en contacto en cuanto tengas fechas confirmadas.',
          },
          {
            q: '¿Qué incluye la tarifa diaria?',
            a: 'Nuestra tarifa diaria de scouting cubre la jornada completa de trabajo en location por parte de un scout dedicado, fotografía y video profesional de todas las locations visitadas, coordenadas GPS, especificaciones técnicas del lugar (fuentes de alimentación, acceso de vehículos, posición del sol, instalaciones más cercanas), evaluaciones de accesibilidad y un informe escrito detallado entregado digitalmente en 48 horas. Los desplazamientos dentro de la región acordada están incluidos. Las regiones extendidas u operaciones de varios días se cotizan de forma transparente sin tarifas ocultas.',
          },
          {
            q: '¿Hacéis scouting de locations fuera de vuestras regiones listadas?',
            a: 'Sí. Aunque tenemos particular experiencia en Roma/Lacio, Toscana, Umbría, Emilia-Romaña, Véneto, Friuli-Venecia Julia, los Dolomitas/Alpes y Cerdeña, operamos en toda Italia. Para regiones fuera de nuestras áreas de cobertura principal, nos coordinamos con contactos locales de confianza y ampliamos el plazo de scouting en consecuencia. Contáctanos con tu región específica y te proporcionaremos una propuesta personalizada.',
          },
          {
            q: '¿Podéis buscar locations específicas de nuestro moodboard?',
            a: 'Absolutamente — este es uno de nuestros briefs más comunes. Envíanos tus imágenes de referencia, moodboard o brief visual e identificaremos equivalentes italianos que coincidan con tu estética, condiciones de luz y requisitos de producción. Nos especializamos en encontrar para producciones internacionales locations que repliquen looks específicos de editoriales de moda, campañas de automoción y largometrajes. También podemos sugerir alternativas que quizás no hayas considerado.',
          },
          {
            q: '¿Proporcionáis footage de dron durante el scouting?',
            a: 'Sí. Coordinamos las operaciones de dron a través de ENAC (la autoridad de aviación civil italiana) y trabajamos con pilotos de drones comerciales certificados. El footage aéreo está disponible como complemento a cualquier informe de scouting y proporciona una perspectiva invaluable para la planificación de la producción. Todos los vuelos cumplen con las regulaciones de aviación italianas, incluyendo la navegación del espacio aéreo restringido, los requisitos de seguro y las reglas de altitud máxima. Gestionamos todas las autorizaciones ENAC como parte del servicio.',
          },
        ],
        permits: [
          {
            q: '¿Gestionáis los permisos de rodaje?',
            a: 'Sí, la obtención de permisos es una parte fundamental de nuestro servicio. Gestionamos el proceso completo: identificar la autoridad correcta (municipio, gobierno regional, autoridad del parque u organismo nacional), preparar y presentar toda la documentación requerida, coordinarnos con las oficinas locales y hacer seguimiento hasta que se confirme la aprobación. Gestionamos tanto permisos sencillos de un día como autorizaciones complejas multi-location y de varias semanas para grandes producciones.',
          },
          {
            q: '¿Cuánto tiempo se tarda en obtener un permiso en Italia?',
            a: 'Todo rodaje comercial en Italia requiere permisos con un tiempo mínimo de tramitación de 15 días laborables. Este es un mínimo legal establecido por las autoridades italianas y no puede reducirse. Los permisos para lugares protegidos, patrimonio UNESCO, parques nacionales o áreas históricamente sensibles pueden requerir tiempo adicional — a veces hasta 30 días laborables. Recomendamos encarecidamente contactarnos al menos 20–25 días laborables antes del rodaje previsto para tener margen ante posibles retrasos administrativos.',
          },
          {
            q: '¿Qué permisos se requieren para el rodaje comercial?',
            a: 'La documentación requerida incluye generalmente: datos y registro de la productora, certificados de seguro completos que cubran la responsabilidad civil y daños a terceros, una lista completa de equipamiento, identificación y roles del equipo, un calendario de rodaje detallado y requisitos específicos de la location que varían según el lugar. Para espacios públicos, los municipios emiten un permiso COSAP (Canone Occupazione Suolo Area Pubblica). Los lugares históricos requieren autorización de la Soprintendenza local. Te guiamos en cada paso y gestionamos todas las solicitudes en tu nombre.',
          },
          {
            q: '¿Se puede rodar en parques nacionales o sitios UNESCO?',
            a: 'Sí, pero estas locations requieren permisos especializados y plazos significativamente más largos. Los parques nacionales están gestionados por el Ente Parco y requieren autorización separada, a menudo con restricciones en el tamaño del equipo, acceso de vehículos y equipamiento. Los sitios UNESCO están supervisados por la Soprintendenza y pueden implicar tasas de restauración o acuerdos de uso. Italia tiene 58 sitios patrimonio UNESCO — tenemos experiencia en todas las categorías. Prevé 25–30 días laborables para estos permisos y presupuesta las tasas de uso del lugar que varían por location.',
          },
        ],
        cars: [
          {
            q: '¿Están disponibles los vehículos para alquiler personal?',
            a: 'No. Nuestros coches icónicos — incluyendo el Porsche 997 Carrera S Cabrio, el Lamborghini Gallardo, el Mercedes SL 350 AMG y el Porsche 997 Carrera 4S — están disponibles exclusivamente para uso profesional en producciones: rodajes comerciales, campañas fotográficas, producciones de cine y televisión y branded content. No están disponibles para viajes personales ni alquiler recreativo. Esta política garantiza que los vehículos estén adecuadamente cubiertos, gestionados profesionalmente y disponibles para las producciones que los necesitan.',
          },
          {
            q: '¿Qué documentación se necesita para reservar un vehículo?',
            a: 'Para confirmar la reserva de un vehículo necesitamos: un acuerdo de producción firmado, prueba de seguro que cubra el vehículo durante la duración del rodaje (o confirmación de que se usará nuestro paquete de seguro de producción), un brief o tratamiento del rodaje que describa el uso previsto y la responsabilidad designada de un enlace de producción cualificado en el set. Para rodajes que impliquen el vehículo en movimiento, necesitamos los detalles del conductor y la ruta con antelación. Todo el papeleo se gestiona eficientemente — la mayoría de las reservas se confirman en 48 horas.',
          },
          {
            q: '¿Pueden conducirse los vehículos durante el rodaje?',
            a: 'Sí, con las disposiciones adecuadas. La exhibición estática requiere solo el seguro de producción estándar. Las tomas dinámicas — el vehículo en movimiento en carreteras públicas — requieren aprobación previa del recorrido, permisos de corte de carretera donde sea aplicable, un conductor cualificado y los endosos de seguro apropiados. Podemos gestionar todo esto. Para tomas en movimiento, proporcionamos o coordinamos vehículos cámara y sistemas de montaje Tilta Hydra Alien. Tenemos amplia experiencia con producciones de automoción en carreteras italianas, desde entornos urbanos hasta pasos alpinos.',
          },
          {
            q: '¿Está incluido el seguro?',
            a: 'La responsabilidad civil básica está incluida para el uso estático de nuestros vehículos en el set. Para uso dinámico, movimiento en carretera o rodajes en locations de mayor riesgo, ofrecemos un paquete de seguro de producción completo como complemento. Recomendamos encarecidamente a nuestros clientes confirmar que su propio seguro de producción también cubra vehículos de terceros. Nuestro equipo revisará tu cobertura existente e identificará cualquier laguna antes de la fecha de rodaje, garantizando la protección completa de ambas partes durante toda la producción.',
          },
        ],
        database: [
          {
            q: '¿Cómo funciona la base de datos privada de locations?',
            a: 'Nuestra base de datos privada en locations.italylocations.com contiene propiedades exclusivas — villas, castillos, residencias aristocráticas, fincas privadas y espacios inusuales — cuyos propietarios han aceptado ponerlas a disposición de producciones profesionales bajo estrictas condiciones de confidencialidad. El acceso requiere registro y verificación como profesional de la producción. Una vez aprobado, puedes explorar perfiles detallados de locations con fotografía completa, especificaciones técnicas y disponibilidad. Las reservas se gestionan directamente a través de nosotros, con el anonimato del propietario protegido durante todo el proceso.',
          },
          {
            q: '¿Puedo visitar las locations antes de reservar?',
            a: 'Sí. Para consultas de producción serias, organizamos visitas previas a la reserva con el permiso del propietario. Estas visitas están acompañadas por un miembro de nuestro equipo y sujetas a un NDA entre tu productora y el propietario. Las visitas in situ se programan típicamente dentro de los 5–7 días laborables de un interés de producción confirmado y están incluidas en nuestro servicio estándar para producciones por encima de un umbral mínimo de presupuesto. Los tours virtuales por videollamada también están disponibles para clientes internacionales.',
          },
          {
            q: '¿Cómo se protege la privacidad de los propietarios?',
            a: 'La privacidad de los propietarios es fundamental en el funcionamiento de nuestra base de datos. Las direcciones de las propiedades y las identidades de los propietarios no se divulgan hasta que se haya firmado un acuerdo de reserva. Todas las productoras que acceden a la base de datos firman un acuerdo de confidencialidad. Las visitas de scouting se realizan bajo NDA. Verificamos cada solicitud de producción antes de conceder acceso completo a la base de datos. Los propietarios conservan el derecho de rechazar cualquier reserva sin explicación. Esta discreción es la razón por la que muchas de las propiedades privadas más exclusivas de Italia son accesibles a través de nuestra red y en ningún otro lugar.',
          },
          {
            q: '¿Qué tipos de propiedades están disponibles?',
            a: "La base de datos incluye: villas aristocráticas y residencias palaciegas de los períodos renacentista y barroco, viñedos en producción y fincas de agroturismo en Toscana y Umbría, castillos medievales y torres fortificadas por toda la Italia central, casas privadas modernistas y brutalistas, espacios industriales y antiguas fábricas reconvertidas para uso creativo, propiedades costeras en la Costa Amalfitana, Cerdeña y la costa de Lacio, y apartamentos históricos en los barrios más cinematográficos de Roma. Se añaden nuevas propiedades regularmente — contáctanos si tienes en mente un tipo específico y comprobaremos la disponibilidad actual.",
          },
        ],
      },
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
      heroSubtitle:
        'Una selección curada de vehículos excepcionales disponibles para sesiones fotográficas, campañas publicitarias, videoclips y producciones cinematográficas en toda Italia.',
      introParagraphs: [
        'Cada vehículo de nuestra flota está disponible exclusivamente como prop de producción para campañas publicitarias, sesiones fotográficas, videoclips y producciones cinematográficas. Estos vehículos NO están disponibles para alquiler o conducción personal bajo ninguna circunstancia.',
        'Todas las reservas requieren documentación completa de producción, cobertura de seguro válida para el vehículo y responsabilidad civil profesional. Italy Locations gestiona cada reserva directamente para garantizar la seguridad e integridad de cada vehículo.',
      ],
      propOnly: 'Solo Uso en Producción',
      processLabel: 'Proceso',
      processH2: 'Cómo Funciona',
      stepLabel: 'Paso',
      steps: [
        {
          title: 'Envía Tu Brief',
          description:
            'Cuéntanos sobre tu producción, fecha de rodaje y visión creativa. Incluye tu documentación de seguro de producción. Confirmaremos disponibilidad en 24 horas.',
        },
        {
          title: 'Nos Encargamos de Todo',
          description:
            'Desde el papeleo hasta la coordinación en set. El vehículo llega listo para rodar, completamente preparado y asegurado.',
        },
        {
          title: 'Rueda con Confianza',
          description:
            'Soporte profesional durante todo el día. Seguro y logística completamente gestionados por nuestro equipo.',
        },
      ],
      alsoLabel: 'Completa Tu Producción',
      alsoH2: '¿Buscas el Escenario Perfecto?',
      alsoDesc:
        'Explora nuestras 48+ locations scouted en toda Italia — desde ciudadelas medievales hasta carreteras costeras y pasos de montaña. Encuentra el escenario ideal para tu rodaje de automoción.',
      alsoCta: 'Explorar Filming Locations →',
      finalReadyLabel: '¿Listo para reservar?',
      finalSubtitle:
        'Contáctanos con los detalles de tu producción y la documentación de seguro. Confirmaremos disponibilidad y condiciones en 24 horas.',
    },
  },
}

export const translations = { en, it, es }
export type Translations = typeof en

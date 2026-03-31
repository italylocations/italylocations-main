import type { Metadata, Viewport } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://italylocations.com'),
  title: {
    default: 'Italy Locations | Professional Film Location Scouting Services',
    template: '%s | Italy Locations',
  },
  description:
    'Expert film location scouting across Italy. Exclusive access to 500+ locations from Rome to Sicily. Filming permits, production support, transparent pricing from €600/day.',
  keywords: [
    'Italy location scouting',
    'film locations Italy',
    'location scout Italy',
    'filming in Italy',
    'Italian filming locations',
    'location scouting Italy',
    'film production Italy',
    'commercial filming Italy',
    'photo shoot locations Italy',
  ],
  authors: [{ name: 'Italy Locations' }],
  creator: 'Italy Locations',
  publisher: 'Italy Locations',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'it_IT',
    url: 'https://italylocations.com',
    siteName: 'Italy Locations',
    title: 'Italy Locations | Professional Film Location Scouting Services',
    description:
      'Expert film location scouting across Italy. Exclusive access to 500+ locations from Rome to Sicily. Filming permits, production support, transparent pricing from €600/day.',
    images: [
      {
        url: 'https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/2024_02_rome-aerial-shot-drone-scouting-locations-italy.jpg',
        width: 1200,
        height: 800,
        alt: 'Italy Locations - Professional Film Location Scouting Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Italy Locations | Professional Film Location Scouting Services',
    description:
      'Expert film location scouting across Italy. Exclusive access to 500+ locations from Rome to Sicily.',
    images: ['https://pub-213b9b519e9d40f4b320ee44e8b12130.r2.dev/main-site/2024_02_rome-aerial-shot-drone-scouting-locations-italy.jpg'],
  },
  alternates: {
    canonical: 'https://italylocations.com',
    languages: {
      'en': 'https://italylocations.com',
      'it': 'https://italylocations.com/it',
      'es': 'https://italylocations.com/es',
    },
  },
  verification: {
    google: 'SqftTTM8l_qJGIUW0R786J480M6k-kHfx8VW7O7ImoA',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Italy Locations',
  description:
    'Professional film location scouting services across Italy. Exclusive access to 500+ locations.',
  url: 'https://italylocations.com',
  logo: 'https://italylocations.com/logo.png',
  telephone: '+393895365864',
  email: 'info@italylocations.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via del Cinema 12',
    addressLocality: 'Roma',
    postalCode: '00100',
    addressCountry: 'IT',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Italy',
  },
  serviceType: 'Film Location Scouting',
  priceRange: '€€€',
  sameAs: [
    'https://www.instagram.com/italylocations',
    'https://www.linkedin.com/company/italy-locations',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif' }}
      >
        {children}
      </body>

      {/* Google Analytics GA4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CM2Z9LE08K"
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CM2Z9LE08K');
        `}
      </Script>
    </html>
  )
}

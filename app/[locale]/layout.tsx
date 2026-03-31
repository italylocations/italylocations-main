import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import type { Lang } from '@/lib/i18n'

const LOCALES: Lang[] = ['en', 'it', 'es']

interface Props {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!LOCALES.includes(locale as Lang)) notFound()

  return (
    <LanguageProvider initialLang={locale as Lang}>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  )
}

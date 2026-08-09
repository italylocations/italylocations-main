import type { Metadata } from 'next'
import { alternatesFor } from '@/lib/hreflang'
import { ContactPageContent } from './ContactPageContent'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Contact',
    description:
      "Get in touch with Italy Locations. Tell us about your project and we'll get back to you within 24 hours.",
    alternates: alternatesFor(locale, '/contact'),
  }
}

export default function ContactPage() {
  return <ContactPageContent />
}

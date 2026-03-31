import type { Metadata } from 'next'
import { ContactPageContent } from './ContactPageContent'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Get in touch with Italy Locations. Tell us about your project and we'll get back to you within 24 hours.",
}

export default function ContactPage() {
  return <ContactPageContent />
}

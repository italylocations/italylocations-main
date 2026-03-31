'use client'

import { useSearchParams } from 'next/navigation'
import { ContactForm } from '@/components/ContactForm'

export function ContactFormWrapper() {
  const searchParams = useSearchParams()
  const vehicle = searchParams.get('vehicle') ?? undefined
  return <ContactForm vehicle={vehicle} />
}

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

const locationsLinks = [
  { label: 'Rome & Lazio', href: '/locations' },
  { label: 'Amalfi Coast', href: '/locations' },
  { label: 'Dolomites', href: '/locations' },
  { label: 'Sardinia', href: '/locations' },
  { label: 'All Regions', href: '/locations' },
]

const servicesLinks = [
  { label: 'Location Scouting', href: '/services' },
  { label: 'Filming Permits', href: '/services' },
  { label: 'Production Logistics', href: '/services' },
  { label: 'Drone Services', href: '/services' },
  { label: 'Pricing', href: '/rates' },
  { label: 'Private Database', href: 'https://locations.italylocations.com', external: true },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Cookie Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'FAQ', href: '/faq' },
]

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.4)] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.svg"
              alt="Italy Locations"
              width={60}
              height={60}
              unoptimized
              className="mb-3"
            />
            <p className="text-sm text-[rgba(255,255,255,0.50)] leading-relaxed mb-6">
              {t.footer.tagline}
            </p>
            <a
              href="https://locations.italylocations.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-semibold px-4 py-2 rounded-full border border-[rgba(201,168,76,0.35)] gold-text hover:bg-[rgba(201,168,76,0.08)] transition-colors"
            >
              locations.italylocations.com ↗
            </a>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-[rgba(255,255,255,0.40)] mb-5">
              {t.nav.locations}
            </h3>
            <ul className="space-y-3">
              {locationsLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[rgba(255,255,255,0.55)] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-[rgba(255,255,255,0.40)] mb-5">
              {t.nav.services}
            </h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  {'external' in link && link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-[rgba(255,255,255,0.55)] hover:text-white transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm text-[rgba(255,255,255,0.55)] hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-[rgba(255,255,255,0.40)] mb-5">
              Legal
            </h3>
            <ul className="space-y-3 mb-8">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[rgba(255,255,255,0.55)] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-2 text-xs text-[rgba(255,255,255,0.35)]">
              <p>
                <a href="mailto:info@italylocations.com" className="hover:text-[rgba(255,255,255,0.70)] transition-colors">
                  info@italylocations.com
                </a>
              </p>
              <p>
                <a href="https://wa.me/393895365864" target="_blank" rel="noopener noreferrer" className="hover:text-[rgba(255,255,255,0.70)] transition-colors">
                  +39 389 536 5864
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[rgba(255,255,255,0.30)]">
            © {year} Italy Locations. {t.footer.rights}.
          </p>
          <div className="flex items-center gap-6 text-xs text-[rgba(255,255,255,0.30)]">
            <span>P.IVA 14296561005</span>
            <span className="hidden md:inline">Roma, Italy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

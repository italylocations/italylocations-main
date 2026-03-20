'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Locations', href: '/locations' },
  { label: 'Cars', href: '/iconic-cars' },
  { label: 'Services', href: '/services' },
  { label: 'Rates', href: '/rates' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lang, setLang] = useState<'EN' | 'IT'>('EN')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(10,15,30,0.92)] backdrop-blur-md border-b border-[rgba(255,255,255,0.08)]'
          : 'bg-transparent backdrop-blur-sm border-b border-[rgba(255,255,255,0.05)]'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo-horizontal.svg"
            alt="Italy Locations"
            width={185}
            height={32}
            priority
            unoptimized
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-[rgba(255,255,255,0.70)] hover:text-white transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Lang switcher + hamburger */}
        <div className="flex items-center gap-4">
          {/* Language toggle */}
          <div className="hidden md:flex items-center gap-1 text-xs font-semibold">
            <button
              onClick={() => setLang('EN')}
              className={`px-2 py-1 rounded transition-colors duration-200 ${
                lang === 'EN'
                  ? 'gold-text'
                  : 'text-[rgba(255,255,255,0.40)] hover:text-[rgba(255,255,255,0.70)]'
              }`}
            >
              EN
            </button>
            <span className="text-[rgba(255,255,255,0.20)]">|</span>
            <button
              onClick={() => setLang('IT')}
              className={`px-2 py-1 rounded transition-colors duration-200 ${
                lang === 'IT'
                  ? 'gold-text'
                  : 'text-[rgba(255,255,255,0.40)] hover:text-[rgba(255,255,255,0.70)]'
              }`}
            >
              IT
            </button>
          </div>

          {/* CTA pill */}
          <Link
            href="/contact"
            className="hidden md:inline-block text-xs font-semibold px-5 py-2 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          >
            Get a Quote
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96' : 'max-h-0'
        } bg-[rgba(10,15,30,0.97)] backdrop-blur-lg border-t border-[rgba(255,255,255,0.06)]`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-[rgba(255,255,255,0.70)] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2 border-t border-[rgba(255,255,255,0.06)] flex items-center gap-3">
            <button
              onClick={() => setLang('EN')}
              className={`text-xs font-semibold px-2 py-1 ${lang === 'EN' ? 'gold-text' : 'text-[rgba(255,255,255,0.40)]'}`}
            >
              EN
            </button>
            <span className="text-[rgba(255,255,255,0.20)] text-xs">|</span>
            <button
              onClick={() => setLang('IT')}
              className={`text-xs font-semibold px-2 py-1 ${lang === 'IT' ? 'gold-text' : 'text-[rgba(255,255,255,0.40)]'}`}
            >
              IT
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}

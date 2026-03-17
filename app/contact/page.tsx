import type { Metadata } from 'next'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Italy Locations. Tell us about your project and we\'ll respond within 48 hours.',
}

export default function ContactPage() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6 py-20">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <SectionLabel>Get In Touch</SectionLabel>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
          >
            Start Your Project
          </h1>
          <p className="text-[rgba(255,255,255,0.60)] leading-relaxed">
            Tell us about your production and we&apos;ll find the perfect Italian locations within 48 hours.
          </p>
        </div>

        <GlassCard goldBorder className="p-8 md:p-10">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-[rgba(255,255,255,0.40)] mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.10)] rounded-xl px-4 py-3 text-white placeholder-[rgba(255,255,255,0.25)] focus:outline-none focus:border-[rgba(201,168,76,0.40)] transition-colors text-sm"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-[rgba(255,255,255,0.40)] mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.10)] rounded-xl px-4 py-3 text-white placeholder-[rgba(255,255,255,0.25)] focus:outline-none focus:border-[rgba(201,168,76,0.40)] transition-colors text-sm"
                  placeholder="Smith"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-[rgba(255,255,255,0.40)] mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.10)] rounded-xl px-4 py-3 text-white placeholder-[rgba(255,255,255,0.25)] focus:outline-none focus:border-[rgba(201,168,76,0.40)] transition-colors text-sm"
                placeholder="john@production.com"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-[rgba(255,255,255,0.40)] mb-2">
                Production Type
              </label>
              <select className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.10)] rounded-xl px-4 py-3 text-[rgba(255,255,255,0.70)] focus:outline-none focus:border-[rgba(201,168,76,0.40)] transition-colors text-sm">
                <option value="" className="bg-[#111827]">Select production type</option>
                <option value="film" className="bg-[#111827]">Feature Film</option>
                <option value="commercial" className="bg-[#111827]">TV Commercial</option>
                <option value="photo" className="bg-[#111827]">Photo Shoot</option>
                <option value="documentary" className="bg-[#111827]">Documentary</option>
                <option value="music" className="bg-[#111827]">Music Video</option>
                <option value="other" className="bg-[#111827]">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-[rgba(255,255,255,0.40)] mb-2">
                Project Description
              </label>
              <textarea
                rows={5}
                className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.10)] rounded-xl px-4 py-3 text-white placeholder-[rgba(255,255,255,0.25)] focus:outline-none focus:border-[rgba(201,168,76,0.40)] transition-colors text-sm resize-none"
                placeholder="Tell us about your project: locations you're interested in, shoot dates, crew size..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white font-semibold py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] text-sm tracking-wide"
            >
              Send Message →
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row justify-center gap-6 text-sm text-[rgba(255,255,255,0.40)]">
            <a href="mailto:info@italylocations.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <span>✉</span> info@italylocations.com
            </a>
            <a href="https://wa.me/393895365864" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <span>📱</span> +39 389 536 5864
            </a>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}

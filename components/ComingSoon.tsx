import Link from 'next/link'
import { GlassCard } from '@/components/ui/GlassCard'

interface ComingSoonProps {
  title: string
  emoji: string
  description: string
}

export function ComingSoon({ title, emoji, description }: ComingSoonProps) {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6">
      <div className="max-w-xl w-full text-center">
        <GlassCard goldBorder className="p-12">
          <div className="text-6xl mb-6">{emoji}</div>

          <div className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-[rgba(201,168,76,0.35)] gold-text mb-5">
            Coming Soon
          </div>

          <h1
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
          >
            {title}
          </h1>

          <p className="text-[rgba(255,255,255,0.55)] leading-relaxed mb-10">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold gold-text hover:opacity-80 transition-opacity"
            >
              ← Back to Home
            </Link>
            <span className="text-[rgba(255,255,255,0.20)] hidden sm:inline">|</span>
            <Link
              href="/contact"
              className="inline-block text-sm font-semibold px-6 py-2.5 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              Contact Us
            </Link>
          </div>
        </GlassCard>

        {/* Decorative glow */}
        <div
          className="absolute inset-0 pointer-events-none -z-10"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 60%)',
          }}
        />
      </div>
    </section>
  )
}

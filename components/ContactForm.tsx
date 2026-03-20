'use client'

import { useState, useEffect, useRef } from 'react'
import { Turnstile } from '@marsidev/react-turnstile'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { useLanguage } from '@/contexts/LanguageContext'

const BUDGET_RANGES = [
  'Under €1,000',
  '€1,000 - €5,000',
  '€5,000 - €15,000',
  '€15,000+',
  'To be discussed',
]

const inputCls =
  'w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.10)] rounded-xl px-4 py-3 text-white placeholder-[rgba(255,255,255,0.40)] focus:outline-none focus:border-[rgba(201,168,76,0.50)] transition-colors text-sm'

const labelCls = 'block text-sm font-medium text-[rgba(255,255,255,0.70)] mb-2'

export function ContactForm({ vehicle }: { vehicle?: string }) {
  const { t } = useLanguage()
  const p = t.pages.contact
  const PROJECT_TYPES = p.projectTypes
  const [projectType, setProjectType] = useState('')
  const [message, setMessage] = useState('')
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  // Pre-fill from ?vehicle= query param
  useEffect(() => {
    if (vehicle) {
      setProjectType('Iconic Cars for Production')
      setMessage(`I'm interested in the ${vehicle} for my production.`)
    }
  }, [vehicle])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!turnstileToken) return

    const fd = new FormData(e.currentTarget)
    const payload = {
      name: fd.get('name') as string,
      email: fd.get('email') as string,
      company: fd.get('company') as string,
      projectType,
      shootingDate: fd.get('shootingDate') as string,
      message: fd.get('message') as string,
      budgetRange: fd.get('budgetRange') as string,
      website: fd.get('website') as string, // honeypot
      turnstileToken,
    }

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        formRef.current?.reset()
        setProjectType('')
        setMessage('')
        setTurnstileToken(null)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <GlassCard goldBorder className="p-8 md:p-10">
      <h2
        className="text-2xl font-bold text-white mb-6"
        style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
      >
        {p.formTitle}
      </h2>

      {status === 'success' && (
        <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
          {p.successMsg}
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          Something went wrong. Please try again or contact us directly.
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Honeypot */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        {/* Name */}
        <div>
          <label className={labelCls}>{p.fields.name} *</label>
          <input
            name="name"
            type="text"
            required
            placeholder="John Smith"
            className={inputCls}
          />
        </div>

        {/* Email */}
        <div>
          <label className={labelCls}>{p.fields.email} *</label>
          <input
            name="email"
            type="email"
            required
            placeholder="john@production.com"
            className={inputCls}
          />
        </div>

        {/* Company */}
        <div>
          <label className={labelCls}>{p.fields.company}</label>
          <input
            name="company"
            type="text"
            placeholder="Optional"
            className={inputCls}
          />
        </div>

        {/* Project Type */}
        <div>
          <label className={labelCls}>{p.fields.projectType} *</label>
          <select
            required
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className={`${inputCls} text-[${projectType ? 'white' : 'rgba(255,255,255,0.40)'}]`}
          >
            <option value="" className="bg-[#111827] text-white">Select project type</option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t} className="bg-[#111827] text-white">{t}</option>
            ))}
          </select>
        </div>

        {/* Shooting Date */}
        <div>
          <label className={labelCls}>{p.fields.shootingDate}</label>
          <input
            name="shootingDate"
            type="date"
            className={`${inputCls} [color-scheme:dark]`}
          />
        </div>

        {/* Message */}
        <div>
          <label className={labelCls}>{p.fields.message} * <span className="text-[rgba(255,255,255,0.40)]">(min 50 characters)</span></label>
          <textarea
            name="message"
            required
            minLength={50}
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your project: locations, crew size, style references..."
            className={`${inputCls} resize-none`}
          />
          <p className="mt-1 text-xs text-[rgba(255,255,255,0.30)]">{message.length} / 50 min</p>
        </div>

        {/* Budget */}
        <div>
          <label className={labelCls}>{p.fields.budget}</label>
          <select name="budgetRange" className={inputCls}>
            <option value="" className="bg-[#111827] text-white">Select budget range</option>
            {BUDGET_RANGES.map((b) => (
              <option key={b} value={b} className="bg-[#111827] text-white">{b}</option>
            ))}
          </select>
        </div>

        {/* Turnstile */}
        <div>
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '1x00000000000000000000AA'}
            onSuccess={(token) => setTurnstileToken(token)}
            onExpire={() => setTurnstileToken(null)}
            onError={() => setTurnstileToken(null)}
            options={{ theme: 'dark' }}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!turnstileToken || status === 'loading'}
          className="w-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white font-semibold py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Sending...
            </>
          ) : (
            p.sendButton
          )}
        </button>
      </form>
    </GlassCard>
  )
}

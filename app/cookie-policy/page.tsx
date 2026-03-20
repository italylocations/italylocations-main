import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy for italylocations.com — how we use cookies and tracking technologies.',
  robots: { index: false, follow: false },
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-4xl font-bold text-white mb-3"
          style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
        >
          Cookie Policy
        </h1>
        <p className="text-sm text-[rgba(255,255,255,0.40)] mb-12">Last updated: March 2026</p>

        <div className="space-y-10 text-[rgba(255,255,255,0.70)] leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. What Are Cookies</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They allow
              the site to remember your preferences and collect anonymised usage data. Italy Locations
              uses cookies solely to improve your experience and measure site performance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Cookies We Use</h2>

            <div className="space-y-6">

              <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full bg-[rgba(59,130,246,0.15)] text-[#60a5fa] border border-[rgba(59,130,246,0.25)]">Functional</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Language Preference</h3>
                <p className="text-sm">
                  <strong className="text-[rgba(255,255,255,0.85)]">Cookie:</strong> <code className="text-[#c9a84c]">il-lang</code><br />
                  <strong className="text-[rgba(255,255,255,0.85)]">Purpose:</strong> Stores your selected language (EN/IT/ES) in <code className="text-[#c9a84c]">localStorage</code> so it persists across sessions.<br />
                  <strong className="text-[rgba(255,255,255,0.85)]">Duration:</strong> Persistent (until cleared by user).<br />
                  <strong className="text-[rgba(255,255,255,0.85)]">Third party:</strong> No — stored locally in your browser only.
                </p>
              </div>

              <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full bg-[rgba(201,168,76,0.15)] text-[#c9a84c] border border-[rgba(201,168,76,0.25)]">Analytics</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Google Analytics 4</h3>
                <p className="text-sm">
                  <strong className="text-[rgba(255,255,255,0.85)]">Cookies:</strong> <code className="text-[#c9a84c]">_ga</code>, <code className="text-[#c9a84c]">_ga_*</code><br />
                  <strong className="text-[rgba(255,255,255,0.85)]">Purpose:</strong> Measures page views, session duration, traffic sources and user interactions (including PDF download events). Data is anonymised and aggregated.<br />
                  <strong className="text-[rgba(255,255,255,0.85)]">Duration:</strong> Up to 2 years.<br />
                  <strong className="text-[rgba(255,255,255,0.85)]">Third party:</strong> Google LLC — <a href="https://policies.google.com/privacy" className="text-[#c9a84c] hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                </p>
              </div>

              <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full bg-[rgba(255,100,50,0.15)] text-[#fb923c] border border-[rgba(255,100,50,0.25)]">Marketing</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Meta Pixel (Facebook Pixel)</h3>
                <p className="text-sm">
                  <strong className="text-[rgba(255,255,255,0.85)]">Pixel ID:</strong> <code className="text-[#c9a84c]">929852512972213</code><br />
                  <strong className="text-[rgba(255,255,255,0.85)]">Cookies:</strong> <code className="text-[#c9a84c]">_fbp</code>, <code className="text-[#c9a84c]">_fbc</code><br />
                  <strong className="text-[rgba(255,255,255,0.85)]">Purpose:</strong> Tracks PageView events to measure the effectiveness of advertising campaigns on Facebook and Instagram. Enables retargeting audiences for professional productions.<br />
                  <strong className="text-[rgba(255,255,255,0.85)]">Duration:</strong> Up to 90 days.<br />
                  <strong className="text-[rgba(255,255,255,0.85)]">Third party:</strong> Meta Platforms, Inc. — <a href="https://www.facebook.com/privacy/policy/" className="text-[#c9a84c] hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                </p>
              </div>

              <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full bg-[rgba(255,200,50,0.15)] text-[#fbbf24] border border-[rgba(255,200,50,0.25)]">Security</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Cloudflare Turnstile</h3>
                <p className="text-sm">
                  <strong className="text-[rgba(255,255,255,0.85)]">Purpose:</strong> Anti-bot verification on the contact form. Protects against spam without requiring a visual CAPTCHA.<br />
                  <strong className="text-[rgba(255,255,255,0.85)]">Duration:</strong> Session.<br />
                  <strong className="text-[rgba(255,255,255,0.85)]">Third party:</strong> Cloudflare, Inc. — <a href="https://www.cloudflare.com/privacypolicy/" className="text-[#c9a84c] hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                </p>
              </div>

            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Managing Cookies</h2>
            <p className="mb-4">
              You can control and delete cookies through your browser settings. Disabling analytics
              or marketing cookies will not affect your ability to browse the site.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><a href="https://support.google.com/chrome/answer/95647" className="text-[#c9a84c] hover:underline" target="_blank" rel="noopener noreferrer">Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-[#c9a84c] hover:underline" target="_blank" rel="noopener noreferrer">Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" className="text-[#c9a84c] hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-[#c9a84c] hover:underline" target="_blank" rel="noopener noreferrer">Edge</a></li>
            </ul>
            <p className="mt-4 text-sm">
              To opt out of Meta Pixel tracking specifically, visit{' '}
              <a href="https://www.facebook.com/settings/?tab=ads" className="text-[#c9a84c] hover:underline" target="_blank" rel="noopener noreferrer">
                Facebook Ad Preferences
              </a>{' '}
              or use the{' '}
              <a href="https://optout.aboutads.info/" className="text-[#c9a84c] hover:underline" target="_blank" rel="noopener noreferrer">
                Digital Advertising Alliance opt-out
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Contact</h2>
            <p>
              For any questions about this Cookie Policy, contact us at{' '}
              <a href="mailto:info@italylocations.com" className="text-[#c9a84c] hover:underline">
                info@italylocations.com
              </a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}

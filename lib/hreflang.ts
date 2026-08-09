import type { Lang } from './i18n'

export const SITE_URL = 'https://italylocations.com'

export const LOCALES: Lang[] = ['en', 'it', 'es']

function isLang(value: string): value is Lang {
  return (LOCALES as string[]).includes(value)
}

/**
 * Normalise a URL pathname to its locale-agnostic base path.
 * Accepts both the public path (`/services`) and the internally rewritten one
 * (`/en/services`), so it returns the same value on the server and on the client.
 * Always returns a path starting with '/'.
 */
export function stripLocale(pathname: string): string {
  const [, first = ''] = pathname.split('/')
  if (isLang(first)) {
    const rest = pathname.slice(first.length + 1)
    return rest || '/'
  }
  return pathname || '/'
}

/**
 * Public path of `basePath` for a given locale.
 * English is the default and carries no prefix.
 */
export function localizedPath(locale: Lang, basePath: string): string {
  const path = stripLocale(basePath)
  if (locale === 'en') return path
  return path === '/' ? `/${locale}` : `/${locale}${path}`
}

/** Absolute URL of `basePath` for a given locale. */
export function localizedUrl(locale: Lang, basePath: string): string {
  return `${SITE_URL}${localizedPath(locale, basePath)}`
}

/**
 * `alternates` block for Next.js metadata: a self-referencing canonical for the
 * current locale plus the en/it/es/x-default hreflang set for the same page.
 *
 * @param locale  the `[locale]` route param (falls back to 'en' if unknown)
 * @param basePath  locale-agnostic path, e.g. '/services' or '/locations/amalfi'
 */
export function alternatesFor(locale: string, basePath: string) {
  const current: Lang = isLang(locale) ? locale : 'en'

  return {
    canonical: localizedUrl(current, basePath),
    languages: {
      en: localizedUrl('en', basePath),
      it: localizedUrl('it', basePath),
      es: localizedUrl('es', basePath),
      'x-default': localizedUrl('en', basePath),
    },
  }
}

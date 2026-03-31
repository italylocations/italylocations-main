import { NextRequest, NextResponse } from 'next/server'

const NON_EN_LOCALES = ['it', 'es'] as const

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip Next.js internals, static files, API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    /\.(.+)$/.test(pathname)
  ) {
    return NextResponse.next()
  }

  // Redirect /en/... → canonical EN path (no prefix) — avoids duplicate content
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const url = request.nextUrl.clone()
    url.pathname = pathname === '/en' ? '/' : pathname.slice(3) // strip /en
    return NextResponse.redirect(url, 301)
  }

  // Check if path already has a non-English locale prefix (/it/... or /es/...)
  const hasLocalePrefix = NON_EN_LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )

  if (hasLocalePrefix) {
    // Already has /it/ or /es/ — [locale] segment handles it
    return NextResponse.next()
  }

  // No locale prefix → English (default)
  // Internally rewrite /path → /en/path so [locale] segment receives 'en'
  const url = request.nextUrl.clone()
  url.pathname = pathname === '/' ? '/en' : `/en${pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}

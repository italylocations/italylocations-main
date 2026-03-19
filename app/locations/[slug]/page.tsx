import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllLocations, getLocationBySlug } from '@/lib/locations'
import { GoldButton } from '@/components/ui/GoldButton'
import { ImageGallery } from './ImageGallery'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const locations = getAllLocations()
  return locations.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) return {}

  return {
    title: location.seoTitle
      ? `${location.seoTitle} | Italy Locations`
      : `${location.title} | Italy Locations`,
    description: location.seoDescription ?? location.excerpt,
    openGraph: {
      title: location.seoTitle ?? location.title,
      description: location.seoDescription ?? location.excerpt,
      images: location.featuredImage ? [{ url: location.featuredImage }] : [],
    },
  }
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) notFound()

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <div className="relative w-full" style={{ height: '65vh', minHeight: '420px' }}>
        {location.featuredImage ? (
          <Image
            src={location.featuredImage}
            alt={location.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 bg-[#1a2744]" />
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[rgba(10,15,30,0.55)] to-[rgba(10,15,30,0.2)]" />

        {/* Hero text */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-12 max-w-5xl mx-auto w-full left-0 right-0">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[rgba(255,255,255,0.45)] mb-5 font-medium tracking-wide">
            <Link href="/" className="hover:text-[#e8d5a0] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-[#e8d5a0] transition-colors">Locations</Link>
            <span>/</span>
            <span className="text-[rgba(255,255,255,0.65)] truncate max-w-[200px]">{location.title}</span>
          </nav>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-[rgba(201,168,76,0.15)] text-[#e8d5a0] border border-[rgba(201,168,76,0.4)]">
              {location.region}
            </span>
            {location.locationType && (
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-[rgba(255,255,255,0.1)] text-white border border-[rgba(255,255,255,0.2)]">
                {location.locationType}
              </span>
            )}
          </div>

          <h1
            className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl"
            style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
          >
            {location.title}
          </h1>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Tags */}
        {location.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {location.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block text-xs px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-[rgba(255,255,255,0.45)] border border-[rgba(255,255,255,0.1)]"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Excerpt */}
        {location.excerpt && (
          <p className="text-[rgba(255,255,255,0.75)] text-lg leading-relaxed mb-10 border-l-2 border-[rgba(201,168,76,0.5)] pl-5">
            {location.excerpt}
          </p>
        )}

        {/* PDF Download */}
        {location.pdfUrl && (
          <div className="mb-12 flex flex-col items-start gap-2">
            <GoldButton href={location.pdfUrl} filled external className="text-base px-8 py-4">
              ⬇&nbsp;&nbsp;Download Scouting Report PDF
            </GoldButton>
            <p className="text-[rgba(255,255,255,0.3)] text-xs tracking-wide pl-1">
              High-resolution photography report &middot; Professional documentation
            </p>
          </div>
        )}

        {/* MDX Content */}
        <article className="mdx-content">
          <MDXRemote source={location.content} />
        </article>

        {/* Gallery */}
        {location.images.length > 1 && (
          <div className="mt-16">
            <h2
              className="text-2xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              Photo Gallery
            </h2>
            <ImageGallery images={location.images} title={location.title} />
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(201,168,76,0.25)] text-center">
          <p className="text-[rgba(255,255,255,0.5)] text-sm uppercase tracking-widest font-medium mb-3">
            Interested in this location?
          </p>
          <h3
            className="text-2xl font-bold text-white mb-2"
            style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
          >
            {location.title}
          </h3>
          <p className="text-[rgba(255,255,255,0.55)] mb-7 max-w-md mx-auto">
            Our scouts can arrange a full recce, permits coordination and local crew for your
            production.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#c9a84c] to-[#e8d5a0] text-[#0a0f1e] font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]"
          >
            Get in touch →
          </Link>
        </div>

        {/* Back link */}
        <div className="mt-10 text-center">
          <Link
            href="/locations"
            className="text-sm text-[rgba(255,255,255,0.4)] hover:text-[#e8d5a0] transition-colors"
          >
            ← Back to all locations
          </Link>
        </div>
      </div>
    </main>
  )
}

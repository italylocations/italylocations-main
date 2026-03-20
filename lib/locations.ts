import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const LOCATIONS_DIR = path.join(process.cwd(), 'content', 'locations')

export interface LocationFrontmatter {
  slug: string
  title: string
  excerpt: string
  region: string
  locationType: string
  tags: string[]
  featuredImage: string
  images: string[]
  date: string
  seoTitle?: string
  seoDescription?: string
  pdfUrl?: string
}

export interface LocationWithContent extends LocationFrontmatter {
  content: string
}

export function getAllLocations(): LocationFrontmatter[] {
  const files = fs.readdirSync(LOCATIONS_DIR).filter((f) => f.endsWith('.mdx'))

  const locations = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    const filePath = path.join(LOCATIONS_DIR, filename)
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(raw)

    const decodeHtml = (str: string) =>
      str
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&#8212;/g, '—')
        .replace(/&#038;/g, '&')

    return {
      slug: data.slug ?? slug,
      title: decodeHtml(data.title ?? ''),
      excerpt: decodeHtml(data.excerpt ?? ''),
      region: data.region ?? '',
      locationType: data.locationType ?? '',
      tags: Array.isArray(data.tags) ? data.tags : [],
      featuredImage: data.featuredImage ?? '',
      images: Array.isArray(data.images) ? data.images : [],
      date: data.date ?? '',
      seoTitle: data.seoTitle ?? data.title ?? '',
      seoDescription: data.seoDescription ?? data.excerpt ?? '',
      pdfUrl: data.pdfUrl ?? '',
    } satisfies LocationFrontmatter
  })

  return locations.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getLocationBySlug(slug: string): LocationWithContent | null {
  // try matching by slug field or by filename
  const files = fs.readdirSync(LOCATIONS_DIR).filter((f) => f.endsWith('.mdx'))

  for (const filename of files) {
    const filePath = path.join(LOCATIONS_DIR, filename)
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(raw)

    const fileSlug = data.slug ?? filename.replace(/\.mdx$/, '')
    if (fileSlug === slug) {
      const decodeHtml = (str: string) =>
        str
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&#8212;/g, '—')
          .replace(/&#038;/g, '&')

      return {
        slug: fileSlug,
        title: decodeHtml(data.title ?? ''),
        excerpt: decodeHtml(data.excerpt ?? ''),
        region: data.region ?? '',
        locationType: data.locationType ?? '',
        tags: Array.isArray(data.tags) ? data.tags : [],
        featuredImage: data.featuredImage ?? '',
        images: Array.isArray(data.images) ? data.images : [],
        date: data.date ?? '',
        seoTitle: data.seoTitle ?? data.title ?? '',
        seoDescription: data.seoDescription ?? data.excerpt ?? '',
        pdfUrl: data.pdfUrl ?? '',
        content,
      }
    }
  }

  return null
}

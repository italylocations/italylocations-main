import type { MetadataRoute } from 'next'
import { getAllLocations } from '@/lib/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://italylocations.com'
  const lastModified = new Date()

  const staticPaths = [
    { path: '', priority: 1 as const, changeFrequency: 'weekly' as const },
    { path: '/locations', priority: 0.9 as const, changeFrequency: 'weekly' as const },
    { path: '/iconic-cars', priority: 0.8 as const, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.8 as const, changeFrequency: 'monthly' as const },
    { path: '/rates', priority: 0.8 as const, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.6 as const, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.7 as const, changeFrequency: 'monthly' as const },
    { path: '/faq', priority: 0.5 as const, changeFrequency: 'monthly' as const },
    { path: '/location-scouting-milan', priority: 0.8 as const, changeFrequency: 'monthly' as const },
    { path: '/location-scouting-rome', priority: 0.8 as const, changeFrequency: 'monthly' as const },
    { path: '/location-scouting-florence', priority: 0.8 as const, changeFrequency: 'monthly' as const },
    { path: '/location-scouting-naples', priority: 0.8 as const, changeFrequency: 'monthly' as const },
  ]

  const locations = getAllLocations()

  const entries: MetadataRoute.Sitemap = []

  for (const { path, priority, changeFrequency } of staticPaths) {
    // English (no prefix)
    entries.push({ url: `${baseUrl}${path || '/'}`, lastModified, changeFrequency, priority })
    // Italian
    entries.push({ url: `${baseUrl}/it${path}`, lastModified, changeFrequency, priority })
    // Spanish
    entries.push({ url: `${baseUrl}/es${path}`, lastModified, changeFrequency, priority })
  }

  for (const l of locations) {
    const date = l.date ? new Date(l.date) : lastModified
    entries.push({ url: `${baseUrl}/locations/${l.slug}`, lastModified: date, changeFrequency: 'monthly', priority: 0.7 })
    entries.push({ url: `${baseUrl}/it/locations/${l.slug}`, lastModified: date, changeFrequency: 'monthly', priority: 0.7 })
    entries.push({ url: `${baseUrl}/es/locations/${l.slug}`, lastModified: date, changeFrequency: 'monthly', priority: 0.7 })
  }

  return entries
}

import type { MetadataRoute } from 'next'
import { getAllLocations } from '@/lib/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://italylocations.com'
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rates`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  const locations = getAllLocations()
  const locationRoutes: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${baseUrl}/locations/${l.slug}`,
    lastModified: l.date ? new Date(l.date) : lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...locationRoutes]
}

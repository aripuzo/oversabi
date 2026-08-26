import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/seo'
import { getAllProductSlugs } from '@/lib/sanity/queries'
import { fallbackFabrics } from '@/lib/content/fabrics'

// Re-generate hourly so newly published Sanity products appear without a redeploy.
export const revalidate = 3600

type Route = MetadataRoute.Sitemap[number]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  const staticRoutes: Route[] = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/products', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/bespoke', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/fabrics', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/measurements', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' as const },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))

  const products = await getAllProductSlugs()
  const productRoutes: Route[] = products.map(({ slug, _updatedAt }) => ({
    url: `${SITE.url}/products/${slug}`,
    lastModified: _updatedAt ? new Date(_updatedAt) : now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const fabricRoutes: Route[] = fallbackFabrics.map(({ slug }) => ({
    url: `${SITE.url}/fabrics/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...fabricRoutes, ...productRoutes]
}

import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // The Sanity Studio is a client-side app with no crawlable content.
        disallow: ['/studio', '/studio/', '/api/'],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  }
}

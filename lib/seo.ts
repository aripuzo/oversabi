/**
 * Single source of truth for everything the crawlers read.
 * Imported by app/layout.tsx, sitemap.ts, robots.ts and the JSON-LD components.
 */

export const SITE = {
  name: 'Oversabi Stitches',
  shortName: 'Oversabi',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://oversabi.com.ng',
  description:
    'Lagos atelier making bespoke agbada, wedding dresses and Ankara ready-to-wear. Virtual measurements, worldwide shipping.',
  locale: 'en_NG',
  phone: '+2348063712310',
  phoneDisplay: '+234 806 371 2310',
  email: 'sabinabisong@gmail.com',
  /**
   * MUST match the Google Business Profile byte for byte.
   * Google currently lists: "Chisco, Megamound St, off Kusenla Road,
   * Ikate, Lekki 106104". This is the website's version. They differ —
   * pick one, change the other, and use it everywhere.
   */
  address: {
    street: 'Megamound Estate, Ojulari Crescent',
    locality: 'Ikate-Elegushi, Lekki',
    region: 'Lagos',
    postalCode: '102102',
    country: 'NG',
  },
  /**
   * UNVERIFIED — leave null until confirmed, do not guess.
   * Wrong hours in structured data send customers to a closed door;
   * wrong coordinates put your pin on someone else's street.
   * Get the exact values from the Google Business Profile listing,
   * then fill these in and they appear in the schema automatically.
   */
  geo: null as { lat: number; lng: number } | null,
  openingHours: null as {
    days: string[]
    opens: string
    closes: string
  }[] | null,
  /** Schema.org price indicator. Set once the pricing page exists. */
  priceRange: null as string | null,
  social: {
    instagram: 'https://instagram.com/oversabistitches',
    facebook: 'https://www.facebook.com/oversabistitches/',
  },
  defaultOgImage: '/images/hero-dress.webp',
} as const

/** Absolute URL for any path — required by canonical tags and JSON-LD. */
export function absoluteUrl(path = '/'): string {
  return new URL(path, SITE.url).toString()
}

/**
 * Sanity priceRange values arrive as display strings ("₦42,500", "₦40,000 - ₦60,000").
 * Product schema needs a bare number, so pull the first one out.
 */
export function parsePrice(priceRange?: string): string | null {
  if (!priceRange) return null
  const match = priceRange.replace(/,/g, '').match(/\d+(\.\d+)?/)
  return match ? match[0] : null
}

import { SITE, absoluteUrl, parsePrice } from '@/lib/seo'

/** Shared renderer. Server component — the script tag ships in the HTML source. */
function Script({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/**
 * ClothingStore + LocalBusiness. Rendered once in the root layout.
 * This is what feeds the Lagos local pack — keep name, address and phone
 * byte-identical to the Google Business Profile.
 */
export function OrganizationJsonLd() {
  return (
    <Script
      data={{
        '@context': 'https://schema.org',
        '@type': 'ClothingStore',
        '@id': `${SITE.url}/#business`,
        name: SITE.name,
        description: SITE.description,
        url: SITE.url,
        telephone: SITE.phone,
        email: SITE.email,
        image: absoluteUrl(SITE.defaultOgImage),
        logo: absoluteUrl(SITE.defaultOgImage),
        ...(SITE.priceRange ? { priceRange: SITE.priceRange } : {}),
        currenciesAccepted: 'NGN',
        paymentAccepted: 'Bank Transfer, Card, Cash',
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.locality,
          addressRegion: SITE.address.region,
          postalCode: SITE.address.postalCode,
          addressCountry: SITE.address.country,
        },
        // Omitted until the real coordinates are read off the Google
        // Business Profile — a guessed pin is worse than no pin.
        ...(SITE.geo
          ? {
              geo: {
                '@type': 'GeoCoordinates',
                latitude: SITE.geo.lat,
                longitude: SITE.geo.lng,
              },
            }
          : {}),
        areaServed: [
          { '@type': 'City', name: 'Lagos' },
          { '@type': 'Country', name: 'Nigeria' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'United States' },
        ],
        sameAs: [SITE.social.instagram, SITE.social.facebook],
        // Same rule: publish hours only once they are confirmed. Wrong
        // hours in schema send someone to a shut door on a Saturday.
        ...(SITE.openingHours
          ? {
              openingHoursSpecification: SITE.openingHours.map((slot) => ({
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: slot.days,
                opens: slot.opens,
                closes: slot.closes,
              })),
            }
          : {}),
        makesOffer: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bespoke Tailoring' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ready-to-Wear' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Alterations' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Virtual Fitting Consultation' } },
        ],
      }}
    />
  )
}

/** Sitewide search box + site identity. Layout only. */
export function WebSiteJsonLd() {
  return (
    <Script
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE.url}/#website`,
        name: SITE.name,
        url: SITE.url,
        inLanguage: 'en-NG',
        publisher: { '@id': `${SITE.url}/#business` },
      }}
    />
  )
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  return (
    <Script
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          item: absoluteUrl(item.path),
        })),
      }}
    />
  )
}

interface ProductJsonLdInput {
  name: string
  slug: string
  description?: string
  priceRange?: string
  images?: string[]
  fabrics?: string[]
}

/** Puts the ₦ price straight into the search result. */
export function ProductJsonLd({ product }: { product: ProductJsonLdInput }) {
  const price = parsePrice(product.priceRange)

  return (
    <Script
      data={{
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description:
          product.description ||
          `${product.name}, made to measure by ${SITE.name} in Lagos.`,
        image: product.images?.length ? product.images : [absoluteUrl(SITE.defaultOgImage)],
        ...(product.fabrics?.length ? { material: product.fabrics.join(', ') } : {}),
        brand: { '@type': 'Brand', name: SITE.name },
        offers: {
          '@type': 'Offer',
          url: absoluteUrl(`/products/${product.slug}`),
          priceCurrency: 'NGN',
          ...(price ? { price } : {}),
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          seller: { '@id': `${SITE.url}/#business` },
        },
      }}
    />
  )
}

/**
 * Only pass questions the page actually answers on screen —
 * Google penalises FAQ markup that doesn't match visible content.
 */
export function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Script
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      }}
    />
  )
}

export function HowToJsonLd({
  name,
  description,
  steps,
}: {
  name: string
  description: string
  steps: { name: string; text: string }[]
}) {
  return (
    <Script
      data={{
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name,
        description,
        totalTime: 'PT10M',
        supply: [
          { '@type': 'HowToSupply', name: 'Soft measuring tape' },
          { '@type': 'HowToSupply', name: 'A well-fitting garment to measure against' },
        ],
        step: steps.map((step, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: step.name,
          text: step.text,
        })),
      }}
    />
  )
}

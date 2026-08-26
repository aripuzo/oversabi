import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { fallbackFabrics, getFabricBySlug } from '@/lib/content/fabrics'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { SITE, absoluteUrl } from '@/lib/seo'

interface FabricPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return fallbackFabrics.map(({ slug }) => ({ slug }))
}

export function generateMetadata({ params }: FabricPageProps): Metadata {
  const fabric = getFabricBySlug(params.slug)
  if (!fabric) return { title: 'Fabric Not Found', robots: { index: false, follow: true } }

  return {
    title: fabric.title,
    description: fabric.description,
    alternates: { canonical: `/fabrics/${fabric.slug}` },
    openGraph: {
      type: 'article',
      title: `${fabric.title} | ${SITE.name}`,
      description: fabric.description,
      url: `/fabrics/${fabric.slug}`,
      images: fabric.image ? [{ url: fabric.image, alt: `${fabric.name} fabric` }] : undefined,
    },
  }
}

export default function FabricDetailPage({ params }: FabricPageProps) {
  const fabric = getFabricBySlug(params.slug)
  if (!fabric) notFound()

  const others = fallbackFabrics.filter((f) => f.slug !== fabric.slug)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: fabric.title,
    description: fabric.description,
    about: { '@type': 'Thing', name: `${fabric.name} fabric` },
    author: { '@id': `${SITE.url}/#business` },
    publisher: { '@id': `${SITE.url}/#business` },
    mainEntityOfPage: absoluteUrl(`/fabrics/${fabric.slug}`),
    ...(fabric.image ? { image: absoluteUrl(fabric.image) } : {}),
  }

  return (
    <div className="section-padding">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Fabrics', path: '/fabrics' },
          { name: fabric.name, path: `/fabrics/${fabric.slug}` },
        ]}
      />

      <article className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="text-xs text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/fabrics" className="hover:text-gray-900">Fabrics</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{fabric.name}</span>
        </nav>

        <p className="text-sm uppercase tracking-wider text-kente-gold mb-3">{fabric.origin}</p>
        <h1 className="heading-xl mb-5">{fabric.title}</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">{fabric.intro}</p>

        {fabric.image && (
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-12">
            <Image
              src={fabric.image}
              alt={`${fabric.name} fabric — ${fabric.origin}`}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="space-y-10">
          {fabric.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                {section.heading}
              </h2>
              {section.body.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-base font-semibold text-gray-900 mb-3">
              What we cut from it
            </h2>
            <ul className="space-y-2 text-sm text-gray-600">
              {fabric.bestFor.map((use) => (
                <li key={use} className="flex gap-2">
                  <span className="text-kente-gold" aria-hidden="true">&mdash;</span>
                  <span>{use}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-base font-semibold text-gray-900 mb-3">Care</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{fabric.care}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {fabric.characteristics.map((char) => (
                <span key={char} className="px-2 py-1 bg-gray-100 rounded text-xs">
                  {char}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-adire-blue text-white rounded-2xl p-8">
          <h2 className="heading-lg mb-3">Have something cut in {fabric.name}</h2>
          <p className="text-gray-300 mb-6">
            Bring your own cloth or let us source it. Consultations happen in the
            Lekki atelier or by video call, wherever you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/bespoke"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-kente-gold text-adire-blue text-sm font-semibold rounded hover:bg-opacity-90 transition-all"
            >
              Book a Consultation
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-white text-white text-sm font-semibold rounded hover:bg-white hover:text-adire-blue transition-all"
            >
              See the Collection
            </Link>
          </div>
        </div>

        <nav aria-label="Other fabrics" className="mt-12 pt-8 border-t">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Other fabrics</h2>
          <div className="flex flex-wrap gap-3">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/fabrics/${other.slug}`}
                className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-adire-blue hover:bg-adire-blue/5 transition-colors"
              >
                {other.name}
              </Link>
            ))}
          </div>
        </nav>
      </article>
    </div>
  )
}

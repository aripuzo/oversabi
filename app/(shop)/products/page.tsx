import type { Metadata } from 'next'
import Link from 'next/link'
import { ProductGrid } from '@/components/sections/ProductGrid'
import { getAllProducts } from '@/lib/sanity/queries'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Ready-to-Wear Collection — Ankara, Agbada & Wedding',
  description:
    'Shop ready-to-wear Ankara dresses, men’s agbada and wedding pieces from our Lagos atelier. Every piece can be cut to your own measurements.',
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Ready-to-Wear Collection | Oversabi Stitches',
    description:
      'Ankara dresses, agbada and wedding pieces made in Lekki, Lagos. Ready-to-wear or cut to your measurements.',
    url: '/products',
  },
}

export default async function ProductsPage() {
  const products = await getAllProducts()

  return (
    <div className="section-padding">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Collection', path: '/products' },
        ]}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="heading-xl mb-4">Ready-to-Wear Collection</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Traditional and contemporary pieces cut in our Lekki atelier — Ankara
            dresses, men&rsquo;s agbada, wedding wear and tailored separates. Every
            piece in the collection can be made to your own measurements.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button className="px-4 py-2 rounded-full bg-adire-blue text-white">All</button>
          <button className="px-4 py-2 rounded-full border border-gray-300 hover:border-adire-blue">Traditional</button>
          <button className="px-4 py-2 rounded-full border border-gray-300 hover:border-adire-blue">Contemporary</button>
          <button className="px-4 py-2 rounded-full border border-gray-300 hover:border-adire-blue">Accessories</button>
        </div>

        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          /* No dead end while the catalogue is being loaded into Sanity. */
          <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl p-10 shadow-sm">
            <h2 className="heading-lg mb-3">The new collection is being photographed</h2>
            <p className="text-gray-600 mb-6">
              We are shooting the current season now. In the meantime every piece we
              make is bespoke anyway — tell us what you have in mind and we will cut
              it to your measurements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/bespoke"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-adire-blue text-white text-sm font-semibold rounded hover:bg-opacity-90 transition-all"
              >
                Book a Consultation
              </Link>
              <Link
                href="/fabrics"
                className="inline-flex items-center justify-center px-6 py-2.5 border border-adire-blue text-adire-blue text-sm font-semibold rounded hover:bg-adire-blue hover:text-white transition-all"
              >
                Browse Our Fabrics
              </Link>
            </div>
          </div>
        )}

        {/* Standing copy so the route is never thin, catalogue or no catalogue. */}
        <section className="mt-20 max-w-3xl mx-auto">
          <h2 className="heading-lg mb-4">What we make</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              <strong className="text-gray-900">Men&rsquo;s agbada and kaftan.</strong>{' '}
              Cut from hand-woven Aso Oke or lighter cotton for daywear, with the
              sleeve width and embroidery worked out with you at consultation.
              Two to three weeks from confirmed measurements.
            </p>
            <p>
              <strong className="text-gray-900">Wedding and occasion wear.</strong>{' '}
              Bridal, engagement and aso-ebi pieces, including matching sets for
              families ordering together from Lagos and abroad.
            </p>
            <p>
              <strong className="text-gray-900">Ankara ready-to-wear.</strong>{' '}
              Wrap dresses, tailored blazers and separates in African wax print —
              stocked in standard sizes and adjustable to your measurements at no
              extra cost.
            </p>
            <p>
              Not sure of your measurements? Our{' '}
              <Link href="/measurements" className="text-adire-blue underline">
                measurement guide
              </Link>{' '}
              walks you through taking them yourself in about ten minutes.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

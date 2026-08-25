import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { ProductGrid } from '@/components/sections/ProductGrid'
import { getFeaturedProducts } from '@/lib/sanity/queries'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  // `absolute` stops the layout template appending "| Oversabi Stitches" twice.
  title: { absolute: 'Oversabi Stitches | Bespoke Tailoring in Lagos, Nigeria' },
  description:
    'Lagos atelier making bespoke agbada, wedding dresses and Ankara ready-to-wear. Virtual measurements, worldwide shipping from Ikate-Elegushi, Lekki.',
  alternates: { canonical: '/' },
}

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts()

  return (
    <div className="bg-[#faf8f3]">
      <Hero />

      {/* Featured Products.
          Previously fell back to four hardcoded demo products whose links
          (/products/lagos-wrap-dress etc.) 404 because they do not exist in
          Sanity. Publish real products in /studio and this grid fills itself. */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {featuredProducts.length > 0 ? (
            <ProductGrid products={featuredProducts} />
          ) : (
            <div className="max-w-2xl mx-auto text-center py-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Every piece we make starts as a conversation
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                The new season is being photographed. Until it is up, tell us what
                you have in mind and we will cut it to your measurements.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/bespoke"
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-[#1e3a5f] text-white text-sm font-semibold rounded hover:bg-opacity-90 transition-all"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="/fabrics"
                  className="inline-flex items-center justify-center px-6 py-2.5 border border-[#1e3a5f] text-[#1e3a5f] text-sm font-semibold rounded hover:bg-[#1e3a5f] hover:text-white transition-all"
                >
                  Browse Our Fabrics
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Fabric Swatches - Small rectangles */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-4 gap-3">
            {[
              { name: 'Ankara', image: '/images/fabric-ankara.webp' },
              { name: 'Kente', color: 'bg-yellow-600' },
              { name: 'Aso Oke', color: 'bg-amber-900' },
              { name: 'Adire', image: '/images/fabric-adire.webp' },
            ].map((fabric) => (
              <div key={fabric.name} className="text-center">
                <div 
                  className="aspect-[4/3] rounded mb-2 bg-cover bg-center"
                  style={{ 
                    backgroundImage: fabric.image ? `url(${fabric.image})` : undefined,
                    backgroundColor: fabric.color || undefined
                  }}
                />
                <span className="text-xs text-gray-700">{fabric.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-3xl text-[#1e3a5f] mb-3">❝</div>
          <blockquote className="text-lg text-gray-800 italic mb-2">
            The fit was perfect — like it was made just for me.
          </blockquote>
          <cite className="text-sm text-gray-600 not-italic">Nneka T., Lagos</cite>
        </div>
      </section>

      {/* Our Fabrics Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-2">Our Fabrics</h2>
          <p className="text-sm text-gray-400 text-center mb-8 max-w-xl mx-auto">
            We source our materials from certified African artisans and sustainable producers across Nigeria.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                name: 'Adire',
                origin: 'Yoruba Origin',
                desc: 'Hand-dyed indigo patterns created by skilled artisans.',
                image: '/images/fabric-adire.webp'
              },
              {
                name: 'Kente',
                origin: 'Ghanaian Heritage',
                desc: 'Woven with care, passed down through generations.',
                color: 'bg-amber-600'
              },
              {
                name: 'Ankara',
                origin: 'African Wax Print',
                desc: 'Vibrant, durable cotton for bold expression.',
                image: '/images/fabric-ankara.webp'
              },
            ].map((fabric) => (
              <div key={fabric.name} className="bg-[#2a4a6f] rounded-lg overflow-hidden">
                <div 
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{ 
                    backgroundImage: fabric.image ? `url(${fabric.image})` : undefined,
                    backgroundColor: fabric.color || undefined
                  }}
                />
                <div className="p-4">
                  <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">{fabric.origin}</p>
                  <h3 className="text-white font-medium mb-1">{fabric.name}</h3>
                  <p className="text-sm text-gray-400">{fabric.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link href="/fabrics" className="text-[#c9a227] text-sm hover:underline">
              Explore All Fabrics →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f] border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-bold text-white mb-2">Ready for Your Perfect Fit?</h2>
          <p className="text-sm text-gray-400 mb-6">
            Book a bespoke consultation and let our master tailors create something uniquely yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/bespoke" className="inline-flex items-center justify-center px-6 py-2.5 bg-[#c9a227] text-[#1e3a5f] text-sm font-semibold rounded hover:bg-opacity-90 transition-all">
              Book Consultation
            </Link>
            <Link href="/measurements" className="inline-flex items-center justify-center px-6 py-2.5 border border-white text-white text-sm font-semibold rounded hover:bg-white hover:text-[#1e3a5f] transition-all">
              Measurement Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

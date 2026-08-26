'use client'

import Link from 'next/link'
import Image from 'next/image'

/**
 * These pointed at /products?category=ankara etc. — query-param URLs that
 * Google crawls as near-duplicates of /products, and which filtered a
 * catalogue that has nothing in it yet. Until there are products to
 * filter, send people to pages that actually answer the click.
 *
 * When the Sanity catalogue is populated, swap these back to real
 * category routes (/products/category/ankara) rather than query params.
 */
const collections = [
  { name: 'Ankara Essentials', href: '/fabrics/ankara', bg: 'from-red-800/90 to-red-900/90' },
  { name: 'Wedding Collection', href: '/bespoke', bg: 'from-amber-700/90 to-amber-800/90' },
  { name: "Men's Agbada", href: '/fabrics/aso-oke', bg: 'from-blue-900/90 to-blue-950/90' },
]

export function Hero() {
  return (
    <section className="relative">
      {/* Main Hero - Background image with overlay */}
      <div className="relative min-h-[520px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-dress.webp"
            alt="Model wearing a bespoke Ankara dress made by Oversabi Stitches in Lagos"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle gradient overlay - darker on left for text, lighter on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/60 via-[#1e3a5f]/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="max-w-xl">
            {/* One h1 per page. This was previously split across two. */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="text-white">Bespoke African Fashion,</span>
              <br />
              <span className="text-[#c9a227]">Crafted for You</span>
            </h1>
            <p className="text-base text-gray-300 mb-8 max-w-md">
              Discover authentic Nigerian textiles and bespoke tailoring that celebrates your unique style and heritage.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/bespoke"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#c9a227] text-[#1e3a5f] text-sm font-semibold rounded hover:bg-opacity-90 transition-all"
              >
                Book Consultation
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-5 py-2.5 border border-white text-white text-sm font-semibold rounded hover:bg-white hover:text-[#1e3a5f] transition-all"
              >
                View Collections
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Collection Cards - Overlapping hero */}
      <div className="relative z-20 -mt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {collections.map((collection) => (
            <Link
              key={collection.name}
              href={collection.href}
              className="group relative h-28 rounded-lg overflow-hidden shadow-lg"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${collection.bg}`} />
              {/* Fabric texture overlay */}
              <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]" />
              <div className="relative h-full flex items-center justify-center p-4">
                <h3 className="text-white font-medium text-center text-sm">
                  {collection.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
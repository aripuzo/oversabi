import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity/image'

const collections = [
  {
    name: 'Ankara Essentials',
    slug: 'ankara',
    priceFrom: 65000,
    image: '/images/collections/ankara-hero.jpg',
    description: 'Vibrant African wax prints',
  },
  {
    name: 'Bubu Collection',
    slug: 'bubu',
    priceFrom: 50000,
    image: '/images/collections/bubu-hero.jpg',
    description: 'Comfortable & elegant',
  },
  {
    name: 'Lace Collection',
    slug: 'lace',
    priceFrom: 100000,
    image: '/images/collections/lace-hero.jpg',
    description: 'Premium beaded lace',
  },
  {
    name: "Men's Agbada",
    slug: 'mens',
    priceFrom: 75000,
    image: '/images/collections/mens-hero.jpg',
    description: 'Traditional elegance',
  },
]

export default function CollectionShowcase() {
  return (
    <section className="py-16 bg-brand-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center text-brand-indigo mb-12">
          Shop by Collection
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <Link 
              key={collection.slug}
              href={`/collections/${collection.slug}`}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-indigo/90 via-brand-indigo/50 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{collection.name}</h3>
                <p className="text-brand-cream text-sm mb-3">{collection.description}</p>
                <p className="text-brand-gold font-semibold">
                  From ₦{collection.priceFrom.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
import Image from 'next/image'
import Link from 'next/link'

const fabrics = [
  {
    name: 'Adire',
    origin: 'Yoruba',
    description: 'Hand-dyed indigo fabric with intricate resist patterns',
    image: '/images/adire.jpg',
  },
  {
    name: 'Kente',
    origin: 'Ghana/Ashanti',
    description: 'Woven cloth with geometric patterns and vibrant colors',
    image: '/images/kente.jpg',
  },
  {
    name: 'Ankara',
    origin: 'West Africa',
    description: 'Colorful wax-printed cotton with bold designs',
    image: '/images/ankara.jpg',
  },
]

export function FabricShowcase() {
  return (
    <section className="section-padding bg-adire-blue text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Our Fabrics</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We work with authentic traditional textiles, each carrying centuries of cultural heritage and craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fabrics.map((fabric) => (
            <div key={fabric.name} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-white/10">
                <div className="absolute inset-0 flex items-center justify-center text-kente-gold/50">
                  <span className="text-lg font-serif">{fabric.name}</span>
                </div>
              </div>
              <span className="text-sm text-kente-gold uppercase tracking-wider">
                {fabric.origin}
              </span>
              <h3 className="font-serif text-xl font-semibold mt-1 mb-2">
                {fabric.name}
              </h3>
              <p className="text-gray-400 text-sm">{fabric.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/fabrics" 
            className="inline-flex items-center gap-2 text-kente-gold hover:underline"
          >
            Explore All Fabrics
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

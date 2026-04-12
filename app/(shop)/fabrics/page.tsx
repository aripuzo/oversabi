import { getFabrics } from '@/lib/sanity/queries'
import Image from 'next/image'

export default async function FabricsPage() {
  const fabrics = await getFabrics()

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-4">Fabric Library</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of authentic Nigerian textiles. Each fabric tells 
            a story of heritage, craftsmanship, and cultural significance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fabrics.map((fabric: any) => (
            <div key={fabric._id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4">
                <Image
                  src={fabric.image}
                  alt={fabric.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-sm uppercase tracking-wider text-kente-gold">
                    {fabric.origin}
                  </span>
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">{fabric.name}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">{fabric.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {fabric.characteristics?.map((char: string) => (
                  <span key={char} className="px-2 py-1 bg-gray-100 rounded text-xs">
                    {char}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-adire-blue text-white rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="heading-lg mb-4">Can't Find What You're Looking For?</h2>
              <p className="text-gray-300 mb-6">
                We have access to exclusive fabrics and can source specific materials 
                for your bespoke projects. Contact us to discuss your requirements.
              </p>
              <a href="/bespoke" className="btn-primary bg-kente-gold text-adire-blue inline-block">
                Request Custom Fabric
              </a>
            </div>
            <div className="hidden md:block">
              <div className="aspect-video bg-white/10 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

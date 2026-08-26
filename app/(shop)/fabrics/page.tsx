import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getFabrics } from '@/lib/sanity/queries'
import { fallbackFabrics, type FabricEntry } from '@/lib/content/fabrics'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Ankara, Adire, Aso Oke & Kente — Our Fabric Library',
  description:
    'A guide to the fabrics we tailor with: hand-dyed Adire, hand-woven Aso Oke, Ankara wax print and Kente — where each comes from, how it behaves, and what it is best cut into.',
  alternates: { canonical: '/fabrics' },
  openGraph: {
    title: 'Our Fabric Library | Oversabi Stitches',
    description:
      'Adire, Aso Oke, Ankara and Kente — origins, weight and best uses, from a Lagos atelier that cuts them daily.',
    url: '/fabrics',
  },
}

export default async function FabricsPage() {
  const fromSanity = await getFabrics()
  const fabrics: FabricEntry[] = fromSanity.length > 0 ? (fromSanity as FabricEntry[]) : fallbackFabrics

  return (
    <div className="section-padding">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Fabrics', path: '/fabrics' },
        ]}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-4">Our Fabric Library</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The cloth decides how a garment falls, how it wears in Lagos heat and
            what it costs to make. These are the four we work with most, what each
            one is actually like to wear, and what we recommend cutting from it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fabrics.map((fabric) => (
            <Link key={fabric._id} href={`/fabrics/${fabric.slug}`} className="group block">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-adire-blue/10">
                {fabric.image ? (
                  <Image
                    src={fabric.image}
                    alt={`${fabric.name} fabric — ${fabric.origin}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-adire-blue to-kente-gold/60" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-sm uppercase tracking-wider text-kente-gold">
                    {fabric.origin}
                  </span>
                </div>
              </div>
              <h2 className="font-serif text-xl font-semibold mb-2 group-hover:text-adire-blue transition-colors">
                {fabric.name}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">{fabric.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {fabric.characteristics?.map((char: string) => (
                  <span key={char} className="px-2 py-1 bg-gray-100 rounded text-xs">
                    {char}
                  </span>
                ))}
              </div>
              <span className="mt-3 inline-block text-sm text-adire-blue">
                Read about {fabric.name} &rarr;
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-adire-blue text-white rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="heading-lg mb-4">Can&rsquo;t find what you&rsquo;re looking for?</h2>
              <p className="text-gray-300 mb-6">
                We have access to exclusive fabrics and can source specific materials
                for your bespoke projects. Tell us the cloth you have in mind and we
                will find it — sourcing usually adds three to five working days.
              </p>
              <Link href="/bespoke" className="btn-primary bg-kente-gold text-adire-blue inline-block">
                Request a Custom Fabric
              </Link>
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

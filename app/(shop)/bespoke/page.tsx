import type { Metadata } from 'next'
import { MeasurementGuide } from '@/components/bespoke/MeasurementGuide'
import { BookingWidget } from '@/components/bespoke/BookingWidget'
import { FaqJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { bespokeFaqs } from '@/lib/content/faqs'

export const metadata: Metadata = {
  title: 'Bespoke Tailoring in Lagos — Book a Virtual Fitting',
  description:
    'Consultation, measurement, fitting, delivery. Book a virtual fitting with our Lekki atelier from anywhere in the world — bespoke agbada, wedding and Ankara pieces.',
  alternates: { canonical: '/bespoke' },
  openGraph: {
    title: 'Bespoke Tailoring in Lagos | Oversabi Stitches',
    description:
      'Made-to-measure agbada, wedding and Ankara pieces from our Lekki atelier. Virtual fittings, worldwide shipping.',
    url: '/bespoke',
  },
}

export default function BespokePage() {
  return (
    <div className="section-padding">
      <FaqJsonLd items={bespokeFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Bespoke', path: '/bespoke' },
        ]}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-4">Bespoke Tailoring in Lagos</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Made-to-measure agbada, wedding wear and contemporary pieces, cut in our
            Ikate-Elegushi atelier. Fittings in person in Lekki, or by video from
            anywhere in the world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="heading-lg mb-6">The Process</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-adire-blue text-white flex items-center justify-center font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Consultation</h3>
                    <p className="text-gray-600">
                      Discuss your vision, fabric preferences, and style requirements with our designers.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-adire-blue text-white flex items-center justify-center font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Measurement</h3>
                    <p className="text-gray-600">
                      Our tailors take over 30 precise measurements to ensure a perfect fit.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-adire-blue text-white flex items-center justify-center font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Fitting</h3>
                    <p className="text-gray-600">
                      Try on your garment at various stages for adjustments and refinements.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-adire-blue text-white flex items-center justify-center font-bold shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Delivery</h3>
                    <p className="text-gray-600">
                      Receive your finished garment, perfectly tailored to your specifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <BookingWidget />
          </div>
        </div>

        <MeasurementGuide />
      </div>
    </div>
  )
}

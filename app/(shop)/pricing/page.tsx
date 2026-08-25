import type { Metadata } from 'next'
import Link from 'next/link'
import { priceLines, pricingFaqs } from '@/lib/content/pricing'
import { FaqJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Price List — How Much It Costs to Sew in Lagos',
  description:
    'What bespoke tailoring costs at our Lekki atelier: indicative ranges for Ankara, bubu, lace, men’s wear, bridal and alterations, and what makes one piece cost more than another.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Price List | Oversabi Stitches',
    description:
      'Indicative prices for bespoke tailoring in Lagos — Ankara, bubu, lace, men’s wear, bridal and alterations.',
    url: '/pricing',
  },
}

const naira = (n: number) => `₦${n.toLocaleString('en-NG')}`

function priceText(from: number | null, to: number | null) {
  if (from && to) return `${naira(from)} – ${naira(to)}`
  if (from) return `from ${naira(from)}`
  return 'On request'
}

export default function PricingPage() {
  return (
    <div className="section-padding">
      <FaqJsonLd items={pricingFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Pricing', path: '/pricing' },
        ]}
      />

      <div className="max-w-3xl mx-auto">
        <h1 className="heading-xl mb-4">How Much Does It Cost to Sew in Lagos?</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          Honest ranges rather than a single figure, because the answer genuinely
          depends on the piece. These are what we charge for the making at our
          Ikate-Elegushi atelier. Cloth is quoted separately, so you always see
          what the material costs and what the work costs.
        </p>
        <p className="text-sm text-gray-500 mb-10">
          Every commission is confirmed with a written quote at consultation
          before any cloth is cut.
        </p>

        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <caption className="sr-only">
              Indicative prices for bespoke tailoring at Oversabi Stitches, Lagos
            </caption>
            <thead>
              <tr className="border-b border-gray-200">
                <th scope="col" className="text-left px-5 py-3 font-semibold text-gray-900">
                  Piece
                </th>
                <th scope="col" className="text-right px-5 py-3 font-semibold text-gray-900 whitespace-nowrap">
                  Making, from
                </th>
              </tr>
            </thead>
            <tbody>
              {priceLines.map((line) => (
                <tr key={line.item} className="border-b border-gray-100 last:border-0">
                  <td className="px-5 py-4 align-top">
                    <span className="block font-medium text-gray-900">{line.item}</span>
                    <span className="block text-gray-600 mt-1">{line.detail}</span>
                  </td>
                  <td className="px-5 py-4 text-right align-top whitespace-nowrap font-medium text-adire-blue">
                    {priceText(line.from, line.to)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mt-14">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            What moves the price
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              <strong className="text-gray-900">Hand-finishing.</strong> Beading,
              embroidery and hand-rolled hems are the largest single addition to
              any quote, and the clearest difference between a piece that looks
              made and one that looks bought.
            </p>
            <p>
              <strong className="text-gray-900">Lining and structure.</strong> A
              lined, interfaced jacket is a different piece of work from an
              unlined one, whatever the cloth costs.
            </p>
            <p>
              <strong className="text-gray-900">How much cloth the cut eats.</strong>{' '}
              A full agbada or a large-repeat print that has to be matched across
              seams needs materially more cloth than a straight dress.
            </p>
            <p>
              <strong className="text-gray-900">Fittings.</strong> Bridal and
              tailored menswear take several. Ready-to-wear adjusted to your
              measurements usually takes none.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
            Questions we get about price
          </h2>
          <div className="space-y-6">
            {pricingFaqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-14 bg-adire-blue text-white rounded-2xl p-8">
          <h2 className="heading-lg mb-3">Get a quote for your piece</h2>
          <p className="text-gray-300 mb-6">
            Tell us what you have in mind and we will give you a firm figure —
            in the Lekki atelier, or on a video call from anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/bespoke"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-kente-gold text-adire-blue text-sm font-semibold rounded hover:bg-opacity-90 transition-all"
            >
              Book a Consultation
            </Link>
            <Link
              href="/fabrics"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-white text-white text-sm font-semibold rounded hover:bg-white hover:text-adire-blue transition-all"
            >
              Browse Fabrics
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

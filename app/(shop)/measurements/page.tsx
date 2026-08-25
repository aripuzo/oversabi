import type { Metadata } from 'next'
import Link from 'next/link'
import { MeasurementGuide } from '@/components/bespoke/MeasurementGuide'
import { BookingWidget } from '@/components/bespoke/BookingWidget'
import { StepIndicator } from '@/components/bespoke/StepIndicator'
import { HowToJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { measurementSteps } from '@/lib/content/measurements'

const steps = [
  { label: 'Explore' },
  { label: 'Measure' },
  { label: 'Confirm' },
  { label: 'Create' },
]

export const metadata: Metadata = {
  title: 'How to Take Your Own Measurements for a Nigerian Tailor',
  description:
    'A step-by-step guide to measuring yourself at home — bust, waist, hips, shoulder, arm and length — with a printable checklist and a video. Ten minutes, one tape.',
  alternates: { canonical: '/measurements' },
  openGraph: {
    title: 'How to Take Your Own Measurements | Oversabi Stitches',
    description:
      'Measure yourself at home in ten minutes and send your tailor everything they need. Printable checklist included.',
    url: '/measurements',
  },
}

export default function MeasurementsPage() {
  return (
    <div className="bg-[#faf8f3]">
      <HowToJsonLd
        name="How to take your own measurements for a tailor"
        description="Take the six measurements a Nigerian tailor needs to cut a bespoke garment, using a soft tape at home."
        steps={measurementSteps}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Measurement Guide', path: '/measurements' },
        ]}
      />

      {/* Header */}
      <div className="text-center pt-12 pb-4 px-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 max-w-2xl mx-auto">
          How to Take Your Own Measurements
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Six measurements, one soft tape, about ten minutes. Get these right and we
          can cut for you from anywhere in the world.
        </p>
      </div>

      {/* Step Navigation */}
      <StepIndicator steps={steps} currentStep={1} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <MeasurementGuide />

        {/* The written guide. HowTo schema above is generated from this same
            array, so the markup always matches what is on screen. */}
        <section className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
            The six measurements, step by step
          </h2>
          <ol className="space-y-6">
            {measurementSteps.map((step, i) => (
              <li key={step.name} className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-adire-blue text-white text-sm font-semibold flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{step.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              A few things that go wrong
            </h2>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed list-disc pl-5">
              <li>
                Measuring over thick clothing. Take everything over light clothes or
                underwear, otherwise the garment comes back loose.
              </li>
              <li>
                Pulling the tape tight. Snug is correct — you should be able to slide
                one finger underneath.
              </li>
              <li>
                Measuring your own shoulder and back. Ask someone else, or send us a
                well-fitting shirt&rsquo;s measurements instead.
              </li>
              <li>
                Mixing inches and centimetres. Pick one and tell us which you used.
              </li>
            </ul>
          </div>

          <p className="mt-8 text-gray-600">
            Rather have us do it? Book a{' '}
            <Link href="/bespoke" className="text-adire-blue underline">
              virtual fitting
            </Link>{' '}
            and we will walk you through every measurement on a video call.
          </p>
        </section>

        <div className="mt-12 max-w-md mx-auto">
          <BookingWidget />
        </div>
      </div>
    </div>
  )
}

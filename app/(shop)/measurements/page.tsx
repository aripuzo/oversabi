import { MeasurementGuide } from '@/components/bespoke/MeasurementGuide'
import { BookingWidget } from '@/components/bespoke/BookingWidget'
import { StepIndicator } from '@/components/bespoke/StepIndicator'

const steps = [
  { label: 'Explore' },
  { label: 'Measure' },
  { label: 'Confirm' },
  { label: 'Create' },
]

export default function MeasurementsPage() {
  return (
    <div className="bg-[#faf8f3]">
      {/* Header */}
      <div className="text-center pt-12 pb-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
          Bespoke measurement guide page
        </h1>
        <p className="text-gray-500">for African tailoring brand</p>
      </div>

      {/* Step Navigation */}
      <StepIndicator steps={steps} currentStep={1} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <MeasurementGuide />
        
        <div className="mt-8 max-w-md mx-auto">
          <BookingWidget />
        </div>
      </div>
    </div>
  )
}

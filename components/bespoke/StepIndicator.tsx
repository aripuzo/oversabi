'use client'

interface Step {
  label: string
  active?: boolean
}

interface StepIndicatorProps {
  steps: Step[]
  currentStep: number
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-2 py-6">
      {steps.map((step, index) => (
        <div key={step.label} className="flex items-center gap-2">
          <span
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              index === currentStep
                ? 'bg-adire-blue text-white'
                : index < currentStep
                  ? 'text-adire-blue'
                  : 'text-gray-400'
            }`}
          >
            {step.label}
          </span>
          {index < steps.length - 1 && (
            <span className="text-gray-400">→</span>
          )}
        </div>
      ))}
    </div>
  )
}

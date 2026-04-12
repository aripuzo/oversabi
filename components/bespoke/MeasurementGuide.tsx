'use client'

import { useState } from 'react'

const checklistItems = [
  { id: 'bust', label: 'Bust', icon: '○' },
  { id: 'waist', label: 'Waist', icon: '○' },
  { id: 'hips', label: 'Hips', icon: '○' },
  { id: 'shoulder', label: 'Shoulder', icon: 'ㄱ' },
  { id: 'arm', label: 'Arm Length', icon: '↔' },
  { id: 'height', label: 'Height', icon: '↑' },
  { id: 'notes', label: 'Notes', icon: '✎' },
]

export function MeasurementGuide() {
  const [checked, setChecked] = useState<string[]>([])

  const toggleCheck = (id: string) => {
    setChecked(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Checklist */}
      <div className="lg:col-span-3">
        <div className="bg-white rounded-xl shadow-sm p-5">
          <h3 className="font-semibold text-gray-900 mb-4">Measurement Checklist</h3>
          <div className="space-y-3">
            {checklistItems.map((item) => (
              <button
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors ${
                  checked.includes(item.id) ? 'bg-adire-blue/10' : 'hover:bg-gray-50'
                }`}
              >
                <span className="text-adire-blue text-lg">{item.icon}</span>
                <span className={`text-sm ${checked.includes(item.id) ? 'text-adire-blue font-medium' : 'text-gray-700'}`}>
                  {item.label}
                </span>
                {checked.includes(item.id) && (
                  <svg className="w-4 h-4 text-adire-blue ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
          <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2.5 bg-adire-blue text-white rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF Guide
          </button>
        </div>
      </div>

      {/* Center Body Diagram */}
      <div className="lg:col-span-5">
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center justify-center min-h-[400px]">
          {/* Body silhouette with measurement points */}
          <div className="relative">
            {/* Simplified body diagram */}
            <svg viewBox="0 0 200 400" className="w-48 h-80">
              {/* Head */}
              <ellipse cx="100" cy="30" rx="20" ry="25" fill="#d4a574" />
              {/* Neck */}
              <rect x="90" y="55" width="20" height="15" fill="#d4a574" />
              {/* Torso */}
              <path d="M70 70 L130 70 L125 180 L75 180 Z" fill="#d4a574" />
              {/* Arms */}
              <path d="M70 75 L40 140" stroke="#d4a574" strokeWidth="12" strokeLinecap="round" />
              <path d="M130 75 L160 140" stroke="#d4a574" strokeWidth="12" strokeLinecap="round" />
              {/* Legs */}
              <path d="M75 180 L70 380" stroke="#d4a574" strokeWidth="14" strokeLinecap="round" />
              <path d="M125 180 L130 380" stroke="#d4a574" strokeWidth="14" strokeLinecap="round" />
              
              {/* Measurement lines */}
              <line x1="50" y1="80" x2="150" y2="80" stroke="#1e3a5f" strokeWidth="2" strokeDasharray="4" />
              <text x="160" y="85" fill="#1e3a5f" fontSize="10">Bust</text>
              
              <line x1="55" y1="130" x2="145" y2="130" stroke="#1e3a5f" strokeWidth="2" strokeDasharray="4" />
              <text x="155" y="135" fill="#1e3a5f" fontSize="10">Waist</text>
              
              <line x1="50" y1="170" x2="150" y2="170" stroke="#1e3a5f" strokeWidth="2" strokeDasharray="4" />
              <text x="160" y="175" fill="#1e3a5f" fontSize="10">Hips</text>
              
              <line x1="100" y1="70" x2="100" y2="380" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="4" />
              <text x="170" y="220" fill="#1e3a5f" fontSize="10">Height</text>
            </svg>
          </div>
          <p className="text-xs text-gray-500 mt-4">Click measurement points to view details</p>
        </div>
      </div>

      {/* Right Video */}
      <div className="lg:col-span-4">
        <div className="bg-gray-200 rounded-xl aspect-[3/4] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400" />
          <button className="relative z-10 w-16 h-16 bg-adire-blue rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors shadow-lg">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-sm text-gray-700 font-medium">Video Measurement Guide</p>
            <p className="text-xs text-gray-600">3:45 min</p>
          </div>
        </div>
      </div>
    </div>
  )
}

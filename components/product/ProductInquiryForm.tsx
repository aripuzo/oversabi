'use client'

import { useState } from 'react'
import { createWhatsAppLink } from '@/lib/whatsapp'

const tabs = ['Details', 'Fabric Guide', 'Measurement Guide', 'Care']

const occasions = ['Wedding', 'Casual', 'Formal', 'Festival', 'Business']
const timelines = ['1-2 Weeks', '3-4 Weeks', '1-2 Months', '3+ Months']

const progressSteps = [
  { label: 'Choose Style', active: true },
  { label: 'Select Fabric', active: true },
  { label: 'Book Measurement', active: false },
  { label: 'Receive Piece', active: false },
]

interface ProductInquiryFormProps {
  product: {
    name: string
    slug: string
  }
}

export function ProductInquiryForm({ product }: ProductInquiryFormProps) {
  const [activeTab, setActiveTab] = useState('Details')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    occasion: 'Wedding',
    timeline: '3-4 Weeks',
    notes: '',
  })

  const handleSubmit = () => {
    const message = `Hi! I am interested in ordering the ${product.name}.\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Occasion: ${formData.occasion}\n` +
      `Timeline: ${formData.timeline}\n` +
      `Notes: ${formData.notes}`

    window.open(createWhatsAppLink(message), '_blank')
  }

  return (
    <div>
      <div className="flex border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab
                ? 'border-adire-blue text-adire-blue'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Details' && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Size</label>
            <input
              type="text"
              placeholder="Enter your size"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-adire-blue"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-adire-blue"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-adire-blue"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Occasion</label>
            <div className="relative">
              <select
                value={formData.occasion}
                onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-adire-blue appearance-none"
              >
                {occasions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Timeline</label>
            <div className="relative">
              <select
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-adire-blue appearance-none"
              >
                {timelines.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-adire-blue hover:bg-adire-blue/5 transition-colors">
            <svg className="w-5 h-5 text-adire-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm text-adire-blue font-medium">Upload Reference Image</span>
          </button>
        </div>
      )}

      {activeTab === 'Fabric Guide' && (
        <p className="text-gray-600">Our fabrics are sourced from authentic African textile producers...</p>
      )}

      {activeTab === 'Measurement Guide' && (
        <p className="text-gray-600">Please refer to our measurement guide or book a virtual fitting...</p>
      )}

      {activeTab === 'Care' && (
        <p className="text-gray-600">Hand wash in cold water. Dry clean recommended for delicate fabrics...</p>
      )}

      <div className="mt-8">
        <div className="flex items-center justify-between">
          {progressSteps.map((step, index) => (
            <div key={step.label} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-3 h-3 rounded-full ${
                    step.active ? 'bg-kente-gold' : 'bg-gray-300'
                  }`}
                />
                <span className={`text-xs mt-1 ${step.active ? 'text-gray-900' : 'text-gray-400'}`}>
                  {step.label}
                </span>
              </div>
              {index < progressSteps.length - 1 && (
                <div className={`w-8 h-0.5 mx-2 ${step.active ? 'bg-kente-gold' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <div className="flex gap-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-24 h-32 bg-gray-100 rounded-lg flex-shrink-0" />
          ))}
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full mt-6 py-3 bg-adire-blue text-white rounded-lg font-medium hover:bg-opacity-90 transition-colors"
      >
        Send Inquiry via WhatsApp
      </button>
    </div>
  )
}

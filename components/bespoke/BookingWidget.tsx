'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { createWhatsAppLink } from '@/lib/whatsapp'

const timeSlots = [
  '10:00 AM', '2:30 PM', '2:30 PM',
  '10:00 AM', '2:30 PM', '2:30 PM'
]

const faqs = [
  { q: 'How accurate are your measurements?', a: 'Our measurements are 99% accurate when taken by our professional tailors.' },
  { q: 'Can I reschedule your virtual session?', a: 'Yes, you can reschedule up to 24 hours before your appointment.' },
  { q: 'What if my fabric choice is out of stock?', a: 'We will suggest alternatives or source it specially for you.' },
]

export function BookingWidget() {
  const [selectedDate, setSelectedDate] = useState<number>(7)
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleWhatsAppBooking = () => {
    const message = `Hi! I'd like to book a virtual fitting for ${selectedDate}th at ${selectedTime}.`
    window.open(createWhatsAppLink(message), '_blank')
  }

  return (
    <div className="space-y-6">
      {/* Virtual Fitting Calendar */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="font-semibold text-lg mb-4 text-center">Book Your Virtual Fitting</h3>
        
        {/* Calendar */}
        <div className="flex items-center justify-between mb-4">
          <button className="p-1 hover:bg-gray-100 rounded">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="text-sm font-medium">October 2024</span>
          <button className="p-1 hover:bg-gray-100 rounded">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
          {['S','M','T','W','T','F','S'].map(d => <span key={d} className="text-gray-400 py-1">{d}</span>)}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              className={`aspect-square text-sm rounded-lg transition-colors ${
                selectedDate === date 
                  ? 'bg-adire-blue text-white' 
                  : date === 7
                    ? 'bg-adire-blue text-white'
                    : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              {date}
            </button>
          ))}
        </div>

        {/* Time Slots */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {['10:00 AM', '2:30 PM', '2:30 PM'].map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`py-2 px-3 rounded-lg text-sm border transition-colors ${
                selectedTime === time
                  ? 'bg-adire-blue text-white border-adire-blue'
                  : 'border-gray-200 hover:border-adire-blue text-gray-700'
              }`}
            >
              {time}
            </button>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <Button variant="outline" className="flex-1 text-sm">Book Virtual Session</Button>
          <Button 
            onClick={handleWhatsAppBooking}
            className="flex-1 bg-green-600 hover:bg-green-700 text-sm"
          >
            Book via WhatsApp
          </Button>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-center">Frequently Asked Questions</h3>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-gray-100 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center gap-2 px-4 py-3 text-left text-sm"
              >
                <span className="text-adire-blue">+</span>
                <span>{faq.q}</span>
              </button>
              {openFaq === i && (
                <p className="px-4 pb-3 text-sm text-gray-600">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

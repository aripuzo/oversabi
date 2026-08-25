'use client'

import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { createWhatsAppLink } from '@/lib/whatsapp'
import { bespokeFaqs } from '@/lib/content/faqs'

const TIME_SLOTS = ['10:00 AM', '12:30 PM', '2:30 PM', '4:00 PM']

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

export function BookingWidget() {
  const today = useMemo(() => new Date(), [])
  const [viewYear, setViewYear] = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
  const firstWeekday = new Date(viewYear, viewMonth, 1).getDay()

  const isCurrentMonth =
    viewYear === today.getFullYear() && viewMonth === today.getMonth()
  const isPastMonth =
    viewYear < today.getFullYear() ||
    (viewYear === today.getFullYear() && viewMonth < today.getMonth())

  const goToMonth = (delta: number) => {
    const next = new Date(viewYear, viewMonth + delta, 1)
    setViewYear(next.getFullYear())
    setViewMonth(next.getMonth())
    setSelectedDate(null)
  }

  const handleWhatsAppBooking = () => {
    const when =
      selectedDate && selectedTime
        ? `${selectedDate} ${MONTH_NAMES[viewMonth]} ${viewYear} at ${selectedTime}`
        : 'a virtual fitting'
    const message = `Hi! I'd like to book ${when}.`
    window.open(createWhatsAppLink(message), '_blank')
  }

  const canBook = Boolean(selectedDate && selectedTime)

  return (
    <div className="space-y-6">
      {/* Virtual Fitting Calendar */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="font-semibold text-lg mb-4 text-center">Book Your Virtual Fitting</h2>

        {/* Calendar */}
        <div className="flex items-center justify-between mb-4">
          <button
            type="button"
            onClick={() => goToMonth(-1)}
            disabled={isCurrentMonth}
            aria-label="Previous month"
            className="p-1 hover:bg-gray-100 rounded disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="text-sm font-medium">
            {MONTH_NAMES[viewMonth]} {viewYear}
          </span>
          <button
            type="button"
            onClick={() => goToMonth(1)}
            aria-label="Next month"
            className="p-1 hover:bg-gray-100 rounded"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
            <span key={d} className="text-gray-400 py-1">{d}</span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {/* Leading blanks so dates land on the correct weekday. */}
          {Array.from({ length: firstWeekday }, (_, i) => (
            <span key={`blank-${i}`} aria-hidden="true" />
          ))}
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((date) => {
            const isPast = isPastMonth || (isCurrentMonth && date < today.getDate())
            const isSunday = new Date(viewYear, viewMonth, date).getDay() === 0
            const unavailable = isPast || isSunday

            return (
              <button
                key={date}
                type="button"
                onClick={() => setSelectedDate(date)}
                disabled={unavailable}
                aria-pressed={selectedDate === date}
                className={`aspect-square text-sm rounded-lg transition-colors ${
                  selectedDate === date
                    ? 'bg-adire-blue text-white'
                    : unavailable
                      ? 'text-gray-300 cursor-not-allowed'
                      : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {date}
              </button>
            )
          })}
        </div>
        <p className="mt-3 text-xs text-gray-500 text-center">
          Fittings run Monday to Saturday, 9am&ndash;6pm West Africa Time.
        </p>

        {/* Time Slots */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
          {TIME_SLOTS.map((time) => (
            <button
              key={time}
              type="button"
              onClick={() => setSelectedTime(time)}
              aria-pressed={selectedTime === time}
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
            {canBook ? 'Confirm via WhatsApp' : 'Book via WhatsApp'}
          </Button>
        </div>
      </div>

      {/* FAQ — same source as the FAQPage schema on /bespoke. */}
      <div>
        <h2 className="font-semibold text-lg mb-4 text-center">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {bespokeFaqs.map((faq, i) => (
            <div key={faq.q} className="bg-gray-100 rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
                className="w-full flex items-center gap-2 px-4 py-3 text-left text-sm"
              >
                <span className="text-adire-blue">{openFaq === i ? '−' : '+'}</span>
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

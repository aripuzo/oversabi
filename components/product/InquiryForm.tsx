'use client'

import { useState } from 'react'
import { createWhatsAppLink } from '@/lib/whatsapp'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

interface Product {
  name: string
  slug: string
}

interface InquiryFormProps {
  product: Product
}

export function InquiryForm({ product }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    size: '',
    fabric: '',
    notes: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `Hi! I'm interested in ordering the ${product.name}.\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Size: ${formData.size}\n` +
      `Preferred Fabric: ${formData.fabric}\n` +
      `Additional Notes: ${formData.notes}`
    
    window.open(createWhatsAppLink(message), '_blank')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-xl">
      <h3 className="font-semibold text-lg">Send Inquiry</h3>
      
      <Input
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      
      <Input
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required
      />
      
      <Input
        placeholder="Your Size (e.g., M, L, XL or measurements)"
        value={formData.size}
        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
      />
      
      <Input
        placeholder="Preferred Fabric"
        value={formData.fabric}
        onChange={(e) => setFormData({ ...formData, fabric: e.target.value })}
      />
      
      <textarea
        placeholder="Additional notes or customization requests..."
        rows={3}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-adire-blue"
        value={formData.notes}
        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
      />
      
      <Button type="submit" variant="secondary" className="w-full">
        Inquire via WhatsApp
      </Button>
    </form>
  )
}

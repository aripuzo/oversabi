const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '2348012345678'

export function createWhatsAppLink(message: string): string {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
}

export function createProductInquiryLink(productName: string, productSlug: string): string {
  const message = `Hi! I'm interested in the ${productName} (${productSlug}). Can you provide more information?`
  return createWhatsAppLink(message)
}

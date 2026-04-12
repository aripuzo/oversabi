export type Currency = 'NGN' | 'USD' | 'EUR'

const currencySymbols: Record<Currency, string> = {
  NGN: '₦',
  USD: '$',
  EUR: '€',
}

const exchangeRates: Record<Currency, number> = {
  NGN: 1,
  USD: 0.00065,
  EUR: 0.0006,
}

export function formatPrice(amount: number, currency: Currency = 'NGN'): string {
  const symbol = currencySymbols[currency]
  const convertedAmount = currency === 'NGN' ? amount : amount * exchangeRates[currency]
  
  return `${symbol}${convertedAmount.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })}`
}

export function formatPriceRange(min: number, max: number, currency: Currency = 'NGN'): string {
  if (min === max) {
    return formatPrice(min, currency)
  }
  return `${formatPrice(min, currency)} - ${formatPrice(max, currency)}`
}

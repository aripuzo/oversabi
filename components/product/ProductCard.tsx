import Link from 'next/link'
import Image from 'next/image'

interface Product {
  _id: string
  name: string
  slug: string
  priceRange: string
  category: string
  mainImage: string
  isNew?: boolean
}

interface ProductCardProps {
  product: Product
  compact?: boolean
}

// African fashion placeholder images using data URIs with geometric patterns
const placeholderImages: Record<string, string> = {
  'Dresses': `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Cdefs%3E%3Cpattern id='a' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Crect width='20' height='20' fill='%23e8e4dc'/%3E%3Ccircle cx='10' cy='10' r='3' fill='%23d4a574' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='300' height='400' fill='url(%23a)'/%3E%3C/svg%3E`,
  'Blazers': `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Cdefs%3E%3Cpattern id='b' width='30' height='30' patternUnits='userSpaceOnUse'%3E%3Crect width='30' height='30' fill='%23e8e4dc'/%3E%3Cpath d='M0 15h30M15 0v30' stroke='%23c9a227' stroke-width='0.5' opacity='0.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='300' height='400' fill='url(%23b)'/%3E%3C/svg%3E`,
  'Traditional': `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Cdefs%3E%3Cpattern id='c' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Crect width='40' height='40' fill='%23e8e4dc'/%3E%3Crect x='0' y='0' width='20' height='20' fill='%23b91c1c' opacity='0.1'/%3E%3Crect x='20' y='20' width='20' height='20' fill='%23b91c1c' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='300' height='400' fill='url(%23c)'/%3E%3C/svg%3E`,
  'Formal': `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Cdefs%3E%3Cpattern id='d' width='25' height='25' patternUnits='userSpaceOnUse'%3E%3Crect width='25' height='25' fill='%23e8e4dc'/%3E%3Ccircle cx='12.5' cy='12.5' r='2' fill='%231e3a5f' opacity='0.15'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='300' height='400' fill='url(%23d)'/%3E%3C/svg%3E`,
}

export function ProductCard({ product, compact }: ProductCardProps) {
  const placeholder = placeholderImages[product.category] || placeholderImages['Dresses']
  // Describe the garment and its category — image search is a real channel for
  // a fashion site, and a decorative background div is invisible to it.
  const alt = `${product.name} — ${product.category} by Oversabi Stitches`

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div
        className="relative aspect-[3/4] bg-[#e8e4dc] mb-3 overflow-hidden"
        style={
          product.mainImage
            ? undefined
            : {
                backgroundImage: `url("${placeholder}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
        }
      >
        {product.mainImage && (
          <Image
            src={product.mainImage}
            alt={alt}
            fill
            sizes={compact ? '(max-width: 768px) 50vw, 25vw' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
      </div>
      <div className="space-y-1">
        <p className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
          {product.category}
        </p>
        <h3 className="text-sm font-medium text-gray-900 leading-tight">
          {product.name}
        </h3>
        <p className="text-sm text-gray-700">
          {product.priceRange}
        </p>
      </div>
    </Link>
  )
}

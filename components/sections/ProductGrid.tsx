import { ProductCard } from '@/components/product/ProductCard'

interface Product {
  _id: string
  name: string
  slug: string
  priceRange: string
  category: string
  mainImage: string
  isNew?: boolean
}

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-16 text-gray-500">
        No products available at the moment.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  )
}

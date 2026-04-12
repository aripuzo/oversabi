import { ProductGrid } from '@/components/sections/ProductGrid'
import { getAllProducts } from '@/lib/sanity/queries'

export default async function ProductsPage() {
  const products = await getAllProducts()

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="heading-xl mb-4">Our Collection</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of traditional and contemporary pieces, 
            each crafted with precision and Nigerian heritage.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button className="px-4 py-2 rounded-full bg-adire-blue text-white">All</button>
          <button className="px-4 py-2 rounded-full border border-gray-300 hover:border-adire-blue">Traditional</button>
          <button className="px-4 py-2 rounded-full border border-gray-300 hover:border-adire-blue">Contemporary</button>
          <button className="px-4 py-2 rounded-full border border-gray-300 hover:border-adire-blue">Accessories</button>
        </div>

        <ProductGrid products={products} />
      </div>
    </div>
  )
}

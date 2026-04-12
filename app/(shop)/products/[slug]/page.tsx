import { getProductBySlug, getRelatedProducts } from '@/lib/sanity/queries'
import { ProductCard } from '@/components/product/ProductCard'
import { Gallery } from '@/components/product/Gallery'
import { ProductInquiryForm } from '@/components/product/ProductInquiryForm'
import { notFound } from 'next/navigation'

interface ProductPageProps {
  params: { slug: string }
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug)
  
  if (!product) {
    notFound()
  }

  const relatedProducts = await getRelatedProducts(product.category, product._id)

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-kente-gold/20 to-transparent" />
            <Gallery images={product.images} />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-adire-blue text-white rounded-lg text-sm mb-4">
              <span>Traditional Wear</span>
              <div className="w-6 h-4 bg-kente-gold rounded" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {product.name || 'Traditional Wear'}
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              From {product.priceRange || '₦45,000'}
            </p>

            <div className="mb-4">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <span>XS</span>
                <div className="flex-1 relative h-2 bg-gray-200 rounded-full">
                  <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-4 h-4 bg-adire-blue rounded-full border-2 border-white shadow" />
                </div>
                <span>M</span>
                <div className="flex-1 relative h-2 bg-gray-200 rounded-full" />
                <span>XL</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {['100% Cotton', 'Cotton-Silk Blend', 'Linen-Viscose'].map((fabric) => (
                <button
                  key={fabric}
                  className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-adire-blue hover:bg-adire-blue/5 transition-colors"
                >
                  {fabric}
                </button>
              ))}
            </div>

            {/* Measurements Required Button */}
            <button className="w-full sm:w-auto px-6 py-3 bg-red-700 text-white rounded-lg font-medium hover:bg-red-800 transition-colors mb-6">
              Measurements Required
            </button>

            {/* Tabs */}
            <ProductInquiryForm product={product} />
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-8 border-t">
            <h2 className="text-xl font-semibold mb-6">Complete the Look</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((product) => (
                <ProductCard key={product._id} product={product} compact />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

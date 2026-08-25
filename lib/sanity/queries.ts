import { client } from './client'

/**
 * Every read goes through here. A Sanity outage, a bad token or a network
 * blip during `next build` would otherwise fail the whole deploy — pages
 * handle an empty result gracefully, a failed build helps nobody.
 */
async function safeFetch<T>(
  query: string,
  params: Record<string, unknown>,
  fallback: T,
): Promise<T> {
  try {
    return await client.fetch(query, params)
  } catch (error) {
    console.error('[sanity] query failed, serving fallback:', error)
    return fallback
  }
}

export interface ProductQueryResult {
  _id: string
  name: string
  slug: string
  priceRange: string
  category: string
  mainImage: string
  isNew?: boolean
}

export interface ProductDetailResult {
  _id: string
  name: string
  slug: string
  description?: string
  priceRange: string
  category: string
  images: string[]
  fabrics?: string[]
  customizationOptions?: string[]
  isNew?: boolean
  featured?: boolean
}

export async function getAllProducts(): Promise<ProductQueryResult[]> {
  const query = `*[_type == "product"] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    priceRange,
    category,
    "mainImage": mainImage.asset->url,
    isNew
  }`
  return safeFetch(query, {}, [])
}

export async function getFeaturedProducts(): Promise<ProductQueryResult[]> {
  const query = `*[_type == "product" && featured == true] | order(_createdAt desc)[0...8] {
    _id,
    name,
    "slug": slug.current,
    priceRange,
    category,
    "mainImage": mainImage.asset->url,
    isNew
  }`
  return safeFetch(query, {}, [])
}

export async function getNewArrivals(): Promise<ProductQueryResult[]> {
  const query = `*[_type == "product" && isNew == true] | order(_createdAt desc)[0...4] {
    _id,
    name,
    "slug": slug.current,
    priceRange,
    category,
    "mainImage": mainImage.asset->url,
    isNew
  }`
  return safeFetch(query, {}, [])
}

export async function getProductBySlug(slug: string): Promise<ProductDetailResult | null> {
  const query = `*[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    description,
    priceRange,
    category,
    "images": images[].asset->url,
    fabrics,
    customizationOptions,
    isNew,
    featured
  }`
  return safeFetch(query, { slug }, null)
}

export async function getRelatedProducts(category: string, excludeId: string): Promise<ProductQueryResult[]> {
  const query = `*[_type == "product" && category == $category && _id != $excludeId][0...4] {
    _id,
    name,
    "slug": slug.current,
    priceRange,
    category,
    "mainImage": mainImage.asset->url,
    isNew
  }`
  return safeFetch(query, { category, excludeId }, [])
}

export async function getFabrics(): Promise<{ _id: string; name: string; origin: string; description: string; characteristics: string[]; image: string }[]> {
  const query = `*[_type == "fabric"] | order(name asc) {
    _id,
    name,
    origin,
    description,
    characteristics,
    "image": image.asset->url
  }`
  return safeFetch(query, {}, [])
}

/** Slugs + timestamps for the sitemap and for pre-rendering product routes. */
export async function getAllProductSlugs(): Promise<{ slug: string; _updatedAt: string }[]> {
  const query = `*[_type == "product" && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt
  }`
  return safeFetch(query, {}, [])
}

/** Fabric names for the sitemap, once fabric detail routes exist. */
export async function getAllFabricSlugs(): Promise<{ slug: string; _updatedAt: string }[]> {
  const query = `*[_type == "fabric" && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt
  }`
  return safeFetch(query, {}, [])
}

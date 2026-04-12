import { client } from './client'

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
  return client.fetch(query)
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
  return client.fetch(query)
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
  return client.fetch(query)
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
  return client.fetch(query, { slug })
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
  return client.fetch(query, { category, excludeId })
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
  return client.fetch(query)
}

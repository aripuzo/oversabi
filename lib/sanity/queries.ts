import { client } from './client'

export async function getAllProducts() {
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

export async function getFeaturedProducts() {
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

export async function getNewArrivals() {
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

export async function getProductBySlug(slug: string) {
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

export async function getRelatedProducts(category: string, excludeId: string) {
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

export async function getFabrics() {
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

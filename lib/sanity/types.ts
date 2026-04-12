export interface Product {
  _id: string
  _type: 'product'
  name: string
  slug: { current: string }
  description: string
  priceRange: string
  category: string
  mainImage: {
    asset: {
      _ref: string
    }
  }
  images?: {
    asset: {
      _ref: string
    }
  }[]
  fabrics?: string[]
  customizationOptions?: string[]
  isNew?: boolean
  featured?: boolean
}

export interface Fabric {
  _id: string
  _type: 'fabric'
  name: string
  origin: string
  description: string
  characteristics: string[]
  image: {
    asset: {
      _ref: string
    }
  }
}

export interface Inquiry {
  _id: string
  _type: 'inquiry'
  customerName: string
  phone: string
  email?: string
  product?: {
    _type: 'reference'
    _ref: string
  }
  message: string
  status: 'new' | 'in-progress' | 'quoted' | 'converted' | 'closed'
  createdAt: string
}

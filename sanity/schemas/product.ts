export const product = {
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'priceRange',
      title: 'Price Range',
      type: 'string',
      description: 'e.g., "₦25,000 - ₦45,000"',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Traditional', value: 'traditional' },
          { title: 'Contemporary', value: 'contemporary' },
          { title: 'Accessories', value: 'accessories' },
          { title: 'Bespoke', value: 'bespoke' },
        ],
      },
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'images',
      title: 'Additional Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'fabrics',
      title: 'Available Fabrics',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Adire', value: 'Adire' },
          { title: 'Kente', value: 'Kente' },
          { title: 'Ankara', value: 'Ankara' },
          { title: 'Aso Oke', value: 'Aso Oke' },
          { title: 'Lace', value: 'Lace' },
          { title: 'Silk', value: 'Silk' },
        ],
      },
    },
    {
      name: 'customizationOptions',
      title: 'Customization Options',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'isNew',
      title: 'New Arrival',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'priceRange',
      media: 'mainImage',
    },
  },
}

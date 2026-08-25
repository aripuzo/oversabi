export const fabric = {
  name: 'fabric',
  title: 'Fabrics',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Fabric Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      // Required for /fabrics/[slug] detail routes and the sitemap.
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'origin',
      title: 'Origin',
      type: 'string',
      description: 'e.g., "Yoruba", "Ashanti", "West Africa"',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'characteristics',
      title: 'Characteristics',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g., "Hand-dyed", "Woven", "Wax-printed"',
    },
    {
      name: 'image',
      title: 'Fabric Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'careInstructions',
      title: 'Care Instructions',
      type: 'text',
      rows: 2,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'origin',
      media: 'image',
    },
  },
}

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'slug', title: 'Slug', type: 'slug', options: {source: 'name'}},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'heroImage', title: 'Hero Image', type: 'image'},
    {name: 'displayOrder', title: 'Display Order', type: 'number'},
    
    // Pricing ranges based on actual data
    {name: 'priceRange', title: 'Price Range', type: 'object',
     fields: [
       {name: 'min', title: 'Minimum Price (₦)', type: 'number'},
       {name: 'max', title: 'Maximum Price (₦)', type: 'number'},
     ]},
  ],
  orderings: [
    {title: 'Display Order', name: 'displayOrderAsc', by: [{field: 'displayOrder', direction: 'asc'}]},
  ],
}

// CATEGORIES TO CREATE:
// 1. Ankara Collection (₦65,000 - ₦80,000)
// 2. Bubu Collection (₦50,000+)
// 3. Lace Collection (₦100,000 - ₦110,000)
// 4. Men's Wear (Kaftans, Agbada, Senator)
// 5. Accessories (Headwraps, Bags, Jewelry)
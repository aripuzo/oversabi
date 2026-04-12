export default {
  name: 'orderInquiry',
  title: 'Order Inquiry',
  type: 'document',
  fields: [
    {name: 'customerName', title: 'Customer Name', type: 'string'},
    {name: 'email', title: 'Email', type: 'string'},
    {name: 'phone', title: 'Phone/WhatsApp', type: 'string'},
    {name: 'location', title: 'Location', type: 'string',
     description: 'e.g., "Lekki, Lagos" or "Abuja" or "London, UK"'},
    
    {name: 'productInterest', title: 'Product Interest', type: 'reference', to: [{type: 'product'}]},
    {name: 'category', title: 'Category', type: 'reference', to: [{type: 'category'}]},
    
    {name: 'fabricPreference', title: 'Fabric Preference', type: 'string',
     options: {list: [
       'Ankara', 'Kente', 'Aso Oke', 'Adire', 'Lace', 'Beaded Lace', 
       'I have my own fabric', 'Need help choosing', 'Aso Ebi Group'
     ]}},
    
    {name: 'fabricCost', title: 'Fabric Cost (₦)', type: 'number',
     description: 'If Oversabi is sourcing fabric'},
    
    {name: 'measurements', title: 'Measurements', type: 'text'},
    {name: 'hasMeasurements', title: 'Has Measurements?', type: 'boolean'},
    {name: 'needsMeasurementService', title: 'Needs Free Measurement (Lagos)', type: 'boolean'},
    
    {name: 'occasion', title: 'Occasion', type: 'string',
     options: {list: ['Wedding', 'Owambe/Aso Ebi', 'Corporate', 'Casual', 'Festival', 'Bridal Train', 'Church/Mosque', 'Other']}},
    
    {name: 'budgetRange', title: 'Budget Range (₦)', type: 'string',
     options: {list: [
       '₦50,000 - ₦70,000', 
       '₦70,000 - ₦100,000', 
       '₦100,000 - ₦150,000', 
       '₦150,000+', 
       'Flexible'
     ]}},
    
    {name: 'deliveryOption', title: 'Delivery Option', type: 'string',
     options: {list: [
       'Standard (1-2 weeks)',
       'Express (3 days) - Extra Charge',
       'Super Express (24hrs) - Extra Charge',
       'Pickup (Lekki, Lagos)'
     ]}},
    
    {name: 'timeline', title: 'Needed By', type: 'date'},
    {name: 'isAsoEbiGroup', title: 'Part of Aso Ebi Group?', type: 'boolean'},
    {name: 'groupSize', title: 'Group Size', type: 'number', description: 'Number of people'},
    
    {name: 'notes', title: 'Additional Notes', type: 'text'},
    {name: 'attachments', title: 'Reference Images', type: 'array', of: [{type: 'image'}]},
    
    {name: 'status', title: 'Status', type: 'string', initialValue: 'new',
     options: {list: [
       {title: 'New Inquiry', value: 'new'}, 
       {title: 'Contacted via WhatsApp', value: 'contacted'},
       {title: 'Measurement Booked', value: 'measured'},
       {title: 'In Production', value: 'in-production'},
       {title: 'Ready for Pickup/Delivery', value: 'ready'}, 
       {title: 'Shipped', value: 'shipped'},
       {title: 'Delivered', value: 'delivered'},
       {title: 'Cancelled', value: 'cancelled'},
     ]}},
    
    {name: 'assignedTailor', title: 'Assigned Tailor', type: 'string'},
    {name: 'totalPrice', title: 'Total Price (₦)', type: 'number',
     description: 'Tailoring + Fabric (if applicable) + Delivery'},
    {name: 'depositPaid', title: 'Deposit Paid (₦)', type: 'number'},
    {name: 'balanceDue', title: 'Balance Due (₦)', type: 'number'},
    
    {name: 'createdAt', title: 'Created At', type: 'datetime', readOnly: true},
    {name: 'updatedAt', title: 'Updated At', type: 'datetime'},
  ],
}
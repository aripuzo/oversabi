# Adding Images from Instagram

Since Instagram blocks automated scraping, here is how to manually add images from @oversabistitches:

## Option 1: Manual Download (Recommended)

1. Visit https://www.instagram.com/oversabistitches/
2. Right-click on images you want to use
3. Select "Save Image As..."
4. Save to `/public/images/` folder with descriptive names:
   - `hero-dress.jpg` - For hero section background
   - `product-1.jpg` through `product-4.jpg` - For product cards
   - `fabric-adire.jpg`, `fabric-kente.jpg`, etc. - For fabric sections

## Option 2: Using Instagram Downloader Tools

Tools like:
- https://www.instagram.com/oversabistitches/?utm_source=ig_web_button_share_sheet
- Browser extensions like "Image Downloader"

## Recommended Images to Extract

Based on the mockup design, you should get:

1. **Hero Background**: A high-quality African fashion photo with models wearing traditional wear
2. **Collection Cards (3 images)**:
   - Ankara Essentials - vibrant patterned fabric
   - Wedding Collection - elegant traditional wedding attire
   - Men's Agbada - flowing traditional men's wear
3. **Product Images (4 images)**:
   - Lagos Wrap Dress
   - Abaja Tailored Blazer
   - Abaja Tailored Bardollar
   - Abaja Tuxedo
4. **Fabric Images (3 images)**:
   - Adire - indigo dyed fabric
   - Kente - woven Ghanaian fabric
   - Ankara - colorful wax print

## Current Placeholder System

The components use SVG pattern placeholders that mimic African textile designs:
- Geometric patterns in brand colors
- Category-specific patterns (Dresses, Blazers, Traditional, Formal)
- These display automatically when no real images are provided

## Updating Components with Real Images

Once you have images, update these files:

1. **Hero.tsx** - Replace the gradient backgrounds with actual images
2. **ProductCard.tsx** - Update placeholderImages object with real image URLs
3. **Gallery.tsx** - Replace placeholderPattern with actual product images

## Sanity CMS Integration

For production, upload images to Sanity Studio:
1. Go to `/studio` route
2. Upload images to Products and Fabrics
3. The components will automatically use Sanity-hosted images

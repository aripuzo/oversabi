import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat'
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo/JsonLd'
import { SITE } from '@/lib/seo'

export const metadata: Metadata = {
  // Makes every canonical, OG image and JSON-LD URL absolute.
  metadataBase: new URL(SITE.url),
  title: {
    // Child routes fill %s; the homepage overrides with `absolute`.
    default: 'Oversabi Stitches | Bespoke Tailoring in Lagos, Nigeria',
    template: '%s | Oversabi Stitches',
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    'bespoke tailor Lagos',
    'Nigerian fashion atelier',
    'agbada tailor',
    'Ankara ready to wear',
    'Adire',
    'Aso Oke',
    'custom tailoring Nigeria',
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: 'Oversabi Stitches | Bespoke Tailoring in Lagos',
    description:
      'Bespoke agbada, wedding and Ankara pieces, cut to your measurements in Lekki and shipped worldwide.',
    images: [
      {
        url: SITE.defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'Bespoke African fashion by Oversabi Stitches, Lagos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oversabi Stitches | Bespoke Tailoring in Lagos',
    description: SITE.description,
    images: [SITE.defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  category: 'fashion',
  formatDetection: { telephone: true, address: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-NG">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}

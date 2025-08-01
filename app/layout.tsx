import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MODENZO WEAR | Premium Erkek Giyim Mağazası - İstanbul',
  description: 'MODENZO WEAR - Premium erkek giyim mağazası. Polo t-shirt, gömlek, pantolon, ayakkabı, aksesuar ve parfüm. Aynı gün kargo, ücretsiz değişim, toptan satış. İstanbul\'da erkek kıyafet mağazası.',
  keywords: [
    'MODENZO WEAR',
    'modenzo wear',
    'premium erkek giyim',
    'erkek kıyafet mağazası',
    'erkek kıyafet',
    'polo t-shirt',
    'erkek gömlek',
    'erkek pantolon',
    'erkek ayakkabı',
    'erkek aksesuar',
    'erkek parfüm',
    'erkek çanta',
    'aynı gün kargo',
    'İstanbul erkek giyim',
    'toptan satış',
    'perakende satış',
    'erkek moda',
    'erkek kıyafet online',
    'erkek giyim mağazası İstanbul',
    'premium erkek kıyafet',
    'erkek günlük kıyafet',
    'erkek resmi kıyafet',
    'erkek spor kıyafet',
    'erkek klasik kıyafet'
  ],
  authors: [{ name: 'MODENZO WEAR', url: 'https://modenzowear.com' }],
  creator: 'MODENZO WEAR',
  publisher: 'MODENZO WEAR',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  metadataBase: new URL('https://modenzowear.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://modenzowear.com',
    title: 'MODENZO WEAR | Premium Erkek Giyim Mağazası - İstanbul',
    description: 'Premium erkek giyimde sade ve modern çizgi. Polo t-shirt, gömlek, pantolon, ayakkabı, aksesuar. Aynı gün kargo, ücretsiz değişim. İstanbul erkek kıyafet mağazası.',
    siteName: 'MODENZO WEAR',
    images: [
      {
        url: '/images/logo.png',
        width: 512,
        height: 512,
        alt: 'MODENZO WEAR - Premium Erkek Giyim Logo'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MODENZO WEAR | Premium Erkek Giyim Mağazası',
    description: 'Premium erkek giyimde sade ve modern çizgi. Aynı gün kargo, ücretsiz değişim. İstanbul erkek kıyafet mağazası.',
    images: ['/images/logo.png'],
    creator: '@modenzowear',
  },
  verification: {
    google: 'your-google-verification-code', // Google Search Console'dan alınacak
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      }
    ],
  },
  other: {
    'geo.region': 'TR-34',
    'geo.placename': 'İstanbul',
    'geo.position': '41.0082;28.9784',
    'ICBM': '41.0082, 28.9784',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ClothingStore",
              "name": "MODENZO WEAR",
              "description": "Premium erkek giyim mağazası. Polo t-shirt, gömlek, pantolon, ayakkabı, aksesuar ve parfüm.",
              "url": "https://modenzowear.com",
              "logo": "https://modenzowear.com/images/logo.png",
              "image": "https://modenzowear.com/images/logo.png",
              "telephone": "+905317112134",
              "email": "yasinbellek@hotmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "İstanbul",
                "addressCountry": "TR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 41.0082,
                "longitude": 28.9784
              },
              "openingHours": "Mo-Su 10:00-22:00",
              "priceRange": "₺₺",
              "currenciesAccepted": "TRY",
              "paymentAccepted": "Cash, Credit Card, Bank Transfer",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Erkek Giyim Koleksiyonu",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Polo T-Shirt"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Erkek Gömlek"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Erkek Pantolon"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Erkek Ayakkabı"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://shopier.com/modenzowear",
                "https://www.instagram.com/modenzo.wear/"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
} 
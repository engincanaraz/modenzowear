import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MODENZO WEAR | Premium Erkek Giyim',
  description: 'MODENZO WEAR - Premium erkek giyimde sade ve modern çizgi. Polo t-shirt, gömlek, pantolon, ayakkabı ve aksesuarlar. Aynı gün kargo, kolay değişim.- İstanbul.',
  keywords: [
    'MODENZO WEAR',
    'premium erkek giyim',
    'erkek kıyafet',
    'polo t-shirt',
    'erkek gömlek',
    'erkek pantolon',
    'erkek ayakkabı',
    'erkek aksesuar',
    'erkek parfüm',
    'erkek çanta',
    'aynı gün kargo',
    'İstanbul',
    'toptan satış',
    'perakende satış'
  ],
  authors: [{ name: 'MODENZO WEAR', url: 'https://shopier.com/modenzowear' }],
  creator: 'MODENZO WEAR',
  publisher: 'MODENZO WEAR',
  robots: 'index, follow',
  metadataBase: new URL('https://modenzowear.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://modenzowear.com',
    title: 'MODENZO WEAR | Premium Erkek Giyim Mağazası',
    description: 'Premium erkek giyimde sade ve modern çizgi. Aynı gün kargo, kolay değişim.- İstanbul.',
    siteName: 'MODENZO WEAR',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MODENZO WEAR - Premium Erkek Giyim'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MODENZO WEAR | Premium Erkek Giyim',
    description: 'Premium erkek giyimde sade ve modern çizgi. Aynı gün kargo, kolay değişim.',
    images: ['/twitter-image.jpg'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
} 
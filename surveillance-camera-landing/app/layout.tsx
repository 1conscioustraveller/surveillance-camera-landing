// app/layout.tsx
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'SecureVision - Advanced Surveillance Systems',
    template: '%s | SecureVision'
  },
  description: 'Next-generation security solutions with AI-powered monitoring and 24/7 protection for your home and business.',
  keywords: [
    'surveillance cameras',
    'security systems',
    'home security',
    'business security',
    'AI monitoring',
    'CCTV systems',
    'smart security'
  ],
  authors: [{ name: 'SecureVision Team' }],
  creator: 'SecureVision',
  publisher: 'SecureVision',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://securevision.example.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://securevision.example.com',
    title: 'SecureVision - Advanced Surveillance Systems',
    description: 'Next-generation security solutions with AI-powered monitoring and 24/7 protection',
    siteName: 'SecureVision',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SecureVision Surveillance Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SecureVision - Advanced Surveillance Systems',
    description: 'Next-generation security solutions with AI-powered monitoring and 24/7 protection',
    images: ['/twitter-image.jpg'],
    creator: '@securevision',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`}>
      <head>
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode"
          as="fetch"
          crossOrigin="anonymous"
        />
        
        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8b5cf6" />
        
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'SecureVision',
              url: 'https://securevision.example.com',
              logo: 'https://securevision.example.com/logo.png',
              description: 'Advanced surveillance systems and security solutions',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Security Ave',
                addressLocality: 'Tech City',
                addressRegion: 'TC',
                postalCode: '12345',
                addressCountry: 'US',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-800-SECURE-IT',
                contactType: 'customer service',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        
        {/* Analytics script (optional) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </body>
    </html>
  )
}

// Alternative simplified version if you prefer a cleaner layout
export function SimpleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { ClientHeader } from '@/components/ClientHeader'
import { ThemeProviderWrapper } from './ThemeProviderWrapper' // <- new wrapper

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SecureVision',
  description: 'AI-powered surveillance system with cutting-edge security.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-950`}>
        <ThemeProviderWrapper>
          <Providers>
            <ClientHeader />
            <main>{children}</main>
          </Providers>
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}

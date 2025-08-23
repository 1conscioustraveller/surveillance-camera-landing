import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProviderWrapper } from './ThemeProviderWrapper' // ✅
import { ClientHeader } from '@/components/ClientHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SecureVision',
  description: 'AI-powered surveillance system with cutting-edge security.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProviderWrapper>
         <body className={`${inter.className} bg-white dark:bg-gray-950`}>
          <ClientHeader />
          <main>{children}</main>
         </body> 
      </ThemeProviderWrapper>
    </html>
  )
}

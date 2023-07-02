import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from 'next';
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import Sidebar  from "@/components/sidebar"
import Footer from 'components/footer';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://primalbound.com'),
  title: {
    default: 'Primal Bound',
    template: '%s | Primal Bound',
  },
  description: 'Welcome to Primal Bound, where we delve into the tapestry of daily life, uncovering the primal instincts that guide us on our journey',
  openGraph: {
    title: 'Primal Bound',
    description: 'Welcome to Primal Bound, where we delve into the tapestry of daily life, uncovering the primal instincts that guide us on our journey',
    url: 'https://primalbound.com',
    siteName: 'Primal Bound',
    locale: 'en-US',
    type: 'website',
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
};

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
    >
      <body className={`antialiased min-h-screen max-w-4xl mb-0 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto sticky top-0 ${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Sidebar />
          <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
            {children}
            <Analytics />
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

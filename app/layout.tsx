import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import Sidebar  from "@/components/sidebar"
import Footer from 'components/footer';

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Primal Bound",
  description: "Embracing Your Primal Nature for a Fulfilling and Authentic Life.",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      // className={clsx(
      //   'text-black bg-white dark:text-white dark:bg-[#111010]',
      //   kaisei.variable
      // )}
    >
      <body className="antialiased min-h-screen max-w-4xl mb-0 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto sticky top-0">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Sidebar />
          <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
            {children}
            <Analytics />
            <Footer />
          </main>
       </ThemeProvider>
      </body>

      {/* <body className="antialiased min-h-screen max-w-4xl mb-0 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="sticky top-0">
            <Sidebar />
          </div>
          <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
            {children}
            <Analytics />
          </main>
          <div className="sticky bottom-0">
            <Footer />
          </div>
        </ThemeProvider>
      </body> */}
    </html>
  )
}

import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PDF reader',
  description: 'Chat with your pdf',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <body className={cn('min-h-screen font-sans antialiased grainy', inter.className)}>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}

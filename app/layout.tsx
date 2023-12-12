import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hydrogen Based Boat | CSUF',
  description: 'Hydrogen Based Boat Design created by the engineer students at California State University, Fullerton',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html id="main" lang="en">
      <Navbar />
      <body className="mt-[70px]">{children}</body>
    </html>
  )
}

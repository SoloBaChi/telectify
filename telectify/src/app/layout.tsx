import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './custome.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Telectify',
  description: 'Real time energy monitoring app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://mafar.com.my'),
  title: 'MAFAR - Bring Good Doctors Forward',
  description: 'Doctor led community base soul & loyalty movement. Join 35+ local communities across Malaysia.',
  keywords: 'MAFAR, healthcare, doctors, malaysia, clinic, mcare, community health',
  openGraph: {
    title: 'MAFAR - Bring Good Doctors Forward',
    description: 'Join our network of 1000+ healthcare providers across 35+ communities in Malaysia',
    type: 'website',
    url: 'https://mafar.com.my',
    images: ['/og-image.jpg']
  }
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

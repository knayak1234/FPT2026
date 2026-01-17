import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FPT 2026 | National Conference on Frontiers of Physics and Technology',
  description: 'National Conference on Frontiers of Physics and Technology (FPT 2026) hosted by Panchayat College, Bargarh. 31st January - 1st February 2026. Hybrid Mode: Physical & Virtual.',
  keywords: 'Physics Conference, FPT 2026, Panchayat College Bargarh, Physics Technology, National Conference',
  authors: [{ name: 'FPT 2026 Organizing Committee' }],
  openGraph: {
    title: 'FPT 2026 | National Conference on Frontiers of Physics and Technology',
    description: 'Join us for the National Conference on Frontiers of Physics and Technology at Panchayat College, Bargarh',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FPT 2026 | National Conference on Frontiers of Physics and Technology',
    description: 'Join us for the National Conference on Frontiers of Physics and Technology at Panchayat College, Bargarh',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


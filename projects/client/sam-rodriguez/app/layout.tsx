import type { Metadata } from 'next'
import { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500'],
  style: ['italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sam Rodriguez — Leadership Mentor',
  description: 'My posts are based on what each day brings me. The best version of you is there for the taking. I help you get out of your own way.',
  openGraph: {
    title: 'Sam Rodriguez — Leadership Mentor',
    description: 'My posts are based on what each day brings me. The best version of you is there for the taking. I help you get out of your own way.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sam Rodriguez — Leadership Mentor',
    description: 'My posts are based on what each day brings me. The best version of you is there for the taking. I help you get out of your own way.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}>
      <body className="font-inter">{children}</body>
    </html>
  )
}


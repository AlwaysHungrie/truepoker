import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Providers from '@/providers/provider'
import { DialogOverlay } from '@/components/dialogs/dialogOverlay'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'True Poker',
  description:
    'Decentralized, on chain, zero knowledge poker tables with instant payouts and provably fair games',
  icons: {
    icon: '/locked_spade.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
          <DialogOverlay />
        </Providers>
      </body>
    </html>
  )
}

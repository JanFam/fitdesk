import type { Metadata } from 'next'
import { Limelight, DM_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

const limelight = Limelight({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-limelight',
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'FitDesk — One Workspace for Solo Fitness Coaches',
  description:
    'Program delivery, check-ins, billing — all in one place. No more switching between 5 tools. Built for solo online fitness coaches.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${limelight.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
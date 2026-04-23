import type { Metadata, Viewport } from 'next'
import { Public_Sans, Epilogue, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const publicSans = Public_Sans({ 
  subsets: ["latin"],
  variable: "--font-public-sans",
});
const epilogue = Epilogue({ 
  subsets: ["latin"],
  variable: "--font-epilogue",
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: 'Naim Rahman | Frontend Developer',
  description: 'Frontend developer transitioning from WordPress to modern JavaScript frameworks. Building scalable, performant web applications with React and Next.js.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'WordPress', 'Web Developer', 'JavaScript'],
  authors: [{ name: 'Naim Rahman' }],
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${publicSans.variable} ${epilogue.variable} ${geistMono.variable} dark bg-background`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

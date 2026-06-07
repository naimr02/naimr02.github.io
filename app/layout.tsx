import type { Metadata, Viewport } from 'next'
import { Public_Sans, Epilogue, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
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
  openGraph: {
    type: 'website',
    url: 'https://naimrahman.com',
    title: 'Naim Rahman | Frontend Developer',
    description: 'Frontend developer building scalable, performant web applications with React and Next.js.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Naim Rahman - Frontend Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naim Rahman | Frontend Developer',
    description: 'Frontend developer building scalable, performant web applications with React and Next.js.',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

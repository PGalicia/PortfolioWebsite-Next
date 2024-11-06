/**
 * Imports
 */
import type { Metadata } from 'next'
import '@/styles/globals.scss'

// Font
import { poppins } from '@/app/fonts'

// Redux
import { ReduxProvider } from '@/redux/provider'

export const metadata: Metadata = {
  title: 'Patrick Galicia | Full Stack Engineer',
  description: 'Explore my career journey and portfolio showcasing various projects, accomplishments, and skills. Discover my professional experiences and expertise in the field.',
  openGraph: {
    title: 'Patrick Galicia | Full Stack Engineer',
    description: 'Explore my career journey and portfolio showcasing various projects, accomplishments, and skills. Discover my professional experiences and expertise in the field.',
    url: 'https://www.patrickgalicia.com/',
    siteName: 'Patrick Galicia',
    images: [
      {
        url: '/images/portrait.png',
        alt: 'Patrick Galicia\'s photo',
      },
    ],
    type: "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}

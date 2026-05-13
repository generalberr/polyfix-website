import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PolyFix — Industrial Machinery & Professional Polyester Putty',
  description: 'A leading manufacturer of industrial and technological machinery — alongside our professional polyester putty trusted by bodyshops, fabricators, woodworkers, and builders worldwide.',
  keywords: 'polyfix, metal putty, polyester putty, steel repair, body filler, automotive repair, Saudi Arabia, Riyadh',
  openGraph: {
    title: 'PolyFix — Professional Metal Putty',
    description: 'Industrial-strength polyester putty for steel repair.',
    type: 'website',
    siteName: 'PolyFix',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

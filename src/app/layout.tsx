import type { Metadata } from 'next'
import ClientWrapper from 'components/ClientWrapper'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anchored By God\'s Word',
  description: 'A place to find spiritual content and inspiration.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  )
}
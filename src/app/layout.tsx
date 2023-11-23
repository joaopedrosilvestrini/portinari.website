import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import NextAuthSessionProvider from '@/providers/NextAuth'
import UIProvider from '@/providers/NextUi'
import Footer from '@/components/footer'

const mont = Montserrat({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portinari-five.vercel.app'),
  title: {
    default: 'portinari',
    template: '%s | portinari'
  },
  description: 'Site feito pelos alunos, para ajudar a classe :)',
  icons: {
    other: [
      {
        url: 'https://cdn.discordapp.com/attachments/1174065714752143451/1176722029853020312/download__2_-removebg-preview.png?ex=656fe6ca&is=655d71ca&hm=1c5807f5b9ff81f55ffa92c2b1f6cb3389760a690cee6b0835e879eae939a451&',
        sizes: '32x32',
        type: 'image/png'
      }
    ],
  },
  authors: [
    {
      name: 'João Pedro Silvestrini',
      url: 'https://subscr.vercel.app'
    }
  ],
  creator: 'João Pedro Silvestrini',
  appleWebApp: { title: 'portinari' },
  applicationName: 'portinari',
  openGraph: {
    siteName: 'portinari',
    type: 'website',
    title: 'portinari',
    locale: 'en_US',
    description: 'Site feito pelos alunos, para ajudar a classe :)'
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@joao.silvexz',
    title: 'portinari',
    description: 'Site feito pelos alunos, para ajudar a classe :)'
  },
  other: {
    'msapplication-TileColor': '#18181b',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className='dark' suppressHydrationWarning>
      <body className={mont.className}>
        <NextAuthSessionProvider>
          <UIProvider>
            <nav className="flex fixed mt-4 ml-4">
              <Navbar />
            </nav>
            <main className="min-h-[67vh]">
              {children}
            </main>
            <footer>
              <Footer />
            </footer>
          </UIProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  )
}

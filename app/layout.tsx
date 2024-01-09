import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/molecules/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Foodtuck',
  description: 'Food Restaurant & Coffee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* <Header/> */}
        {/* <div className='bg-black-2 text-white'> */}
          {children}
        {/* </div> */}
      </body>
    </html>
  )
}

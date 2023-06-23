import Header from '@/components/header/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import NextTopLoader from 'nextjs-toploader';

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Finding Manta',
  description: 'One-stop platform that helps divers find and plan their perfect diving trips',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader height={4} color='#e8f1ff'/>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

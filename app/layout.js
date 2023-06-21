import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Finding Manta',
  description: 'One-stop platform that helps divers find and plan their perfect diving trips',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body className={inter.className}>{children}</body>
      {/* Footer */}
    </html>
  )
}

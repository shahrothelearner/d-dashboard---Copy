import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import "tw-elements/dist/css/tw-elements.min.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });



export const metadata: Metadata = {
  title: 'CPF ',
  description: 'CPF , CSS, PMS ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">    
      <body className={roboto.className}>
      <Header/>
        {children}
      <Footer/>
        </body>
    </html>
  )
}

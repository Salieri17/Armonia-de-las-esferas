import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StarBackground from '@/components/StarBackground'
import MoonIndicator from '@/components/MoonIndicator'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Armonía de las Esferas | Divulgación Astronómica en Ciudad Juárez',
  description: 'Plataforma educativa de astronomía con cursos para niños y adultos, observaciones nocturnas y eventos astronómicos en Ciudad Juárez. Aprende sobre el cosmos de forma accesible y divertida.',
  keywords: 'astronomía, telescopio, estrellas, planetas, cursos astronomía, observación nocturna, Ciudad Juárez, divulgación científica',
  icons: {
    icon: '/logo-equipo.png',
    shortcut: '/logo-equipo.png',
    apple: '/logo-equipo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        <ThemeProvider>
          <StarBackground />
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
          <MoonIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Не страшный доктор | Детский стоматолог в Бендерах',
  description: 'Добрый стоматолог, к которому дети идут с улыбкой. Бережное лечение без боли. Опыт работы с детьми более 3 лет.',
  keywords: 'детский стоматолог, стоматолог для детей, лечение зубов детям, Бендеры',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}

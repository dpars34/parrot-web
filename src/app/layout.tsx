import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'material-icons/iconfont/material-icons.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'パロット：みんなの方言辞典',
  description: '日本の方言をもっと深く知りたいと思ったことはありませんか？ パロットはだれでも投稿できる方言辞典！',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

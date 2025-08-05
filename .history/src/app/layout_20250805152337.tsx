import type { Metadata } from "next"
import "./globals.css"
import { Inter } from 'next/font/google'
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] }) 

export const metadata: Metadata = {
  title: "jk-lanches",
  description: "App de pedidos pelo WhatsApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header className="bg-orange-500 text-white p-4">
          <nav className="flex justify-between items-center max-w-4xl mx-auto"></nav>
        </header>
        {children}
      </body>
    </html>
  );
}

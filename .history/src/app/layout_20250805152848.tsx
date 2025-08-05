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
          <nav className="flex justify-between items-center max-w-4xl mx-auto">
            <h1 className="text-xl font-bold">🍔 JK Lanches</h1>
            <ul className="flex gap-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/produtos">Produtos</Link></li>
              <li><Link href="/login">Login</Link></li>
              <li><Link href="/cadastro">Cadastro</Link></li>
            </ul>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto p-4">
          {children}
        </main>
        <footer className="bg-orange-100 text-orange-600 p-4 mt-10 text-sm ">
          <p className="text-center">
            &copy; {new Date().getFullYear()} JK Lanches. Todos os direitos reservados.
          </p>
        </footer>
    </html>
  );
}

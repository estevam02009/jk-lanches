import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jk Lanches',
  description: 'App de pedidos com WhatsApp',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header className="bg-orange-500 text-white p-4">
          <nav className="flex justify-between items-center max-w-4xl mx-auto">
            <h1 className="text-xl font-bold">🍔 Jk Lanches</h1>
            <ul className="flex gap-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/produtos">Lanches</Link></li>
              <li><Link href="/login">Login</Link></li>
              <li><Link href="/cadastro">Cadastro</Link></li>
            </ul>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto p-4">{children}</main>
        <footer className="bg-orange-100 text-center p-4 mt-10 text-sm text-orange-600">
          &copy; 2025 Delivery de Lanches
        </footer>
      </body>
    </html>
  );
}

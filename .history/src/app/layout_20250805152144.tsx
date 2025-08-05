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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

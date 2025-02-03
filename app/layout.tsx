import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import Navigation from "@/app/_components/Navigation";
import ReactQueryProvider from "./_lib/providers";
import { CartProvider } from "./_context/CartContext";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "E-Commerce Platform",
  description: "Shop the best products with AI-powered recommendations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className={`${inter.className} min-h-screen`}>
          <ReactQueryProvider>
            <CartProvider>
              <Navigation />
              <main>{children}</main>
            </CartProvider>
          </ReactQueryProvider>
        </body>
      </html>
    </SessionProvider>
  );
}

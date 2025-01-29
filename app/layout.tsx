import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import Navigation from "./_components/Navigation";
import ReactQueryProvider from "./_lib/providers";
import { CartProvider } from "./_context/CartContext";

export const metadata: Metadata = {
  title: "E-Commerce Platform",
  description: "Shop the best products with AI-powered recommendations",
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body>
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

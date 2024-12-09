import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import Navigation from "./_components/navigation";
import ReactQueryProvider from "./_lib/providers";

export const metadata: Metadata = {
  title: "E-Commerce Platform",
  description: "Shop the best products with AI-powered recommendations",
};

export default function RootLayout({
  children,
  sesion,
}: {
  children: React.ReactNode;
  sesion: any;
}) {
  return (
    <SessionProvider session={sesion}>
      <html lang="en">
        <body>
          <ReactQueryProvider>
            <Navigation />
            <main>{children}</main>
          </ReactQueryProvider>
        </body>
      </html>
    </SessionProvider>
  );
}

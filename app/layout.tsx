import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TanstackProvider from "@/context/TanstackProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rennacs Coding Test",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackProvider>
          {children}
        </TanstackProvider>
      </body>
    </html>
  );
}

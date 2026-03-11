import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Lora, DM_Sans } from "next/font/google";

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Portfolio de Babus",
  description: "La vie de Babus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${dmSans.variable} antialiased app-wrapper`}
      >
        <main className="max-w-6xl mx-auto px-1 ">{children}</main>
      </body>
    </html>
  );
}

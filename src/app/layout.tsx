import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CartProvider from "@/components/CartContext";
import { ToastProvider } from "@/components/ui/toast";
import { Providers } from "./admin/providers";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Royal Vending Cart - Custom Builds & Equipment",
    template: "%s | Royal Vending Cart",
  },
  description: "Premium Food Truck Supplies, custom builds, and equipment. Professional mobile kitchen solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <CartProvider>
            <ToastProvider>
              {children}
            </ToastProvider>
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}

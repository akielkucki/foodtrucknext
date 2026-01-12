import type { Metadata, Viewport } from "next";
import React from "react";

// 1. Setup a Base URL (crucial for Open Graph images to work)
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.your-domain.com";

export const metadata: Metadata = {
  // 2. Base URL for resolving relative links in metadata
  metadataBase: new URL(SITE_URL),

  // 3. Title Template: "Page Name | Food Truck Parts"
  title: {
    default: "Food Truck Parts - Custom Builds & Equipment",
    template: "%s | Food Truck Parts",
  },

  description: "Premium food truck parts, custom builds, and equipment. Professional mobile kitchen solutions for entrepreneurs and fleet managers.",

  // 4. Keywords for Search Engines
  keywords: [
    "Food Truck Parts",
    "Mobile Kitchen Equipment",
    "Custom Food Trucks",
    "Concession Trailer Parts",
    "Food Truck Repair",
    "Commercial Kitchen Supply"
  ],

  // 5. Author & Creator info
  authors: [{ name: "Your Company Name", url: SITE_URL }],
  creator: "Your Company Name",
  publisher: "Your Company Name",

  // 6. Open Graph (Facebook, LinkedIn, Discord previews)
  openGraph: {
    title: "Food Truck Parts - Custom Builds & Equipment",
    description: "Premium food truck parts and professional mobile kitchen solutions.",
    url: SITE_URL,
    siteName: "Food Truck Parts Co.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists in your public folder
        width: 1200,
        height: 630,
        alt: "Food Truck Parts and Custom Builds Preview",
      },
    ],
  },

  // 7. Twitter Card (Twitter/X previews)
  twitter: {
    card: "summary_large_image",
    title: "Food Truck Parts - Custom Builds & Equipment",
    description: "Premium food truck parts and professional mobile kitchen solutions.",
    creator: "@yourhandle", // Optional
    images: ["/og-image.jpg"],
  },

  // 8. Robots (Control crawling)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 9. Canonical URL (Prevents duplicate content issues)
  alternates: {
    canonical: "./",
  },

  // 10. Icons (Favicon config - though file-based convention is preferred in App Router)
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

// Optional: Viewport settings (Often separated from metadata in newer Next.js versions)
export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function MainLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
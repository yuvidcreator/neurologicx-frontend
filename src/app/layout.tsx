import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import JsonLd from "@/components/Common/JsonLd";
import { siteSchema } from "@/lib/schema";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.neurologicx.com"),
  title: {
    default: "NeurologicX | AI Software and Cloud Engineering",
    template: "%s | NeurologicX",
  },
  description:
    "NeurologicX Innovations Labs builds AI-powered software, web portals and e-commerce stores, and provides data engineering, DevOps and AWS, Azure and GCP cloud migration. Based in Solapur and Pune, India.",
  keywords: [
    "NeurologicX",
    "NeurologicX Innovations Labs",
    "AI powered software solutions",
    "AI software development company",
    "web portal development",
    "e-commerce website development",
    "data engineering services",
    "DevOps services",
    "cloud migration services",
    "AWS Azure GCP migration",
    "software company in Solapur",
    "software development company in Pune",
  ],
  authors: [{ name: "NeurologicX Innovations Labs" }],
  creator: "NeurologicX Innovations Labs",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    siteName: "NeurologicX",
    title: "NeurologicX | AI Software and Cloud Engineering",
    description:
      "AI-powered software, web portals, e-commerce, data engineering, DevOps and cloud migration. Based in Solapur and Pune, India.",
    url: "https://www.neurologicx.com",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeurologicX | AI Software and Cloud Engineering",
    description:
      "AI-powered software, web portals, e-commerce, data engineering, DevOps and cloud migration from Solapur and Pune, India.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <JsonLd data={siteSchema} />
        {children}
      </body>
    </html>
  );
}

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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.neurologicx.com"),
  title: {
    default: "NeurologicX — AI-Powered SaaS & Cloud Engineering",
    template: "%s | NeurologicX",
  },
  description:
    "NeurologicX Innovations Labs builds AI-powered SaaS for salons, clinics, and warehouses — and provides cloud migration & DevOps services for tech agencies across India.",
  keywords: [
    "AI SaaS India",
    "cloud migration AWS Azure GCP",
    "DevOps engineering",
    "salon management software",
    "clinic appointment software",
    "warehouse inventory management",
    "NeurologicX",
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
    title: "NeurologicX — AI-Powered SaaS & Cloud Engineering",
    description:
      "AI-powered SaaS products for salons, clinics & warehouses. Cloud migration & DevOps for tech agencies. Based in Pune, India.",
    url: "https://www.neurologicx.com",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeurologicX — AI-Powered SaaS & Cloud Engineering",
    description:
      "AI-powered SaaS products for salons, clinics & warehouses. Cloud migration & DevOps for tech agencies.",
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
        {children}
      </body>
    </html>
  );
}

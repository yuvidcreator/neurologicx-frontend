import type { Metadata } from "next";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import PageHero from "@/components/Common/PageHero";
import ProductsGrid from "@/components/Products/ProductsGrid";
import CTABanner from "@/components/Home/CTABanner";

export const metadata: Metadata = {
  title: "Products: SalonIQ, ClinicFlow and StockSense",
  description:
    "AI-powered software from NeurologicX: SalonIQ for salons and spas, ClinicFlow for clinics, and StockSense for warehouses and inventory.",
  keywords: [
    "AI powered software solutions",
    "AI SaaS products India",
    "salon management software",
    "salon booking software Pune",
    "clinic management software",
    "clinic appointment software",
    "inventory management software",
    "warehouse management software",
    "SalonIQ",
    "ClinicFlow",
    "StockSense",
    "NeurologicX",
  ],
  alternates: { canonical: "/products/" },
};

export default function ProductsPage() {
  return (
    <main className="bg-slate-950 text-white antialiased">
      <Navbar />
      <PageHero
        eyebrow="SaaS Products"
        title="AI Software Built for"
        accent="Your Industry"
        description="Three products, each built around the daily work of one industry. They take care of the repetitive tasks so your team can focus on customers."
      />
      <ProductsGrid />
      <CTABanner />
      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import PageHero from "@/components/Common/PageHero";
import ProductsGrid from "@/components/Products/ProductsGrid";
import CTABanner from "@/components/Home/CTABanner";

export const metadata: Metadata = {
  title: "Products | NeurologicX — SalonIQ, ClinicFlow, StockSense",
  description:
    "Explore NeurologicX's AI-powered SaaS products: SalonIQ for beauty salons, ClinicFlow for clinics, and StockSense for warehouse management.",
};

export default function ProductsPage() {
  return (
    <main className="bg-slate-950 text-white antialiased">
      <Navbar />
      <PageHero
        eyebrow="SaaS Products"
        title="AI Software Built for"
        accent="Your Industry"
        description="Three vertical-specific platforms — each designed to automate the exact workflows that slow your business down."
      />
      <ProductsGrid />
      <CTABanner />
      <Footer />
    </main>
  );
}

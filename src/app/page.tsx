import type { Metadata } from "next";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import HeroSection from "@/components/Home/HeroSection";
import StatsBar from "@/components/Home/StatsBar";
import ProductsTeaser from "@/components/Home/ProductsTeaser";
import ServicesOverview from "@/components/Home/ServicesOverview";
import WhyNeurologicX from "@/components/Home/WhyNeurologicX";
import ClientsSection from "@/components/Home/ClientsSection";
import CTABanner from "@/components/Home/CTABanner";

export const metadata: Metadata = {
  title: { absolute: "NeurologicX | AI Software and Cloud Engineering" },
  description:
    "AI-powered software, web portals, e-commerce stores, data engineering, DevOps and AWS, Azure and GCP cloud migration from NeurologicX, Solapur and Pune.",
  keywords: [
    "NeurologicX",
    "NeurologicX Innovations Labs",
    "AI powered software solutions",
    "AI software development company in Solapur",
    "software company in Solapur",
    "software development company in Pune",
    "custom software development",
    "web portal development",
    "e-commerce website development",
    "data engineering services",
    "DevOps services",
    "cloud migration services AWS Azure GCP",
  ],
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main className="bg-slate-950 text-white antialiased">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ProductsTeaser />
      <ServicesOverview />
      <WhyNeurologicX />
      <ClientsSection />
      <CTABanner />
      <Footer />
    </main>
  );
}

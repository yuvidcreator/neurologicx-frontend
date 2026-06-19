import type { Metadata } from "next";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import HeroSection from "@/components/Home/HeroSection";
import StatsBar from "@/components/Home/StatsBar";
import ProductsTeaser from "@/components/Home/ProductsTeaser";
import ServicesOverview from "@/components/Home/ServicesOverview";
import WhyNeurologicX from "@/components/Home/WhyNeurologicX";
import CaseStudiesTeaser from "@/components/Home/CaseStudiesTeaser";
import CTABanner from "@/components/Home/CTABanner";

export const metadata: Metadata = {
  title: "NeurologicX — AI-Powered SaaS & Cloud Engineering",
  description:
    "NeurologicX Innovations Labs builds AI-powered SaaS for salons, clinics, and warehouses — and provides cloud migration & DevOps services for tech agencies across India.",
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
      <CaseStudiesTeaser />
      <CTABanner />
      <Footer />
    </main>
  );
}

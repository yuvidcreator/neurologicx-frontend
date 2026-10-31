import type { Metadata } from "next";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import PageHero from "@/components/Common/PageHero";
import ServicesDetail from "@/components/Services/ServicesDetail";
import EngagementProcess from "@/components/Services/EngagementProcess";
import CTABanner from "@/components/Home/CTABanner";

export const metadata: Metadata = {
  title: "AI Software, Portal, E-commerce, Data and Cloud Services",
  description:
    "AI-powered software development, web portals, e-commerce stores, data engineering, DevOps and cloud migration to AWS, Azure and GCP. Solapur and Pune.",
  keywords: [
    "AI software development services",
    "AI powered software solutions",
    "custom software development company",
    "web portal development company",
    "customer portal development",
    "e-commerce website development",
    "Shopify and WooCommerce development",
    "data engineering services",
    "ETL pipeline development",
    "DevOps services",
    "CI/CD and Kubernetes consulting",
    "cloud migration services",
    "AWS migration services",
    "Azure migration services",
    "Google Cloud migration services",
    "software company in Solapur",
  ],
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <main className="bg-slate-950 text-white antialiased">
      <Navbar />
      <PageHero
        eyebrow="Services"
        title="Software, Data &"
        accent="Cloud Engineering"
        description="AI-powered software, web portals, online stores, data pipelines, cloud migrations and DevOps, built and run by one team in Solapur and Pune."
      />
      <ServicesDetail />
      <EngagementProcess />
      <CTABanner />
      <Footer />
    </main>
  );
}

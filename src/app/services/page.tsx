import type { Metadata } from "next";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import PageHero from "@/components/Common/PageHero";
import ServicesDetail from "@/components/Services/ServicesDetail";
import EngagementProcess from "@/components/Services/EngagementProcess";
import CTABanner from "@/components/Home/CTABanner";

export const metadata: Metadata = {
  title: "Cloud Migration and DevOps Services",
  description:
    "Cloud migrations to AWS, Azure and GCP, plus hands-on DevOps engineering for tech agencies and growing businesses.",
};

export default function ServicesPage() {
  return (
    <main className="bg-slate-950 text-white antialiased">
      <Navbar />
      <PageHero
        eyebrow="Agency Services"
        title="Your Cloud &"
        accent="DevOps Partner"
        description="We work as an extension of your engineering team, taking care of migrations and DevOps so your developers can stay focused on the product."
      />
      <ServicesDetail />
      <EngagementProcess />
      <CTABanner />
      <Footer />
    </main>
  );
}

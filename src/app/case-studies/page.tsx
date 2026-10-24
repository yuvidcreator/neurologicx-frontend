import type { Metadata } from "next";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import PageHero from "@/components/Common/PageHero";
import CaseStudiesGrid from "@/components/CaseStudies/CaseStudiesGrid";
import CTABanner from "@/components/Home/CTABanner";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "How salons, clinics, warehouses and software agencies got measurable results with NeurologicX products and cloud engineering.",
};

export default function CaseStudiesPage() {
  return (
    <main className="bg-slate-950 text-white antialiased">
      <Navbar />
      <PageHero
        eyebrow="Case Studies"
        title="Real Clients."
        accent="Real Results."
        description="We measure every project by what changes for the client: lower costs, faster operations and more revenue. Here are the numbers."
      />
      <CaseStudiesGrid />
      <CTABanner />
      <Footer />
    </main>
  );
}

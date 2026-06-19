import type { Metadata } from "next";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import PageHero from "@/components/Common/PageHero";
import CaseStudiesGrid from "@/components/CaseStudies/CaseStudiesGrid";
import CTABanner from "@/components/Home/CTABanner";

export const metadata: Metadata = {
  title: "Case Studies | NeurologicX — Client Success Stories",
  description:
    "See how NeurologicX helped salons, clinics, warehouses, and agencies achieve measurable results with AI-powered products and cloud engineering.",
};

export default function CaseStudiesPage() {
  return (
    <main className="bg-slate-950 text-white antialiased">
      <Navbar />
      <PageHero
        eyebrow="Case Studies"
        title="Real Clients."
        accent="Real Results."
        description="Every engagement is measured against outcomes that matter — reduced costs, faster operations, and revenue growth our clients can prove."
      />
      <CaseStudiesGrid />
      <CTABanner />
      <Footer />
    </main>
  );
}

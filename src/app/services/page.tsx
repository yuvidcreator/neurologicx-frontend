import type { Metadata } from "next";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import PageHero from "@/components/Common/PageHero";
import ServicesDetail from "@/components/Services/ServicesDetail";
import EngagementProcess from "@/components/Services/EngagementProcess";
import CTABanner from "@/components/Home/CTABanner";

export const metadata: Metadata = {
  title: "Services | NeurologicX — Cloud Migration & DevOps Engineering",
  description:
    "NeurologicX provides AWS, Azure & GCP cloud infrastructure migrations and end-to-end DevOps engineering for tech agencies and enterprises.",
};

export default function ServicesPage() {
  return (
    <main className="bg-slate-950 text-white antialiased">
      <Navbar />
      <PageHero
        eyebrow="Agency Services"
        title="Your Cloud &"
        accent="DevOps Partner"
        description="We embed with tech agencies as a dedicated engineering resource — handling migrations and DevOps so your team stays focused on shipping product."
      />
      <ServicesDetail />
      <EngagementProcess />
      <CTABanner />
      <Footer />
    </main>
  );
}

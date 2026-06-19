import type { Metadata } from "next";
import { Zap, Target, Eye, Heart, Cpu, Users, Globe } from "lucide-react";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import PageHero from "@/components/Common/PageHero";
import CTABanner from "@/components/Home/CTABanner";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About | NeurologicX Innovations Labs",
  description:
    "Learn about NeurologicX Innovations Labs — an AI & automation company from Pune building vertical SaaS products and cloud engineering services for tech agencies.",
};

const VALUES = [
  {
    Icon: Cpu,
    title: "AI-First Thinking",
    description: "We don't retrofit AI onto existing workflows — we design processes with intelligence built in from the start.",
  },
  {
    Icon: Target,
    title: "Outcome Obsessed",
    description: "Every engagement is measured by real business outcomes — reduced costs, faster operations, revenue growth.",
  },
  {
    Icon: Users,
    title: "Team Over Ego",
    description: "We embed as part of your team. Your success is our success — no silos, no client conflicts.",
  },
  {
    Icon: Heart,
    title: "Built with Care",
    description: "We take pride in clean code, reliable infrastructure, and software that people actually enjoy using.",
  },
  {
    Icon: Globe,
    title: "Local Roots, Global Standards",
    description: "Based in India, built to enterprise-grade international standards. We bring the best of both worlds.",
  },
  {
    Icon: Eye,
    title: "Radical Transparency",
    description: "No hidden costs, no scope creep surprises. We communicate early, clearly, and often.",
  },
];

const WHAT_WE_BUILD = [
  { label: "AI-Powered SaaS", desc: "Vertical software platforms for beauty, healthcare, and logistics" },
  { label: "Cloud Migrations", desc: "Zero-downtime moves to AWS, Azure & GCP" },
  { label: "DevOps Engineering", desc: "CI/CD, Kubernetes, Terraform, and observability stacks" },
  { label: "IoT Solutions", desc: "Hardware-to-cloud IoT pipelines for industrial and consumer applications" },
];

export default function AboutPage() {
  return (
    <main className="bg-slate-950 text-white antialiased">
      <Navbar />
      <PageHero
        eyebrow="About Us"
        title="We Are"
        accent="NeurologicX Innovations Labs"
        description="An AI & automation company from Pune building products that make businesses smarter — and partnerships that make agencies stronger."
      />

      {/* Story */}
      <section className="py-20 md:py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-5">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Built from a frustration with how businesses were being left behind
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  NeurologicX Innovations Labs was founded in 2025 by a group of engineers in Pune who kept seeing the same problem: small and medium businesses in India had access to powerful AI tools, but no practical way to put them to work.
                </p>
                <p>
                  Salon owners were managing appointments on WhatsApp. Clinics were running on paper tokens. Warehouses were tracking 5,000 SKUs on spreadsheets. Not because they didn&apos;t want better tools — but because the software that existed was either too expensive, too complex, or built for someone else&apos;s market entirely.
                </p>
                <p>
                  At the same time, we were watching tech agencies struggle with a different version of the same story: they needed cloud and DevOps expertise, but couldn&apos;t afford to hire senior infrastructure engineers full-time.
                </p>
                <p>
                  That&apos;s why we built two things at once: vertical SaaS products designed for India&apos;s specific business needs, and a services arm that plugs into agencies as a dedicated engineering team. One company solving both problems — because they have the same root.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {WHAT_WE_BUILD.map(({ label, desc }) => (
                <div key={label} className="p-5 bg-slate-800/40 border border-slate-700 rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center mb-3">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{label}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-blue-500/5 border border-blue-500/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center">
                  <Target className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-lg font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                To make AI and automation accessible to every business vertical in India — through purpose-built SaaS products and world-class engineering services that deliver measurable results.
              </p>
            </div>
            <div className="p-8 bg-violet-500/5 border border-violet-500/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-violet-500/15 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-violet-400" />
                </div>
                <h2 className="text-lg font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                To become the most trusted AI infrastructure company for Indian tech agencies — and the SaaS platform of choice for business owners who want technology that actually works for them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-4">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map(({ Icon, title, description }) => (
              <div key={title} className="p-6 bg-white/[0.03] border border-slate-800 hover:border-blue-500/30 rounded-2xl transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company details strip */}
      <section className="py-10 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Legal Entity</p>
            <p className="text-sm font-semibold text-white">{COMPANY.legalName}</p>
          </div>
          <div className="w-px h-8 bg-slate-700 hidden md:block" />
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Locations</p>
            <p className="text-sm font-semibold text-white">{COMPANY.location}</p>
          </div>
          <div className="w-px h-8 bg-slate-700 hidden md:block" />
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Founded</p>
            <p className="text-sm font-semibold text-white">{COMPANY.foundedYear}</p>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  );
}

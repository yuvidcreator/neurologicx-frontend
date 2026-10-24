import type { Metadata } from "next";
import { Zap, Target, Eye, Heart, Cpu, Users, Globe } from "lucide-react";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import PageHero from "@/components/Common/PageHero";
import CTABanner from "@/components/Home/CTABanner";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "NeurologicX Innovations Labs is an AI and automation company from Pune, building industry-specific SaaS products and cloud engineering services for tech agencies.",
};

const VALUES = [
  {
    Icon: Cpu,
    title: "AI-First Thinking",
    description: "We don't bolt AI onto old processes. We design the workflow around it from the start.",
  },
  {
    Icon: Target,
    title: "Focused on Outcomes",
    description: "We judge our work by what changes for you: lower costs, faster operations and more revenue.",
  },
  {
    Icon: Users,
    title: "Team Over Ego",
    description: "We work as part of your team. When you do well, we do well. No silos and no conflicts with your clients.",
  },
  {
    Icon: Heart,
    title: "Built with Care",
    description: "We care about clean code, reliable infrastructure and software that people actually like using.",
  },
  {
    Icon: Globe,
    title: "Local Roots, Global Standards",
    description: "We're based in India and hold our work to the same standard as the best teams anywhere.",
  },
  {
    Icon: Eye,
    title: "Clear Communication",
    description: "No hidden costs and no surprise scope changes. We tell you things early, plainly and often.",
  },
];

const WHAT_WE_BUILD = [
  { label: "AI-Powered SaaS", desc: "Industry software for beauty, healthcare and logistics" },
  { label: "Cloud Migrations", desc: "Carefully planned moves to AWS, Azure and GCP" },
  { label: "DevOps Engineering", desc: "CI/CD, Kubernetes, Terraform and monitoring" },
  { label: "IoT Solutions", desc: "Connecting devices and sensors to the cloud for industrial and consumer products" },
];

export default function AboutPage() {
  return (
    <main className="bg-slate-950 text-white antialiased">
      <Navbar />
      <PageHero
        eyebrow="About Us"
        title="We Are"
        accent="NeurologicX Innovations Labs"
        description="An AI and automation company from Pune. We build software that helps businesses run smoothly, and we take on the cloud work tech agencies don't have time for."
      />

      <section className="py-20 md:py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-5">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                We started because good software wasn&apos;t reaching the businesses that needed it most
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  NeurologicX Innovations Labs was founded in 2025 by a group of engineers in Pune who kept running into the same problem. Small and medium businesses in India had heard plenty about AI, but had no practical way to use it in their day-to-day work.
                </p>
                <p>
                  Salon owners were managing appointments on WhatsApp. Clinics were running on paper tokens. Warehouses were tracking 5,000 SKUs in spreadsheets. It wasn&apos;t that they didn&apos;t want better tools. The software out there was too expensive, too complicated, or built for a different market.
                </p>
                <p>
                  Around the same time, we saw tech agencies dealing with their own version of the problem. They needed cloud and DevOps skills, but couldn&apos;t justify hiring senior infrastructure engineers full-time.
                </p>
                <p>
                  So we decided to take on both. We build SaaS products around the way Indian businesses actually work, and we run a services team that plugs into agencies as their own engineering department. Two sides of one company, solving the same underlying problem.
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
                To make AI and automation practical for every kind of business in India, through software built for their industry and engineering work with results you can measure.
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
                To be the engineering partner Indian tech agencies trust first, and the software business owners choose because it simply works for them.
              </p>
            </div>
          </div>
        </div>
      </section>

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

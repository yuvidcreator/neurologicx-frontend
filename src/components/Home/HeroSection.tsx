import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">

      <div className="absolute -top-10 -left-64 w-[600px] h-[600px] bg-blue-700/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-64 w-[600px] h-[600px] bg-violet-700/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #475569 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-10">
          <Sparkles className="w-4 h-4" />
          {COMPANY.legalName}
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
          Build Smarter.{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Scale Faster.
          </span>
          <br />
          Automate Everything.
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-4 leading-relaxed">
          AI-powered SaaS products for salons, clinics, and warehouses —
          plus cloud & DevOps engineering for tech agencies.
        </p>
        <p className="text-sm md:text-base text-slate-500 max-w-lg mx-auto mb-12">
          Trusted by 15+ agency partners and growing businesses across India.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold rounded-xl transition-all shadow-xl shadow-blue-500/20 text-base w-full sm:w-auto justify-center"
          >
            Explore Products
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors text-base w-full sm:w-auto justify-center"
          >
            Partner With Us
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs text-slate-600 uppercase tracking-widest font-medium">Powered by</span>
          {["AWS", "Azure", "GCP", "Kubernetes", "Terraform"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-medium text-slate-400 bg-slate-800/80 border border-slate-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

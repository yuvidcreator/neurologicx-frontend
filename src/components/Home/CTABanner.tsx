import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function CTABanner() {
  return (
    <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">

      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-violet-600/12 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-6">Get Started Today</p>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Transform Your Business{" "}
          <br className="hidden md:block" />
          with{" "}
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            AI & Automation?
          </span>
        </h2>

        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you need a vertical SaaS product or a DevOps team to modernize your infrastructure —
          we&apos;re ready to scope your project.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold rounded-xl transition-all shadow-xl shadow-blue-500/20 text-base w-full sm:w-auto"
          >
            <Mail className="w-5 h-5" />
            Contact Us
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors text-base w-full sm:w-auto"
          >
            See Our Work
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <p className="text-xs text-slate-600">
          {COMPANY.legalName} &middot; {COMPANY.location}
        </p>
      </div>
    </section>
  );
}

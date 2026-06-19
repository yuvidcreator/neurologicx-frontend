import Link from "next/link";
import { Cloud, GitBranch, CheckCircle2, ArrowRight } from "lucide-react";
import { services } from "@/lib/services";

const SERVICE_ICONS = { Cloud, GitBranch };

export default function ServicesDetail() {
  return (
    <section className="py-16 md:py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {services.map((service) => {
          const Icon = SERVICE_ICONS[service.iconName as keyof typeof SERVICE_ICONS] ?? Cloud;
          return (
            <div
              id={service.id}
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-5 gap-8 p-8 md:p-12 bg-slate-800/30 border border-slate-700 hover:border-blue-500/30 rounded-3xl transition-colors"
            >
              <div className="lg:col-span-2 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-blue-400" />
                </div>
                {service.providers && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.providers.map((p) => (
                      <span key={p} className="text-xs font-semibold px-3 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
                        {p}
                      </span>
                    ))}
                  </div>
                )}
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{service.name}</h2>
                <p className="text-slate-400 text-base leading-relaxed mb-6 flex-1">{service.description}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold rounded-xl text-sm shadow-lg transition-all self-start"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="lg:col-span-3">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">What We Deliver</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-2.5 p-3.5 bg-slate-900/60 border border-slate-700/60 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-blue-400" />
                      <span className="text-sm text-slate-300">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

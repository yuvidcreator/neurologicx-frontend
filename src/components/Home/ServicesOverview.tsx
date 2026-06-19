import Link from "next/link";
import { Cloud, GitBranch, ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/services";

const SERVICE_ICONS = { Cloud, GitBranch };

export default function ServicesOverview() {
  return (
    <section className="py-24 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-4">Agency Services</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Engineering
            </span>{" "}
            Partner
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            We embed with tech agencies as a third-party resource — handling cloud migrations and DevOps
            so your team ships faster without hiring overheads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service) => {
            const Icon = SERVICE_ICONS[service.iconName as keyof typeof SERVICE_ICONS] ?? Cloud;
            return (
              <div
                key={service.id}
                className="flex flex-col p-8 bg-slate-800/40 border border-slate-700 hover:border-blue-500/50 rounded-2xl transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>

                {service.providers && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.providers.map((p) => (
                      <span
                        key={p}
                        className="text-xs font-medium px-2.5 py-1 bg-slate-700 text-slate-300 rounded-full"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                )}

                <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.description}</p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {service.capabilities.slice(0, 4).map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-blue-400" />
                      {cap}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 group-hover:gap-3 transition-all"
                >
                  Explore Service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors text-sm"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

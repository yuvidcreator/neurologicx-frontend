import Link from "next/link";
import { ArrowRight, TrendingUp, Quote } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";

export default function CaseStudiesGrid() {
  return (
    <section className="py-16 md:py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              href={`/case-studies/${study.slug}`}
              className="group flex flex-col p-7 bg-slate-800/40 border border-slate-700 hover:border-blue-500/50 rounded-2xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-xs font-semibold px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full">
                  {study.industry}
                </span>
                <span className="text-xs text-slate-500 font-medium">{study.serviceUsed}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{study.client}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6 line-clamp-2">{study.challenge}</p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {study.results.slice(0, 2).map((result) => (
                  <div key={result.metric} className="p-3.5 bg-slate-900 rounded-xl border border-slate-700/80">
                    <div className="flex items-center gap-1 mb-1">
                      <TrendingUp className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="text-[11px] text-slate-500 truncate">{result.metric}</span>
                    </div>
                    <div className="text-lg font-bold text-white">{result.value}</div>
                    <div className="text-[11px] text-slate-500 leading-tight mt-0.5">{result.description}</div>
                  </div>
                ))}
              </div>

              {study.testimonial && (
                <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-700/60 mb-5">
                  <Quote className="w-4 h-4 text-blue-400 mb-2" />
                  <p className="text-xs text-slate-400 italic leading-relaxed line-clamp-2">
                    {study.testimonial.quote}
                  </p>
                  <p className="text-xs text-slate-500 mt-2 font-medium">
                    — {study.testimonial.author}, {study.testimonial.role}
                  </p>
                </div>
              )}

              <div className="flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:gap-3 transition-all mt-auto">
                Read Full Case Study <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

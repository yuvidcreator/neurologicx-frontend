import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";

export default function CaseStudiesTeaser() {
  const featured = caseStudies.slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-4">Case Studies</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Real Results.{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Measured Outcomes.
            </span>
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Don&apos;t take our word for it — see exactly what our clients achieved with numbers that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featured.map((study) => (
            <Link
              key={study.id}
              href={`/case-studies/${study.slug}`}
              className="group flex flex-col p-6 bg-slate-800/40 border border-slate-700 hover:border-blue-500/50 rounded-2xl transition-all duration-300"
            >
              <span className="self-start text-xs font-semibold px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full mb-5">
                {study.industry}
              </span>

              <h3 className="text-lg font-bold text-white mb-1">{study.client}</h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed line-clamp-2">{study.challenge}</p>

              <div className="grid grid-cols-2 gap-3 mb-6 flex-1 content-start">
                {study.results.slice(0, 2).map((result) => (
                  <div key={result.metric} className="p-3 bg-slate-900 rounded-xl border border-slate-700/80">
                    <div className="flex items-center gap-1 mb-1">
                      <TrendingUp className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="text-[11px] text-slate-500 truncate">{result.metric}</span>
                    </div>
                    <div className="text-base font-bold text-white">{result.value}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:gap-3 transition-all mt-auto">
                Read Case Study <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors text-sm"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

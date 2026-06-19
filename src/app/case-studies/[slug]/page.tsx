import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, TrendingUp, Quote } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import CTABanner from "@/components/Home/CTABanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);
  if (!study) return {};
  return {
    title: `${study.client} | Case Study — NeurologicX`,
    description: study.challenge.slice(0, 155),
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);
  if (!study) notFound();

  return (
    <main className="bg-slate-950 text-white antialiased">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-16 bg-slate-950 overflow-hidden">
        <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Case Studies
          </Link>
          <div className="flex flex-wrap gap-3 mb-5">
            <span className="text-xs font-semibold px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full">
              {study.industry}
            </span>
            <span className="text-xs font-medium px-3 py-1 bg-slate-800 text-slate-400 rounded-full border border-slate-700">
              {study.serviceUsed}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{study.client}</h1>
          <p className="text-lg text-slate-300 leading-relaxed">{study.challenge}</p>
        </div>
      </section>

      {/* Results bar */}
      <section className="py-10 bg-slate-900 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {study.results.map((result) => (
              <div key={result.metric} className="text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span className="text-2xl md:text-3xl font-bold text-white">{result.value}</span>
                </div>
                <div className="text-xs font-semibold text-slate-400">{result.metric}</div>
                <div className="text-xs text-slate-500 mt-0.5">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-4">The Challenge</h2>
              <p className="text-slate-300 leading-relaxed">{study.challenge}</p>
            </div>
            <div>
              <h2 className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-4">Our Solution</h2>
              <p className="text-slate-300 leading-relaxed">{study.solution}</p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-6">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1.5 bg-slate-800 text-slate-400 rounded-full border border-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {study.testimonial && (
        <section className="py-16 bg-slate-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 md:p-10 bg-slate-800/50 border border-slate-700 rounded-2xl">
              <Quote className="w-8 h-8 text-blue-400 mb-5" />
              <p className="text-lg md:text-xl text-white leading-relaxed italic mb-6">
                &ldquo;{study.testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm">
                  {study.testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{study.testimonial.author}</p>
                  <p className="text-xs text-slate-400">{study.testimonial.role}, {study.testimonial.company}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <CTABanner />
      <Footer />
    </main>
  );
}

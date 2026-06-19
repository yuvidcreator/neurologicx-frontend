import Link from "next/link";
import { Sparkles, Stethoscope, Warehouse, CheckCircle2, ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import type { Product } from "@/types";

const ICON_MAP = { Sparkles, Stethoscope, Warehouse };

const PRODUCT_STYLES: Record<string, {
  gradient: string;
  iconBg: string;
  iconText: string;
  border: string;
  badge: string;
  orb: string;
}> = {
  saloniq: {
    gradient: "from-pink-500 to-rose-600",
    iconBg: "bg-pink-500/10",
    iconText: "text-pink-400",
    border: "border-pink-500/20 hover:border-pink-500/40",
    badge: "bg-pink-500/10 text-pink-400",
    orb: "bg-pink-600/8",
  },
  clinicflow: {
    gradient: "from-cyan-500 to-blue-600",
    iconBg: "bg-cyan-500/10",
    iconText: "text-cyan-400",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    badge: "bg-cyan-500/10 text-cyan-400",
    orb: "bg-cyan-600/8",
  },
  stocksense: {
    gradient: "from-amber-500 to-orange-600",
    iconBg: "bg-amber-500/10",
    iconText: "text-amber-400",
    border: "border-amber-500/20 hover:border-amber-500/40",
    badge: "bg-amber-500/10 text-amber-400",
    orb: "bg-amber-600/8",
  },
};

function ProductDetailCard({ product, index }: { product: Product; index: number }) {
  const Icon = ICON_MAP[product.iconName as keyof typeof ICON_MAP] ?? Sparkles;
  const styles = PRODUCT_STYLES[product.slug];
  const isEven = index % 2 === 0;

  return (
    <div
      id={product.slug}
      className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-12 bg-slate-800/30 border ${styles.border} rounded-3xl overflow-hidden transition-colors group`}
    >
      <div className={`absolute top-0 ${isEven ? "right-0" : "left-0"} w-80 h-80 ${styles.orb} rounded-full blur-3xl pointer-events-none`} />

      <div className={`relative z-10 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${styles.badge} mb-5`}>
          {product.industry}
        </span>
        <div className={`w-14 h-14 rounded-2xl ${styles.iconBg} flex items-center justify-center mb-5`}>
          <Icon className={`w-7 h-7 ${styles.iconText}`} />
        </div>
        <h2 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${styles.gradient} bg-clip-text text-transparent mb-3`}>
          {product.name}
        </h2>
        <p className="text-slate-400 text-base leading-relaxed mb-6">{product.description}</p>
        <Link
          href="/contact"
          className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${styles.gradient} text-white font-semibold rounded-xl text-sm shadow-lg transition-all hover:opacity-90`}
        >
          {product.cta}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className={`relative z-10 space-y-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
        <div>
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Features</h3>
          <ul className="space-y-2.5">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${styles.iconText}`} />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-5 border-t border-slate-700">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Best For</h3>
          <div className="flex flex-wrap gap-2">
            {product.useCases.map((u) => (
              <span key={u} className="text-xs px-3 py-1.5 bg-slate-700/60 text-slate-300 rounded-full border border-slate-600">
                {u}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsGrid() {
  return (
    <section className="py-16 md:py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {products.map((product, i) => (
          <ProductDetailCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}

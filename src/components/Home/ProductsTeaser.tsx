import Link from "next/link";
import { Sparkles, Stethoscope, Warehouse, ArrowRight, CheckCircle2 } from "lucide-react";
import { products } from "@/lib/products";
import type { Product } from "@/types";

const ICON_MAP = { Sparkles, Stethoscope, Warehouse };

const PRODUCT_STYLES: Record<string, {
  gradient: string;
  iconBg: string;
  iconText: string;
  border: string;
  badge: string;
}> = {
  saloniq: {
    gradient: "from-pink-500 to-rose-600",
    iconBg: "bg-pink-500/10",
    iconText: "text-pink-400",
    border: "border-pink-500/20 hover:border-pink-500/50",
    badge: "bg-pink-500/10 text-pink-400",
  },
  clinicflow: {
    gradient: "from-cyan-500 to-blue-600",
    iconBg: "bg-cyan-500/10",
    iconText: "text-cyan-400",
    border: "border-cyan-500/20 hover:border-cyan-500/50",
    badge: "bg-cyan-500/10 text-cyan-400",
  },
  stocksense: {
    gradient: "from-amber-500 to-orange-600",
    iconBg: "bg-amber-500/10",
    iconText: "text-amber-400",
    border: "border-amber-500/20 hover:border-amber-500/50",
    badge: "bg-amber-500/10 text-amber-400",
  },
};

function ProductCard({ product }: { product: Product }) {
  const Icon = ICON_MAP[product.iconName as keyof typeof ICON_MAP] ?? Sparkles;
  const styles = PRODUCT_STYLES[product.slug];

  return (
    <div
      className={`flex flex-col p-7 bg-slate-800/40 border ${styles.border} rounded-2xl backdrop-blur-sm transition-all duration-300 group`}
    >
      <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full ${styles.badge} mb-6`}>
        {product.industry}
      </span>

      <div className={`w-12 h-12 rounded-xl ${styles.iconBg} flex items-center justify-center mb-5`}>
        <Icon className={`w-6 h-6 ${styles.iconText}`} />
      </div>

      <h3 className={`text-2xl font-bold bg-gradient-to-r ${styles.gradient} bg-clip-text text-transparent mb-2`}>
        {product.name}
      </h3>
      <p className="text-sm text-slate-400 mb-6 leading-relaxed">{product.tagline}</p>

      <ul className="space-y-2.5 mb-8 flex-1">
        {product.features.slice(0, 3).map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
            <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${styles.iconText}`} />
            {f}
          </li>
        ))}
      </ul>

      <Link
        href={`/products/${product.slug}`}
        className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${styles.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-200`}
      >
        {product.cta}
        <ArrowRight className={`w-4 h-4 ${styles.iconText}`} />
      </Link>
    </div>
  );
}

export default function ProductsTeaser() {
  return (
    <section className="py-24 md:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-4">SaaS Products</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            AI Software Built for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Your Industry
            </span>
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Ready-to-deploy, vertical-specific SaaS platforms with AI at the core — so your business runs smoother from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors text-sm"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

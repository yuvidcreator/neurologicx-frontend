import Link from "next/link";
import { Zap, Facebook, Instagram, Linkedin } from "lucide-react";
import { COMPANY, SOCIAL_LINKS, FOOTER_LINKS } from "@/lib/constants";

const SOCIAL_ICONS = { Facebook, Instagram, Linkedin };

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">

        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-14">

          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-base font-bold text-white">NeurologicX</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs mb-6">
              {COMPANY.tagline}
            </p>
            <div className="flex gap-2.5">
              {SOCIAL_LINKS.map((s) => {
                const Icon = SOCIAL_ICONS[s.iconName as keyof typeof SOCIAL_ICONS];
                return (
                  <a
                    key={s.platform}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.platform}
                    className="w-9 h-9 flex items-center justify-center bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-lg transition-colors"
                  >
                    <Icon className="w-4 h-4 text-slate-400" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">Products</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.products.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">Legal</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">{COMPANY.location}</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { COMPANY, SOCIAL_LINKS, FOOTER_LINKS } from "@/lib/constants";

const SOCIAL_ICONS = { Facebook, Instagram, Linkedin, WhatsApp: MessageCircle, Google: MapPin };

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">

        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-14">

          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <Image src="/logo-mark.png" alt="NeurologicX logo" width={40} height={40} className="w-10 h-10" />
              <span className="text-base font-bold text-white">NeurologicX</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs mb-6">
              {COMPANY.tagline}
            </p>
            <address className="not-italic space-y-3 mb-6 text-sm text-slate-400 max-w-xs">
              <p className="font-semibold text-slate-300">{COMPANY.legalName}</p>
              <a
                href={COMPANY.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 leading-relaxed hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-slate-500" />
                {COMPANY.fullAddress}
              </a>
              <a href={COMPANY.phoneHref} className="flex items-center gap-2 py-1 hover:text-white transition-colors">
                <Phone className="w-4 h-4 shrink-0 text-slate-500" />
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 py-1 hover:text-white transition-colors">
                <Mail className="w-4 h-4 shrink-0 text-slate-500" />
                {COMPANY.email}
              </a>
            </address>
            <div className="flex flex-wrap gap-2.5">
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

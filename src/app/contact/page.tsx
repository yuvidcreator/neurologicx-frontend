import type { Metadata } from "next";
import {
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  Clock,
  MessageCircle,
  Phone,
  UserRound,
  ExternalLink,
  Navigation,
} from "lucide-react";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import PageHero from "@/components/Common/PageHero";
import { COMPANY, SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us: Phone, Address and Email",
  description:
    "Contact NeurologicX Innovations Labs, Solapur. Call or WhatsApp +91-8263931667, email info@neurologicx.com, or talk to founder Yuvraj Chandrakant Limbole.",
  keywords: [
    "contact NeurologicX",
    "NeurologicX Innovations Labs contact number",
    "NeurologicX Innovations Labs address",
    "NeurologicX Solapur",
    "+91-8263931667",
    "Yuvraj Chandrakant Limbole",
    "software company in Solapur",
    "software development company in Pune",
    "AI software development company contact",
    "hire DevOps and cloud migration engineers",
  ],
  alternates: { canonical: "/contact/" },
};

const SOCIAL_ICONS = { Linkedin, Instagram, Facebook, WhatsApp: MessageCircle, Google: MapPin };

const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  `${COMPANY.legalName}, ${COMPANY.fullAddress}`,
)}&output=embed`;

const CONTACT_CARDS = [
  {
    Icon: Phone,
    label: "Call or WhatsApp",
    value: COMPANY.phone,
    href: COMPANY.phoneHref,
    external: false,
    description: "Our primary business number.",
  },
  {
    Icon: Mail,
    label: "Email Us",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    external: false,
    description: "We reply within one business day.",
  },
  {
    Icon: MapPin,
    label: "Office Address",
    value: COMPANY.fullAddress,
    href: COMPANY.googleBusinessUrl,
    external: true,
    description: "We also work with clients in Pune and across India.",
  },
  {
    Icon: Clock,
    label: "Business Hours",
    value: "Monday to Saturday, 9 AM to 7 PM IST",
    href: null,
    external: false,
    description: "On-call support for clients with active projects.",
  },
];

const INQUIRY_TYPES = [
  { label: "AI Software Development", desc: "Custom apps, chatbots and automation built around your workflow" },
  { label: "Portal or E-commerce", desc: "Customer and vendor portals, online stores and admin dashboards" },
  { label: "Data Engineering", desc: "Pipelines, data warehouses and self-updating dashboards" },
  { label: "Cloud Migration and DevOps", desc: "Moving to AWS, Azure or GCP, CI/CD and Kubernetes" },
  { label: "Product Demo", desc: "See SalonIQ, ClinicFlow or StockSense in action" },
  { label: "Partnerships and White Label", desc: "Agency partnerships and reseller inquiries" },
];

export default function ContactPage() {
  return (
    <main className="bg-slate-950 text-white antialiased">
      <Navbar />
      <PageHero
        eyebrow="Contact"
        title="Let's Build"
        accent="Something Together"
        description="Tell us what you're working on. We'll get back to you within one business day with a clear next step."
      />

      <section className="py-16 md:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {CONTACT_CARDS.map(({ Icon, label, value, href, external, description }) => (
              <div key={label} className="p-6 bg-slate-800/40 border border-slate-700 rounded-2xl">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">{label}</h3>
                {href ? (
                  <a
                    href={href}
                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="text-base font-semibold text-white hover:text-blue-400 transition-colors break-words"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-base font-semibold text-white">{value}</p>
                )}
                <p className="text-sm text-slate-400 mt-1">{description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">What can we help with?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {INQUIRY_TYPES.map(({ label, desc }) => (
                  <div key={label} className="p-4 bg-slate-800/40 border border-slate-700 hover:border-blue-500/40 rounded-xl transition-colors">
                    <p className="text-sm font-semibold text-white mb-1">{label}</p>
                    <p className="text-xs text-slate-400">{desc}</p>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-white/5 border border-slate-700 rounded-2xl backdrop-blur-sm mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
                    <UserRound className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-blue-400 font-medium mb-1">Talk to the Founder</p>
                    <a
                      href={COMPANY.founder.url}
                      target="_blank"
                      rel="noopener"
                      className="text-lg font-semibold text-white hover:text-blue-400 transition-colors"
                    >
                      {COMPANY.founder.name}
                    </a>
                    <p className="text-sm text-slate-400">
                      {COMPANY.founder.role}, {COMPANY.legalName}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  Speak directly with our founder about your project, timeline and budget. Learn more about
                  Yuvraj&apos;s work at{" "}
                  <a
                    href={COMPANY.founder.url}
                    target="_blank"
                    rel="noopener"
                    className="text-blue-400 hover:text-blue-300 font-medium"
                  >
                    yuvraaj.in
                  </a>
                  .
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={COMPANY.phoneHref}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/25 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Call {COMPANY.phone}
                  </a>
                  <a
                    href={COMPANY.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="p-5 bg-blue-500/5 border border-blue-500/20 rounded-xl">
                <p className="text-sm text-slate-300 leading-relaxed">
                  Not sure which service fits? Email us at{" "}
                  <a href={`mailto:${COMPANY.email}`} className="text-blue-400 hover:text-blue-300 font-medium">
                    {COMPANY.email}
                  </a>{" "}
                  or call{" "}
                  <a href={COMPANY.phoneHref} className="text-blue-400 hover:text-blue-300 font-medium">
                    {COMPANY.phone}
                  </a>{" "}
                  with a few lines about your project and we&apos;ll point you in the right direction.
                </p>
              </div>
            </div>

            <div className="p-8 bg-slate-800/30 border border-slate-700 rounded-2xl">
              <h2 className="text-xl font-bold text-white mb-2">Send us a message</h2>
              <p className="text-sm text-slate-400 mb-6">
                Fill in your details and we&apos;ll reach out to schedule a call.
              </p>
              <form
                action={`mailto:${COMPANY.email}`}
                method="GET"
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-lg text-sm text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-lg text-sm text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Company</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your company name"
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-lg text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">How can we help?</label>
                  <textarea
                    name="body"
                    rows={4}
                    placeholder="A few lines about your project or question"
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-lg text-sm text-white placeholder-slate-500 outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/20 text-sm"
                >
                  Send Message
                </button>
                <p className="text-[11px] text-slate-500 text-center">
                  This opens your email app. You can also write to us directly at {COMPANY.email}.
                </p>
              </form>

              <div className="mt-7 pt-6 border-t border-slate-700">
                <p className="text-xs text-slate-500 mb-3">Find us on social</p>
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
                        className="w-9 h-9 flex items-center justify-center bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                      >
                        <Icon className="w-4 h-4 text-slate-400" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-6 md:p-8 bg-slate-800/30 border border-slate-700 rounded-2xl flex flex-col">
              <p className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-3">Find Us</p>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-5">{COMPANY.legalName}</h2>
              <address className="not-italic space-y-4 text-sm text-slate-300 leading-relaxed flex-1">
                <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-blue-400" />
                  {COMPANY.fullAddress}
                </p>
                <a href={COMPANY.phoneHref} className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 shrink-0 text-blue-400" />
                  {COMPANY.phone}
                </a>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 shrink-0 text-blue-400" />
                  {COMPANY.email}
                </a>
              </address>
              <a
                href={COMPANY.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors text-sm"
              >
                <Navigation className="w-4 h-4" />
                Get Directions on Google
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="lg:col-span-2 h-80 md:h-96 lg:h-auto lg:min-h-[400px] overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
              <iframe
                src={MAP_EMBED_URL}
                title={`${COMPANY.legalName} on Google Maps`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

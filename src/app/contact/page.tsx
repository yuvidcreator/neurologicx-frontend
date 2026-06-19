import type { Metadata } from "next";
import { Mail, MapPin, Linkedin, Instagram, Facebook, Clock } from "lucide-react";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import PageHero from "@/components/Common/PageHero";
import { COMPANY, SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact | NeurologicX",
  description:
    "Get in touch with NeurologicX Innovations Labs. Whether you need a SaaS product demo or want to discuss a cloud migration — we respond within one business day.",
};

const SOCIAL_ICONS = { Linkedin, Instagram, Facebook };

const CONTACT_CARDS = [
  {
    Icon: Mail,
    label: "Email Us",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    description: "We respond within one business day.",
  },
  {
    Icon: MapPin,
    label: "Locations",
    value: COMPANY.location,
    href: null,
    description: "Serving clients across India and globally.",
  },
  {
    Icon: Clock,
    label: "Business Hours",
    value: "Mon – Sat, 9:00 AM – 7:00 PM IST",
    href: null,
    description: "On-call support available for active engagements.",
  },
];

const INQUIRY_TYPES = [
  { label: "SaaS Product Demo", desc: "See SalonIQ, ClinicFlow, or StockSense in action" },
  { label: "Cloud Migration", desc: "AWS, Azure, or GCP migration scoping" },
  { label: "DevOps Engagement", desc: "CI/CD, Kubernetes, or IaC setup" },
  { label: "Partnership / White-label", desc: "Agency partnership and reseller inquiries" },
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {CONTACT_CARDS.map(({ Icon, label, value, href, description }) => (
              <div key={label} className="p-6 bg-slate-800/40 border border-slate-700 rounded-2xl">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">{label}</h3>
                {href ? (
                  <a href={href} className="text-base font-semibold text-white hover:text-blue-400 transition-colors">
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
              <div className="p-5 bg-blue-500/5 border border-blue-500/20 rounded-xl">
                <p className="text-sm text-slate-300 leading-relaxed">
                  Not sure which service fits? Email us at{" "}
                  <a href={`mailto:${COMPANY.email}`} className="text-blue-400 hover:text-blue-300 font-medium">
                    {COMPANY.email}
                  </a>{" "}
                  with a brief description of your project and we&apos;ll point you in the right direction.
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
                    placeholder="Briefly describe your project or question..."
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
                  This will open your email client. Alternatively, email us directly at {COMPANY.email}
                </p>
              </form>

              <div className="mt-7 pt-6 border-t border-slate-700">
                <p className="text-xs text-slate-500 mb-3">Find us on social</p>
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

      <Footer />
    </main>
  );
}

import { Cpu, Shield, TrendingUp, Users, Clock, Headphones } from "lucide-react";

const WHY_POINTS = [
  {
    Icon: Cpu,
    title: "AI-First Architecture",
    description:
      "Every product and service is designed with AI at its core — not bolted on as an afterthought.",
  },
  {
    Icon: TrendingUp,
    title: "Proven ROI",
    description:
      "Our case studies show measurable outcomes: reduced costs, faster operations, and real revenue growth.",
  },
  {
    Icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "SOC2-aligned practices, encrypted data pipelines, and cloud security hardening on every engagement.",
  },
  {
    Icon: Users,
    title: "Agency-Friendly Model",
    description:
      "White-label ready. We work as an extension of your team — no client conflicts, full confidentiality.",
  },
  {
    Icon: Clock,
    title: "Rapid Deployment",
    description:
      "From onboarding to go-live in days, not months. Our battle-tested playbooks cut wasted cycles.",
  },
  {
    Icon: Headphones,
    title: "Ongoing Support",
    description:
      "Post-launch monitoring, SLA-backed incident response, and continuous improvement — we don't disappear after delivery.",
  },
];

export default function WhyNeurologicX() {
  return (
    <section className="py-24 md:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-4">Why Choose Us</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Built for Teams That{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Can&apos;t Afford to Fail
            </span>
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Whether you run a busy clinic or lead a 40-person agency — we&apos;ve solved your problem before,
            and we have a repeatable system for it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_POINTS.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="p-6 bg-white/[0.03] border border-slate-800 hover:border-blue-500/30 rounded-2xl transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                <Icon className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Cpu, Shield, TrendingUp, Users, Clock, Headphones } from "lucide-react";

const WHY_POINTS = [
  {
    Icon: Cpu,
    title: "AI Built In",
    description:
      "AI isn't an add-on in our products. Forecasting, smart scheduling and automated reminders are part of how they work from day one.",
  },
  {
    Icon: TrendingUp,
    title: "Results You Can Measure",
    description:
      "Our case studies show the numbers: fewer no-shows, shorter waiting times, faster deployments and lower cloud bills.",
  },
  {
    Icon: Shield,
    title: "Security by Default",
    description:
      "Data is encrypted, access is role-based, and every cloud setup we hand over is hardened before it goes live.",
  },
  {
    Icon: Users,
    title: "Agency Friendly",
    description:
      "We can work under your brand as part of your team. Your clients stay your clients, and everything stays confidential.",
  },
  {
    Icon: Clock,
    title: "Quick to Get Started",
    description:
      "Onboarding to go-live takes days, not months. We've done this setup many times, so there's very little guesswork.",
  },
  {
    Icon: Headphones,
    title: "We Stay After Launch",
    description:
      "Monitoring, incident response and regular improvements carry on after handover. We don't disappear once the project is delivered.",
  },
];

export default function WhyNeurologicX() {
  return (
    <section className="py-24 md:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-4">Why NeurologicX</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Software and Engineering{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              You Can Rely On
            </span>
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Whether you run a busy clinic or a growing software agency, chances are we&apos;ve solved your
            problem before. Every project gets the same tested process.
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

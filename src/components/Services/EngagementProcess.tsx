const STEPS = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We start with a focused conversation to understand your current infrastructure, pain points, and goals. No generic questionnaires — just an engineer talking to your team.",
  },
  {
    step: "02",
    title: "Architecture Audit",
    description:
      "Our team performs a deep assessment of your existing stack, identifies migration risks, maps cloud costs, and designs the target architecture tailored to your workloads.",
  },
  {
    step: "03",
    title: "Build & Execute",
    description:
      "We execute the migration or DevOps buildout with a zero-downtime strategy. Every step is documented, tested, and reviewed before cutover — no surprises on go-live day.",
  },
  {
    step: "04",
    title: "Monitor & Support",
    description:
      "Post-launch, we set up full observability — dashboards, alerts, and on-call response. SLA-backed support ensures your infrastructure stays healthy long after handover.",
  },
];

export default function EngagementProcess() {
  return (
    <section className="py-20 md:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-4">How We Engage</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            From First Call to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Production
            </span>
          </h2>
          <p className="text-slate-300 leading-relaxed">
            A repeatable process that de-risks migrations and DevOps modernizations at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map(({ step, title, description }, i) => (
            <div key={step} className="relative flex flex-col p-6 bg-slate-800/40 border border-slate-700 rounded-2xl">
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-gradient-to-r from-slate-600 to-transparent z-10" />
              )}
              <span className="text-4xl font-black bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-4 leading-none">
                {step}
              </span>
              <h3 className="text-base font-semibold text-white mb-3">{title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

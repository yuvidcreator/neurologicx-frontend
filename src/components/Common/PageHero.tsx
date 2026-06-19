interface PageHeroProps {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
}

export default function PageHero({ eyebrow, title, accent, description }: PageHeroProps) {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-slate-950 overflow-hidden">
      <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-1/3 w-[500px] h-[500px] bg-violet-700/10 rounded-full blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #475569 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-5">{eyebrow}</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
          {accent && (
            <>
              {" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                {accent}
              </span>
            </>
          )}
        </h1>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">{description}</p>
      </div>
    </section>
  );
}

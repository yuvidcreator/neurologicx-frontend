import { MapPin } from "lucide-react";
import { clients } from "@/lib/clients";

export default function ClientsSection() {
  return (
    <section id="clients" className="py-20 md:py-28 bg-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-4">Our Clients</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Local Businesses
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            Businesses in Pune that work with NeurologicX today.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {clients.map((client) => (
            <div
              key={client.name}
              className="p-6 md:p-8 bg-white/5 border border-slate-700 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-colors"
            >
              <span className="inline-block text-xs font-semibold px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full mb-4">
                {client.industry}
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{client.name}</h3>
              <p className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-slate-500" />
                {client.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FileText, Users, ClipboardList, Wallet, Star, type LucideIcon } from "lucide-react";

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { icon: FileText, value: "+2.000", label: "Declarações de IRPF já realizadas" },
  { icon: Users, value: "+600", label: "Clientes atendidos em diversos segmentos" },
  { icon: ClipboardList, value: "+8.000", label: "Folhas de pagamento processadas mensalmente" },
  { icon: Wallet, value: "+R$ 500 mi", label: "Processados em nossa base de clientes" },
  { icon: Star, value: "NPS 9,3", label: "Índice de satisfação dos nossos clientes" },
];

const StatsSection = () => {
  return (
    <section className="section-dark relative overflow-hidden">
      <div className="absolute inset-0 pattern-isotype opacity-[0.05] pointer-events-none" />
      <div className="container-wide relative py-20 md:py-24">
        <div className="max-w-3xl mb-14 reveal">
          <p className="text-xs tracking-[0.3em] text-gold mb-3">Mais que números</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Mais que Números. <span className="text-gold">Confiabilidade.</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-white/75 max-w-2xl leading-relaxed">
            A confiança que construímos com nossos clientes se reflete nos
            resultados que alcançamos. Nossa trajetória é marcada por grandes
            conquistas que atestam nossa competência e seriedade.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {STATS.map((s) => (
            <article
              key={s.label}
              className="border border-white/10 bg-white/[0.03] p-6 hover:border-gold/60 transition-colors reveal"
            >
              <s.icon size={24} className="text-gold mb-5" strokeWidth={1.5} />
              <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {s.value}
              </div>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{s.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

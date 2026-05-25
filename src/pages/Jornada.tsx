import { useEffect } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTABlock from "@/components/CTABlock";
import {
  Phone, Search, ClipboardList, Settings, LineChart,
  HeartHandshake, Briefcase, Wrench, GraduationCap, CalendarCheck,
} from "lucide-react";
import { WHATS } from "@/data/contact";

const STEPS = [
  { icon: Phone, title: "Contato Inicial", text: "Conversa breve para entender seu momento e seus objetivos." },
  { icon: Search, title: "Diagnóstico Gratuito", text: "Análise da sua operação contábil, tributária e financeira." },
  { icon: ClipboardList, title: "Planejamento Personalizado", text: "Plano sob medida com prioridades, prazos e responsáveis." },
  { icon: Settings, title: "Execução e Implementação", text: "Implantação com tecnologia, processos e equipe próxima." },
  { icon: LineChart, title: "Acompanhamento Contínuo", text: "Reuniões periódicas, indicadores e melhoria contínua." },
];

const DIFFERENTIALS = [
  { icon: HeartHandshake, title: "Suporte Humanizado e Ilimitado", text: "Atendimento próximo, sem limite de tickets ou ligações." },
  { icon: Briefcase, title: "Atendimento Especializado para o seu Segmento", text: "Profissionais que entendem do seu mercado e dos seus desafios." },
  { icon: Wrench, title: "Ferramentas de Gestão Acessíveis", text: "Plataformas integradas, intuitivas e disponíveis em qualquer lugar." },
  { icon: GraduationCap, title: "Treinamentos para a sua Equipe", text: "Capacitamos seu time para aproveitar ao máximo as ferramentas." },
  { icon: CalendarCheck, title: "Visitas Periódicas (Presenciais ou Virtuais)", text: "Encontros recorrentes para alinhar resultados e próximos passos." },
];

const Jornada = () => {
  useEffect(() => { document.title = "Jornada do Cliente — Bumax Contabilidade"; }, []);

  return (
    <Layout>
      <PageHero
        eyebrow="Jornada"
        title="Como trabalhamos com você."
        subtitle="Um processo claro, do primeiro contato à evolução contínua dos resultados."
      />

      <section className="section-light">
        <div className="container-wide py-20 md:py-24">
          {/* Desktop horizontal */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute top-10 left-10 right-10 h-px bg-gold/30" aria-hidden />
              <div className="grid grid-cols-5 gap-6">
                {STEPS.map((s, i) => (
                  <div key={s.title} className="relative reveal">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative z-10 h-20 w-20 bg-white border border-gold flex items-center justify-center">
                        <s.icon size={26} className="text-gold" strokeWidth={1.5} />
                      </div>
                      <div className="mt-4 text-2xl font-extrabold text-gold">0{i + 1}</div>
                      <h3 className="mt-2 text-base font-bold text-ink">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile vertical */}
          <ol className="lg:hidden space-y-6 border-l border-gold/40 pl-6">
            {STEPS.map((s, i) => (
              <li key={s.title} className="relative reveal">
                <span className="absolute -left-[31px] top-1 h-3 w-3 bg-gold" />
                <div className="flex items-center gap-3">
                  <span className="text-xl font-extrabold text-gold">0{i + 1}</span>
                  <s.icon size={20} className="text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="mt-2 text-lg font-bold text-ink">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Tecnologia + atendimento humano */}
      <section className="section-dark relative overflow-hidden">
        <div className="absolute inset-0 pattern-isotype opacity-[0.05] pointer-events-none" />
        <div className="container-wide relative py-20 md:py-24">
          <div className="max-w-3xl mb-14 reveal">
            <p className="text-xs tracking-[0.3em] text-gold mb-3">Nossos diferenciais</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Tecnologia de Ponta, <span className="text-gold">Atendimento Humano</span>.
            </h2>
            <p className="mt-5 text-base md:text-lg text-white/75 leading-relaxed">
              Na BUMAX, a inovação anda de mãos dadas com a proximidade.
              Acreditamos que o melhor da tecnologia só funciona com um
              relacionamento humanizado e um suporte personalizado.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DIFFERENTIALS.map((d) => (
              <article
                key={d.title}
                className="border border-white/10 bg-white/[0.03] p-6 hover:border-gold/60 transition-colors reveal"
              >
                <d.icon size={26} className="text-gold mb-4" strokeWidth={1.5} />
                <h3 className="text-base font-bold text-white mb-2">{d.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{d.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        title="Pronto para começar sua jornada?"
        buttonLabel="Iniciar diagnóstico"
        buttonHref={WHATS}
      />
    </Layout>
  );
};

export default Jornada;

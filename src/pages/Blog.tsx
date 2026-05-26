import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { ArrowRight } from "lucide-react";

const CATEGORIES = ["Todos", "Tributário", "Financeiro", "Gestão", "Empreendedorismo"];

const POSTS = [
  { cat: "Tributário", title: "Como escolher o regime tributário ideal em 2025", excerpt: "Simples, Lucro Presumido ou Real? Entenda os critérios que mais impactam.", date: "12 Mar 2025" },
  { cat: "Financeiro", title: "Fluxo de caixa: o termômetro da sua empresa", excerpt: "Por que acompanhar diariamente muda completamente a forma de decidir.", date: "02 Mar 2025" },
  { cat: "Gestão", title: "5 indicadores que todo sócio precisa olhar", excerpt: "KPIs simples, poderosos e que dizem muito sobre a saúde do negócio.", date: "20 Fev 2025" },
  { cat: "Empreendedorismo", title: "Abrindo uma empresa: por onde começar?", excerpt: "O passo a passo prático para uma constituição estratégica.", date: "10 Fev 2025" },
  { cat: "Tributário", title: "Recuperação de créditos: o que sua empresa pode reaver", excerpt: "Um diagnóstico pode revelar valores significativos para o caixa.", date: "01 Fev 2025" },
  { cat: "Financeiro", title: "BPO Financeiro: vale a pena para sua empresa?", excerpt: "Quando faz sentido terceirizar a operação financeira.", date: "20 Jan 2025" },
];

const Blog = () => {
  const [active, setActive] = useState("Todos");
  useEffect(() => { document.title = "Blog — Bumax Contabilidade"; }, []);

  const filtered = active === "Todos" ? POSTS : POSTS.filter((p) => p.cat === active);

  return (
    <Layout>
      <PageHero
        eyebrow="Conteúdo"
        title="Conhecimento para quem decide."
        subtitle="Artigos, materiais e insights sobre contabilidade, tributação e gestão."
      />

      <section className="section-light">
        <div className="container-wide py-16 md:py-20">
          <div className="flex flex-wrap gap-2 mb-12">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 text-xs font-semibold border transition-colors ${active === c
                  ? "bg-ink text-white border-ink"
                  : "bg-white text-ink border-border hover:border-gold hover:text-gold"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <article key={p.title} className="bg-white border border-border overflow-hidden hover:border-gold transition-colors reveal">
                <div className="aspect-[16/10] bg-mist relative overflow-hidden">
                  <div className="absolute inset-0 pattern-isotype opacity-[0.18]" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="text-gold font-bold tracking-[0.2em] uppercase">{p.cat}</span>
                    <span className="text-muted-foreground">{p.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2 leading-snug">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                  <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    Ler artigo <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

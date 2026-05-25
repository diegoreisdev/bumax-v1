import { useEffect } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import VideoTestimonialCard from "@/components/VideoTestimonialCard";
import CTABlock from "@/components/CTABlock";
import { Quote } from "lucide-react";
import { VIDEO_TESTIMONIALS, FULL_TESTIMONIALS } from "@/data/testimonials";
import { WHATS } from "@/data/contact";

const METRICS = [
  { value: "+R$ 5 mi", label: "Em impostos recuperados" },
  { value: "+600", label: "Empresas atendidas" },
  { value: "NPS 9,3", label: "Satisfação dos clientes" },
  { value: "+8.000", label: "Folhas processadas/mês" },
];

const Resultados = () => {
  useEffect(() => {
    document.title = "Resultados — Bumax Contabilidade";
  }, []);

  return (
    <Layout>
      <PageHero
        eyebrow="Resultados"
        title="A Confiança que Gera Resultados."
        subtitle="Histórias reais de empresas que cresceram com a parceria estratégica da Bumax."
      />

      {/* Métricas */}
      <section className="section-mist">
        <div className="container-wide py-20 md:py-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {METRICS.map((m) => (
              <div key={m.label} className="bg-white border-l-2 border-gold p-8 reveal">
                <div className="text-3xl md:text-4xl font-extrabold text-ink">{m.value}</div>
                <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos em vídeo */}
      <section className="section-light">
        <div className="container-wide py-20 md:py-24">
          <div className="max-w-2xl mb-14 reveal">
            <p className="text-xs tracking-[0.3em] text-gold mb-3">Em vídeo</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink">
              O que dizem nossos clientes.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {VIDEO_TESTIMONIALS.map((t) => (
              <VideoTestimonialCard key={t.id} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos completos */}
      <section className="section-mist">
        <div className="container-wide py-20 md:py-24">
          <div className="max-w-2xl mb-14 reveal">
            <p className="text-xs tracking-[0.3em] text-gold mb-3">Cases reais</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink">
              Parcerias que fazem a diferença.
            </h2>
          </div>
          <div className="grid md:grid-cols-1 gap-6 max-w-5xl">
            {FULL_TESTIMONIALS.map((t, i) => (
              <article key={i} className="bg-white border border-border p-8 md:p-10 reveal">
                <Quote size={36} className="text-gold mb-5" strokeWidth={1.5} />
                <p className="text-lg md:text-xl font-bold text-ink leading-snug mb-5">
                  “{t.headline}”
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                  {t.text}
                </p>
                <div className="flex items-center gap-4 pt-5 border-t border-border">
                  <div className="h-12 w-12 rounded-full bg-ink text-white flex items-center justify-center font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        title="Quer ser o próximo case Bumax?"
        buttonLabel="Quero conversar"
        buttonHref={WHATS}
      />
    </Layout>
  );
};

export default Resultados;

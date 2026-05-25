import { Lightbulb, Cpu, HeartHandshake, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServiceCard from "@/components/ServiceCard";
import VideoTestimonialCard from "@/components/VideoTestimonialCard";
import CTABlock from "@/components/CTABlock";
import LeadForm from "@/components/LeadForm";
import { SERVICES, SEGMENTS } from "@/data/services";
import { VIDEO_TESTIMONIALS } from "@/data/testimonials";
import { WHATS } from "@/data/contact";

const PILLARS = [
  {
    icon: Lightbulb,
    title: "Contabilidade Consultiva",
    text: "Não entregamos só números: traduzimos dados em decisões para o seu crescimento.",
  },
  {
    icon: Cpu,
    title: "Tecnologia e Inovação",
    text: "Plataformas integradas, automação e dashboards em tempo real para sua gestão.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Humanizado",
    text: "Time próximo, comunicação ágil e relacionamento real com sócios e gestores.",
  },
];

const Index = () => {
  return (
    <Layout>
      <HeroSection />

      {/* Proposta de valor */}
      <section className="section-mist">
        <div className="container-wide py-20 md:py-24">
          <div className="max-w-2xl mb-14 reveal">
            <p className="text-xs tracking-[0.3em] text-gold mb-3">Por que Bumax</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink">
              Três pilares que sustentam cada entrega.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PILLARS.map((p) => (
              <article key={p.title} className="bg-white border-l-2 border-gold p-8 reveal">
                <p.icon size={28} strokeWidth={1.5} className="text-gold mb-5" />
                <h3 className="text-xl font-bold text-ink mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Serviços */}
      <section className="section-light">
        <div className="container-wide py-20 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl reveal">
              <p className="text-xs tracking-[0.3em] text-gold mb-3">Serviços</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink">
                Soluções Completas para a Gestão do seu Negócio.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Conheça nossa lista de serviços e descubra como a BUMAX pode
                transformar a gestão da sua empresa.
              </p>
            </div>
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-gold transition-colors reveal"
            >
              Ver todos os serviços
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <ServiceCard
                key={s.slug}
                icon={s.icon}
                title={s.title}
                description={s.description}
                href={`/servicos/${s.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Segmentos */}
      <section className="section-mist">
        <div className="container-wide py-20 md:py-24">
          <div className="max-w-2xl mb-14 reveal">
            <p className="text-xs tracking-[0.3em] text-gold mb-3">Segmentos</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink">
              Atendemos quem move a economia real.
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {SEGMENTS.map((seg) => (
              <div
                key={seg.label}
                className="bg-white border border-border p-6 flex flex-col items-center text-center gap-3 hover:border-gold transition-colors reveal"
              >
                <seg.icon size={26} strokeWidth={1.5} className="text-gold" />
                <span className="text-sm font-semibold text-ink">{seg.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos em vídeo */}
      <section className="section-light">
        <div className="container-wide py-20 md:py-24">
          <div className="max-w-2xl mb-14 reveal">
            <p className="text-xs tracking-[0.3em] text-gold mb-3">Depoimentos</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink">
              Quem confia na Bumax conta a sua história.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Histórias reais de empresários que cresceram com a nossa parceria.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {VIDEO_TESTIMONIALS.map((t) => (
              <VideoTestimonialCard key={t.id} {...t} />
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        title="Pronto para levar sua empresa ao próximo nível?"
        subtitle="Agende agora uma conversa com nossos especialistas. Sem compromisso."
        buttonLabel="Agendar Diagnóstico Gratuito"
        buttonHref={WHATS}
      />
    </Layout>
  );
};

export default Index;

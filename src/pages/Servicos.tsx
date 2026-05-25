import { useEffect } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CTABlock from "@/components/CTABlock";
import { SERVICES } from "@/data/services";
import { WHATS } from "@/data/contact";

const Servicos = () => {
  useEffect(() => {
    document.title = "Serviços — Bumax Contabilidade";
  }, []);

  return (
    <Layout>
      <PageHero
        eyebrow="Serviços"
        title="Soluções Completas para a Gestão do seu Negócio."
        subtitle="Conheça nossa lista de serviços e descubra como a BUMAX pode transformar a gestão da sua empresa."
      />

      <section className="section-light">
        <div className="container-wide py-20 md:py-24">
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

      <CTABlock
        title="Não sabe qual serviço é ideal para você?"
        subtitle="Faça um diagnóstico gratuito com nosso time."
        buttonLabel="Quero meu diagnóstico"
        buttonHref={WHATS}
      />
    </Layout>
  );
};

export default Servicos;

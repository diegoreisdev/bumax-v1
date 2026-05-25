import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Check, ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTABlock from "@/components/CTABlock";
import { SERVICES } from "@/data/services";
import { WHATS } from "@/data/contact";


const ServicoDetalhe = () => {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  useEffect(() => {
    document.title = service
      ? `${service.title} — Bumax Contabilidade`
      : "Serviço — Bumax Contabilidade";
  }, [service]);

  if (!service) {
    return (
      <Layout>
        <PageHero title="Serviço não encontrado" subtitle="O serviço que você procura pode ter sido movido." />
        <div className="container-wide py-20 text-center">
          <Link to="/servicos" className="inline-flex items-center gap-2 text-gold font-semibold">
            <ArrowLeft size={16} /> Ver todos os serviços
          </Link>
        </div>
      </Layout>
    );
  }

  const Icon = service.icon;

  return (
    <Layout>
      <PageHero eyebrow="Serviço" title={service.title} subtitle={service.description} />

      <section className="section-light">
        <div className="container-wide py-20 md:py-24 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 reveal">
            <div className="inline-flex h-14 w-14 items-center justify-center border border-gold text-gold mb-6">
              <Icon size={24} strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-ink mb-4">
              Benefícios principais
            </h2>
            <ul className="space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-ink">
                  <Check size={18} className="text-gold mt-1 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 text-xl font-bold text-ink mb-3">Para quem é indicado</h3>
            <p className="text-muted-foreground leading-relaxed">{service.audience}</p>
          </div>

          <aside className="bg-mist p-8 h-fit reveal">
            <h3 className="text-xl font-bold text-ink mb-3">Quer esse serviço?</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Fale com um especialista Bumax e receba uma proposta personalizada.
            </p>
            <a
              href={WHATS}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-gold text-white px-6 py-3.5 text-sm font-semibold hover:bg-gold/90 transition-colors"
            >
              Quero esse serviço
            </a>
            <Link
              to="/servicos"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-gold transition-colors"
            >
              <ArrowLeft size={14} /> Outros serviços
            </Link>
          </aside>
        </div>
      </section>

      <CTABlock
        title="Vamos conversar sobre o seu caso?"
        buttonLabel="Falar no WhatsApp"
        buttonHref={WHATS}
      />
    </Layout>
  );
};

export default ServicoDetalhe;

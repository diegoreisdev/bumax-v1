import { useEffect } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import LeadForm from "@/components/LeadForm";
import FAQAccordion from "@/components/FAQAccordion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { OFFICES, PHONES, EMAIL, WHATS } from "@/data/contact";

const FAQ = [
  { q: "Como funciona o diagnóstico gratuito?", a: "Em uma conversa de até 30 minutos, mapeamos sua operação e identificamos oportunidades. Sem compromisso." },
  { q: "Atendem empresas de outros estados?", a: "Sim. Atendemos clientes em diversos estados (Bahia, Alagoas, Sergipe, Pernambuco, Paraíba, MG, RJ, ES, SP e SC) com tecnologia e processos remotos." },
  { q: "Vocês ajudam na migração de outra contabilidade?", a: "Sim, conduzimos toda a migração com responsabilidade e sem dor de cabeça para você." },
];

const Contato = () => {
  useEffect(() => { document.title = "Contato — Bumax Contabilidade"; }, []);

  return (
    <Layout>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar."
        subtitle="Escolha o melhor canal e fale com nosso time de especialistas."
      />

      <section className="section-light">
        <div className="container-wide py-20 md:py-24 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 reveal">
            <h2 className="text-2xl md:text-3xl font-extrabold text-ink mb-2">
              Envie sua mensagem
            </h2>
            <p className="text-muted-foreground mb-8">Retornamos em até 1 dia útil.</p>
            <LeadForm variant="light" showSubject showMessage buttonLabel="Enviar mensagem" />
          </div>

          <aside className="space-y-6 reveal">
            {OFFICES.map((o) => (
              <div key={o.city} className="bg-mist p-6">
                <div className="flex items-start gap-4">
                  <MapPin size={22} className="text-gold mt-1 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-ink">{o.city}</p>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {o.address}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-mist p-6">
              <div className="flex items-start gap-4">
                <Phone size={22} className="text-gold mt-1 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-ink">Telefones</p>
                  <ul className="mt-1 space-y-1">
                    {PHONES.map((p) => (
                      <li key={p.label}>
                        <a href={p.href} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                          {p.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-mist p-6">
              <div className="flex items-start gap-4">
                <Mail size={22} className="text-gold mt-1 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-ink">E-mail</p>
                  <a href={`mailto:${EMAIL}`} className="text-sm text-muted-foreground mt-1 hover:text-gold transition-colors">
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>

            <a
              href={WHATS}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gold text-white px-6 py-4 text-sm font-semibold hover:bg-gold/90 transition-colors"
            >
              <MessageCircle size={18} /> Falar pelo WhatsApp
            </a>
          </aside>
        </div>
      </section>

      <section className="section-mist">
        <div className="container-wide py-16 md:py-20 grid md:grid-cols-2 gap-6">
          {OFFICES.map((o) => (
            <div key={o.city} className="reveal">
              <p className="text-sm font-bold text-ink mb-3">{o.city}</p>
              <div className="aspect-[16/10] w-full overflow-hidden border border-border">
                <iframe
                  title={`Mapa Bumax — ${o.city}`}
                  src={`https://www.google.com/maps?q=${o.mapsQuery}&output=embed`}
                  loading="lazy"
                  className="w-full h-full"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-light">
        <div className="container-wide py-20 md:py-24 max-w-3xl">
          <p className="text-xs tracking-[0.3em] text-gold mb-3 reveal">Perguntas frequentes</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-10 reveal">
            Antes de falar com a gente.
          </h2>
          <FAQAccordion items={FAQ} />
        </div>
      </section>
    </Layout>
  );
};

export default Contato;

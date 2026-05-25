import { useEffect } from "react";
import { Target, Eye, Gem, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTABlock from "@/components/CTABlock";
import { STATES_SERVED, WHATS } from "@/data/contact";
import founderRayran from "@/assets/founder-rayran.jpg";
import founderRaisa from "@/assets/founder-raisa.jpg";
import founderMichael from "@/assets/founder-michael.jpg";

const TIMELINE = [
  { year: "2014", text: "Nascimento da BUMAX a partir da Bureau, em Paulo Afonso (BA)." },
  { year: "2017", text: "Expansão para consultoria tributária e BPO financeiro." },
  { year: "2020", text: "Digitalização completa: tecnologia, dashboards e atendimento remoto." },
  { year: "2023", text: "Abertura do escritório de João Pessoa (PB) e expansão nacional." },
  { year: "2025", text: "+600 clientes ativos em 10 estados, com NPS 9,3." },
];

const VALUES = [
  { icon: Target, title: "Missão", text: "Oferecer contabilidade moderna, estratégica e de alto padrão, com confiança e solidez." },
  { icon: Eye, title: "Visão", text: "Ser referência em qualidade, confiança e exclusividade no mercado contábil brasileiro." },
  { icon: Gem, title: "Valores", text: "Ética, excelência, inovação, proximidade e compromisso real com cada cliente." },
];

const FOUNDERS = [
  { name: "Michael Almeida", role: "Co-Fundador", photo: founderMichael },
  { name: "Raisa Gonçalves", role: "Co-Fundadora", photo: founderRaisa },
  { name: "Rayran Sales", role: "Co-Fundador", photo: founderRayran },
];

const Sobre = () => {
  useEffect(() => {
    document.title = "Sobre — Bumax Contabilidade";
  }, []);

  return (
    <Layout>
      <PageHero
        eyebrow="Sobre nós"
        title="Construímos resultados com técnica, tecnologia e proximidade."
        subtitle="Mais de uma década transformando a contabilidade em vantagem competitiva para empresas que pensam grande."
      />

      {/* História + Linha do tempo */}
      <section className="section-light">
        <div className="container-wide py-20 md:py-24 grid lg:grid-cols-2 gap-14">
          <div className="reveal">
            <p className="text-xs tracking-[0.3em] text-gold mb-3">Nossa história</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-6">
              De um escritório enxuto a uma marca de referência.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A BUMAX nasce com um propósito claro: oferecer uma contabilidade
              moderna, estratégica e de alto padrão, sem abrir mão da confiança
              e da solidez que são essenciais nesse segmento.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Criada para atuar com personalidade própria, a marca reflete um
              novo momento no mercado contábil: mais ágil, mais tecnológico e
              mais próximo das necessidades reais de empresas e empreendedores.
            </p>
          </div>
          <div className="reveal">
            <ul className="space-y-6 border-l border-gold/40 pl-6">
              {TIMELINE.map((t) => (
                <li key={t.year} className="relative">
                  <span className="absolute -left-[31px] top-1 h-3 w-3 bg-gold" />
                  <p className="text-sm font-bold text-gold">{t.year}</p>
                  <p className="text-ink mt-1">{t.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MVV */}
      <section className="section-mist">
        <div className="container-wide py-20 md:py-24">
          <div className="max-w-2xl mb-14 reveal">
            <p className="text-xs tracking-[0.3em] text-gold mb-3">Quem somos</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink">
              Missão, visão e valores.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <article key={v.title} className="bg-white border border-border p-8 reveal">
                <v.icon size={28} className="text-gold mb-5" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-ink mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Fundadores */}
      <section className="section-light">
        <div className="container-wide py-20 md:py-24">
          <div className="max-w-2xl mb-14 reveal">
            <p className="text-xs tracking-[0.3em] text-gold mb-3">Fundadores</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink">
              Conheça quem está por trás da BUMAX.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {FOUNDERS.map((f) => (
              <article key={f.name} className="group relative overflow-hidden bg-ink text-white border-t-2 border-gold reveal">
                <div className="aspect-[3/4] w-full overflow-hidden bg-ink">
                  <img
                    src={f.photo}
                    alt={`${f.name} — ${f.role} da Bumax Contabilidade`}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 pt-16">
                  <h3 className="text-xl font-bold">{f.name}</h3>
                  <p className="text-sm text-gold mt-1">{f.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Presença geográfica */}
      <section className="section-dark relative overflow-hidden">
        <div className="absolute inset-0 pattern-isotype opacity-[0.05] pointer-events-none" />
        <div className="container-wide relative py-20 md:py-24 grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <p className="text-xs tracking-[0.3em] text-gold mb-3">Onde estamos</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Do Nordeste para todo o <span className="text-gold">Brasil</span>.
            </h2>
            <p className="mt-5 text-base text-white/75 leading-relaxed">
              Nossa jornada começou em Paulo Afonso (BA), com a energia do Rio
              São Francisco nos impulsionando. Hoje, essa força nos conecta a
              empresas de todo o país.
            </p>
            <p className="mt-4 text-base text-white/75 leading-relaxed">
              Com um escritório estratégico em João Pessoa (PB), fortalecemos
              nossa presença no Nordeste e ampliamos nosso alcance nacional.
              Nossos escritórios são os hubs a partir dos quais nossa
              contabilidade digital e consultiva chega a clientes em diversos
              estados.
            </p>
          </div>
          <div className="reveal">
            <p className="text-xs tracking-[0.3em] text-gold mb-4">Estados atendidos</p>
            <ul className="grid grid-cols-2 gap-3">
              {STATES_SERVED.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/85"
                >
                  <MapPin size={14} className="text-gold shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABlock
        title="Vamos construir resultados juntos?"
        subtitle="Conheça de perto como nosso time pode acelerar a sua empresa."
        buttonLabel="Falar com a Bumax"
        buttonHref={WHATS}
      />
    </Layout>
  );
};

export default Sobre;

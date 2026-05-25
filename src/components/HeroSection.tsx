import { WHATS } from "@/data/contact";
import VideoHomePage from "../assets/video-home-page.mp4"

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#1e1e1e] text-white">
      {/* Vídeo de fundo ocupando 100% da tela */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <video
          src={VideoHomePage}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Overlay sutil apenas para legibilidade do texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      <div className="container-wide relative h-full grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8">
          <p className="text-xs tracking-[0.3em] text-gold mb-5 reveal">
            Bumax Contabilidade
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.02] reveal">
            A Contabilidade que{" "}
            <span className="text-gold">Maximiza</span> seu Futuro
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/85 max-w-xl leading-relaxed reveal">
            Contabilidade moderna, estratégica e de alto padrão — com a confiança
            e a solidez que o seu negócio merece.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 reveal">
            <a
              href={WHATS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gold text-white px-7 py-3.5 text-sm font-semibold hover:bg-gold/90 transition-colors"
            >
              Fale com um Especialista
            </a>
            <a
              href="#diagnostico"
              className="inline-flex items-center justify-center border border-white/40 text-white px-7 py-3.5 text-sm font-semibold hover:border-gold hover:text-gold transition-colors"
            >
              Diagnóstico Gratuito
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

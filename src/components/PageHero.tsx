interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

/** Hero interno reutilizável para páginas secundárias (fundo escuro). */
const PageHero = ({ eyebrow, title, subtitle }: PageHeroProps) => {
  return (
    <section className="section-dark relative overflow-hidden">
      <div className="absolute inset-0 pattern-isotype opacity-[0.06] pointer-events-none" />
      <div className="container-wide relative py-20 md:py-28">
        {eyebrow && (
          <p className="text-xs tracking-[0.3em] text-gold mb-4">{eyebrow}</p>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-base md:text-lg text-white/75 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="gold-divider mt-8" />
      </div>
    </section>
  );
};

export default PageHero;

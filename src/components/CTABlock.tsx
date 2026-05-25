interface CTABlockProps {
  title: string;
  subtitle?: string;
  buttonLabel: string;
  buttonHref: string;
}

const CTABlock = ({ title, subtitle, buttonLabel, buttonHref }: CTABlockProps) => {
  return (
    <section className="section-dark relative overflow-hidden">
      <div className="absolute inset-0 pattern-isotype opacity-[0.06] pointer-events-none" />
      <div className="container-wide relative py-20 md:py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold max-w-3xl mx-auto leading-tight reveal">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-5 text-base md:text-lg text-white/75 max-w-2xl mx-auto reveal">
            {subtitle}
          </p>
        )}
        <div className="mt-10 reveal">
          <a
            href={buttonHref}
            target={buttonHref.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gold text-white px-8 py-4 text-sm font-semibold hover:bg-gold/90 transition-colors"
          >
            {buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABlock;

import { Link } from "react-router-dom";
import { Instagram, Linkedin, MapPin, Phone, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { OFFICES, PHONES, SOCIAL, WHATS, EMAIL } from "@/data/contact";

const Footer = () => {
  return (
    <footer className="section-dark relative overflow-hidden">
      <div className="absolute inset-0 pattern-isotype opacity-[0.04] pointer-events-none" />
      <div className="container-wide relative py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Marca */}
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-6 text-sm text-white/70 max-w-xs leading-relaxed">
              Contabilidade moderna, estratégica e de alto padrão — com a
              confiança e a solidez que o seu negócio merece.
            </p>

            <a
              href={WHATS}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-gold text-white px-5 py-3 text-sm font-semibold hover:bg-gold/90 transition-colors"
            >
              <MessageCircle size={16} /> Falar pelo WhatsApp
            </a>

            <div className="flex items-center gap-3 mt-6">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Bumax"
                className="p-2 border border-white/15 hover:border-gold hover:text-gold transition-colors text-white/80"
              >
                <Instagram size={18} />
              </a>
              {/* <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Bumax"
                className="p-2 border border-white/15 hover:border-gold hover:text-gold transition-colors text-white/80"
              >
                <Linkedin size={18} />
              </a> */}
            </div>
          </div>

          {/* Navegação */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/sobre" className="hover:text-gold transition-colors">Sobre Nós</Link></li>
              <li><Link to="/servicos" className="hover:text-gold transition-colors">Serviços</Link></li>
              <li><Link to="/resultados" className="hover:text-gold transition-colors">Resultados</Link></li>
              <li><Link to="/jornada" className="hover:text-gold transition-colors">Jornada</Link></li>
              <li><Link to="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
              <li><Link to="/contato" className="hover:text-gold transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Escritórios */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white mb-4">Nossos Escritórios</h4>
            <ul className="space-y-5 text-sm text-white/70">
              {OFFICES.map((o) => (
                <li key={o.city} className="flex items-start gap-3">
                  <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white font-semibold">{o.city}</p>
                    <p className="mt-1 leading-relaxed">{o.address}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato direto */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white mb-4">Fale com a Bumax</h4>
            <ul className="space-y-3 text-sm text-white/70">
              {PHONES.map((p) => (
                <li key={p.label} className="flex items-center gap-3">
                  <Phone size={16} className="text-gold shrink-0" />
                  <a href={p.href} className="hover:text-gold transition-colors">{p.label}</a>
                </li>
              ))}
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-gold transition-colors">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <p>© {new Date().getFullYear()} Bumax Contabilidade. Todos os direitos reservados.</p>
          <Link to="/politica-privacidade" className="hover:text-gold transition-colors">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

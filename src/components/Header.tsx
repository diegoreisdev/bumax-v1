import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { WHATS } from "@/data/contact";

const nav = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/resultados", label: "Resultados" },
  { to: "/jornada", label: "Jornada" },
  { to: "/blog", label: "Blog" },
  { to: "/contato", label: "Contato" },
  { to: "/cliente", label: "Cliente" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all bg-[#1e1e1e] ${scrolled ? "shadow-soft backdrop-blur" : ""
        }`}
    >
      <div className="container-wide flex h-20 items-center justify-between">
        <Logo variant="light" />

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-gold ${isActive ? "text-gold" : "text-white/85"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle tone="light" />
          <a
            href={WHATS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gold text-white px-5 py-2.5 text-sm font-semibold hover:bg-gold/90 transition-colors"
          >
            Fale com um Especialista
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle tone="light" />
          <button
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="text-white p-2"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#1e1e1e] border-t border-white/10 animate-fade-in">
          <nav className="container-wide flex flex-col py-4">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `py-3 text-base font-medium border-b border-white/5 ${isActive ? "text-gold" : "text-white/85"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={WHATS}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center bg-gold text-white px-5 py-3 text-sm font-semibold"
            >
              Fale com um Especialista
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

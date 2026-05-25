import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Observa elementos com classe `.reveal` e aplica `.in` quando entram em viewport.
 * Também observa mutações do DOM para captar elementos adicionados dinamicamente
 * (ex.: filtros que re-renderizam listas).
 * Aplica scroll-to-top em mudança de rota.
 */
const ScrollReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const observe = (el: Element) => {
      if (el.classList.contains("in")) return;
      io.observe(el);
    };

    // Observa todos os atuais
    document.querySelectorAll<HTMLElement>(".reveal").forEach(observe);

    // Observa novos elementos adicionados ao DOM
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.classList?.contains("reveal")) observe(node);
          node.querySelectorAll?.<HTMLElement>(".reveal").forEach(observe);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
};

export default ScrollReveal;

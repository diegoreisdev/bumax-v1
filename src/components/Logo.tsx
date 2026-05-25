import { Link } from "react-router-dom";
import { useTheme } from "@/hooks/use-theme";
import logoLight from "@/assets/bumax-logo-light.png";
import logoDark from "@/assets/bumax-logo-dark.png";

interface LogoProps {
  /**
   * Força uma variante específica.
   * Se omitido, segue o tema atual (dark -> light asset; light -> dark asset).
   */
  variant?: "light" | "dark";
  className?: string;
}

/**
 * Logo oficial Bumax — lockup completo.
 * variant="light" -> versão clara (para fundos escuros)
 * variant="dark"  -> versão escura (para fundos claros)
 * Sem variant: alterna automaticamente conforme o tema global.
 */
const Logo = ({ variant, className = "" }: LogoProps) => {
  const { theme } = useTheme();
  const resolved = variant ?? (theme === "dark" ? "light" : "dark");
  const src = resolved === "light" ? logoLight : logoDark;

  return (
    <Link
      to="/"
      className={`inline-flex items-center ${className}`}
      aria-label="Bumax Contabilidade — Início"
    >
      <img
        src={src}
        alt="Bumax Contabilidade"
        className="h-9 md:h-10 w-auto object-contain select-none"
        draggable={false}
      />
    </Link>
  );
};

export default Logo;

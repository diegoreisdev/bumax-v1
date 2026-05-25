import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

interface ThemeToggleProps {
  className?: string;
  /** Cor base dos ícones (use "light" sobre fundos escuros). */
  tone?: "light" | "dark";
}

const ThemeToggle = ({ className = "", tone = "light" }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const base =
    tone === "light"
      ? "text-white/85 hover:text-gold border-white/15 hover:border-gold"
      : "text-ink hover:text-gold border-ink/15 hover:border-gold";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      title={isDark ? "Modo claro" : "Modo escuro"}
      className={`inline-flex items-center justify-center p-2 border transition-colors ${base} ${className}`}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeToggle;

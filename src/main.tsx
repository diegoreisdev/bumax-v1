import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Aplica tema persistido (ou prefer\u00eancia do sistema) antes do React montar,
// evitando "flash" de tema incorreto.
(() => {
  try {
    const stored = localStorage.getItem("bumax-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored === "dark" || stored === "light" ? stored : prefersDark ? "dark" : "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  } catch {
    /* noop */
  }
})();

createRoot(document.getElementById("root")!).render(<App />);

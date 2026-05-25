import { FormEvent, useState } from "react";
import { toast } from "sonner";

interface LeadFormProps {
  variant?: "dark" | "light";
  buttonLabel?: string;
  showSubject?: boolean;
  showMessage?: boolean;
}

const LeadForm = ({
  variant = "dark",
  buttonLabel = "Quero falar com um especialista",
  showSubject = false,
  showMessage = false,
}: LeadFormProps) => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Recebemos seu contato! Em breve nosso time falará com você.");
    }, 800);
  };

  const isDark = variant === "dark";
  const inputClass = isDark
    ? "w-full bg-transparent border border-white/25 text-white placeholder:text-white/50 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
    : "w-full bg-white border border-border text-ink placeholder:text-muted-foreground px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors";

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <input required name="nome" type="text" placeholder="Nome completo" className={inputClass} />
      <input required name="email" type="email" placeholder="E-mail" className={inputClass} />
      <input required name="whatsapp" type="tel" placeholder="WhatsApp" className={inputClass} />

      {showSubject && (
        <input name="assunto" type="text" placeholder="Assunto" className={`${inputClass} md:col-span-3`} />
      )}
      {showMessage && (
        <textarea name="mensagem" rows={4} placeholder="Sua mensagem" className={`${inputClass} md:col-span-3 resize-none`} />
      )}

      <button
        type="submit"
        disabled={loading}
        className="md:col-span-3 mt-2 inline-flex items-center justify-center bg-gold text-white px-6 py-3.5 text-sm font-semibold hover:bg-gold/90 transition-colors disabled:opacity-60"
      >
        {loading ? "Enviando..." : buttonLabel}
      </button>
    </form>
  );
};

export default LeadForm;

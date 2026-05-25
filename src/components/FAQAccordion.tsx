import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQAccordion = ({ items }: { items: FAQItem[] }) => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base md:text-lg font-semibold text-ink">{item.q}</span>
              <span className="text-gold shrink-0">
                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>
            {isOpen && (
              <p className="pb-6 text-sm md:text-base text-muted-foreground leading-relaxed animate-fade-in">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;

import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  initials: string;
}

const TestimonialCard = ({ name, role, text, initials }: TestimonialCardProps) => {
  return (
    <article className="bg-white border border-border p-8 h-full flex flex-col reveal">
      <Quote size={32} className="text-gold mb-5" strokeWidth={1.5} />
      <p className="text-base text-ink leading-relaxed flex-1">
        {text}
      </p>
      <div className="mt-6 flex items-center gap-4 pt-5 border-t border-border">
        <div className="h-12 w-12 rounded-full bg-mist text-ink flex items-center justify-center font-bold">
          {initials}
        </div>
        <div>
          <p className="text-sm font-bold text-ink">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;

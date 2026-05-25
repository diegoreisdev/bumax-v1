import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const ServiceCard = ({ icon: Icon, title, description, href }: ServiceCardProps) => {
  return (
    <Link
      to={href}
      className="group block bg-white border border-border p-8 hover:border-gold transition-all duration-300 hover:shadow-soft reveal"
    >
      <div className="inline-flex h-12 w-12 items-center justify-center border border-gold text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-colors">
        <Icon size={22} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold text-ink mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold">
        Saiba mais
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
};

export default ServiceCard;

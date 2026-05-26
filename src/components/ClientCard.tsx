import { ArrowRight } from "lucide-react";

interface ClientCardProps {
    logo: string;
    href: string;
}

const ClientCard = ({ logo, href }: ClientCardProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white border border-border p-8 hover:border-gold transition-all duration-300 hover:shadow-soft reveal"
        >
            <div className="mb-6">
                <img
                    src={logo}
                    className="h-12 object-contain"
                />
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold">
                Acessar
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
        </a>
    );
};

export default ClientCard;

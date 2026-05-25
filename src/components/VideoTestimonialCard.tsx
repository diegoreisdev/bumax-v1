import { Play } from "lucide-react";
import { useState } from "react";

interface VideoTestimonialCardProps {
  id: string; // YouTube video ID
  name: string;
  company: string;
}

/** Card de depoimento em vídeo. Mostra thumbnail e carrega iframe ao clicar. */
const VideoTestimonialCard = ({ id, name, company }: VideoTestimonialCardProps) => {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <article className="group bg-ink border border-white/10 overflow-hidden reveal">
      <div className="relative aspect-[9/16] bg-black overflow-hidden">
        {playing ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={`Depoimento ${name} — ${company}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Reproduzir depoimento de ${name}`}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={thumb}
              alt={`Depoimento de ${name} — ${company}`}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold text-white shadow-gold group-hover:scale-110 transition-transform">
                <Play size={26} className="ml-1" />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="p-5 border-t border-white/10">
        <p className="text-sm font-bold text-white">{name}</p>
        <p className="text-xs text-white/65 mt-1">{company}</p>
      </div>
    </article>
  );
};

export default VideoTestimonialCard;

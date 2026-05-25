export interface VideoTestimonial {
  id: string; // YouTube video ID (Shorts)
  name: string;
  company: string;
}

/** Depoimentos em vídeo (YouTube Shorts). */
export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  { id: "YhhvKVjh4N4", name: "José Mauro", company: "Hotel San Marino" },
  { id: "gpbh6Dr9Yu8", name: "Cássia Barbosa", company: "SOS Farmácia" },
  { id: "FfJvlfciDRo", name: "Dr. Juliano Medeiros", company: "Hotel Belvedere & Qualivitta" },
];

/** Depoimentos completos em texto (página Resultados). */
export const FULL_TESTIMONIALS = [
  {
    name: "Dr. Juliano Medeiros",
    role: "Hotel Belvedere & Qualivitta",
    initials: "JM",
    headline:
      "Eles não prometem, eles entregam com ousadia e alta performance.",
    text: "Há mais de 6 anos, a Bumax é a parceira estratégica por trás das decisões das minhas empresas. O grande diferencial deles é a combinação exata entre uma qualificação técnica impecável e a coragem necessária para propor soluções inteligentes. Ter o time deles ao lado nos dá a tranquilidade jurídica e o foco que precisamos para fazer nossos negócios prosperarem.",
  },
  {
    name: "Cássia Barbosa",
    role: "SOS Farmácia",
    initials: "CB",
    headline:
      "A agilidade e a inteligência deles mostraram que não existe serviço igual.",
    text: "Após uma experiência fora, decidimos testar uma contabilidade que se dizia focada no nosso nicho, mas logo sentimos falta do que só a Bumax entrega: proximidade, dinamismo e inteligência de verdade na gestão do caixa. Voltar para a Bumax foi a melhor decisão para o nosso negócio. A atenção e o compromisso real do time com a saúde da nossa empresa fazem toda a diferença.",
  },
  {
    name: "José Mauro",
    role: "San Marino Hotel",
    initials: "JM",
    headline:
      "De todas as experiências contábeis que já tive, o atendimento da Bumax é nota 10.",
    text: "Ao longo da minha trajetória como empresário, já passei por diversos escritórios de contabilidade. A parceria com a Bumax superou todas as expectativas anteriores. Além de organizarem com precisão absoluta a operação da nossa estrutura hoteleira e a nossa holding patrimonial, eles oferecem um atendimento presente e uma retaguarda técnica que trazem total segurança para o nosso crescimento.",
  },
];

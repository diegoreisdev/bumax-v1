import {
  Lightbulb,
  Landmark,
  TrendingUp,
  Coins,
  Building2,
  BarChart3,
  ShieldCheck,
  FileText,
  Receipt,
  Briefcase,
  Stethoscope,
  Cpu,
  HardHat,
  Factory,
  Store,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  audience: string;
}

export const SERVICES: ServiceItem[] = [
  {
    slug: "contabilidade-consultiva",
    title: "Contabilidade Consultiva",
    description:
      "Mais que números, oferecemos inteligência e parceria para suas decisões.",
    icon: Lightbulb,
    benefits: [
      "Escrituração contábil completa e em conformidade",
      "Relatórios gerenciais e DRE consultiva",
      "Análise de indicadores estratégicos",
      "Reuniões periódicas com o sócio",
    ],
    audience:
      "Empresas que buscam mais do que cumprir obrigações: querem clareza para decidir.",
  },
  {
    slug: "constituicao-de-holding",
    title: "Constituição de Holding",
    description:
      "Estruturamos a gestão do seu patrimônio para proteger seus bens e otimizar a sucessão familiar.",
    icon: Landmark,
    benefits: [
      "Proteção patrimonial",
      "Planejamento sucessório",
      "Otimização tributária familiar",
      "Estruturação societária sob medida",
    ],
    audience:
      "Famílias e empresários que querem proteger patrimônio e organizar a sucessão.",
  },
  {
    slug: "planejamento-tributario",
    title: "Planejamento Tributário",
    description:
      "Estratégias para otimizar seus impostos e aumentar a lucratividade do seu negócio.",
    icon: TrendingUp,
    benefits: [
      "Diagnóstico de regime tributário",
      "Identificação de créditos fiscais",
      "Modelagem de cenários",
      "Implementação acompanhada",
    ],
    audience:
      "Empresas que pagam impostos sem certeza se estão pagando o valor correto.",
  },
  {
    slug: "recuperacao-tributaria",
    title: "Recuperação Tributária",
    description:
      "Já recuperamos mais de R$ 5 milhões em impostos, garantindo conformidade e saúde financeira.",
    icon: Coins,
    benefits: [
      "Diagnóstico de créditos a recuperar",
      "Análise de últimos 5 anos",
      "Habilitação e compensação",
      "Acompanhamento jurídico-contábil",
    ],
    audience:
      "Empresas com volume tributário relevante que querem reaver o que pagaram a maior.",
  },
  {
    slug: "bpo-financeiro",
    title: "BPO Financeiro",
    description:
      "Terceirize a gestão financeira da sua empresa e ganhe tempo para focar no crescimento.",
    icon: Building2,
    benefits: [
      "Contas a pagar e a receber",
      "Conciliação bancária diária",
      "Emissão de notas e cobranças",
      "Relatórios de tesouraria",
    ],
    audience:
      "Empresas que querem foco no core e operação financeira impecável nos bastidores.",
  },
  {
    slug: "analise-financeira",
    title: "Análise Financeira",
    description:
      "Clareza sobre seus resultados para um crescimento sustentável e decisões mais seguras.",
    icon: BarChart3,
    benefits: [
      "KPIs financeiros e dashboards",
      "Análise de margem e custos",
      "Projeções e cenários",
      "Reuniões mensais com gestão",
    ],
    audience:
      "Sócios e gestores que querem visibilidade e controle do negócio.",
  },
  {
    slug: "auditoria-completa",
    title: "Auditoria Completa",
    description:
      "Revisão tributária, contábil e trabalhista para garantir a segurança e a conformidade da sua empresa.",
    icon: ShieldCheck,
    benefits: [
      "Auditoria tributária",
      "Auditoria contábil",
      "Auditoria trabalhista",
      "Relatório de oportunidades e riscos",
    ],
    audience:
      "Empresas que precisam de segurança antes de auditorias externas, M&A ou novos investimentos.",
  },
  {
    slug: "legalizacao-de-empresas",
    title: "Legalização de Empresas",
    description:
      "Suporte completo na abertura, alteração e encerramento de empresas, com processo simples e seguro.",
    icon: FileText,
    benefits: [
      "Abertura, alteração e baixa",
      "Definição do melhor enquadramento",
      "Registros, alvarás e licenças",
      "Inscrições municipais e estaduais",
    ],
    audience:
      "Empreendedores iniciando, reestruturando ou encerrando uma operação.",
  },
  {
    slug: "imposto-de-renda-pf",
    title: "Imposto de Renda PF",
    description:
      "Experiência e precisão para a sua declaração pessoal.",
    icon: Receipt,
    benefits: [
      "Declaração completa e simplificada",
      "Revisão de declarações anteriores",
      "Atendimento a malha fina",
      "Orientação ao longo do ano",
    ],
    audience:
      "Pessoas físicas que querem segurança e otimização na declaração anual.",
  },
];

export interface SegmentItem {
  label: string;
  icon: LucideIcon;
}

export const SEGMENTS: SegmentItem[] = [
  { label: "Comércio", icon: Store },
  { label: "Serviços", icon: Briefcase },
  { label: "Saúde", icon: Stethoscope },
  { label: "Tecnologia", icon: Cpu },
  { label: "Construção Civil", icon: HardHat },
  { label: "E-commerce", icon: ShoppingCart },
  { label: "Indústria", icon: Factory },
];

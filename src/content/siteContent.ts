export const ctas = {
  whatsapp: {
    label: "Agendar pelo WhatsApp",
    href: "https://api.whatsapp.com/send?phone=5500000000000&text=Oi%2C%20gostaria%20de%20agendar%20uma%20sessao%20na%20Aurora%20Mental."
  },
  equipe: {
    label: "Falar com a equipe",
    href: "/contato"
  }
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Especialidades", href: "/especialidades" },
  { label: "Sobre", href: "/sobre" },
  { label: "Metodologia", href: "/metodologia" },
  { label: "Depoimentos", href: "/depoimentos" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" }
] as const;

export const heroContent = {
  title: "Aurora Mental",
  subtitle:
    "Cuidado psicologico com acolhimento, etica e estrategias personalizadas para cada etapa da sua jornada.",
  support:
    "Atendimento online e presencial para adolescentes, adultos e idosos."
} as const;

export const specialties = [
  {
    title: "Psicoterapia Individual",
    description:
      "Acompanhamento para ansiedade, autoestima, relacoes e desafios emocionais do cotidiano."
  },
  {
    title: "Avaliacao Neuropsicologica",
    description:
      "Processo estruturado para apoiar diagnosticos e plano de tratamento com mais precisao."
  },
  {
    title: "Orientacao para Familias",
    description:
      "Apoio para familiares no manejo de rotina, comunicacao e fortalecimento de vinculos."
  }
] as const;

export const howItWorks = [
  {
    step: "01",
    title: "Triagem inicial",
    description:
      "Entendemos sua necessidade principal e coletamos informacoes para orientar os proximos passos."
  },
  {
    step: "02",
    title: "Encaminhamento",
    description:
      "Voce e direcionado para o profissional e abordagem mais adequados ao seu momento."
  },
  {
    step: "03",
    title: "Acompanhamento",
    description:
      "Monitoramos sua evolucao com ajustes de plano e foco em resultados sustentaveis."
  }
] as const;

export const teamSection = {
  title: "Equipe e abordagem",
  description:
    "Nossa equipe atua com base em ciencia, escuta qualificada e cuidado humanizado. Cada plano terapeutico e construido de forma individual, respeitando sua historia e objetivos."
} as const;

export const teamMembers = [
  {
    name: "Dra. Helena Costa",
    role: "Psicologa clinica",
    focus: "Ansiedade, depressao e regulacao emocional"
  },
  {
    name: "Dra. Sofia Almeida",
    role: "Neuropsicologa",
    focus: "Avaliacao cognitiva e suporte diagnostico"
  },
  {
    name: "Dr. Rafael Nunes",
    role: "Psicologo terapeuta",
    focus: "Relacionamentos, autoestima e transicoes de vida"
  }
] as const;

export const testimonials = [
  {
    name: "Mariana R.",
    text: "Me senti acolhida desde o primeiro contato. O processo foi claro, humano e muito respeitoso."
  },
  {
    name: "Paulo S.",
    text: "A equipe transmite seguranca e profissionalismo. Hoje consigo lidar melhor com minha ansiedade."
  },
  {
    name: "Carla M.",
    text: "Ambiente calmo, atendimento pontual e acompanhamento de verdade. Recomendo com tranquilidade."
  }
] as const;

export const faqItems = [
  {
    question: "A Aurora Mental atende online?",
    answer:
      "Sim. Realizamos atendimentos online com o mesmo cuidado e sigilo do formato presencial."
  },
  {
    question: "Qual o primeiro passo para iniciar?",
    answer:
      "Voce pode chamar no WhatsApp para triagem inicial. A partir dela, indicamos o melhor encaminhamento."
  },
  {
    question: "Vocês aceitam plano de saude?",
    answer:
      "Atualmente trabalhamos com atendimento particular e emitimos recibo para solicitacao de reembolso, quando aplicavel."
  }
] as const;

export const contactSection = {
  title: "Vamos conversar?",
  description:
    "Entre em contato para tirar duvidas sobre atendimento, valores e disponibilidade de horarios.",
  details: ["WhatsApp: (00) 00000-0000", "Email: contato@auroramental.com.br"]
} as const;

export const methodologyPrinciples = [
  {
    title: "Escuta e triagem",
    description:
      "Comecamos com uma leitura cuidadosa da demanda para compreender historico, contexto e objetivo terapeutico."
  },
  {
    title: "Plano individual",
    description:
      "Definimos estrategia clinica personalizada, com metas realistas e alinhadas ao momento da pessoa."
  },
  {
    title: "Revisao continua",
    description:
      "Acompanhamos evolucao e ajustamos o plano conforme a resposta ao tratamento."
  }
] as const;

export const blogPosts = [
  {
    title: "Como reconhecer sinais de ansiedade no dia a dia",
    excerpt:
      "Entenda sintomas frequentes, gatilhos comuns e quando buscar apoio profissional."
  },
  {
    title: "Primeira sessao de terapia: o que esperar",
    excerpt:
      "Um guia simples para reduzir insegurancas e chegar na primeira consulta com mais tranquilidade."
  },
  {
    title: "Rotina emocional: pequenas praticas de autocuidado",
    excerpt:
      "Habitos práticos para melhorar relacao com pensamentos, energia e bem-estar."
  }
] as const;

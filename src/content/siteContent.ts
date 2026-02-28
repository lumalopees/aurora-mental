export const ctas = {
  whatsapp: {
    label: "Agendar pelo WhatsApp",
    href: "https://api.whatsapp.com/send?phone=5500000000000"
  },
  equipe: {
    label: "Falar com a equipe",
    href: "/contato"
  }
} as const;

export const homePreviewCards = [
  {
    title: "Acolhimento com escuta ativa",
    description:
      "Cada atendimento comeca com compreensao genuina da sua historia e necessidades."
  },
  {
    title: "Abordagem baseada em evidencia",
    description:
      "Unimos cuidado humano e praticas terapeuticas reconhecidas para cada etapa."
  },
  {
    title: "Plano de acompanhamento",
    description:
      "A evolucao e monitorada de forma clara, com orientacao continua da equipe."
  }
] as const;

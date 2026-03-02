import type { SiteLocale } from "@/lib/locale";

const navHrefs = [
  "/",
  "/especialidades",
  "/sobre",
  "/metodologia",
  "/depoimentos",
  "/blog",
  "/contato"
] as const;

type SiteContent = {
  brand: string;
  controls: {
    themeLight: string;
    themeDark: string;
    language: string;
  };
  nav: {
    ariaLabel: string;
    labels: string[];
  };
  ctas: {
    whatsapp: { label: string; href: string };
    team: { label: string; href: string };
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    support: string;
  };
  specialtiesSection: {
    title: string;
    subtitle: string;
  };
  specialties: Array<{ title: string; description: string }>;
  howItWorksSection: {
    title: string;
    subtitle: string;
  };
  howItWorks: Array<{ step: string; title: string; description: string }>;
  teamSection: {
    title: string;
    description: string;
    cardTitle: string;
    cardText: string;
  };
  teamMembers: Array<{ name: string; role: string; focus: string }>;
  testimonialsSection: {
    title: string;
    subtitle: string;
  };
  testimonials: Array<{ name: string; text: string }>;
  faqSection: {
    title: string;
    subtitle: string;
  };
  faqItems: Array<{ question: string; answer: string }>;
  contactSection: {
    title: string;
    description: string;
    details: string[];
  };
  specialtiesPage: {
    ctaTitle: string;
    ctaSubtitle: string;
  };
  aboutPage: {
    title: string;
    intro: string;
    teamTitle: string;
    teamSubtitle: string;
  };
  methodologyPage: {
    title: string;
    subtitle: string;
    principlesTitle: string;
    principlesSubtitle: string;
  };
  methodologyPrinciples: Array<{ title: string; description: string }>;
  testimonialsPage: {
    ctaTitle: string;
    ctaSubtitle: string;
  };
  blogPage: {
    title: string;
    subtitle: string;
    readArticle: string;
  };
  blogPosts: Array<{ title: string; excerpt: string }>;
  privacyPage: {
    title: string;
    subtitle: string;
    paragraphs: string[];
  };
  termsPage: {
    title: string;
    subtitle: string;
    paragraphs: string[];
  };
  footer: {
    rights: string;
    legalAria: string;
    privacyLabel: string;
    termsLabel: string;
  };
};

const whatsappHref =
  "https://api.whatsapp.com/send?phone=5500000000000&text=Oi%2C%20gostaria%20de%20agendar%20uma%20sessao%20na%20Aurora%20Mental.";

const contentByLocale: Record<SiteLocale, SiteContent> = {
  "pt-BR": {
    brand: "Aurora Mental",
    controls: {
      themeLight: "Ativar modo claro",
      themeDark: "Ativar modo escuro",
      language: "Alternar idioma para ingles"
    },
    nav: {
      ariaLabel: "Menu principal",
      labels: [
        "Home",
        "Especialidades",
        "Sobre",
        "Metodologia",
        "Depoimentos",
        "Blog",
        "Contato"
      ]
    },
    ctas: {
      whatsapp: { label: "Agendar pelo WhatsApp", href: whatsappHref },
      team: { label: "Falar com a equipe", href: "/contato" }
    },
    hero: {
      eyebrow: "Clinica de Psicologia",
      title: "Aurora Mental",
      subtitle:
        "Cuidado psicologico com acolhimento, etica e estrategias personalizadas para cada etapa da sua jornada.",
      support:
        "Atendimento online e presencial para adolescentes, adultos e idosos."
    },
    specialtiesSection: {
      title: "Especialidades",
      subtitle:
        "Atendimento construido para diferentes necessidades com plano terapeutico individual."
    },
    specialties: [
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
    ],
    howItWorksSection: {
      title: "Como funciona",
      subtitle:
        "Triagem, encaminhamento e acompanhamento para tornar seu processo claro desde o inicio."
    },
    howItWorks: [
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
    ],
    teamSection: {
      title: "Equipe e abordagem",
      description:
        "Nossa equipe atua com base em ciencia, escuta qualificada e cuidado humanizado. Cada plano terapeutico e construido de forma individual, respeitando sua historia e objetivos.",
      cardTitle: "Abordagem humanizada e tecnica",
      cardText:
        "Trabalhamos com escuta ativa, objetivos terapeuticos definidos em conjunto e revisao frequente de progresso para garantir continuidade no cuidado."
    },
    teamMembers: [
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
    ],
    testimonialsSection: {
      title: "Depoimentos",
      subtitle:
        "Relatos de pacientes sobre acolhimento, clareza do processo e evolucao no tratamento."
    },
    testimonials: [
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
    ],
    faqSection: {
      title: "FAQ",
      subtitle:
        "Perguntas frequentes para facilitar sua decisao de iniciar o atendimento."
    },
    faqItems: [
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
    ],
    contactSection: {
      title: "Vamos conversar?",
      description:
        "Entre em contato para tirar duvidas sobre atendimento, valores e disponibilidade de horarios.",
      details: ["WhatsApp: (00) 00000-0000", "Email: contato@auroramental.com.br"]
    },
    specialtiesPage: {
      ctaTitle: "Precisa de ajuda para decidir?",
      ctaSubtitle:
        "Nossa equipe pode orientar qual especialidade faz mais sentido para o seu momento."
    },
    aboutPage: {
      title: "Sobre a Aurora Mental",
      intro:
        "Nossa clinica nasceu para oferecer cuidado psicologico acolhedor, tecnico e acessivel. Acreditamos em relacoes terapeuticas baseadas em confianca, clareza e acompanhamento continuo.",
      teamTitle: "Equipe",
      teamSubtitle:
        "Profissionais com experiencia clinica e abordagem centrada na pessoa."
    },
    methodologyPage: {
      title: "Metodologia",
      subtitle:
        "Nosso processo combina escuta qualificada, tecnica e revisao constante da evolucao.",
      principlesTitle: "Principios de atuacao",
      principlesSubtitle:
        "Como colocamos qualidade clinica e cuidado humano no centro do atendimento."
    },
    methodologyPrinciples: [
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
    ],
    testimonialsPage: {
      ctaTitle: "Quer iniciar sua jornada?",
      ctaSubtitle: "Converse com nossa equipe e agende sua primeira conversa."
    },
    blogPage: {
      title: "Blog",
      subtitle:
        "Conteudo inicial estatico. Depois vamos conectar com CMS para publicacao dinamica.",
      readArticle: "Ler artigo"
    },
    blogPosts: [
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
          "Habitos praticos para melhorar relacao com pensamentos, energia e bem-estar."
      }
    ],
    privacyPage: {
      title: "Politica de Privacidade",
      subtitle:
        "Este texto inicial deve ser revisado por responsavel juridico antes da publicacao oficial.",
      paragraphs: [
        "Coletamos apenas os dados necessarios para responder contatos enviados por formularios, WhatsApp e canais oficiais da clinica.",
        "As informacoes sao tratadas com confidencialidade e usadas exclusivamente para comunicacao e atendimento.",
        "Voce pode solicitar atualizacao ou exclusao de dados pelos canais de contato informados no site."
      ]
    },
    termsPage: {
      title: "Termos de Uso",
      subtitle:
        "Texto inicial para referencia. Recomenda-se validacao juridica antes de publicar.",
      paragraphs: [
        "O conteudo deste site tem finalidade informativa e nao substitui avaliacao profissional individual.",
        "O uso do site implica concordancia com estes termos e com a politica de privacidade vigente.",
        "A Aurora Mental pode atualizar informacoes e condicoes de uso para manter o site seguro, claro e atualizado."
      ]
    },
    footer: {
      rights: "Todos os direitos reservados.",
      legalAria: "Links legais",
      privacyLabel: "Politica de Privacidade",
      termsLabel: "Termos de Uso"
    }
  },
  en: {
    brand: "Aurora Mental",
    controls: {
      themeLight: "Switch to light mode",
      themeDark: "Switch to dark mode",
      language: "Switch language to Portuguese"
    },
    nav: {
      ariaLabel: "Main navigation",
      labels: [
        "Home",
        "Specialties",
        "About",
        "Methodology",
        "Testimonials",
        "Blog",
        "Contact"
      ]
    },
    ctas: {
      whatsapp: { label: "Book on WhatsApp", href: whatsappHref },
      team: { label: "Talk to our team", href: "/contato" }
    },
    hero: {
      eyebrow: "Psychology Clinic",
      title: "Aurora Mental",
      subtitle:
        "Psychological care with empathy, ethics, and personalized strategies for every stage of your journey.",
      support:
        "Online and in-person sessions for teens, adults, and older adults."
    },
    specialtiesSection: {
      title: "Specialties",
      subtitle:
        "Care designed for different needs, with an individual treatment plan."
    },
    specialties: [
      {
        title: "Individual Therapy",
        description:
          "Support for anxiety, self-esteem, relationships, and everyday emotional challenges."
      },
      {
        title: "Neuropsychological Assessment",
        description:
          "A structured process to support diagnosis and define a more accurate treatment plan."
      },
      {
        title: "Family Guidance",
        description:
          "Support for families in routine management, communication, and stronger connections."
      }
    ],
    howItWorksSection: {
      title: "How it works",
      subtitle:
        "Screening, referral, and follow-up to keep your process clear from day one."
    },
    howItWorks: [
      {
        step: "01",
        title: "Initial screening",
        description:
          "We understand your main need and gather key information for the next steps."
      },
      {
        step: "02",
        title: "Referral",
        description:
          "You are matched with the professional and therapeutic approach that best fit your moment."
      },
      {
        step: "03",
        title: "Follow-up",
        description:
          "We monitor your progress and adjust the plan to ensure consistent results."
      }
    ],
    teamSection: {
      title: "Team and approach",
      description:
        "Our team combines science-based practice, qualified listening, and human-centered care. Each plan is built around your history and goals.",
      cardTitle: "Human and technical approach",
      cardText:
        "We use active listening, shared therapeutic goals, and regular progress reviews to ensure continuity of care."
    },
    teamMembers: [
      {
        name: "Dr. Helena Costa",
        role: "Clinical psychologist",
        focus: "Anxiety, depression, and emotional regulation"
      },
      {
        name: "Dr. Sofia Almeida",
        role: "Neuropsychologist",
        focus: "Cognitive assessment and diagnostic support"
      },
      {
        name: "Dr. Rafael Nunes",
        role: "Psychologist",
        focus: "Relationships, self-esteem, and life transitions"
      }
    ],
    testimonialsSection: {
      title: "Testimonials",
      subtitle:
        "Patients share their experience of care, clarity, and progress in treatment."
    },
    testimonials: [
      {
        name: "Mariana R.",
        text: "I felt welcomed from the very first contact. The process was clear, respectful, and truly human."
      },
      {
        name: "Paulo S.",
        text: "The team brings confidence and professionalism. Today I manage my anxiety much better."
      },
      {
        name: "Carla M.",
        text: "A calm environment, punctual support, and real follow-up. I highly recommend it."
      }
    ],
    faqSection: {
      title: "FAQ",
      subtitle: "Frequently asked questions to help you take the first step."
    },
    faqItems: [
      {
        question: "Does Aurora Mental offer online sessions?",
        answer:
          "Yes. We provide online sessions with the same level of care and confidentiality as in-person sessions."
      },
      {
        question: "What is the first step to begin?",
        answer:
          "You can message us on WhatsApp for initial screening. From there, we suggest the best referral path."
      },
      {
        question: "Do you accept health insurance?",
        answer:
          "We currently offer private sessions and can issue receipts for reimbursement requests when applicable."
      }
    ],
    contactSection: {
      title: "Let's talk?",
      description:
        "Contact us to ask about sessions, fees, and available schedules.",
      details: ["WhatsApp: +55 (00) 00000-0000", "Email: contact@auroramental.com"]
    },
    specialtiesPage: {
      ctaTitle: "Need help deciding?",
      ctaSubtitle:
        "Our team can guide you to the specialty that best fits your needs."
    },
    aboutPage: {
      title: "About Aurora Mental",
      intro:
        "Our clinic was created to offer accessible, ethical, and welcoming psychological care. We believe in therapeutic relationships based on trust, clarity, and continuous follow-up.",
      teamTitle: "Team",
      teamSubtitle:
        "Professionals with clinical experience and a person-centered approach."
    },
    methodologyPage: {
      title: "Methodology",
      subtitle:
        "Our process combines qualified listening, technical depth, and continuous progress review.",
      principlesTitle: "Practice principles",
      principlesSubtitle:
        "How we place clinical quality and human care at the center of treatment."
    },
    methodologyPrinciples: [
      {
        title: "Listening and screening",
        description:
          "We start with a careful understanding of your demand, context, and treatment goals."
      },
      {
        title: "Individual plan",
        description:
          "We define a personalized therapeutic strategy with realistic goals aligned with your moment."
      },
      {
        title: "Continuous review",
        description:
          "We track progress and adjust your plan according to treatment response."
      }
    ],
    testimonialsPage: {
      ctaTitle: "Ready to begin your journey?",
      ctaSubtitle: "Talk to our team and book your first conversation."
    },
    blogPage: {
      title: "Blog",
      subtitle:
        "Initial static content. Next step is connecting to a CMS for dynamic publishing.",
      readArticle: "Read article"
    },
    blogPosts: [
      {
        title: "How to recognize anxiety signs in daily life",
        excerpt:
          "Understand common symptoms, triggers, and when to seek professional support."
      },
      {
        title: "First therapy session: what to expect",
        excerpt:
          "A practical guide to reduce insecurity and feel more comfortable in your first appointment."
      },
      {
        title: "Emotional routine: small self-care practices",
        excerpt:
          "Practical habits to improve your relationship with thoughts, energy, and well-being."
      }
    ],
    privacyPage: {
      title: "Privacy Policy",
      subtitle:
        "This initial text should be reviewed by legal counsel before official publication.",
      paragraphs: [
        "We collect only the data needed to respond to contacts sent through forms, WhatsApp, and official clinic channels.",
        "Information is handled confidentially and used exclusively for communication and care.",
        "You may request data updates or deletion through the contact channels listed on the website."
      ]
    },
    termsPage: {
      title: "Terms of Use",
      subtitle:
        "Initial reference text. Legal review is recommended before publishing.",
      paragraphs: [
        "The content on this website is for informational purposes and does not replace individual professional assessment.",
        "Using this website implies agreement with these terms and the current privacy policy.",
        "Aurora Mental may update site information and conditions to keep content secure, clear, and up to date."
      ]
    },
    footer: {
      rights: "All rights reserved.",
      legalAria: "Legal links",
      privacyLabel: "Privacy Policy",
      termsLabel: "Terms of Use"
    }
  }
};

export function getSiteContent(locale: SiteLocale) {
  return contentByLocale[locale];
}

export function getNavLinks(locale: SiteLocale) {
  const labels = contentByLocale[locale].nav.labels;
  return navHrefs.map((href, index) => ({
    href,
    label: labels[index]
  }));
}

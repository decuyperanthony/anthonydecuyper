export const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Zustand",
    "React Query",
    "Zod",
  ],
  backend: ["Node.js", "Express", "PostgreSQL", "Prisma", "REST APIs"],
  tools: ["Git", "GitHub Actions", "Vercel", "Docker", "Figma"],
  practices: [
    "TDD",
    "Code Review",
    "CI/CD",
    "Agile/Scrum",
    "Design Systems",
    "A11y",
  ],
};

export const experience = [
  {
    company: "Germen",
    role: {
      en: "Frontend Lead / Acting Head of Frontend",
      fr: "Lead Frontend / Head of Frontend par intérim",
    },
    period: { start: "2021", end: null },
    description: {
      en: "Leading frontend architecture and development for insurance subscription platforms. Building scalable React applications with TypeScript, implementing design systems, and mentoring junior developers.",
      fr: "Direction de l'architecture et du développement frontend pour des plateformes de souscription d'assurance. Création d'applications React scalables avec TypeScript, implémentation de design systems et mentorat de développeurs juniors.",
    },
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "React Query",
    ],
  },
  {
    company: "Previous Company",
    role: {
      en: "Full Stack Developer",
      fr: "Développeur Full Stack",
    },
    period: { start: "2019", end: "2021" },
    description: {
      en: "Developed and maintained web applications using React and Node.js. Collaborated with design teams to implement responsive user interfaces and RESTful APIs.",
      fr: "Développement et maintenance d'applications web avec React et Node.js. Collaboration avec les équipes design pour implémenter des interfaces utilisateur responsives et des APIs RESTful.",
    },
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Docker"],
  },
];

export const projects = [
  {
    title: "Insurance Platform",
    description: {
      en: "A comprehensive insurance subscription management platform handling complex regulatory workflows.",
      fr: "Une plateforme complète de gestion de souscription d'assurance gérant des workflows réglementaires complexes.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    url: null,
    image: null,
  },
  {
    title: "Design System",
    description: {
      en: "A scalable component library built with React and Tailwind CSS, featuring comprehensive accessibility support.",
      fr: "Une bibliothèque de composants scalable construite avec React et Tailwind CSS, avec un support complet de l'accessibilité.",
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
    url: null,
    image: null,
  },
];

export const contact = {
  email: "contact@anthonydecuyper.com",
  github: "https://github.com/decuyperanthony",
  linkedin: "https://www.linkedin.com/in/anthony-de-cuyper/",
};

export const education = [
  {
    institution: "University",
    degree: {
      en: "Computer Science",
      fr: "Informatique",
    },
    period: { start: "2015", end: "2018" },
  },
];

export const languages = [
  { name: { en: "French", fr: "Français" }, level: { en: "Native", fr: "Natif" } },
  { name: { en: "English", fr: "Anglais" }, level: { en: "Fluent", fr: "Courant" } },
];

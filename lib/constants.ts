export const skills = {
  frontend: [
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
  ],
  backend: ["Node.js", "tRPC", "PostgreSQL", "REST APIs", "AWS"],
  tools: ["Turborepo", "Git", "GitHub Actions", "Vercel", "Docker", "Figma"],
  practices: [
    "Architecture",
    "Technical Strategy",
    "Hiring",
    "Mentoring",
    "Design Systems",
    "Code Review",
  ],
};

export const experience = [
  {
    company: "Germen",
    role: {
      en: "Frontend Lead",
      fr: "Lead Frontend",
    },
    period: { start: "2021", end: null },
    description: {
      en: "Led frontend architecture across multiple insurance platforms. Migrated monolithic CRA + Redux codebase to Turborepo monorepo. Built a shared design system and delivered a React Native mobile app for insurance subscription journeys.",
      fr: "Direction de l'architecture frontend sur plusieurs plateformes d'assurance. Migration d'une codebase monolithique CRA + Redux vers un monorepo Turborepo. Conception d'un design system partagé et développement d'une application mobile React Native pour les parcours de souscription.",
    },
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Turborepo",
      "Tailwind CSS",
      "shadcn/ui",
      "tRPC",
    ],
  },
  {
    company: "Studio Ambiant",
    role: {
      en: "Full Stack Developer",
      fr: "Développeur Full Stack",
    },
    period: { start: "2022", end: "2023" },
    description: {
      en: "Built end-to-end React/Node platform with back-office CMS. Designed PostgreSQL schema and REST APIs, delivering features from database to production UI.",
      fr: "Développement d'une plateforme React/Node complète avec CMS back-office. Conception du schéma PostgreSQL et des APIs REST, livraison de fonctionnalités end-to-end.",
    },
    technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "REST APIs"],
  },
  {
    company: "Collect For Good",
    role: {
      en: "Full Stack Developer (Volunteer)",
      fr: "Développeur Full Stack (Bénévole)",
    },
    period: { start: "2022", end: "2022" },
    description: {
      en: "Built humanitarian logistics platform coordinating donation collection and transport to Ukraine border during active crisis response.",
      fr: "Contribution à une plateforme logistique humanitaire pour coordonner la collecte et le transport de dons vers la frontière ukrainienne.",
    },
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    company: "Tanke",
    role: {
      en: "Full Stack Developer",
      fr: "Développeur Full Stack",
    },
    period: { start: "2020", end: "2021" },
    description: {
      en: "Developed React applications and Node APIs powering influencer marketing campaigns for major brands. Owned full stack delivery in fast-paced agency environment.",
      fr: "Développement d'applications React et APIs Node pour des campagnes marketing d'influence pour grandes marques. Responsabilité full stack en environnement agence.",
    },
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
  },
];

// TODO: Replace with real projects data
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
  email: "decuyperanthony@gmail.com",
  github: "https://github.com/decuyperanthony",
  linkedin: "https://www.linkedin.com/in/anthony-de-cuyper/",
};

export const education = [
  {
    institution: "École O'Clock",
    degree: {
      en: "Web Developer Certification",
      fr: "Titre Professionnel Développeur Web et Web Mobile (Niveau III)",
    },
    period: { start: "2019", end: "2020" },
  },
  {
    institution: "Opquast",
    degree: {
      en: "Web Quality Best Practices Certification",
      fr: "Certification Qualité Web",
    },
    period: { start: "2019", end: "2019" },
  },
  {
    institution: "Université Paris Descartes",
    degree: {
      en: "Bachelor's in Mathematics & Computer Science",
      fr: "Licence Mathématiques-Informatique",
    },
    period: { start: "2008", end: "2011" },
  },
];

export const languages = [
  { name: { en: "French", fr: "Français" }, level: { en: "Native", fr: "Natif" } },
  {
    name: { en: "English", fr: "Anglais" },
    level: { en: "Professional", fr: "Professionnel" },
  },
];

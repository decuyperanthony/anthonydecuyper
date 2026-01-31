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

export type ProjectCategory = "platform" | "advisor-tools" | "mobile" | "partner" | "volunteer";
export type ProjectAccess = "public" | "restricted" | "redacted";

export type Project = {
  slug: string;
  title: string;
  oneLiner: { en: string; fr: string };
  category: ProjectCategory;
  role: { en: string; fr: string };
  timeframe: string;
  stack: string[];
  highlights: { en: string[]; fr: string[] };
  access: ProjectAccess;
  accessNote: { en: string; fr: string } | null;
  links: { live: string | null; repo: string | null };
};

export const projects: Project[] = [
  {
    slug: "polyseme-v2",
    title: "POLYSEME V2",
    oneLiner: {
      en: "Large-scale platform rebuild and modernization for regulated insurance & savings products.",
      fr: "Refonte et modernisation à grande échelle d'une plateforme d'assurance et d'épargne réglementée.",
    },
    category: "platform",
    role: {
      en: "Frontend Lead — architecture, standards, mentoring, delivery",
      fr: "Lead Frontend — architecture, standards, mentorat, delivery",
    },
    timeframe: "2021–Present",
    stack: ["TypeScript", "React", "Next.js", "Turborepo", "Tailwind", "shadcn/ui", "tRPC", "PostgreSQL", "AWS"],
    highlights: {
      en: [
        "Rebuilt core product journeys and advisor workflows with a modern React/Next.js architecture.",
        "Introduced a monorepo strategy with shared packages to improve consistency and maintainability across multiple apps.",
        "Collaborated closely with Product and Compliance to design clear, regulated onboarding and subscription flows.",
      ],
      fr: [
        "Refonte des parcours produits et workflows conseillers avec une architecture React/Next.js moderne.",
        "Mise en place d'une stratégie monorepo avec packages partagés pour améliorer la cohérence et la maintenabilité.",
        "Collaboration étroite avec Product et Compliance pour concevoir des parcours réglementés clairs.",
      ],
    },
    access: "restricted",
    accessNote: {
      en: "Production system — authentication required",
      fr: "Système en production — authentification requise",
    },
    links: { live: null, repo: null },
  },
  {
    slug: "self-care-subscription-funnel",
    title: "Self-care Subscription Funnel",
    oneLiner: {
      en: "Customer self-serve online subscription for life insurance and retirement savings (PER) with regulated UX constraints.",
      fr: "Souscription en ligne en autonomie pour l'assurance vie et l'épargne retraite (PER) avec contraintes UX réglementaires.",
    },
    category: "platform",
    role: {
      en: "Frontend Lead — end-to-end delivery, UX with compliance constraints",
      fr: "Lead Frontend — delivery end-to-end, UX sous contraintes réglementaires",
    },
    timeframe: "2022–2023",
    stack: ["TypeScript", "React", "Next.js", "Tailwind", "shadcn/ui", "tRPC", "AWS"],
    highlights: {
      en: [
        "Designed and delivered end-to-end subscription journeys with mandatory compliance steps (e.g., risk questionnaire).",
        "Built reusable UI patterns to keep complex regulated flows understandable and maintainable.",
        "Integrated partner/external APIs while keeping a reliable and testable frontend architecture.",
      ],
      fr: [
        "Conception et livraison de parcours de souscription end-to-end avec étapes réglementaires obligatoires.",
        "Création de patterns UI réutilisables pour des flux réglementés complexes mais maintenables.",
        "Intégration d'APIs partenaires tout en gardant une architecture frontend fiable et testable.",
      ],
    },
    access: "restricted",
    accessNote: {
      en: "Production system — authentication required",
      fr: "Système en production — authentification requise",
    },
    links: { live: null, repo: null },
  },
  {
    slug: "quanta-pero-advisor-platform",
    title: "Quanta (PERO Advisor Platform)",
    oneLiner: {
      en: "Advisor portal to manage collective retirement plans (PERO): operations, validations, and company/employee workflows.",
      fr: "Portail conseiller pour la gestion des plans d'épargne retraite collectifs (PERO) : opérations, validations et workflows entreprise/salarié.",
    },
    category: "advisor-tools",
    role: {
      en: "Frontend Lead — architecture, delivery, cross-team collaboration",
      fr: "Lead Frontend — architecture, delivery, collaboration inter-équipes",
    },
    timeframe: "2023–2024",
    stack: ["TypeScript", "React", "Next.js", "tRPC", "PostgreSQL", "AWS", "Tailwind"],
    highlights: {
      en: [
        "Built complex advisor workflows with strong data integrity and clear step-by-step operations.",
        "Implemented robust UI patterns for validations, edge cases, and regulated operational constraints.",
        "Partnered with business stakeholders to translate domain rules into a usable and scalable product.",
      ],
      fr: [
        "Construction de workflows conseillers complexes avec forte intégrité des données et opérations étape par étape.",
        "Implémentation de patterns UI robustes pour validations, cas limites et contraintes opérationnelles réglementées.",
        "Collaboration avec les stakeholders métier pour traduire les règles du domaine en produit utilisable et scalable.",
      ],
    },
    access: "restricted",
    accessNote: {
      en: "Advisor tooling — authentication required",
      fr: "Outil conseiller — authentification requise",
    },
    links: { live: null, repo: null },
  },
  {
    slug: "react-native-customer-app",
    title: "React Native Customer App",
    oneLiner: {
      en: "Mobile customer space for account access and operations in a regulated production environment.",
      fr: "Espace client mobile pour l'accès au compte et les opérations dans un environnement de production réglementé.",
    },
    category: "mobile",
    role: {
      en: "Frontend Lead — mobile delivery, UI quality, production readiness",
      fr: "Lead Frontend — delivery mobile, qualité UI, production-ready",
    },
    timeframe: "2023–Present",
    stack: ["TypeScript", "React Native", "React", "API integrations"],
    highlights: {
      en: [
        "Delivered mobile experiences aligned with the web platform while keeping shared UX standards.",
        "Handled production constraints (authentication, privacy, sensitive data) with a reliability-first approach.",
        "Improved maintainability through reusable components and consistent patterns.",
      ],
      fr: [
        "Livraison d'expériences mobiles alignées avec la plateforme web tout en gardant des standards UX partagés.",
        "Gestion des contraintes de production (auth, privacy, données sensibles) avec une approche reliability-first.",
        "Amélioration de la maintenabilité via composants réutilisables et patterns cohérents.",
      ],
    },
    access: "restricted",
    accessNote: {
      en: "Mobile production app — authentication required",
      fr: "App mobile en production — authentification requise",
    },
    links: { live: null, repo: null },
  },
  {
    slug: "major-insurer-partner-docs-funds",
    title: "Major Insurer Partner — Funds & Document Generation",
    oneLiner: {
      en: "Partner-facing tooling: fund mirror generation and document generation workflows (details partially redacted).",
      fr: "Outils orientés partenaire : génération de miroirs de fonds et workflows de génération de documents (détails partiellement masqués).",
    },
    category: "partner",
    role: {
      en: "Full-stack contributor — delivery under constraints, integration-focused",
      fr: "Contributeur Full-stack — delivery sous contraintes, focus intégration",
    },
    timeframe: "2022",
    stack: ["TypeScript", "React", "Next.js", "PostgreSQL", "AWS"],
    highlights: {
      en: [
        "Built partner-oriented workflows with strong focus on correctness, traceability, and predictable outputs.",
        "Integrated external systems while keeping a clean separation of concerns in the codebase.",
        "Worked with stakeholders to refine requirements and deliver production-ready features.",
      ],
      fr: [
        "Construction de workflows orientés partenaire avec focus sur la justesse, traçabilité et outputs prévisibles.",
        "Intégration de systèmes externes tout en gardant une séparation des responsabilités propre.",
        "Collaboration avec les stakeholders pour affiner les besoins et livrer des features production-ready.",
      ],
    },
    access: "redacted",
    accessNote: {
      en: "Partner project — details redacted",
      fr: "Projet partenaire — détails masqués",
    },
    links: { live: null, repo: null },
  },
  {
    slug: "collect-for-good",
    title: "Collect For Good",
    oneLiner: {
      en: "Volunteer-built logistics platform to coordinate donation collection and transport.",
      fr: "Plateforme logistique bénévole pour coordonner la collecte et le transport de dons.",
    },
    category: "volunteer",
    role: {
      en: "Full Stack Developer — rapid delivery, end-to-end ownership",
      fr: "Développeur Full Stack — delivery rapide, ownership end-to-end",
    },
    timeframe: "2022",
    stack: ["TypeScript", "Next.js", "PostgreSQL"],
    highlights: {
      en: [
        "Shipped core features quickly with a focus on clarity and operational usability.",
        "Owned end-to-end delivery from data model to UI, with pragmatic trade-offs for speed.",
        "Collaborated with a small team under time constraints to deliver a working product.",
      ],
      fr: [
        "Livraison rapide des features clés avec un focus sur la clarté et l'utilisabilité opérationnelle.",
        "Ownership end-to-end du modèle de données à l'UI, avec compromis pragmatiques pour la vitesse.",
        "Collaboration en petite équipe sous contraintes de temps pour livrer un produit fonctionnel.",
      ],
    },
    access: "public",
    accessNote: null,
    links: { live: null, repo: null },
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

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

export type ProjectCategory = "platform" | "advisor-tools" | "mobile" | "partner" | "volunteer" | "personal";
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
    slug: "polyseme-v1",
    title: "POLYSEME V1",
    oneLiner: {
      en: "First major platform refonte: subscription journeys, customer space, and back-office manager tools for regulated insurance products.",
      fr: "Première refonte majeure de la plateforme : parcours de souscription, espace client et outils gestionnaire pour les produits d'assurance réglementés.",
    },
    category: "platform",
    role: {
      en: "Frontend Developer — delivery, UI implementation, cross-team collaboration",
      fr: "Développeur Frontend — delivery, implémentation UI, collaboration inter-équipes",
    },
    timeframe: "2021–2022",
    stack: ["TypeScript", "React", "Redux", "Styled Components", "REST APIs"],
    highlights: {
      en: [
        "Built subscription journeys for life insurance and retirement savings products with regulatory compliance.",
        "Developed customer space for contract consultation, account management, and document access.",
        "Implemented back-office manager tools for operations, validations, and customer support workflows.",
      ],
      fr: [
        "Construction des parcours de souscription pour l'assurance vie et l'épargne retraite avec conformité réglementaire.",
        "Développement de l'espace client pour consultation des contrats, gestion de compte et accès aux documents.",
        "Implémentation des outils gestionnaire pour les opérations, validations et workflows support client.",
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
    slug: "garance-mobile-app",
    title: "Garance Mobile App",
    oneLiner: {
      en: "Customer mobile app for Garance: account management, contract consultation, and regulated insurance operations (risk changes, management changes, redemptions).",
      fr: "Application mobile client Garance : gestion de compte, consultation des contrats et opérations d'assurance réglementées (changement de risque, changement de gestion, rachats).",
    },
    category: "mobile",
    role: {
      en: "Frontend Lead — mobile delivery, UI quality, production readiness",
      fr: "Lead Frontend — delivery mobile, qualité UI, production-ready",
    },
    timeframe: "2023–Present",
    stack: ["TypeScript", "React Native", "React", "tRPC", "API integrations"],
    highlights: {
      en: [
        "Built complete customer space: account overview, contract details, and document access.",
        "Implemented regulated operations: risk profile changes, management option changes, partial/total redemptions.",
        "Delivered consistent UX aligned with web platform while respecting mobile-specific constraints.",
      ],
      fr: [
        "Construction de l'espace client complet : vue d'ensemble du compte, détails des contrats, accès aux documents.",
        "Implémentation des opérations réglementées : changement de profil de risque, changement d'options de gestion, rachats partiels/totaux.",
        "Livraison d'une UX cohérente avec la plateforme web tout en respectant les contraintes spécifiques au mobile.",
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
    slug: "platform-migration-vite",
    title: "Platform Migration to Vite",
    oneLiner: {
      en: "Major migration of subscription journeys, customer space, and back-office apps from legacy CRA/Redux to modern Vite + React Query stack.",
      fr: "Migration majeure des parcours de souscription, espace client et apps back-office de CRA/Redux legacy vers stack moderne Vite + React Query.",
    },
    category: "platform",
    role: {
      en: "Frontend Lead — migration strategy, architecture, delivery",
      fr: "Lead Frontend — stratégie de migration, architecture, delivery",
    },
    timeframe: "2023–2024",
    stack: ["TypeScript", "React", "Vite", "React Query", "Tailwind", "tRPC"],
    highlights: {
      en: [
        "Led migration of subscription journeys from CRA + Redux to Vite + React Query for improved performance and DX.",
        "Rebuilt customer space with modern patterns: server state management, optimistic updates, and better caching.",
        "Migrated back-office manager tools while ensuring zero downtime and feature parity.",
      ],
      fr: [
        "Pilotage de la migration des parcours de souscription de CRA + Redux vers Vite + React Query pour de meilleures performances et DX.",
        "Refonte de l'espace client avec patterns modernes : gestion d'état serveur, mises à jour optimistes, meilleur caching.",
        "Migration des outils gestionnaire back-office sans interruption de service et avec parité fonctionnelle.",
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
    slug: "generali-fonds-miroirs",
    title: "Generali Module Fonds Miroirs",
    oneLiner: {
      en: "AI-powered tool automating PEE/PERCOL collective transfer reports for Generali Épargne Salariale — built solo from scratch.",
      fr: "Outil alimenté par IA automatisant les procès verbaux de transfert collectif PEE/PERCOL pour Generali Épargne Salariale — construit seul de A à Z.",
    },
    category: "partner",
    role: {
      en: "Solo Full-stack Developer — end-to-end ownership, AI integration",
      fr: "Développeur Full-stack Solo — ownership end-to-end, intégration IA",
    },
    timeframe: "2024",
    stack: ["TypeScript", "React", "Next.js", "PostgreSQL", "AWS", "OpenAI"],
    highlights: {
      en: [
        "Built complete application solo: frontend, authentication, database schema, and document generation.",
        "Integrated AI to automatically extract company information from uploaded documents (PDF, Excel, images).",
        "Automated fund mirror generation and export of ready-to-use regulatory documents.",
      ],
      fr: [
        "Construction de l'application complète en solo : frontend, authentification, schéma de base de données et génération de documents.",
        "Intégration de l'IA pour extraire automatiquement les informations entreprise des documents uploadés (PDF, Excel, images).",
        "Automatisation de la génération des fonds miroirs et export de documents réglementaires prêts à l'emploi.",
      ],
    },
    access: "restricted",
    accessNote: {
      en: "Partner tool — authentication required",
      fr: "Outil partenaire — authentification requise",
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
  {
    slug: "dealbreaker",
    title: "Dealbreaker",
    oneLiner: {
      en: "TODO: Add project description", // TODO: Add description
      fr: "TODO: Ajouter la description du projet", // TODO: Add description
    },
    category: "personal",
    role: {
      en: "TODO: Add role", // TODO: Add role
      fr: "TODO: Ajouter le rôle", // TODO: Add role
    },
    timeframe: "TODO", // TODO: Add timeframe
    stack: ["TODO"], // TODO: Add stack
    highlights: {
      en: [
        "TODO: Add highlight 1", // TODO
        "TODO: Add highlight 2", // TODO
        "TODO: Add highlight 3", // TODO
      ],
      fr: [
        "TODO: Ajouter point clé 1", // TODO
        "TODO: Ajouter point clé 2", // TODO
        "TODO: Ajouter point clé 3", // TODO
      ],
    },
    access: "public",
    accessNote: null,
    links: { live: null, repo: null }, // TODO: Add links if available
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

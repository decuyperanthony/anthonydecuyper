# CLAUDE.md - Personal Portfolio

## Project Overview

Personal portfolio PWA for Anthony de Cuyper. Built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and shadcn/ui.

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # TypeScript check
pnpm test         # Run tests (watch mode)
pnpm test:run     # Run tests once
```

## Architecture

```
app/                    # Next.js App Router pages
components/
├── ui/                 # shadcn/ui primitives (do not edit manually)
├── layout/             # Header, Footer, PageContainer
└── sections/           # Page sections (Hero, About, Skills, etc.)
lib/
├── utils.ts            # cn() utility
├── i18n.tsx            # i18n context + hook (useSyncExternalStore)
└── constants.ts        # Site data (experience, projects, skills)
content/
├── en.json             # English translations
└── fr.json             # French translations
```

## Key Patterns

### Theming
- Uses `next-themes` with class strategy
- All colors via CSS variables in `app/globals.css`
- Never hardcode colors - use tokens: `bg-background`, `text-foreground`, `border-border`

### i18n
- Simple client-side i18n with localStorage persistence
- `useI18n()` hook returns `{ locale, t, setLocale }`
- Single source of truth in `lib/i18n.tsx`

To add a new language (e.g., Spanish):
1. Create `content/es.json` (copy from `en.json`)
2. In `lib/i18n.tsx`:
   ```ts
   import esContent from "@/content/es.json";

   const translations = {
     en: enContent,
     fr: frContent satisfies Translations,
     es: esContent satisfies Translations,  // add
   } as const;

   const LOCALE_LABELS = {
     en: "EN",
     fr: "FR",
     es: "ES",  // add
   } satisfies Record<Locale, string>;
   ```

### Components
- shadcn/ui components in `components/ui/` - regenerate with `pnpm dlx shadcn@latest add <component>`
- Custom components use arrow functions
- Props types defined inline or with `type` (not `interface`)

## Content Updates

### To update personal info:
1. Edit `lib/constants.ts` for experience, projects, skills, contact
2. Edit `content/en.json` and `content/fr.json` for translations

### To add a new page:
1. Create `app/<page>/page.tsx`
2. Import layout components: `Header`, `Footer`, `PageContainer`
3. Add to nav in `components/layout/header.tsx`

## PWA

- Manifest at `public/manifest.json`
- Icons in `public/icons/`
- Service worker generated on build (disabled in dev)

## Deployment

```bash
vercel
```

Or connect to Vercel via GitHub for auto-deploy.

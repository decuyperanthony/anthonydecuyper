<p align="center">
  <img src="public/icons/icon-192.png" width="80" alt="Anthony de Cuyper" />
</p>

<h1 align="center">anthonydecuyper.dev</h1>

<p align="center">
  <strong>Personal portfolio and resume — built as a premium PWA</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?logo=tailwindcss" alt="Tailwind v4" />
  <img src="https://img.shields.io/badge/PWA-ready-5A0FC8?logo=pwa" alt="PWA Ready" />
  <img src="https://img.shields.io/badge/Vitest-tested-6E9F18?logo=vitest" alt="Vitest" />
</p>

---

## Features

- **Dark / Light theme** with smooth transitions (next-themes)
- **Internationalization** — English & French with localStorage persistence
- **PWA** — installable on mobile with offline support
- **Print-friendly CV** — dedicated `/cv` page optimized for print
- **CSS animations** — smooth micro-interactions and page transitions
- **WCAG 2.1 AA compliant** — accessible by design
- **SEO optimized** — dynamic sitemap, meta tags, structured data
- **Responsive** — mobile-first design

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, React 19) |
| **Language** | TypeScript (strict mode) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + CSS variables (OKLCH) |
| **Components** | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://radix-ui.com/) |
| **Animations** | CSS transitions + keyframes |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Theme** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **PWA** | [@ducanh2912/next-pwa](https://github.com/nicedayzhu/next-pwa) |
| **Testing** | [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) |
| **Font** | Inter (Google Fonts) |

---

## Architecture

```
app/
├── layout.tsx          # Root layout with providers
├── page.tsx            # Home — Hero, About, Skills, Experience
├── cv/page.tsx         # Resume — print-optimized
├── projects/page.tsx   # Projects showcase
├── contact/page.tsx    # Contact form
├── globals.css         # Theme tokens (OKLCH, CSS variables)
└── sitemap.ts          # Dynamic sitemap

components/
├── ui/                 # Design system (shadcn/ui)
├── layout/             # Header, Footer, PageContainer
└── sections/           # Hero, About, Skills, Experience, etc.

lib/
├── utils.ts            # cn() utility
├── i18n.tsx            # i18n hook and provider
└── constants.ts        # Site data (experience, projects, skills)

content/
├── en.json             # English translations
└── fr.json             # French translations
```

---

## Featured Project — ClairLab

This portfolio showcases [**ClairLab**](https://github.com/decuyperanthony/clairlab), a Turborepo monorepo powering 2 financial simulator apps:

| App | Description | URL |
|-----|-------------|-----|
| **SalaireClair** | Gross-to-net salary simulator (FR, BE, CH, LU) | [salaireclair.fr](https://salaireclair.fr) |
| **PrêtClair** | Mortgage loan simulator (FR) | [pretclair.fr](https://pretclair.fr) |

**Highlights:** 47 shared UI components, 249 unit tests, Lighthouse 100/100/100/100, 63 SEO blog articles, 120+ PRs, automated SEO monitoring (GSC + Umami → Slack).

---

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run tests
pnpm test

# Type check
pnpm type-check

# Production build
pnpm build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Customization

### Content
- `content/en.json` / `content/fr.json` — translations
- `lib/constants.ts` — skills, experience, projects, education, contact info

### Theme
Color palette defined in `app/globals.css` using CSS custom properties (OKLCH). Dark mode handled via `.dark` class.

### PWA
Update `public/manifest.json` for PWA settings. Icons in `public/icons/`.

---

## Deploy

Push to a Git repository connected to [Vercel](https://vercel.com/) for automatic deployments.

---

## License

MIT

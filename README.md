# Anthony de Cuyper - Personal Website

A premium portfolio PWA built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Features

- Dark/Light theme toggle with next-themes
- Internationalization (English/French) with localStorage persistence
- PWA support with offline capabilities
- Print-friendly CV page
- Responsive design
- SEO optimized with sitemap and meta tags

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS v4, shadcn/ui
- **Styling:** CSS Variables, OKLCH colors
- **Theme:** next-themes
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)
- **PWA:** @ducanh2912/next-pwa
- **Testing:** Vitest, Testing Library

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Run tests
pnpm test

# Type check
pnpm type-check

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/
├── layout.tsx          # Root layout with providers
├── page.tsx            # Home page
├── cv/page.tsx         # Resume page
├── projects/page.tsx   # Projects page
├── contact/page.tsx    # Contact page
├── globals.css         # Global styles and theme tokens
└── sitemap.ts          # Dynamic sitemap

components/
├── ui/                 # shadcn/ui components
├── layout/             # Header, Footer, PageContainer
└── sections/           # Page sections (Hero, About, Skills, etc.)

lib/
├── utils.ts            # cn() utility
├── i18n.tsx            # i18n hook and provider
└── constants.ts        # Site data (experience, projects, etc.)

content/
├── en.json             # English translations
└── fr.json             # French translations

public/
├── icons/              # PWA icons
└── manifest.json       # PWA manifest
```

## Customization

### Content
Edit the JSON files in `content/` to update translations:
- `content/en.json` - English content
- `content/fr.json` - French content

Edit `lib/constants.ts` to update:
- Skills
- Experience
- Projects
- Contact information
- Education
- Languages

### Theme
The color palette is defined in `app/globals.css` using CSS custom properties.
Light and dark mode colors are automatically handled via the `.dark` class.

### PWA
Update `public/manifest.json` to customize the PWA settings.
Generate proper PNG icons and place them in `public/icons/`.

## Deploy

Deploy to Vercel:

```bash
vercel
```

Or push to a Git repository connected to Vercel for automatic deployments.

## License

MIT

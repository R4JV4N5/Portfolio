# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server with HMR
npm run build      # Production build
npm run lint       # Run ESLint
npm run preview    # Preview production build locally
```

No test framework is configured.

## Architecture

This is a **React + Vite portfolio website** for Dyanaraj Vanniyar. It is JavaScript (not TypeScript), using plain JSX files.

### Config-driven data

All personal content lives in `src/data/config.json`. **Never hardcode personal data (name, email, links, job history, etc.) in components** — always read from this file. The config shape covers: `personal`, `about`, `skills`, `projects`, `experience`, `education`.

### Intended folder structure

```
src/
  components/   # Reusable UI primitives (Navbar, Footer, shared widgets)
  sections/     # Full-page sections (Hero, About, Skills, Projects, Experience, Education, Achievements, Contact)
  hooks/        # Custom React hooks
  utils/        # Pure utility functions
  data/
    config.json # Single source of truth for all personal data
```

### Tech stack

- **Vite** (build tool, `vite.config.js` is minimal — just `@vitejs/plugin-react`)
- **Tailwind CSS** (install if not already present: `npm install -D tailwindcss @tailwindcss/vite`)
- **Framer Motion** — all section reveals, hero intro, and hover animations
- **React Icons** — icon usage throughout
- **Lenis** (optional) — smooth scrolling

### UI conventions

- Dark mode by default; global CSS variables are defined in `src/index.css`
- Glassmorphism style: `backdrop-blur`, semi-transparent backgrounds, gradient borders
- Animations: section reveal on scroll, micro-interactions on hover
- Extra features spec'd: scroll progress bar, back-to-top button, loading animation, SEO meta tags

### Sections (in order)

Navbar → Hero → About → Skills → Projects → Experience → Education & Publication → Achievements → Contact → Footer

Each section is a self-contained component under `src/sections/` and receives its data by importing from `src/data/config.json`.

## UI Skills & MCP — mandatory usage

Every UI task in this project **must** apply these skills. Do not write UI code without them.

### Skills (auto-loaded, use for every component/section)

| Skill | When to apply |
|---|---|
| `frontend-design` | Any component, section, or page UI work |
| `bencium-impact-designer` | Styling decisions, visual direction, layout choices |
| `web-design-guidelines` | After implementing any UI — audit for quality and accessibility |
| `vercel-react-best-practices` | All React component code |
| `vercel-composition-patterns` | Component structure and reusable API design |
| `vercel-react-view-transitions` | Any animation or page transition work |

### shadcn MCP

The `shadcn` MCP server is configured in `.mcp.json`. Use it to:
- Look up component APIs before implementing from scratch
- Fetch copy-paste-ready component code
- Check available variants and props

### Design rules enforced by these skills

- No generic fonts (Inter, Roboto, Space Grotesk) without strong justification
- No default SaaS blue `#3B82F6` or purple gradients as the only accent
- No glassmorphism as a crutch — use it only if intentional
- Every layout decision must have a reason: spacing, color, type hierarchy
- Components must be WCAG AA accessible

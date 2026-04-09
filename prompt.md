# Portfolio Redesign — Design Prompt

## Vision

**"Structured Dark Editorial"** — a minimal, typography-forward dark portfolio that feels refined and professional rather than decorative. The goal was to move away from the heavy glassmorphism trend toward something with more visual clarity and personality.

---

## Design Principles

### 1. Typography-first
Text carries the visual weight. Strong font sizing hierarchy, tight tracking on headings, comfortable line-height on body text.

### 2. Left-aligned section headings
All section headings are left-aligned (not centered) with a small uppercase `section-label` above the title. This gives the site an editorial/magazine feel instead of a generic portfolio look.

### 3. Intentional color use
The accent color (violet `#8b5cf6`) is used **sparingly** — only on:
- Section labels
- Active nav items
- Icon tints
- CTA button backgrounds
- Hover states

Not on large backgrounds, not on body text. This makes the accent feel meaningful when it appears.

### 4. No glassmorphism
Removed `backdrop-filter: blur()` from all cards. Cards are now clean dark surfaces (`#0c0c1a`) with a subtle border (`#181830`). The hover state uses a faint violet border glow. This reads as crisper on high-resolution displays.

### 5. Alternating section backgrounds
Even sections use `#07070e`, odd sections use `#09091a`. This creates a subtle rhythm that separates sections without using full dividers or heavy borders.

---

## Color System

| Token | Value | Usage |
|---|---|---|
| Background | `#07070e` | Page background |
| Surface | `#0c0c1a` | Card backgrounds |
| Surface deep | `#09091a` | Alternate section backgrounds |
| Border | `#181830` | All card/element borders |
| Accent | `#8b5cf6` | CTAs, labels, icons, highlights |
| Accent light | `#c4b5fd` | Gradient text, hover |
| Text | `#eeeeff` | Headings, primary text |
| Text muted | `#8a88aa` | Body copy |
| Text subtle | `#4e4c6e` | Secondary info, descriptions |
| Text ghost | `#3d3b5e` | Timestamps, numbers, inactive |

---

## Section-by-Section Decisions

### Hero
- Two-column layout on desktop: text left, abstract visual right
- Animated concentric rings (CSS + Framer Motion rotate) as visual decoration
- Rotating role title cycles through: "Software Engineer" → "Full Stack Developer" → "AI Systems Builder"
- Availability badge (green pulse dot) establishes open-to-work status immediately
- "DV" monogram in the center orb as a stand-in for a profile photo

### About
- Bio + horizontal stats row (with count-up animation) on the left
- Numbered competency list on the right (cleaner than chips)
- Stats separated by a `border-top`/`border-bottom` divider, not a card

### Skills
- **No tabs** — all skills visible at once in a 3-column category grid
- Grid uses `gap-px` with a background color trick to create clean divider lines without borders on every cell
- Each skill pill shows its react-icons/si logo

### Projects
- First project is "Featured" — takes full width with description + highlights visible without opening modal
- Remaining projects in a 2-col grid with just title + description + tech chips
- Click-to-expand (modal) on all cards
- Number badges (`01`, `02`, `03`) for scannable ordering

### Experience
- Two-column row layout: date + company on the left, role + description + tech on the right
- Separated by `border-bottom` dividers (no cards, more editorial)

### Achievements
- Numbered rows with icon in a column, text in the other
- `whileHover={{ x: 4 }}` gives a subtle slide-right on hover
- Much lighter than a 4-column card grid

### Contact
- Email prominently displayed at top of left column with one-click copy
- Other contact methods as link rows
- Form on the right, styled with dark inputs matching the surface

---

## Animation Language

All animations use Framer Motion with:
- `fadeUp` — sections reveal from slightly below
- `fadeLeft` / `fadeRight` — opposing sides animate toward center
- `staggerContainer` — children animate in sequence
- `whileHover` on cards: `y: -4` lift (not scale, which feels heavy)
- Scroll-triggered with `whileInView` + `viewport={{ once: true }}`

---

## Utilities (index.css)

| Class | Purpose |
|---|---|
| `.card` / `.glass-card` | Dark surface card with hover glow |
| `.gradient-text` | Purple → blue gradient clip text |
| `.section-label` | Uppercase violet label with left line |
| `.btn-accent` | Primary violet CTA button |
| `.btn-ghost` | Ghost border button |
| `.chip` | Small dark tech tag |
| `.divider` | 1px `#181830` horizontal rule |

---

## What Was Removed

- `GradientBlob` component (decorative, not used in new design)
- Dark mode toggle (always dark — intentional brand decision)
- Tab interface in Skills
- Glassmorphism `backdrop-filter`
- Centered section headings
- Emoji icons in Skills categories

---

## File Map

```
src/
  index.css               ← Design tokens, utilities
  components/
    Navbar.jsx            ← Minimal top nav, "Hire me" CTA
    Footer.jsx            ← 1-line minimal footer
    SectionHeading.jsx    ← Left-aligned, section-label + title
    ScrollProgressBar.jsx ← Unchanged
    BackToTop.jsx         ← Unchanged
    LoadingScreen.jsx     ← Unchanged
  sections/
    Hero.jsx              ← 2-col, rings visual, rotating role
    About.jsx             ← Bio + stats row + competency list
    Skills.jsx            ← 3-col category grid, all visible
    Projects.jsx          ← Featured card + 2-col grid
    ProjectModal.jsx      ← Refined modal
    Experience.jsx        ← Row layout with dividers
    Education.jsx         ← Degree card + publications
    Achievements.jsx      ← Numbered rows
    Contact.jsx           ← Email CTA + form
  hooks/
    useCountUp.js         ← Animated stat counter
```

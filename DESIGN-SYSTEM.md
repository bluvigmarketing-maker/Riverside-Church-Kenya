# Design System Reference — River Church Eldoret Style

This documents the exact visual/interaction system used on this site, so it can be
reproduced on another Next.js project. It covers the tech stack, design tokens,
component patterns, motion, and page-composition conventions — with real code
snippets pulled from this codebase, not paraphrased descriptions.

Swap the hex values in §2 for a different brand's colors and everything else
(structure, spacing, motion, component anatomy) carries over unchanged — that's
the intended way to reuse this on a differently-branded site.

---

## 1. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js (App Router) + TypeScript | Server Components by default, Vercel-native |
| Styling | Tailwind CSS v4 (CSS-first config, no `tailwind.config.ts`) | Design tokens live in `globals.css` via `@theme` |
| Component primitives | shadcn/ui (`style: "base-nova"`, built on `@base-ui/react`) | Accessible Button/Dialog/Sheet/DropdownMenu/NavigationMenu/Badge/Card out of the box |
| Motion | Framer Motion | Scroll-triggered reveal animations |
| Icons | lucide-react | Consistent line-icon set throughout |
| Fonts | `next/font/google`: Geist (sans), Geist Mono, Playfair Display (headings) | Serif display + clean sans body |

To bootstrap an equivalent project:
```
npx create-next-app@latest . --ts --tailwind --eslint --app --import-alias "@/*"
npx shadcn@latest init -d
npx shadcn@latest add button dialog dropdown-menu navigation-menu sheet separator badge card -y
npm install framer-motion lucide-react
```

---

## 2. Color System

Two hue families only: a **navy** scale (primary/structural) and a **gold** scale
(accent/CTA). No other hues are used anywhere in the UI except semantic red for
destructive actions (inherited from shadcn's default `--destructive`).

### 2.1 Raw scale (defined once, in `:root`)

```css
:root {
  --navy-50:  #eef3fa;
  --navy-100: #d9e4f2;
  --navy-200: #b3c8e3;
  --navy-300: #86a7d0;
  --navy-400: #5b85bb;
  --navy-500: #3f699f;
  --navy-600: #345683;   /* primary brand navy */
  --navy-700: #2c4569;
  --navy-800: #253a58;
  --navy-900: #1f2f47;
  --navy-950: #141f30;   /* darkest surface — headers/footers/hero overlays */

  --gold-50:  #fdf8ec;
  --gold-100: #faeecb;
  --gold-200: #f4dc9a;
  --gold-300: #edc665;
  --gold-400: #e3b13e;   /* ring/focus color */
  --gold-500: #d4af37;   /* classic "gold" — accent/secondary */
  --gold-600: #b8912a;
  --gold-700: #8f6f21;   /* accent text on light backgrounds (AA-safe) */
  --gold-800: #6c541c;
  --gold-900: #4d3c15;
}
```

**To re-brand:** replace these two 10-step scales with a different hue pair (e.g.
forest-green + copper) at the same lightness steps — everything downstream
(semantic tokens, components) references these variables, never raw hex.

### 2.2 Semantic tokens (map the scale to meaning, light + dark)

Tailwind v4's `@theme inline` block exposes the scale as utilities (`bg-navy-600`,
`text-gold-700`, etc.) and shadcn's semantic tokens are re-pointed at the scale
instead of grayscale:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: var(--navy-950);
  --primary: var(--navy-600);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: var(--gold-500);
  --secondary-foreground: var(--navy-950);
  --muted: var(--navy-50);
  --muted-foreground: var(--navy-700);
  --accent: var(--gold-100);
  --accent-foreground: var(--navy-900);
  --border: var(--navy-100);
  --input: var(--navy-100);
  --ring: var(--gold-400);
}

.dark {
  --background: var(--navy-950);
  --foreground: oklch(0.985 0 0);
  --primary: var(--gold-500);           /* inverts: gold becomes primary in dark mode */
  --primary-foreground: var(--navy-950);
  --secondary: var(--navy-700);
  --muted: var(--navy-800);
  --muted-foreground: var(--navy-200);
  --accent: var(--navy-800);
  --accent-foreground: var(--gold-300);
  --ring: var(--gold-400);
}
```

### 2.3 Usage rules (how color is actually applied across the site)

- **Dark navy-950 surfaces**: page hero banners, the footer, the site header's
  mobile drawer background is white but nav bars/hero sections use navy-950 —
  reserved for "big structural blocks," never body copy backgrounds.
- **White/near-white surfaces**: default page background, all cards.
- **navy-50**: subtle section backgrounds to break up all-white pages (e.g. a
  "pillars" grid section sits on `bg-navy-50` between two white sections).
- **gold-400/60 border ("gold-line")**: a thin gold outline used on emphasized
  cards, buttons, and dividers — see §4.2.
- **gold-700 text on white / gold-300 text on navy-950**: the "eyebrow" label
  color and accent text — always the 700-step on light backgrounds and the
  300-step on dark backgrounds, for contrast.
- Never use gold as a large fill for body text backgrounds; it's an accent, not
  a surface color.

---

## 3. Typography

```ts
// app/layout.tsx
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const playfairDisplay = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });
```

```css
--font-display: var(--font-playfair);
--font-heading: var(--font-display);   /* aliased so `font-heading` utility works */
```

```css
@layer base {
  html { @apply font-sans; }            /* Geist Sans is the default body font */
  h1, h2, h3, h4 { @apply font-heading; } /* every heading auto-gets Playfair Display */
}
```

**Rules:**
- Headings (`h1`–`h4`) are always the serif display font, semibold–bold weight.
- Body copy is always Geist Sans, regular weight, `text-navy-700` (not pure
  black) for de-emphasized warmth against the navy palette.
- Pull-quotes and scripture/testimonial text use `font-heading` (serif) + `italic`
  even though they aren't semantically headings — serif italic signals "quoted/
  reverent text" throughout the site.
- Monospace (`font-mono`, Geist Mono) is reserved for literal technical strings
  only (e.g. a URL path in an admin table) — never decorative.
- Eyebrow/label text: `text-xs font-semibold uppercase tracking-wide`.

---

## 4. Core Component Patterns

### 4.1 Buttons

Base button comes from shadcn (`components/ui/button.tsx`) with variants
`default | outline | secondary | ghost | destructive | link` and sizes
`xs | sm | default | lg | icon...`. Two custom utility classes layer on top for
brand CTAs:

```css
@layer utilities {
  .btn-metallic {
    background-image: linear-gradient(
      110deg,
      var(--gold-600) 0%, var(--gold-300) 30%, var(--gold-500) 45%,
      var(--gold-100) 55%, var(--gold-500) 70%, var(--gold-600) 100%
    );
    background-size: 250% 100%;
    color: var(--navy-950);
    animation: shimmer 5s linear infinite;
  }
  .btn-metallic:hover { animation-duration: 1.8s; } /* speeds up on hover */

  .gold-line { @apply border border-gold-400/60; }  /* thin gold outline, reused everywhere */
}

@keyframes shimmer {
  0%   { background-position: 0% 50%; }
  100% { background-position: -200% 50%; }
}

@media (prefers-reduced-motion: reduce) {
  .btn-metallic { animation: none; }
}
```

Usage — every primary CTA in the site is:
```tsx
<Button className="btn-metallic gold-line font-semibold">Join Us This Sunday</Button>
```
Secondary/outline CTAs (e.g. on a dark hero) use `variant="outline"` with
`gold-line` and a translucent white background:
```tsx
<Button variant="outline" className="gold-line border-white/40 bg-transparent text-white hover:bg-white/10">
  Our Story
</Button>
```

### 4.2 Cards

Two card treatments, chosen by emphasis:
```tsx
// Standard card
<div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">…</div>

// Emphasized card ("gold-line")
<div className="gold-line rounded-2xl border bg-white p-6">…</div>
```
Interactive/clickable cards add a lift-on-hover:
```tsx
className="transition-transform hover:-translate-y-1 hover:shadow-md"
```
Dark cards (used sparingly, e.g. a "Vision" statement block) invert to
`bg-navy-950 text-white`.

Radius scale: `rounded-lg` (buttons/inputs) → `rounded-xl`/`rounded-2xl` (cards,
most common) → `rounded-3xl` (large hero-ish feature cards). Never sharp corners.

### 4.3 Section heading

Every content section uses the same three-part heading: eyebrow pill → serif
title → short gold underline rule → optional description:
```tsx
<span className="rounded-full border border-gold-400/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-700">
  Eyebrow Label
</span>
<h2 className="font-heading text-3xl font-semibold text-navy-950 sm:text-4xl">Title</h2>
<span className="h-px w-16 bg-gold-400" />
<p className="max-w-2xl text-navy-700">Optional supporting description.</p>
```
On a dark background, swap to `border-gold-400/40 text-gold-300` (eyebrow),
`text-white` (title), `text-navy-100` (description).

### 4.4 Page hero banner (interior pages)

Every non-homepage page opens with the same dark banner before its content:
```tsx
<div className="bg-navy-950 py-16 text-center text-white sm:py-20">
  <span className="rounded-full border border-gold-400/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-300">
    Eyebrow
  </span>
  <h1 className="font-heading text-4xl font-bold sm:text-5xl">Page Title</h1>
  <span className="h-px w-16 bg-gold-400" />
  <p className="max-w-2xl text-navy-100">Optional description</p>
</div>
```

### 4.5 Badges

shadcn `Badge`, `variant="outline"` combined with `gold-line` for a consistent
pill look (used for tags like ministry attributes, event status flags):
```tsx
<Badge variant="outline" className="gold-line text-navy-800">Prayerful</Badge>
```

### 4.6 Header / Navigation

- Sticky, `bg-background/95 backdrop-blur`, `border-b border-navy-100`.
- Desktop: horizontal links + a shadcn `DropdownMenu` for any nav item with
  children (e.g. "About Us" → History/Leadership), plus a `btn-metallic` CTA on
  the far right.
- Mobile (`< md`): a hamburger button opens a shadcn `Sheet` (slide-in drawer)
  with a flat, indented list (children nested under a left border).
- Logo: rendered at `h-12 sm:h-14` in the header — always size generously, never
  shrink a logo to fit a cramped bar.

### 4.7 Footer

`bg-navy-950 text-navy-100`, three-column grid (brand+motto / quick links /
contact), logo placed inside a white rounded badge (`rounded-xl bg-white px-4
py-2.5`) since the logo itself is black-on-transparent/white and would vanish
directly on a dark background. Bottom bar: centered copyright, `border-t
border-navy-800`, `text-xs text-navy-400`.

### 4.8 Forms

Plain HTML inputs (no heavy form library), consistent styling:
```tsx
className="rounded-lg border border-navy-200 px-3 py-2 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40"
```
Every field: `<label>` above input, `text-sm font-medium text-navy-900`.

---

## 5. Motion

One reusable wrapper drives nearly all animation — a scroll-triggered
zoom+fade+rise, via Framer Motion:

```tsx
"use client";
import { motion } from "framer-motion";

export function AnimatedSection({ children, className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
```

**Rules:**
- Wrap each logical content block (a card, a text column, a section) in its own
  `<AnimatedSection>` — not the whole page in one.
- Grids stagger via `delay={index * 0.05}` (or `0.1` for just 2 items side by
  side) per item.
- `viewport={{ once: true }}` — animations play once on first scroll-into-view,
  never replay on re-scroll (avoids a distracting "flickering" page).
- The hero itself is **not** animated (it's the first thing visible, already
  "revealed") — only content below the fold animates in.
- Interactive hover lifts (`hover:-translate-y-1`) are plain CSS transitions,
  not Framer Motion — reserve JS-driven motion for scroll-reveal only.
- Respect `prefers-reduced-motion` (already handled for `.btn-metallic`; Framer
  Motion's `whileInView` is itself fairly subtle and left as-is).

---

## 6. Iconography

`lucide-react` exclusively. Convention:
- Inline icon next to text: `<Icon className="size-4" aria-hidden="true" />`
  immediately before the text, `gap-1.5` to `gap-2` flex container.
- Icons are always `aria-hidden="true"` when paired with visible text (the text
  is the accessible label).
- Icon color follows context: `text-gold-600`/`text-gold-700` for accent icons
  next to headings, inherits `currentColor` inside buttons.

---

## 7. Imagery

- Hero/banner photography: full-bleed, `object-cover`, with a dark gradient
  overlay so white text stays legible: `bg-gradient-to-t from-navy-950
  via-navy-950/70 to-navy-950/40`.
- Portrait/profile photos: fixed aspect ratio containers (`aspect-[4/5]`),
  `object-cover`, rounded corners matching the surrounding card.
- Empty/missing-image state: never show a broken image — render a solid
  `bg-navy-100` (light) or `bg-navy-950` (dark) placeholder box with a muted
  icon or the item's title centered in it.
- Logos on dark backgrounds: never CSS-filter a non-transparent logo file
  (`invert`/`brightness-0` will render a solid block if the source has an
  opaque background) — check the actual PNG for transparency first, or place
  it on a small white badge instead (see §4.7).

---

## 8. Layout Conventions

- Global content width: `mx-auto max-w-6xl px-4 sm:px-6` (a `Container`
  component wrapping this is reused on every page).
- Vertical rhythm: sections are `py-16` by default; dark/banner sections use
  `py-16 sm:py-20`.
- Grids: `grid gap-5`/`gap-6`, responsive column counts
  (`sm:grid-cols-2 lg:grid-cols-3`), never more than 3 columns for card grids.
- Mobile-first everywhere: base styles target mobile, `sm:`/`md:`/`lg:`
  prefixes layer up — never the reverse.

---

## 9. Applying This to a New Project — Checklist

1. Scaffold Next.js + Tailwind v4 + shadcn/ui (`base-nova` style) + Framer
   Motion + lucide-react (§1).
2. Pick a two-hue palette (structural + accent) and generate 10-step scales at
   the same lightness bands as §2.1; wire them into `@theme inline` + `:root`/
   `.dark` exactly as in §2.2.
3. Set up the three fonts (serif display for headings, sans for body) via
   `next/font/google`, matching §3.
4. Build the shared primitives first, in this order: `Container`,
   `SectionHeading`, `PageHero`, `AnimatedSection`, the `.btn-metallic`/
   `.gold-line` utilities — every page composes from these five.
5. Build `Header` (sticky + dropdown + mobile Sheet) and `Footer` (dark, logo
   badge) once, shared across all pages via a route-group layout.
6. For every new page: `PageHero` → one or more `Container`-wrapped sections,
   each section's content wrapped in `AnimatedSection`, headings via
   `SectionHeading`.
7. Re-use the exact card/badge/form/button class strings from §4 verbatim —
   consistency comes from copying the same Tailwind class combinations, not
   from reinventing similar-looking ones per page.

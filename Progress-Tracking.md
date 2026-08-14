# Progress Tracking — River Church Eldoret Website Rebuild

Status key: ⬜ Not started · 🟨 In progress · ✅ Done · ⛔ Blocked (needs client action)

Last updated: 2026-08-14

**Scope note:** this build is phased — see `Client-Requests.md` for the full ask.
**Phase 1 (this tracker's main focus)** is the complete public site, content-driven
by Supabase, no admin UI yet (content edited via Supabase's own Table Editor —
see `SETUP.md`). **Phase 2** (separate, later) adds the custom admin dashboard
with role-based permissions, in-browser image upload, and Paystack donations.

---

## Phase 0 — Setup & Discovery
| Task | Status | Notes |
|---|---|---|
| Content Library reviewed (old site screenshots) | ✅ | Homepage, History, Leadership reviewed |
| Images folder created for new assets | ✅ | See `Images/README.md` |
| Client-Requests.md created & filled in | ✅ | Full requirements, branding, and history/vision copy captured |
| Progress-Tracking.md created | ✅ | This file |
| Sitemap / page list confirmed | ✅ | Home / About Us (History, Leadership) / Programs / Events / Contact |
| Branding assets received | ✅ | Logo (`Images/Logo/`), hero photos, pastor photos, navy+gold direction |

## Phase 1 — Planning & Phasing
| Task | Status | Notes |
|---|---|---|
| Tech stack confirmed | ✅ | Next.js (App Router) + TypeScript + Tailwind + shadcn/ui + Framer Motion + Supabase + Vercel |
| Phasing agreed with client | ✅ | Public site first (this build); admin dashboard + Paystack as Phase 2 |
| Supabase project created | ⛔ | **Client action** — see `SETUP.md` step 1 |
| Vercel project created & linked | ⛔ | **Client action** — see `SETUP.md` step 6 |
| Domain/DNS plan confirmed | 🟨 | Domain `riverchurchke.org` already owned; DNS cutover happens at launch |

## Phase 2 — Design
| Task | Status | Notes |
|---|---|---|
| Design direction agreed | ✅ | Light navy + gold, metallic-gold animated CTA buttons, gold line accents, logo unchanged (black/white), serif-display + sans body, modernized version of old layout |
| Homepage layout | ✅ | |
| About Us / History layout | ✅ | |
| Leadership page layout | ✅ | |
| Programs page layout | ✅ | |
| Events page layout | ✅ | |
| Contact page layout | ✅ | |

## Phase 3 — Development
| Task | Status | Notes |
|---|---|---|
| Project scaffolded | ✅ | Next.js + Tailwind + shadcn/ui + Framer Motion + Supabase client helpers |
| Supabase schema & seed written | ✅ | `supabase/migrations/0001_init.sql`, `supabase/seed.sql` — ready to run once the project exists (see `SETUP.md`) |
| Homepage built | ✅ | Hero, key scripture block, pastors' welcome message, vision/mission/pillars, upcoming-event countdown banner, about snippet, find-us map |
| About Us overview page built | ✅ | |
| History page built | ✅ | Timeline sourced from the client's full history narrative |
| Leadership page built | ✅ | Full pastor profiles with bios, attributes, photos |
| Programs page built | ✅ | 5 pillars of faith |
| Events list + detail pages built | ✅ | Live countdown, donation button (see below) |
| Contact page + working form built | ✅ | Submits to Supabase `contact_messages` |
| Event countdown (below hero) | ✅ | Ticks live; drives off whichever event has `is_featured = true` |
| Donation button on events | ✅ | Shows "online giving coming soon" — Paystack wiring is Phase 2 |
| Admin/content management dashboard | ⬜ | **Phase 2** — out of scope for this build by client's own phasing decision |
| Build passes type-check + lint cleanly | ✅ | Verified via `npm run build` and `npm run lint` |
| Responsive/mobile pass | ✅ | Mobile-first throughout; mobile nav drawer; verified via build + HTML checks (no browser tool available in this environment — see note below) |
| Scroll-in animations | ✅ | Framer Motion zoom/fade-in on section entry throughout |

## Phase 4 — Content & Assets
| Task | Status | Notes |
|---|---|---|
| Logo in place | ✅ | `public/logo.png` |
| Hero images in place | ✅ | Desktop + mobile variants, `public/images/` |
| Leadership photos in place | ✅ | Seeded as fallback content now; `scripts/upload-media.ts` pushes them to Supabase Storage once the project exists |
| History section images | ⬜ | None supplied yet — sections render with a styled placeholder until photos are added |
| Programs/Events images | ⬜ | None supplied yet — sample event and program cards use icon-only styling until photos are added |
| Favicon updated from brand mark | ⬜ | Currently the default Next.js favicon — needs a square icon-only version of the logo |
| Real event(s) added (replacing sample) | ⬜ | One clearly-labeled **sample** event is seeded so the countdown has something to show — replace via Supabase Table Editor |
| Service times, phone, email, social links | ⬜ | Left blank in `seed.sql` (marked `TODO`) — client to provide |
| All page copy finalized | ✅ | Sourced directly from `Client-Requests.md` |
| Sermons feature | ⬜ | Deferred — client confirmed this comes later once the source (title/date/image/link) exists |

## Phase 5 — Testing & Launch
| Task | Status | Notes |
|---|---|---|
| Type-check / lint / build verified | ✅ | All routes build and render with real seeded content (checked via local dev server + HTML output) |
| Visual/cross-browser testing | ⬜ | No browser/screenshot tool available in this environment — needs a manual look in an actual browser before launch |
| Client review & sign-off | ⬜ | |
| Supabase connected in production | ⛔ | Depends on Phase 1 — Planning items above |
| Deployed to Vercel production | ⬜ | |
| Domain pointed to production | ⬜ | Target: before September launch |
| Post-launch check | ⬜ | |

---

## Log
- **2026-08-14** — Kicked off rebuild. Reviewed old WordPress site screenshots. Created `Images/`, `Client-Requests.md`, this tracking file. Client filled in full requirements (admin dashboard needs, branding colors, donation flow, history/vision copy, launch target of September).
- **2026-08-14** — Agreed phased approach: public site (Phase 1) ships first; custom admin dashboard with role-based permissions + Paystack donations is Phase 2. Sermons page and precise contact details deferred pending more source material from the client.
- **2026-08-14** — Built and verified the full Phase 1 public site: Next.js + Tailwind + shadcn/ui + Framer Motion + Supabase, all 7 pages, event countdown, donation "coming soon" modal, working contact form, navy/gold metallic design system. Site is previewable today via fallback content even before Supabase is connected. Remaining before launch: client creates the Supabase project and Vercel link (`SETUP.md`), supplies missing contact details/photos, and reviews the site visually in a browser.

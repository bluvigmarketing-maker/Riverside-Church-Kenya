# Setup Guide — River Church Eldoret Website

Phase 1 is code-complete and runs today with built-in fallback content (no
Supabase required to preview it). This guide covers the steps needed on your
side to connect the real backend and deploy it.

## 1. Create a Supabase project

1. Go to [supabase.com](https://supabase.com) and create a new project (the
   free tier is enough for now).
2. In **Project Settings → API**, copy:
   - **Project URL**
   - **anon public** key
   - **service_role** key (keep this one secret — never share or commit it)

## 2. Configure local environment variables

1. Copy `.env.example` to a new file named `.env.local` in the project root.
2. Paste in the three values from step 1.
3. `.env.local` is already git-ignored — it will never be committed.

## 3. Run the database migration and seed data

Using the Supabase SQL Editor (in your project dashboard):

1. Open `supabase/migrations/0001_init.sql`, paste its contents into the SQL
   Editor, and run it. This creates all tables and security policies.
2. Open `supabase/seed.sql`, paste its contents into the SQL Editor, and run
   it. This loads the real church content (history, leadership bios, vision
   & mission, programs, and one sample event).
3. A few fields were left blank because they weren't provided yet — search
   `seed.sql` for `TODO` to see exactly what's missing (phone, email, precise
   address, service times, social links). You can fill these in either by
   editing `seed.sql` before running it, or afterwards directly in the
   Supabase **Table Editor** (`site_settings` table, one row).

## 4. Create the Storage bucket and upload images

1. In Supabase, go to **Storage** and create a new **public** bucket named
   `media`.
2. Run the upload script to push the pastor photos already in `Images/` into
   that bucket:
   ```
   npm run upload-media
   ```
   This uses `SUPABASE_SERVICE_ROLE_KEY` from `.env.local` — make sure that's
   filled in first.
3. As more photos are ready (history timeline images, event photos, etc.),
   add them to the `media` bucket under the matching folder (`leadership/`,
   `history/`, `events/`) and reference the path in the relevant table's
   image column via the Table Editor.

## 5. Run it locally

```
npm install
npm run dev
```

Visit `http://localhost:3000`. Even before completing steps 1–4, the site
renders using built-in fallback content — useful for a first look. Once
Supabase is connected, real data takes over automatically.

## 6. Deploy to Vercel

1. Push this repository to GitHub (or your preferred git host).
2. In Vercel, **New Project → Import** this repo.
3. Add the same three environment variables from `.env.local` in the
   Vercel project's **Settings → Environment Variables**.
4. Deploy. Every push to the main branch will auto-deploy after that.
5. Once ready to go live, point the `riverchurchke.org` domain at the Vercel
   project (Vercel → Settings → Domains).

## 7. Set up the admin dashboard (Phase 2)

The custom `/admin` dashboard is now built. To activate it:

1. In the Supabase SQL Editor, open `supabase/migrations/0002_admin_dashboard.sql`,
   paste its contents, and run it. This adds the permissions model on top of
   `0001` — safe to run any time after `0001`.
2. Create the first **Super Admin** account (every account after this one is
   created from inside the dashboard's Staff page instead):
   ```
   npm run create-super-admin -- pastor@example.com "a-strong-password"
   ```
   This uses `SUPABASE_SERVICE_ROLE_KEY` from `.env.local`.
3. Sign in at `/admin/login` with that email/password. From there, the super
   admin can invite additional staff accounts (Staff page) and choose exactly
   which sections each one can access.
4. Traffic analytics live in Vercel itself — once deployed, open the project
   on vercel.com and go to its **Analytics** tab (no extra setup needed,
   `@vercel/analytics` is already wired in).

## Editing content day-to-day

With the dashboard live, day-to-day edits (site settings, leadership, history,
programs, events, viewing contact messages, managing staff) all happen at
`/admin` — no Supabase dashboard access needed for that.

Supabase's own **Table Editor** is still there as a fallback / for anything
not covered by the dashboard:

| What to change | Table |
|---|---|
| Tagline, motto, vision, mission, scripture, address, phone, email | `site_settings` (single row) |
| Pastor bios, photos, quotes | `leaders` |
| History page timeline sections | `history_sections` |
| Ministries / "Pillars of Our Faith" | `programs` |
| Events (add/edit/remove, mark one as `is_featured` for the homepage countdown, toggle `donation_enabled`) | `events` |
| Contact form submissions | `contact_messages` |
| Admin accounts & permissions | `profiles` |

Changes typically appear on the live site within 5 minutes (or immediately
in local dev), and admin dashboard edits also trigger an instant refresh of
the relevant public page.

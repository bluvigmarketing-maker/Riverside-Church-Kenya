-- River Church Eldoret — Phase 1 schema
-- Content tables are public-read; only contact_messages allows a public insert.
-- All writes to content tables are service-role only until the Phase 2 admin
-- dashboard adds authenticated, role-scoped write policies (see `profiles`).

-- ============================================================
-- site_settings — single row of church-wide copy/contact info
-- ============================================================
create table if not exists site_settings (
  id bigint primary key generated always as identity,
  tagline text not null default '',
  motto text not null default '',
  vision text not null default '',
  mission text not null default '',
  key_scripture_text text not null default '',
  key_scripture_ref text not null default '',
  address text not null default '',
  phone text,
  email text,
  service_times jsonb not null default '[]'::jsonb,
  social_links jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

alter table site_settings enable row level security;

create policy "site_settings readable by everyone"
  on site_settings for select
  to anon, authenticated
  using (true);

-- ============================================================
-- leaders — pastor / leadership profiles
-- ============================================================
create table if not exists leaders (
  id bigint primary key generated always as identity,
  name text not null,
  role_title text not null,
  quote text,
  bio text not null default '',
  photo_url text,
  hometown text,
  education text,
  ordination_info text,
  attributes text[] not null default '{}',
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

alter table leaders enable row level security;

create policy "leaders readable by everyone"
  on leaders for select
  to anon, authenticated
  using (true);

-- ============================================================
-- history_sections — timeline blocks for the About > History page
-- ============================================================
create table if not exists history_sections (
  id bigint primary key generated always as identity,
  heading text not null,
  subheading text,
  body text not null default '',
  image_url text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

alter table history_sections enable row level security;

create policy "history_sections readable by everyone"
  on history_sections for select
  to anon, authenticated
  using (true);

-- ============================================================
-- programs — ministries / "pillars of our faith" grid
-- ============================================================
create table if not exists programs (
  id bigint primary key generated always as identity,
  title text not null,
  icon_name text,
  description text not null default '',
  tag_label text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

alter table programs enable row level security;

create policy "programs readable by everyone"
  on programs for select
  to anon, authenticated
  using (true);

-- ============================================================
-- events — church events, drives the homepage countdown
-- ============================================================
create table if not exists events (
  id bigint primary key generated always as identity,
  title text not null,
  slug text not null unique,
  description text not null default '',
  starts_at timestamptz not null,
  location text,
  image_url text,
  is_featured boolean not null default false,
  donation_enabled boolean not null default false,
  created_at timestamptz not null default now()
);

alter table events enable row level security;

create policy "events readable by everyone"
  on events for select
  to anon, authenticated
  using (true);

-- ============================================================
-- contact_messages — public contact form submissions
-- insert-only for anon/authenticated; no public select (staff read via
-- Supabase Table Editor / service role until the Phase 2 dashboard exists).
-- ============================================================
create table if not exists contact_messages (
  id bigint primary key generated always as identity,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table contact_messages enable row level security;

create policy "anyone can submit a contact message"
  on contact_messages for insert
  to anon, authenticated
  with check (true);

-- ============================================================
-- profiles — Phase 2 stub for role-based admin access.
-- Unused in Phase 1: RLS is enabled with no policies, so it's inaccessible
-- to anon/authenticated until Phase 2 defines the real access rules.
-- ============================================================
create table if not exists profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  role text not null check (role in ('senior_pastor', 'editor')),
  created_at timestamptz not null default now()
);

alter table profiles enable row level security;

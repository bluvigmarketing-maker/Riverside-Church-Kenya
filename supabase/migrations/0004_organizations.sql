-- River Church Eldoret — Phase 3: affiliated organizations (CBOs/ministries
-- that sit under the church, e.g. Women of the Living Waters). Each gets its
-- own admin-managed content and a dedicated public page at
-- /organizations/[slug]. Mirrors the read/write policy shape used for the
-- other content tables in 0001/0002. Run after 0002_admin_dashboard.sql.

-- ============================================================
-- organizations — top-level identity for each affiliated org
-- ============================================================
create table if not exists organizations (
  id bigint primary key generated always as identity,
  slug text not null unique,
  name text not null,
  short_description text not null default '',
  motto text,
  theme_scripture_text text,
  theme_scripture_ref text,
  vision text not null default '',
  mission text not null default '',
  logo_url text,
  hero_image_url text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

alter table organizations enable row level security;

create policy "organizations readable by everyone"
  on organizations for select
  to anon, authenticated
  using (true);

create policy "organizations writable by permission"
  on organizations for all
  to authenticated
  using (has_permission('organizations'))
  with check (has_permission('organizations'));

-- ============================================================
-- organization_sections — the vision/objectives/outreach blocks that make
-- up an organization's page, grouped by `part` (e.g. "Church & Community",
-- "National Vision", "International Vision") and ordered by sort_order.
-- `body` is free text: blank lines separate paragraphs, "- " starts a
-- bullet, and a line wrapped in "**like this**" renders as a bold label
-- (e.g. "**Objectives**") — same convention as history_sections.body /
-- leaders.bio, just with bullet + label support added by the renderer.
-- ============================================================
create table if not exists organization_sections (
  id bigint primary key generated always as identity,
  organization_id bigint not null references organizations (id) on delete cascade,
  part text not null default '',
  heading text not null,
  scripture_text text,
  scripture_ref text,
  body text not null default '',
  image_url text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

alter table organization_sections enable row level security;

create policy "organization_sections readable by everyone"
  on organization_sections for select
  to anon, authenticated
  using (true);

create policy "organization_sections writable by permission"
  on organization_sections for all
  to authenticated
  using (has_permission('organizations'))
  with check (has_permission('organizations'));

-- ============================================================
-- Storage — write access on the `media` bucket for the "organizations"
-- folder, scoped to the same permission as the tables above.
-- ============================================================
create policy "admins upload media for organizations"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'media'
    and (
      is_super_admin()
      or ((storage.foldername(name))[1] = 'organizations' and has_permission('organizations'))
    )
  );

create policy "admins update media for organizations"
  on storage.objects for update
  to authenticated
  using (
    bucket_id = 'media'
    and (
      is_super_admin()
      or ((storage.foldername(name))[1] = 'organizations' and has_permission('organizations'))
    )
  );

create policy "admins delete media for organizations"
  on storage.objects for delete
  to authenticated
  using (
    bucket_id = 'media'
    and (
      is_super_admin()
      or ((storage.foldername(name))[1] = 'organizations' and has_permission('organizations'))
    )
  );

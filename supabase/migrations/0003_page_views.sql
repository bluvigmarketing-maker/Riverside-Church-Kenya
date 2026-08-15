-- Lightweight built-in analytics: one row per public page view, so the
-- dashboard's Analytics page (super-admin only) can show visit counts
-- without needing a separate analytics service embedded in the dashboard.
create table if not exists page_views (
  id bigint primary key generated always as identity,
  path text not null,
  created_at timestamptz not null default now()
);

alter table page_views enable row level security;

create policy "anyone can record a page view"
  on page_views for insert
  to anon, authenticated
  with check (true);

create policy "super admins can read page views"
  on page_views for select
  to authenticated
  using (is_super_admin());

create index if not exists page_views_created_at_idx on page_views (created_at);

-- River Church Eldoret — Phase 2 admin dashboard
-- Adds role/permission columns to `profiles`, the two SQL helper functions RLS
-- policies depend on, write policies on every content table (previously
-- service-role-only), a read policy on contact_messages, policies on
-- `profiles` itself, and Storage write policies on the `media` bucket.
-- Run this after 0001_init.sql on the already-live project.

-- ============================================================
-- profiles — replace the Phase-1 stub role model with a
-- super_admin / configurable-permissions model.
-- ============================================================
alter table profiles drop constraint if exists profiles_role_check;

alter table profiles
  alter column role set default 'staff';

alter table profiles
  add constraint profiles_role_check check (role in ('super_admin', 'staff'));

alter table profiles
  add column if not exists permissions text[] not null default '{}';

alter table profiles
  add column if not exists email text;

-- ============================================================
-- Helper functions (security definer so they can read `profiles`
-- without recursing through the RLS policies defined below)
-- ============================================================
create or replace function public.is_super_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from profiles where id = auth.uid() and role = 'super_admin'
  );
$$;

create or replace function public.has_permission(perm text)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from profiles
    where id = auth.uid()
      and (role = 'super_admin' or perm = any(permissions))
  );
$$;

-- ============================================================
-- Content tables — add write access for whoever holds the
-- matching capability (reads stay public, from 0001).
-- ============================================================
create policy "site_settings writable by permission"
  on site_settings for all
  to authenticated
  using (has_permission('site_settings'))
  with check (has_permission('site_settings'));

create policy "leaders writable by permission"
  on leaders for all
  to authenticated
  using (has_permission('leaders'))
  with check (has_permission('leaders'));

create policy "history_sections writable by permission"
  on history_sections for all
  to authenticated
  using (has_permission('history'))
  with check (has_permission('history'));

create policy "programs writable by permission"
  on programs for all
  to authenticated
  using (has_permission('programs'))
  with check (has_permission('programs'));

create policy "events writable by permission"
  on events for all
  to authenticated
  using (has_permission('events'))
  with check (has_permission('events'));

-- ============================================================
-- contact_messages — first read policy (was insert-only)
-- ============================================================
create policy "contact_messages readable by permission"
  on contact_messages for select
  to authenticated
  using (has_permission('messages'));

-- ============================================================
-- profiles — self-read (so the UI can gate the sidebar) and
-- super-admin-only for everything else (the Staff page).
-- ============================================================
create policy "users can read own profile"
  on profiles for select
  to authenticated
  using (id = auth.uid());

create policy "super admins manage all profiles"
  on profiles for all
  to authenticated
  using (is_super_admin())
  with check (is_super_admin());

-- ============================================================
-- Storage — write access on the `media` bucket, folder-scoped
-- to the matching capability.
-- ============================================================
create policy "admins upload media for their sections"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'media' and (
      is_super_admin()
      or ((storage.foldername(name))[1] = 'leadership' and has_permission('leaders'))
      or ((storage.foldername(name))[1] = 'gallery' and has_permission('leaders'))
      or ((storage.foldername(name))[1] = 'history' and has_permission('history'))
      or ((storage.foldername(name))[1] = 'events' and has_permission('events'))
      or ((storage.foldername(name))[1] = 'programs' and has_permission('programs'))
    )
  );

create policy "admins update media for their sections"
  on storage.objects for update
  to authenticated
  using (
    bucket_id = 'media' and (
      is_super_admin()
      or ((storage.foldername(name))[1] = 'leadership' and has_permission('leaders'))
      or ((storage.foldername(name))[1] = 'gallery' and has_permission('leaders'))
      or ((storage.foldername(name))[1] = 'history' and has_permission('history'))
      or ((storage.foldername(name))[1] = 'events' and has_permission('events'))
      or ((storage.foldername(name))[1] = 'programs' and has_permission('programs'))
    )
  );

create policy "admins delete media for their sections"
  on storage.objects for delete
  to authenticated
  using (
    bucket_id = 'media' and (
      is_super_admin()
      or ((storage.foldername(name))[1] = 'leadership' and has_permission('leaders'))
      or ((storage.foldername(name))[1] = 'gallery' and has_permission('leaders'))
      or ((storage.foldername(name))[1] = 'history' and has_permission('history'))
      or ((storage.foldername(name))[1] = 'events' and has_permission('events'))
      or ((storage.foldername(name))[1] = 'programs' and has_permission('programs'))
    )
  );

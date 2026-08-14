import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client for reading public content in Server Components.
 * Uses the anon key — all tables it touches are public-read via RLS (see
 * supabase/migrations/0001_init.sql), so no cookies/session handling is needed
 * for Phase 1 (no admin auth yet).
 */
export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return null;
  }

  return createSupabaseClient(url, anonKey, {
    auth: { persistSession: false },
  });
}

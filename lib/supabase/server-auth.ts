import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * SSR cookie-aware Supabase client for the /admin area — distinct from
 * lib/supabase/server.ts (anon-only, used for public content), since admin
 * pages need the signed-in user's own session so RLS/`auth.uid()` resolves.
 * Create a fresh one per request; never share across requests.
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Called from a Server Component render — middleware.ts handles
            // writing the refreshed session back to cookies instead.
          }
        },
      },
    }
  );
}

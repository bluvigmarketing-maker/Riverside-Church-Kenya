import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server-auth";
import { hasPermission, type AdminProfile, type PermissionKey } from "@/lib/permissions";

export type { AdminProfile };
export { hasPermission };

/** Resolves the signed-in user + their profile, or redirects to login. */
export async function requireSession(): Promise<{ userId: string; profile: AdminProfile }> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("id, email, role, permissions")
    .eq("id", user.id)
    .single();

  if (!profile) redirect("/admin/login");

  return { userId: user.id, profile: profile as AdminProfile };
}

/** Like requireSession, but also redirects to /admin if the given capability is missing. */
export async function requirePermission(perm: PermissionKey) {
  const session = await requireSession();
  if (!hasPermission(session.profile, perm)) {
    redirect("/admin");
  }
  return session;
}

/** Like requireSession, but redirects to /admin unless the caller is a super admin. */
export async function requireSuperAdmin() {
  const session = await requireSession();
  if (session.profile.role !== "super_admin") {
    redirect("/admin");
  }
  return session;
}

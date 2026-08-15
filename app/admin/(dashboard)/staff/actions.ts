"use server";

import { revalidatePath } from "next/cache";
import { requireSuperAdmin } from "@/lib/admin/require-session";
import { createClient } from "@/lib/supabase/server-auth";
import { createAdminClient } from "@/lib/supabase/admin";
import type { PermissionKey } from "@/lib/permissions";

export async function inviteStaff(formData: FormData) {
  // Defense in depth: the Staff page itself is already super-admin-gated,
  // but a Server Action can be called directly, so re-check here too.
  await requireSuperAdmin();

  const email = String(formData.get("email") ?? "").trim();
  const role = String(formData.get("role") ?? "staff") as "super_admin" | "staff";
  const permissions = formData.getAll("permissions") as PermissionKey[];

  if (!email) throw new Error("Email is required.");

  const adminClient = createAdminClient();
  const { data, error } = await adminClient.auth.admin.inviteUserByEmail(email);
  if (error) throw new Error(error.message);

  const supabase = await createClient();
  const { error: profileError } = await supabase.from("profiles").insert({
    id: data.user.id,
    email,
    role,
    permissions: role === "super_admin" ? [] : permissions,
  });
  if (profileError) throw new Error(profileError.message);

  revalidatePath("/admin/staff");
}

export async function updateStaffPermissions(id: string, formData: FormData) {
  await requireSuperAdmin();

  const role = String(formData.get("role") ?? "staff") as "super_admin" | "staff";
  const permissions = formData.getAll("permissions") as PermissionKey[];

  const supabase = await createClient();
  const { error } = await supabase
    .from("profiles")
    .update({ role, permissions: role === "super_admin" ? [] : permissions })
    .eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/staff");
}

export async function removeStaff(id: string) {
  const { userId } = await requireSuperAdmin();
  if (id === userId) throw new Error("You can't remove your own account.");

  const adminClient = createAdminClient();
  const { error } = await adminClient.auth.admin.deleteUser(id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/staff");
}

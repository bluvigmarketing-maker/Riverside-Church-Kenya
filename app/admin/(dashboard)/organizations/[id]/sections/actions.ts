"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server-auth";
import { revalidatePublicSite } from "@/lib/revalidate";
import { getOrganizations } from "@/lib/content";

function parseSectionForm(formData: FormData) {
  return {
    part: String(formData.get("part") ?? "").trim(),
    heading: String(formData.get("heading") ?? "").trim(),
    scripture_text: String(formData.get("scripture_text") ?? "").trim() || null,
    scripture_ref: String(formData.get("scripture_ref") ?? "").trim() || null,
    body: String(formData.get("body") ?? "").trim(),
    image_url: String(formData.get("image_url") ?? "").trim() || null,
    sort_order: Number(formData.get("sort_order") ?? 0) || 0,
  };
}

/** Every organization page is revalidated (cheap — there are only a handful) so a
 *  section edit shows up immediately regardless of which organization it belongs to. */
async function revalidateOrganizationPages(organizationId: number) {
  revalidatePublicSite();
  const organizations = await getOrganizations();
  for (const org of organizations) revalidatePath(`/organizations/${org.slug}`);
  revalidatePath(`/admin/organizations/${organizationId}/sections`);
}

export async function createOrganizationSection(organizationId: number, formData: FormData) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("organization_sections")
    .insert({ ...parseSectionForm(formData), organization_id: organizationId });
  if (error) throw new Error(error.message);

  await revalidateOrganizationPages(organizationId);
}

export async function updateOrganizationSection(id: number, formData: FormData) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("organization_sections")
    .update(parseSectionForm(formData))
    .eq("id", id)
    .select("organization_id")
    .single();
  if (error) throw new Error(error.message);

  await revalidateOrganizationPages(data.organization_id);
}

export async function deleteOrganizationSection(id: number) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("organization_sections")
    .delete()
    .eq("id", id)
    .select("organization_id")
    .single();
  if (error) throw new Error(error.message);

  await revalidateOrganizationPages(data.organization_id);
}

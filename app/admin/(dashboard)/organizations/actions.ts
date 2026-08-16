"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server-auth";
import { revalidatePublicSite } from "@/lib/revalidate";
import { slugify } from "@/lib/slug";

function parseOrgForm(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const rawSlug = String(formData.get("slug") ?? "").trim();

  return {
    name,
    slug: slugify(rawSlug || name),
    short_description: String(formData.get("short_description") ?? "").trim(),
    motto: String(formData.get("motto") ?? "").trim() || null,
    theme_scripture_text: String(formData.get("theme_scripture_text") ?? "").trim() || null,
    theme_scripture_ref: String(formData.get("theme_scripture_ref") ?? "").trim() || null,
    vision: String(formData.get("vision") ?? "").trim(),
    mission: String(formData.get("mission") ?? "").trim(),
    logo_url: String(formData.get("logo_url") ?? "").trim() || null,
    hero_image_url: String(formData.get("hero_image_url") ?? "").trim() || null,
    sort_order: Number(formData.get("sort_order") ?? 0) || 0,
  };
}

function revalidateOrgPage(slug: string) {
  revalidatePublicSite();
  revalidatePath(`/organizations/${slug}`);
  revalidatePath("/about/leadership");
  revalidatePath("/admin/organizations");
}

export async function createOrganization(formData: FormData) {
  const supabase = await createClient();
  const values = parseOrgForm(formData);
  const { error } = await supabase.from("organizations").insert(values);
  if (error) throw new Error(error.message);

  revalidateOrgPage(values.slug);
}

export async function updateOrganization(id: number, formData: FormData) {
  const supabase = await createClient();
  const values = parseOrgForm(formData);
  const { error } = await supabase.from("organizations").update(values).eq("id", id);
  if (error) throw new Error(error.message);

  revalidateOrgPage(values.slug);
}

export async function deleteOrganization(id: number) {
  const supabase = await createClient();
  const { error } = await supabase.from("organizations").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePublicSite();
  revalidatePath("/about/leadership");
  revalidatePath("/admin/organizations");
}

"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server-auth";
import { revalidatePublicSite } from "@/lib/revalidate";

function parseHistoryForm(formData: FormData) {
  return {
    heading: String(formData.get("heading") ?? "").trim(),
    subheading: String(formData.get("subheading") ?? "").trim() || null,
    body: String(formData.get("body") ?? "").trim(),
    image_url: String(formData.get("image_url") ?? "").trim() || null,
    sort_order: Number(formData.get("sort_order") ?? 0) || 0,
  };
}

export async function createHistorySection(formData: FormData) {
  const supabase = await createClient();
  const { error } = await supabase.from("history_sections").insert(parseHistoryForm(formData));
  if (error) throw new Error(error.message);

  revalidatePublicSite();
  revalidatePath("/admin/history");
}

export async function updateHistorySection(id: number, formData: FormData) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("history_sections")
    .update(parseHistoryForm(formData))
    .eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePublicSite();
  revalidatePath("/admin/history");
}

export async function deleteHistorySection(id: number) {
  const supabase = await createClient();
  const { error } = await supabase.from("history_sections").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePublicSite();
  revalidatePath("/admin/history");
}

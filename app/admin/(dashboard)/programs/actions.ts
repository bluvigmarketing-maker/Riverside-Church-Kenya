"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server-auth";
import { revalidatePublicSite } from "@/lib/revalidate";

function parseProgramForm(formData: FormData) {
  return {
    title: String(formData.get("title") ?? "").trim(),
    icon_name: String(formData.get("icon_name") ?? "").trim() || null,
    description: String(formData.get("description") ?? "").trim(),
    tag_label: String(formData.get("tag_label") ?? "").trim() || null,
    sort_order: Number(formData.get("sort_order") ?? 0) || 0,
  };
}

export async function createProgram(formData: FormData) {
  const supabase = await createClient();
  const { error } = await supabase.from("programs").insert(parseProgramForm(formData));
  if (error) throw new Error(error.message);

  revalidatePublicSite();
  revalidatePath("/admin/programs");
}

export async function updateProgram(id: number, formData: FormData) {
  const supabase = await createClient();
  const { error } = await supabase.from("programs").update(parseProgramForm(formData)).eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePublicSite();
  revalidatePath("/admin/programs");
}

export async function deleteProgram(id: number) {
  const supabase = await createClient();
  const { error } = await supabase.from("programs").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePublicSite();
  revalidatePath("/admin/programs");
}

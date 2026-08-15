"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server-auth";
import { revalidatePublicSite } from "@/lib/revalidate";

function parseLeaderForm(formData: FormData) {
  const attributesRaw = String(formData.get("attributes") ?? "");

  return {
    name: String(formData.get("name") ?? "").trim(),
    role_title: String(formData.get("role_title") ?? "").trim(),
    quote: String(formData.get("quote") ?? "").trim() || null,
    bio: String(formData.get("bio") ?? "").trim(),
    photo_url: String(formData.get("photo_url") ?? "").trim() || null,
    hometown: String(formData.get("hometown") ?? "").trim() || null,
    education: String(formData.get("education") ?? "").trim() || null,
    ordination_info: String(formData.get("ordination_info") ?? "").trim() || null,
    attributes: attributesRaw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
    sort_order: Number(formData.get("sort_order") ?? 0) || 0,
  };
}

export async function createLeader(formData: FormData) {
  const supabase = await createClient();
  const { error } = await supabase.from("leaders").insert(parseLeaderForm(formData));
  if (error) throw new Error(error.message);

  revalidatePublicSite();
  revalidatePath("/admin/leaders");
}

export async function updateLeader(id: number, formData: FormData) {
  const supabase = await createClient();
  const { error } = await supabase.from("leaders").update(parseLeaderForm(formData)).eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePublicSite();
  revalidatePath("/admin/leaders");
}

export async function deleteLeader(id: number) {
  const supabase = await createClient();
  const { error } = await supabase.from("leaders").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePublicSite();
  revalidatePath("/admin/leaders");
}

"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server-auth";
import { revalidatePublicSite } from "@/lib/revalidate";

function parseJsonArray(raw: FormDataEntryValue | null) {
  try {
    const parsed = JSON.parse(String(raw ?? "[]"));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function saveSiteSettings(formData: FormData) {
  const supabase = await createClient();

  const id = Number(formData.get("id") ?? 0);
  const values = {
    tagline: String(formData.get("tagline") ?? "").trim(),
    motto: String(formData.get("motto") ?? "").trim(),
    vision: String(formData.get("vision") ?? "").trim(),
    mission: String(formData.get("mission") ?? "").trim(),
    key_scripture_text: String(formData.get("key_scripture_text") ?? "").trim(),
    key_scripture_ref: String(formData.get("key_scripture_ref") ?? "").trim(),
    address: String(formData.get("address") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim() || null,
    email: String(formData.get("email") ?? "").trim() || null,
    service_times: parseJsonArray(formData.get("service_times")),
    social_links: parseJsonArray(formData.get("social_links")),
    updated_at: new Date().toISOString(),
  };

  const { error } = id
    ? await supabase.from("site_settings").update(values).eq("id", id)
    : await supabase.from("site_settings").insert(values);

  if (error) throw new Error(error.message);

  revalidatePublicSite();
  revalidatePath("/admin/site-settings");
}

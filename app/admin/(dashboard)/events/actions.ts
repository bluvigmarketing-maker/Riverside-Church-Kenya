"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server-auth";
import { revalidatePublicSite } from "@/lib/revalidate";
import { slugify } from "@/lib/slug";

function parseEventForm(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const rawSlug = String(formData.get("slug") ?? "").trim();
  const startsAtLocal = String(formData.get("starts_at") ?? ""); // "YYYY-MM-DDTHH:mm"

  return {
    title,
    slug: slugify(rawSlug || title),
    description: String(formData.get("description") ?? "").trim(),
    // Church operates in Eldoret, Kenya (EAT, UTC+3, no DST).
    starts_at: startsAtLocal ? `${startsAtLocal}:00+03:00` : null,
    location: String(formData.get("location") ?? "").trim() || null,
    image_url: String(formData.get("image_url") ?? "").trim() || null,
    donation_enabled: formData.get("donation_enabled") === "on",
  };
}

export async function createEvent(formData: FormData) {
  const supabase = await createClient();
  const { error } = await supabase.from("events").insert(parseEventForm(formData));
  if (error) throw new Error(error.message);

  revalidatePublicSite();
  revalidatePath("/admin/events");
}

export async function updateEvent(id: number, formData: FormData) {
  const supabase = await createClient();
  const { error } = await supabase.from("events").update(parseEventForm(formData)).eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePublicSite();
  revalidatePath("/admin/events");
}

export async function deleteEvent(id: number) {
  const supabase = await createClient();
  const { error } = await supabase.from("events").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePublicSite();
  revalidatePath("/admin/events");
}

/** Ensures exactly one event drives the homepage countdown. */
export async function setFeaturedEvent(id: number) {
  const supabase = await createClient();

  const { error: clearError } = await supabase
    .from("events")
    .update({ is_featured: false })
    .neq("id", id);
  if (clearError) throw new Error(clearError.message);

  const { error } = await supabase.from("events").update({ is_featured: true }).eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePublicSite();
  revalidatePath("/admin/events");
}

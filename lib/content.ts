import { createClient } from "./supabase/server";
import {
  FALLBACK_SITE_SETTINGS,
  FALLBACK_LEADERS,
  FALLBACK_HISTORY_SECTIONS,
  FALLBACK_PROGRAMS,
  FALLBACK_EVENTS,
} from "./content-fallback";
import type {
  SiteSettings,
  Leader,
  HistorySection,
  Program,
  ChurchEvent,
} from "./types";

/**
 * Every getter here degrades gracefully: if Supabase isn't configured yet
 * (no .env.local) or a query fails for any reason, it falls back to the
 * local content in content-fallback.ts instead of throwing — so the site
 * always renders, even before the client's Supabase project is wired up.
 */

export async function getSiteSettings(): Promise<SiteSettings> {
  const supabase = createClient();
  if (!supabase) return FALLBACK_SITE_SETTINGS;

  const { data, error } = await supabase.from("site_settings").select("*").limit(1).single();
  if (error || !data) return FALLBACK_SITE_SETTINGS;
  return data;
}

export async function getLeaders(): Promise<Leader[]> {
  const supabase = createClient();
  if (!supabase) return FALLBACK_LEADERS;

  const { data, error } = await supabase.from("leaders").select("*").order("sort_order");
  if (error || !data || data.length === 0) return FALLBACK_LEADERS;
  return data;
}

export async function getHistorySections(): Promise<HistorySection[]> {
  const supabase = createClient();
  if (!supabase) return FALLBACK_HISTORY_SECTIONS;

  const { data, error } = await supabase
    .from("history_sections")
    .select("*")
    .order("sort_order");
  if (error || !data || data.length === 0) return FALLBACK_HISTORY_SECTIONS;
  return data;
}

export async function getPrograms(): Promise<Program[]> {
  const supabase = createClient();
  if (!supabase) return FALLBACK_PROGRAMS;

  const { data, error } = await supabase.from("programs").select("*").order("sort_order");
  if (error || !data || data.length === 0) return FALLBACK_PROGRAMS;
  return data;
}

export async function getEvents(): Promise<ChurchEvent[]> {
  const supabase = createClient();
  if (!supabase) return FALLBACK_EVENTS;

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .order("starts_at", { ascending: true });
  if (error || !data || data.length === 0) return FALLBACK_EVENTS;
  return data;
}

export async function getFeaturedEvent(): Promise<ChurchEvent | null> {
  const events = await getEvents();
  return events.find((event) => event.is_featured) ?? null;
}

export async function getEventBySlug(slug: string): Promise<ChurchEvent | null> {
  const supabase = createClient();
  if (supabase) {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("slug", slug)
      .single();
    if (!error && data) return data;
  }
  return FALLBACK_EVENTS.find((event) => event.slug === slug) ?? null;
}

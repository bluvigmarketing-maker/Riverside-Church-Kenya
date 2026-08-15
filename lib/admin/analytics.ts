import { createClient } from "@/lib/supabase/server-auth";

export type DailyCount = { date: string; count: number };
export type PageCount = { path: string; count: number };

export type AnalyticsSummary = {
  totalViews: number;
  last30Days: number;
  daily: DailyCount[];
  topPages: PageCount[];
};

/** Aggregates the raw page_views rows in JS — fine at church-site traffic volumes. */
export async function getAnalyticsSummary(): Promise<AnalyticsSummary> {
  const supabase = await createClient();

  const { count: totalViews } = await supabase
    .from("page_views")
    .select("*", { count: "exact", head: true });

  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
  const { data } = await supabase
    .from("page_views")
    .select("path, created_at")
    .gte("created_at", thirtyDaysAgo);

  const rows = (data as { path: string; created_at: string }[]) ?? [];

  const dailyMap = new Map<string, number>();
  const pageMap = new Map<string, number>();
  for (const row of rows) {
    const date = row.created_at.slice(0, 10);
    dailyMap.set(date, (dailyMap.get(date) ?? 0) + 1);
    pageMap.set(row.path, (pageMap.get(row.path) ?? 0) + 1);
  }

  const daily: DailyCount[] = [];
  for (let i = 13; i >= 0; i--) {
    const key = new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
    daily.push({ date: key, count: dailyMap.get(key) ?? 0 });
  }

  const topPages: PageCount[] = Array.from(pageMap.entries())
    .map(([path, count]) => ({ path, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  return {
    totalViews: totalViews ?? 0,
    last30Days: rows.length,
    daily,
    topPages,
  };
}

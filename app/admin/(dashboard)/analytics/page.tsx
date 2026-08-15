import { Eye, TrendingUp } from "lucide-react";
import { requireSuperAdmin } from "@/lib/admin/require-session";
import { getAnalyticsSummary } from "@/lib/admin/analytics";
import { DailyBarChart } from "@/components/admin/analytics/daily-bar-chart";

export default async function AdminAnalyticsPage() {
  await requireSuperAdmin();
  const summary = await getAnalyticsSummary();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-heading text-2xl font-semibold text-navy-950">Site Analytics</h1>
        <p className="mt-1 text-navy-700">Page views recorded across the public site.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="gold-line flex items-center gap-3 rounded-xl border bg-white p-5">
          <Eye className="size-6 text-gold-600" aria-hidden="true" />
          <div>
            <p className="text-sm text-navy-600">Total views (all time)</p>
            <p className="font-heading text-2xl font-semibold text-navy-950">
              {summary.totalViews.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="gold-line flex items-center gap-3 rounded-xl border bg-white p-5">
          <TrendingUp className="size-6 text-gold-600" aria-hidden="true" />
          <div>
            <p className="text-sm text-navy-600">Last 30 days</p>
            <p className="font-heading text-2xl font-semibold text-navy-950">
              {summary.last30Days.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="gold-line rounded-2xl border bg-white p-6">
        <h2 className="font-heading text-lg font-semibold text-navy-950">
          Daily Visits (Last 14 Days)
        </h2>
        <div className="mt-4">
          <DailyBarChart data={summary.daily} />
        </div>
      </div>

      <div className="gold-line rounded-2xl border bg-white p-6">
        <h2 className="font-heading text-lg font-semibold text-navy-950">
          Top Pages (Last 30 Days)
        </h2>
        {summary.topPages.length === 0 ? (
          <p className="mt-2 text-navy-600">No views recorded yet.</p>
        ) : (
          <div className="mt-4 flex flex-col divide-y divide-navy-100">
            {summary.topPages.map((page) => (
              <div key={page.path} className="flex items-center justify-between py-2.5">
                <span className="font-mono text-sm text-navy-800">{page.path}</span>
                <span className="text-sm font-semibold text-navy-950">{page.count}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

import { requirePermission } from "@/lib/admin/require-session";
import { getHistorySections } from "@/lib/content";
import { HistoryRow } from "@/components/admin/history/history-row";
import { NewHistoryCard } from "@/components/admin/history/new-history-card";
import { createHistorySection, updateHistorySection, deleteHistorySection } from "./actions";

export default async function AdminHistoryPage() {
  await requirePermission("history");
  const sections = await getHistorySections();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-heading text-2xl font-semibold text-navy-950">History</h1>
        <p className="mt-1 text-navy-700">
          Manage the timeline sections shown on the About &gt; History page. Sort order controls
          the order they appear in (lowest first); the last one renders as the closing banner.
        </p>
      </div>

      <NewHistoryCard action={createHistorySection} />

      <div className="flex flex-col gap-4">
        {sections.length === 0 && <p className="text-navy-600">No history sections yet.</p>}
        {sections.map((section) => (
          <HistoryRow
            key={section.id}
            section={section}
            updateAction={updateHistorySection.bind(null, section.id)}
            deleteAction={deleteHistorySection.bind(null, section.id)}
          />
        ))}
      </div>
    </div>
  );
}

import { requireSession } from "@/lib/admin/require-session";
import { Sidebar } from "@/components/admin/sidebar";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { profile } = await requireSession();

  return (
    <div className="flex min-h-screen bg-navy-50">
      <Sidebar profile={profile} />
      <div className="flex-1 overflow-x-hidden">
        <div className="mx-auto max-w-5xl px-6 py-8">{children}</div>
      </div>
    </div>
  );
}

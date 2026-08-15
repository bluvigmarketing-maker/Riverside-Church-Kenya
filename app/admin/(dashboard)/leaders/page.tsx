import { requirePermission } from "@/lib/admin/require-session";
import { getLeaders } from "@/lib/content";
import { LeaderRow } from "@/components/admin/leaders/leader-row";
import { NewLeaderCard } from "@/components/admin/leaders/new-leader-card";
import { createLeader, updateLeader, deleteLeader } from "./actions";

export default async function AdminLeadersPage() {
  await requirePermission("leaders");
  const leaders = await getLeaders();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-heading text-2xl font-semibold text-navy-950">Leadership</h1>
        <p className="mt-1 text-navy-700">Manage pastor profiles shown on the Leadership page.</p>
      </div>

      <NewLeaderCard action={createLeader} />

      <div className="flex flex-col gap-4">
        {leaders.length === 0 && <p className="text-navy-600">No leaders yet.</p>}
        {leaders.map((leader) => (
          <LeaderRow
            key={leader.id}
            leader={leader}
            updateAction={updateLeader.bind(null, leader.id)}
            deleteAction={deleteLeader.bind(null, leader.id)}
          />
        ))}
      </div>
    </div>
  );
}

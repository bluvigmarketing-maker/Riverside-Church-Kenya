import { requireSuperAdmin } from "@/lib/admin/require-session";
import { createClient } from "@/lib/supabase/server-auth";
import { StaffRow } from "@/components/admin/staff/staff-row";
import { NewStaffCard } from "@/components/admin/staff/new-staff-card";
import type { AdminProfile } from "@/lib/permissions";
import { inviteStaff, updateStaffPermissions, removeStaff } from "./actions";

export default async function AdminStaffPage() {
  const { userId } = await requireSuperAdmin();

  const supabase = await createClient();
  const { data } = await supabase
    .from("profiles")
    .select("id, email, role, permissions")
    .order("email");
  const accounts = (data as AdminProfile[]) ?? [];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-heading text-2xl font-semibold text-navy-950">Staff Accounts</h1>
        <p className="mt-1 text-navy-700">
          Invite staff and choose exactly which sections each person can access.
        </p>
      </div>

      <NewStaffCard action={inviteStaff} />

      <div className="flex flex-col gap-4">
        {accounts.map((account) => (
          <StaffRow
            key={account.id}
            account={account}
            isSelf={account.id === userId}
            updateAction={updateStaffPermissions.bind(null, account.id)}
            removeAction={removeStaff.bind(null, account.id)}
          />
        ))}
      </div>
    </div>
  );
}

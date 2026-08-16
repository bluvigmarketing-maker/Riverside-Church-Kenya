import { requirePermission } from "@/lib/admin/require-session";
import { getOrganizations } from "@/lib/content";
import { OrgRow } from "@/components/admin/organizations/org-row";
import { NewOrgCard } from "@/components/admin/organizations/new-org-card";
import { createOrganization, updateOrganization, deleteOrganization } from "./actions";

export default async function AdminOrganizationsPage() {
  await requirePermission("organizations");
  const organizations = await getOrganizations();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-heading text-2xl font-semibold text-navy-950">Organizations</h1>
        <p className="mt-1 text-navy-700">
          Manage affiliated ministries/CBOs under the church (e.g. Women of the Living Waters),
          each with their own dedicated page. Use &ldquo;Manage Sections&rdquo; to edit an
          organization&apos;s page content.
        </p>
      </div>

      <NewOrgCard action={createOrganization} />

      <div className="flex flex-col gap-4">
        {organizations.length === 0 && <p className="text-navy-600">No organizations yet.</p>}
        {organizations.map((organization) => (
          <OrgRow
            key={organization.id}
            organization={organization}
            updateAction={updateOrganization.bind(null, organization.id)}
            deleteAction={deleteOrganization.bind(null, organization.id)}
          />
        ))}
      </div>
    </div>
  );
}

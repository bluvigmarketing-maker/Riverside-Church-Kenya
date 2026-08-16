import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { requirePermission } from "@/lib/admin/require-session";
import { getOrganizationById, getOrganizationSections } from "@/lib/content";
import { SectionRow } from "@/components/admin/organizations/section-row";
import { NewSectionCard } from "@/components/admin/organizations/new-section-card";
import { createOrganizationSection, updateOrganizationSection, deleteOrganizationSection } from "./actions";

export default async function AdminOrganizationSectionsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requirePermission("organizations");
  const { id } = await params;
  const organizationId = Number(id);

  const organization = await getOrganizationById(organizationId);
  if (!organization) notFound();

  const sections = await getOrganizationSections(organizationId);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link
          href="/admin/organizations"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 hover:text-navy-950"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to Organizations
        </Link>
        <h1 className="mt-2 font-heading text-2xl font-semibold text-navy-950">
          {organization.name} — Page Sections
        </h1>
        <p className="mt-1 text-navy-700">
          Manage the vision, objectives, and outreach blocks shown on{" "}
          <span className="font-mono text-sm">/organizations/{organization.slug}</span>. Group
          related sections with the same &ldquo;Part&rdquo; value (e.g. &ldquo;Church &amp;
          Community&rdquo;, &ldquo;National Vision&rdquo;, &ldquo;International Vision&rdquo;) —
          the first section (lowest sort order) in each part becomes that part&apos;s intro
          banner, with the photo slot next to it.
        </p>
      </div>

      <NewSectionCard action={createOrganizationSection.bind(null, organizationId)} />

      <div className="flex flex-col gap-4">
        {sections.length === 0 && <p className="text-navy-600">No sections yet.</p>}
        {sections.map((section) => (
          <SectionRow
            key={section.id}
            section={section}
            updateAction={updateOrganizationSection.bind(null, section.id)}
            deleteAction={deleteOrganizationSection.bind(null, section.id)}
          />
        ))}
      </div>
    </div>
  );
}

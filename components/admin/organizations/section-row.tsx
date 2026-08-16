"use client";

import { useState } from "react";
import { Pencil, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeleteButton } from "@/components/admin/delete-button";
import { SectionForm } from "@/components/admin/organizations/section-form";
import type { OrganizationSection } from "@/lib/types";

export function SectionRow({
  section,
  updateAction,
  deleteAction,
}: {
  section: OrganizationSection;
  updateAction: (formData: FormData) => Promise<void>;
  deleteAction: () => Promise<void>;
}) {
  const [editing, setEditing] = useState(false);

  if (editing) {
    return (
      <div className="gold-line rounded-2xl border bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-heading text-lg font-semibold text-navy-950">Edit Section</h3>
          <button
            onClick={() => setEditing(false)}
            className="rounded-lg p-1.5 text-navy-500 hover:bg-navy-50"
            aria-label="Cancel editing"
          >
            <X className="size-4" />
          </button>
        </div>
        <SectionForm
          section={section}
          action={async (formData) => {
            await updateAction(formData);
            setEditing(false);
          }}
          submitLabel="Save Changes"
        />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-navy-100 bg-white p-5">
      <div>
        <p className="text-xs font-semibold tracking-wide text-gold-700 uppercase">
          {section.part}
        </p>
        <p className="font-heading text-lg font-semibold text-navy-950">
          {section.sort_order}. {section.heading}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button type="button" variant="outline" size="sm" onClick={() => setEditing(true)}>
          <Pencil className="size-3.5" aria-hidden="true" />
          Edit
        </Button>
        <DeleteButton action={deleteAction} confirmText={`Delete "${section.heading}"?`} />
      </div>
    </div>
  );
}

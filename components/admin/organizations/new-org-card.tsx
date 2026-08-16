"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { OrgForm } from "@/components/admin/organizations/org-form";

export function NewOrgCard({ action }: { action: (formData: FormData) => Promise<void> }) {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="gold-line flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed bg-white py-4 text-sm font-semibold text-navy-800 hover:bg-navy-50"
      >
        <Plus className="size-4" aria-hidden="true" />
        Add Organization
      </button>
    );
  }

  return (
    <div className="gold-line rounded-2xl border bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-heading text-lg font-semibold text-navy-950">New Organization</h3>
        <button
          onClick={() => setOpen(false)}
          className="rounded-lg p-1.5 text-navy-500 hover:bg-navy-50"
          aria-label="Cancel"
        >
          <X className="size-4" />
        </button>
      </div>
      <OrgForm
        action={async (formData) => {
          await action(formData);
          setOpen(false);
        }}
        submitLabel="Create Organization"
      />
    </div>
  );
}

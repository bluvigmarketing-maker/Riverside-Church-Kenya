"use client";

import { useState } from "react";
import { Pencil, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeleteButton } from "@/components/admin/delete-button";
import { LeaderForm } from "@/components/admin/leaders/leader-form";
import type { Leader } from "@/lib/types";

export function LeaderRow({
  leader,
  updateAction,
  deleteAction,
}: {
  leader: Leader;
  updateAction: (formData: FormData) => Promise<void>;
  deleteAction: () => Promise<void>;
}) {
  const [editing, setEditing] = useState(false);

  if (editing) {
    return (
      <div className="gold-line rounded-2xl border bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-heading text-lg font-semibold text-navy-950">Edit Leader</h3>
          <button
            onClick={() => setEditing(false)}
            className="rounded-lg p-1.5 text-navy-500 hover:bg-navy-50"
            aria-label="Cancel editing"
          >
            <X className="size-4" />
          </button>
        </div>
        <LeaderForm
          leader={leader}
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
        <p className="font-heading text-lg font-semibold text-navy-950">{leader.name}</p>
        <p className="text-sm font-medium text-gold-700">{leader.role_title}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button type="button" variant="outline" size="sm" onClick={() => setEditing(true)}>
          <Pencil className="size-3.5" aria-hidden="true" />
          Edit
        </Button>
        <DeleteButton action={deleteAction} confirmText={`Delete ${leader.name}?`} />
      </div>
    </div>
  );
}

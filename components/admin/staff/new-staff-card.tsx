"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PermissionCheckboxes } from "@/components/admin/staff/permission-checkboxes";

export function NewStaffCard({ action }: { action: (formData: FormData) => Promise<void> }) {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="gold-line flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed bg-white py-4 text-sm font-semibold text-navy-800 hover:bg-navy-50"
      >
        <Plus className="size-4" aria-hidden="true" />
        Invite Staff
      </button>
    );
  }

  return (
    <div className="gold-line rounded-2xl border bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-heading text-lg font-semibold text-navy-950">Invite Staff</h3>
        <button
          onClick={() => setOpen(false)}
          className="rounded-lg p-1.5 text-navy-500 hover:bg-navy-50"
          aria-label="Cancel"
        >
          <X className="size-4" />
        </button>
      </div>
      <form
        action={async (formData) => {
          await action(formData);
          setOpen(false);
        }}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-navy-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-lg border border-navy-200 px-3 py-2 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40"
          />
          <p className="text-xs text-navy-500">
            They&rsquo;ll receive an email invite to set their own password.
          </p>
        </div>
        <PermissionCheckboxes />
        <div>
          <Button type="submit" className="btn-metallic gold-line font-semibold">
            Send Invite
          </Button>
        </div>
      </form>
    </div>
  );
}

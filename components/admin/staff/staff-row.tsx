"use client";

import { useState } from "react";
import { Pencil, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeleteButton } from "@/components/admin/delete-button";
import { PermissionCheckboxes } from "@/components/admin/staff/permission-checkboxes";
import type { AdminProfile } from "@/lib/permissions";

export function StaffRow({
  account,
  isSelf,
  updateAction,
  removeAction,
}: {
  account: AdminProfile;
  isSelf: boolean;
  updateAction: (formData: FormData) => Promise<void>;
  removeAction: () => Promise<void>;
}) {
  const [editing, setEditing] = useState(false);

  if (editing) {
    return (
      <div className="gold-line rounded-2xl border bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-heading text-lg font-semibold text-navy-950">
            Edit Access — {account.email}
          </h3>
          <button
            onClick={() => setEditing(false)}
            className="rounded-lg p-1.5 text-navy-500 hover:bg-navy-50"
            aria-label="Cancel editing"
          >
            <X className="size-4" />
          </button>
        </div>
        <form
          action={async (formData) => {
            await updateAction(formData);
            setEditing(false);
          }}
          className="flex flex-col gap-4"
        >
          <PermissionCheckboxes defaultRole={account.role} defaultPermissions={account.permissions} />
          <div>
            <Button type="submit" className="btn-metallic gold-line font-semibold">
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-navy-100 bg-white p-5">
      <div>
        <p className="font-heading text-lg font-semibold text-navy-950">
          {account.email}
          {isSelf && <span className="ml-2 text-xs font-normal text-navy-500">(you)</span>}
        </p>
        <p className="text-sm text-gold-700">
          {account.role === "super_admin"
            ? "Super Admin — full access"
            : account.permissions.length > 0
              ? account.permissions.join(", ")
              : "No sections granted yet"}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button type="button" variant="outline" size="sm" onClick={() => setEditing(true)}>
          <Pencil className="size-3.5" aria-hidden="true" />
          Edit
        </Button>
        {!isSelf && (
          <DeleteButton action={removeAction} confirmText={`Remove access for ${account.email}?`} />
        )}
      </div>
    </div>
  );
}

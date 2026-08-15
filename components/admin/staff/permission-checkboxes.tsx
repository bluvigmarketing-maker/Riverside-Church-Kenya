"use client";

import { useState } from "react";
import { PERMISSIONS } from "@/lib/permissions";
import type { PermissionKey } from "@/lib/permissions";

export function PermissionCheckboxes({
  defaultRole = "staff",
  defaultPermissions = [],
}: {
  defaultRole?: "super_admin" | "staff";
  defaultPermissions?: PermissionKey[];
}) {
  const [role, setRole] = useState<"super_admin" | "staff">(defaultRole);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-navy-900">Access level</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 text-sm text-navy-800">
            <input
              type="radio"
              name="role"
              value="staff"
              checked={role === "staff"}
              onChange={() => setRole("staff")}
            />
            Staff (choose sections below)
          </label>
          <label className="flex items-center gap-2 text-sm text-navy-800">
            <input
              type="radio"
              name="role"
              value="super_admin"
              checked={role === "super_admin"}
              onChange={() => setRole("super_admin")}
            />
            Super Admin (full access)
          </label>
        </div>
      </div>

      {role === "staff" && (
        <div className="grid grid-cols-2 gap-2 rounded-lg bg-navy-50 p-3">
          {PERMISSIONS.map((perm) => (
            <label key={perm.key} className="flex items-center gap-2 text-sm text-navy-800">
              <input
                type="checkbox"
                name="permissions"
                value={perm.key}
                defaultChecked={defaultPermissions.includes(perm.key)}
                className="size-4 rounded border-navy-300"
              />
              {perm.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

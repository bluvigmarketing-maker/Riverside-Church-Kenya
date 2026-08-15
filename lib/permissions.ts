export const PERMISSIONS = [
  { key: "site_settings", label: "Site Settings" },
  { key: "leaders", label: "Leadership" },
  { key: "history", label: "History" },
  { key: "programs", label: "Programs" },
  { key: "events", label: "Events" },
  { key: "messages", label: "Contact Messages" },
] as const;

export type PermissionKey = (typeof PERMISSIONS)[number]["key"];

export type AdminProfile = {
  id: string;
  email: string | null;
  role: "super_admin" | "staff";
  permissions: PermissionKey[];
};

// Client-safe (no server-only imports) so components like the sidebar can
// use it directly without pulling next/headers into the client bundle.
export function hasPermission(profile: AdminProfile, perm: PermissionKey): boolean {
  return profile.role === "super_admin" || profile.permissions.includes(perm);
}

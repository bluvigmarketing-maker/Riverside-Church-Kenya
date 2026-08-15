"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Settings,
  Users,
  History as HistoryIcon,
  Sparkles,
  CalendarDays,
  Mail,
  ShieldCheck,
  BarChart3,
  LogOut,
} from "lucide-react";
import { hasPermission, type AdminProfile } from "@/lib/permissions";
import { signOut } from "@/app/admin/actions";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, perm: null },
  { href: "/admin/site-settings", label: "Site Settings", icon: Settings, perm: "site_settings" },
  { href: "/admin/leaders", label: "Leadership", icon: Users, perm: "leaders" },
  { href: "/admin/history", label: "History", icon: HistoryIcon, perm: "history" },
  { href: "/admin/programs", label: "Programs", icon: Sparkles, perm: "programs" },
  { href: "/admin/events", label: "Events", icon: CalendarDays, perm: "events" },
  { href: "/admin/messages", label: "Messages", icon: Mail, perm: "messages" },
] as const;

const SUPER_ADMIN_NAV = [
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/admin/staff", label: "Staff Accounts", icon: ShieldCheck },
] as const;

export function Sidebar({ profile }: { profile: AdminProfile }) {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-navy-100 bg-white">
      <div className="border-b border-navy-100 px-5 py-5">
        <p className="text-xs font-semibold tracking-wide text-gold-700 uppercase">
          River Church Eldoret
        </p>
        <p className="font-heading text-lg font-semibold text-navy-950">Admin Dashboard</p>
      </div>

      <nav className="flex flex-1 flex-col gap-1 p-3">
        {NAV.filter((item) => item.perm === null || hasPermission(profile, item.perm)).map(
          (item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-navy-950 text-white"
                    : "text-navy-700 hover:bg-navy-50 hover:text-navy-950"
                }`}
              >
                <item.icon className="size-4" aria-hidden="true" />
                {item.label}
              </Link>
            );
          }
        )}

        {profile.role === "super_admin" &&
          SUPER_ADMIN_NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-navy-950 text-white"
                    : "text-navy-700 hover:bg-navy-50 hover:text-navy-950"
                }`}
              >
                <item.icon className="size-4" aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
      </nav>

      <div className="border-t border-navy-100 p-3">
        <p className="truncate px-3 text-xs text-navy-500">{profile.email}</p>
        <form action={signOut}>
          <button
            type="submit"
            className="mt-1 flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-950"
          >
            <LogOut className="size-4" aria-hidden="true" />
            Sign Out
          </button>
        </form>
      </div>
    </aside>
  );
}

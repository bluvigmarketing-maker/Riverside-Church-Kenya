import Link from "next/link";
import { BarChart3 } from "lucide-react";
import { requireSession, hasPermission } from "@/lib/admin/require-session";
import { PERMISSIONS } from "@/lib/permissions";

const SECTION_LINKS: Record<string, { href: string; description: string }> = {
  site_settings: { href: "/admin/site-settings", description: "Tagline, vision/mission, scripture, contact info" },
  leaders: { href: "/admin/leaders", description: "Pastor bios, photos, and quotes" },
  history: { href: "/admin/history", description: "The church history timeline" },
  programs: { href: "/admin/programs", description: "Ministries / pillars of faith" },
  events: { href: "/admin/events", description: "Events, the homepage countdown, and donations" },
  messages: { href: "/admin/messages", description: "Contact form submissions" },
};

export default async function AdminHomePage() {
  const { profile } = await requireSession();
  const sections = PERMISSIONS.filter((p) => hasPermission(profile, p.key));

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-heading text-2xl font-semibold text-navy-950">
          Welcome{profile.email ? `, ${profile.email}` : ""}
        </h1>
        <p className="mt-1 text-navy-700">
          {profile.role === "super_admin"
            ? "You have full access to every section, plus staff management."
            : "Here's what you have access to manage."}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {sections.map((section) => {
          const link = SECTION_LINKS[section.key];
          return (
            <Link
              key={section.key}
              href={link.href}
              className="gold-line rounded-xl border bg-white p-5 transition-transform hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="font-heading text-lg font-semibold text-navy-950">{section.label}</p>
              <p className="mt-1 text-sm text-navy-600">{link.description}</p>
            </Link>
          );
        })}
      </div>

      {profile.role === "super_admin" && (
        <Link
          href="/admin/analytics"
          className="gold-line flex items-start gap-3 rounded-xl border bg-white p-5 transition-transform hover:-translate-y-0.5 hover:shadow-md"
        >
          <BarChart3 className="mt-0.5 size-5 shrink-0 text-gold-600" aria-hidden="true" />
          <div>
            <p className="font-heading font-semibold text-navy-950">Site visit analytics</p>
            <p className="mt-1 text-sm text-navy-600">
              See page views and top pages for the public site.
            </p>
          </div>
        </Link>
      )}
    </div>
  );
}

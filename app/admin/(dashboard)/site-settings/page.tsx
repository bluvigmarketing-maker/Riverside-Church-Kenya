import { requirePermission } from "@/lib/admin/require-session";
import { getSiteSettings } from "@/lib/content";
import { Field } from "@/components/admin/form-field";
import { RepeaterField } from "@/components/admin/repeater-field";
import { Button } from "@/components/ui/button";
import { saveSiteSettings } from "./actions";

export default async function AdminSiteSettingsPage() {
  await requirePermission("site_settings");
  const settings = await getSiteSettings();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-heading text-2xl font-semibold text-navy-950">Site Settings</h1>
        <p className="mt-1 text-navy-700">
          Church-wide copy and contact details shown across the public site.
        </p>
      </div>

      <form action={saveSiteSettings} className="gold-line flex flex-col gap-5 rounded-2xl border bg-white p-6">
        <input type="hidden" name="id" value={settings.id || ""} />

        <Field label="Tagline (hero subtitle)" name="tagline" defaultValue={settings.tagline} />
        <Field label="Motto" name="motto" defaultValue={settings.motto} />

        <div className="flex flex-col gap-1.5">
          <label htmlFor="vision" className="text-sm font-medium text-navy-900">Vision</label>
          <textarea id="vision" name="vision" rows={2} defaultValue={settings.vision} className="rounded-lg border border-navy-200 px-3 py-2 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="mission" className="text-sm font-medium text-navy-900">Mission</label>
          <textarea id="mission" name="mission" rows={2} defaultValue={settings.mission} className="rounded-lg border border-navy-200 px-3 py-2 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="key_scripture_text" className="text-sm font-medium text-navy-900">Key scripture</label>
          <textarea id="key_scripture_text" name="key_scripture_text" rows={3} defaultValue={settings.key_scripture_text} className="rounded-lg border border-navy-200 px-3 py-2 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40" />
        </div>
        <Field label="Scripture reference" name="key_scripture_ref" defaultValue={settings.key_scripture_ref} />

        <Field label="Address" name="address" defaultValue={settings.address} />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Phone" name="phone" defaultValue={settings.phone ?? ""} />
          <Field label="Email" name="email" type="email" defaultValue={settings.email ?? ""} />
        </div>

        <RepeaterField
          name="service_times"
          label="Service times"
          fields={[
            { key: "label", placeholder: "e.g. Sunday Worship" },
            { key: "value", placeholder: "e.g. 10:00 AM" },
          ]}
          defaultValue={settings.service_times}
          addLabel="Add service time"
        />

        <RepeaterField
          name="social_links"
          label="Social links"
          fields={[
            { key: "platform", placeholder: "e.g. Facebook" },
            { key: "url", placeholder: "https://facebook.com/..." },
          ]}
          defaultValue={settings.social_links}
          addLabel="Add social link"
        />

        <div>
          <Button type="submit" className="btn-metallic gold-line font-semibold">
            Save Settings
          </Button>
        </div>
      </form>
    </div>
  );
}

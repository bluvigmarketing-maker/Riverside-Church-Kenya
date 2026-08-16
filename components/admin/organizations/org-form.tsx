import { Button } from "@/components/ui/button";
import { Field } from "@/components/admin/form-field";
import { ImageUploadField } from "@/components/admin/image-upload-field";
import type { Organization } from "@/lib/types";

export function OrgForm({
  organization,
  action,
  submitLabel,
}: {
  organization?: Organization;
  action: (formData: FormData) => Promise<void>;
  submitLabel: string;
}) {
  return (
    <form action={action} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" defaultValue={organization?.name} required />
        <Field
          label="URL slug"
          name="slug"
          defaultValue={organization?.slug}
          placeholder="leave blank to auto-generate"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="short_description" className="text-sm font-medium text-navy-900">
          Short description
        </label>
        <textarea
          id="short_description"
          name="short_description"
          rows={2}
          defaultValue={organization?.short_description}
          className="rounded-lg border border-navy-200 px-3 py-2 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40"
        />
        <p className="text-xs text-navy-500">
          Shown in the page hero and in previews (e.g. the link on the Leadership page).
        </p>
      </div>

      <Field label="Motto" name="motto" defaultValue={organization?.motto ?? ""} />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="theme_scripture_text" className="text-sm font-medium text-navy-900">
            Theme scripture
          </label>
          <textarea
            id="theme_scripture_text"
            name="theme_scripture_text"
            rows={2}
            defaultValue={organization?.theme_scripture_text ?? ""}
            className="rounded-lg border border-navy-200 px-3 py-2 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40"
          />
        </div>
        <Field
          label="Scripture reference"
          name="theme_scripture_ref"
          defaultValue={organization?.theme_scripture_ref ?? ""}
          placeholder="e.g. John 7:38"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="vision" className="text-sm font-medium text-navy-900">
          Vision
        </label>
        <textarea
          id="vision"
          name="vision"
          rows={3}
          defaultValue={organization?.vision}
          className="rounded-lg border border-navy-200 px-3 py-2 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="mission" className="text-sm font-medium text-navy-900">
          Mission
        </label>
        <textarea
          id="mission"
          name="mission"
          rows={3}
          defaultValue={organization?.mission}
          className="rounded-lg border border-navy-200 px-3 py-2 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <ImageUploadField
          name="logo_url"
          folder="organizations"
          defaultPath={organization?.logo_url}
          label="Logo"
        />
        <ImageUploadField
          name="hero_image_url"
          folder="organizations"
          defaultPath={organization?.hero_image_url}
          label="Hero photo (optional)"
        />
      </div>

      <div className="w-32">
        <Field
          label="Sort order"
          name="sort_order"
          type="number"
          defaultValue={String(organization?.sort_order ?? 0)}
        />
      </div>

      <div>
        <Button type="submit" className="btn-metallic gold-line font-semibold">
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}

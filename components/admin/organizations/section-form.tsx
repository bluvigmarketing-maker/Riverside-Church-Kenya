import { Button } from "@/components/ui/button";
import { Field } from "@/components/admin/form-field";
import { ImageUploadField } from "@/components/admin/image-upload-field";
import type { OrganizationSection } from "@/lib/types";

export function SectionForm({
  section,
  action,
  submitLabel,
}: {
  section?: OrganizationSection;
  action: (formData: FormData) => Promise<void>;
  submitLabel: string;
}) {
  return (
    <form action={action} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Part / group"
          name="part"
          defaultValue={section?.part}
          placeholder="e.g. Church & Community"
          required
        />
        <Field label="Heading" name="heading" defaultValue={section?.heading} required />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="scripture_text" className="text-sm font-medium text-navy-900">
            Scripture (optional)
          </label>
          <textarea
            id="scripture_text"
            name="scripture_text"
            rows={2}
            defaultValue={section?.scripture_text ?? ""}
            className="rounded-lg border border-navy-200 px-3 py-2 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40"
          />
        </div>
        <Field
          label="Scripture reference"
          name="scripture_ref"
          defaultValue={section?.scripture_ref ?? ""}
          placeholder="e.g. Matthew 5:14–16"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="body" className="text-sm font-medium text-navy-900">
          Body text
        </label>
        <textarea
          id="body"
          name="body"
          rows={12}
          defaultValue={section?.body}
          className="rounded-lg border border-navy-200 px-3 py-2 font-mono text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40"
        />
        <p className="text-xs text-navy-500">
          Separate paragraphs with a blank line. Start a line with &ldquo;- &rdquo; for a bullet
          point. Wrap a line in &ldquo;**like this**&rdquo; for a bold label (e.g.
          &ldquo;**Objectives**&rdquo; or &ldquo;**Expected Impact**&rdquo;).
        </p>
      </div>

      <ImageUploadField
        name="image_url"
        folder="organizations"
        defaultPath={section?.image_url}
        label="Photo (optional — only the first section of each part shows its photo)"
      />

      <div className="w-32">
        <Field
          label="Sort order"
          name="sort_order"
          type="number"
          defaultValue={String(section?.sort_order ?? 0)}
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

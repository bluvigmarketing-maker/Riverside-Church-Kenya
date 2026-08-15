import { Button } from "@/components/ui/button";
import { ImageUploadField } from "@/components/admin/image-upload-field";
import { Field } from "@/components/admin/form-field";
import type { HistorySection } from "@/lib/types";

export function HistoryForm({
  section,
  action,
  submitLabel,
}: {
  section?: HistorySection;
  action: (formData: FormData) => Promise<void>;
  submitLabel: string;
}) {
  return (
    <form action={action} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Heading" name="heading" defaultValue={section?.heading} required />
        <Field
          label="Subheading"
          name="subheading"
          defaultValue={section?.subheading ?? ""}
          placeholder="e.g. 2018–2020"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="body" className="text-sm font-medium text-navy-900">
          Body text
        </label>
        <textarea
          id="body"
          name="body"
          rows={8}
          defaultValue={section?.body}
          className="rounded-lg border border-navy-200 px-3 py-2 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40"
        />
        <p className="text-xs text-navy-500">Separate paragraphs with a blank line.</p>
      </div>

      <ImageUploadField name="image_url" folder="history" defaultPath={section?.image_url} label="Photo (optional)" />

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

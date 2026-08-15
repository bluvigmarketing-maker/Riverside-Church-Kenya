import { Button } from "@/components/ui/button";
import { ImageUploadField } from "@/components/admin/image-upload-field";
import { Field } from "@/components/admin/form-field";
import type { Leader } from "@/lib/types";

export function LeaderForm({
  leader,
  action,
  submitLabel,
}: {
  leader?: Leader;
  action: (formData: FormData) => Promise<void>;
  submitLabel: string;
}) {
  return (
    <form action={action} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" defaultValue={leader?.name} required />
        <Field label="Role / Title" name="role_title" defaultValue={leader?.role_title} required />
      </div>

      <Field label="Pull-quote" name="quote" defaultValue={leader?.quote ?? ""} />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="bio" className="text-sm font-medium text-navy-900">
          Biography
        </label>
        <textarea
          id="bio"
          name="bio"
          rows={8}
          defaultValue={leader?.bio}
          className="rounded-lg border border-navy-200 px-3 py-2 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40"
        />
      </div>

      <ImageUploadField name="photo_url" folder="leadership" defaultPath={leader?.photo_url} label="Photo" />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Hometown" name="hometown" defaultValue={leader?.hometown ?? ""} />
        <Field label="Education" name="education" defaultValue={leader?.education ?? ""} />
      </div>
      <Field label="Ordination info" name="ordination_info" defaultValue={leader?.ordination_info ?? ""} />
      <Field
        label="Ministry attributes"
        name="attributes"
        defaultValue={leader?.attributes?.join(", ") ?? ""}
        placeholder="Comma-separated, e.g. Prayerful, Visionary, Compassionate"
      />
      <div className="w-32">
        <Field
          label="Sort order"
          name="sort_order"
          type="number"
          defaultValue={String(leader?.sort_order ?? 0)}
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

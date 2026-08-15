import { Button } from "@/components/ui/button";
import { Field } from "@/components/admin/form-field";
import { ICON_KEYS } from "@/components/shared/icon-map";
import type { Program } from "@/lib/types";

export function ProgramForm({
  program,
  action,
  submitLabel,
}: {
  program?: Program;
  action: (formData: FormData) => Promise<void>;
  submitLabel: string;
}) {
  return (
    <form action={action} className="flex flex-col gap-4">
      <Field label="Title" name="title" defaultValue={program?.title} required />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="description" className="text-sm font-medium text-navy-900">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          defaultValue={program?.description}
          className="rounded-lg border border-navy-200 px-3 py-2 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="icon_name" className="text-sm font-medium text-navy-900">
            Icon
          </label>
          <select
            id="icon_name"
            name="icon_name"
            defaultValue={program?.icon_name ?? ICON_KEYS[0]}
            className="rounded-lg border border-navy-200 px-3 py-2 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40"
          >
            {ICON_KEYS.map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </div>
        <Field label="Tag label" name="tag_label" defaultValue={program?.tag_label ?? ""} />
      </div>

      <div className="w-32">
        <Field
          label="Sort order"
          name="sort_order"
          type="number"
          defaultValue={String(program?.sort_order ?? 0)}
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

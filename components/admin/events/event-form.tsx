import { Button } from "@/components/ui/button";
import { ImageUploadField } from "@/components/admin/image-upload-field";
import { toEatLocalInputValue } from "@/lib/dates";
import type { ChurchEvent } from "@/lib/types";

export function EventForm({
  event,
  action,
  submitLabel,
}: {
  event?: ChurchEvent;
  action: (formData: FormData) => Promise<void>;
  submitLabel: string;
}) {
  return (
    <form action={action} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="title" className="text-sm font-medium text-navy-900">
            Title
          </label>
          <input
            id="title"
            name="title"
            defaultValue={event?.title}
            required
            className="rounded-lg border border-navy-200 px-3 py-2 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="slug" className="text-sm font-medium text-navy-900">
            URL slug <span className="font-normal text-navy-500">(leave blank to auto-generate)</span>
          </label>
          <input
            id="slug"
            name="slug"
            defaultValue={event?.slug}
            placeholder="e.g. sunday-worship-service"
            className="rounded-lg border border-navy-200 px-3 py-2 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="description" className="text-sm font-medium text-navy-900">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          defaultValue={event?.description}
          className="rounded-lg border border-navy-200 px-3 py-2 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="starts_at" className="text-sm font-medium text-navy-900">
            Date & time (East Africa Time)
          </label>
          <input
            id="starts_at"
            name="starts_at"
            type="datetime-local"
            defaultValue={event ? toEatLocalInputValue(event.starts_at) : undefined}
            required
            className="rounded-lg border border-navy-200 px-3 py-2 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="location" className="text-sm font-medium text-navy-900">
            Location
          </label>
          <input
            id="location"
            name="location"
            defaultValue={event?.location ?? ""}
            className="rounded-lg border border-navy-200 px-3 py-2 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40"
          />
        </div>
      </div>

      <ImageUploadField name="image_url" folder="events" defaultPath={event?.image_url} label="Event photo" />

      <label className="flex items-center gap-2 text-sm font-medium text-navy-900">
        <input
          type="checkbox"
          name="donation_enabled"
          defaultChecked={event?.donation_enabled}
          className="size-4 rounded border-navy-300"
        />
        Show a Donate button on this event
      </label>

      <div>
        <Button type="submit" className="btn-metallic gold-line font-semibold">
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}

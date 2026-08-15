"use client";

import { useState } from "react";
import { Pencil, Star, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DeleteButton } from "@/components/admin/delete-button";
import { EventForm } from "@/components/admin/events/event-form";
import type { ChurchEvent } from "@/lib/types";

export function EventRow({
  event,
  updateAction,
  deleteAction,
  setFeaturedAction,
}: {
  event: ChurchEvent;
  updateAction: (formData: FormData) => Promise<void>;
  deleteAction: () => Promise<void>;
  setFeaturedAction: () => Promise<void>;
}) {
  const [editing, setEditing] = useState(false);

  if (editing) {
    return (
      <div className="gold-line rounded-2xl border bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-heading text-lg font-semibold text-navy-950">Edit Event</h3>
          <button
            onClick={() => setEditing(false)}
            className="rounded-lg p-1.5 text-navy-500 hover:bg-navy-50"
            aria-label="Cancel editing"
          >
            <X className="size-4" />
          </button>
        </div>
        <EventForm
          event={event}
          action={async (formData) => {
            await updateAction(formData);
            setEditing(false);
          }}
          submitLabel="Save Changes"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-navy-100 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-heading text-lg font-semibold text-navy-950">{event.title}</p>
          {event.is_featured && (
            <Badge className="bg-gold-100 text-gold-800">Featured (countdown)</Badge>
          )}
          {event.donation_enabled && <Badge variant="outline">Donations on</Badge>}
        </div>
        <p className="mt-1 text-sm text-navy-600">
          {new Date(event.starts_at).toLocaleString("en-KE", {
            weekday: "short",
            day: "numeric",
            month: "short",
            hour: "numeric",
            minute: "2-digit",
          })}
          {event.location ? ` · ${event.location}` : ""}
        </p>
      </div>

      <div className="flex items-center gap-2">
        {!event.is_featured && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="gold-line"
            onClick={() => setFeaturedAction()}
          >
            <Star className="size-3.5" aria-hidden="true" />
            Feature
          </Button>
        )}
        <Button type="button" variant="outline" size="sm" onClick={() => setEditing(true)}>
          <Pencil className="size-3.5" aria-hidden="true" />
          Edit
        </Button>
        <DeleteButton action={deleteAction} confirmText={`Delete "${event.title}"?`} />
      </div>
    </div>
  );
}

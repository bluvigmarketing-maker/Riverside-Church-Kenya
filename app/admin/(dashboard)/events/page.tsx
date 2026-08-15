import { requirePermission } from "@/lib/admin/require-session";
import { getEvents } from "@/lib/content";
import { EventRow } from "@/components/admin/events/event-row";
import { NewEventCard } from "@/components/admin/events/new-event-card";
import { createEvent, updateEvent, deleteEvent, setFeaturedEvent } from "./actions";

export default async function AdminEventsPage() {
  await requirePermission("events");
  const events = await getEvents();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-heading text-2xl font-semibold text-navy-950">Events</h1>
        <p className="mt-1 text-navy-700">
          Manage events, choose which one drives the homepage countdown, and toggle the Donate
          button.
        </p>
      </div>

      <NewEventCard action={createEvent} />

      <div className="flex flex-col gap-4">
        {events.length === 0 && <p className="text-navy-600">No events yet.</p>}
        {events.map((event) => (
          <EventRow
            key={event.id}
            event={event}
            updateAction={updateEvent.bind(null, event.id)}
            deleteAction={deleteEvent.bind(null, event.id)}
            setFeaturedAction={setFeaturedEvent.bind(null, event.id)}
          />
        ))}
      </div>
    </div>
  );
}

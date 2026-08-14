import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { EventCard } from "@/components/events/event-card";
import { getEvents } from "@/lib/content";
import { isEventUpcoming, isEventPast } from "@/lib/dates";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming events and gatherings at River Church Eldoret.",
};

export default async function EventsPage() {
  const events = await getEvents();
  const upcoming = events.filter((event) => isEventUpcoming(event.starts_at));
  const past = events.filter((event) => isEventPast(event.starts_at));

  return (
    <>
      <PageHero
        eyebrow="Church Calendar"
        title="Events"
        description="Join us as we gather to worship, grow, and serve together."
      />

      <Container className="py-16">
        {upcoming.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((event, index) => (
              <EventCard key={event.id} event={event} delay={index * 0.05} />
            ))}
          </div>
        ) : (
          <p className="text-center text-navy-600">
            No upcoming events right now — check back soon.
          </p>
        )}

        {past.length > 0 && (
          <div className="mt-16">
            <h2 className="font-heading text-2xl font-semibold text-navy-950">Past Events</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {past.map((event, index) => (
                <EventCard key={event.id} event={event} delay={index * 0.05} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </>
  );
}

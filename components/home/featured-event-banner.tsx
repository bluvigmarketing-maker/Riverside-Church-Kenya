import Link from "next/link";
import { CalendarClock, MapPin } from "lucide-react";
import { Countdown } from "@/components/events/countdown";
import { Container } from "@/components/shared/container";
import type { ChurchEvent } from "@/lib/types";

export function FeaturedEventBanner({ event }: { event: ChurchEvent | null }) {
  if (!event) return null;

  const eventDate = new Date(event.starts_at);

  return (
    <div className="bg-navy-950 py-6">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-gold-400 uppercase">
              <CalendarClock className="size-3.5" aria-hidden="true" />
              Upcoming Event
            </span>
            <Link
              href={`/events/${event.slug}`}
              className="font-heading text-lg font-semibold text-white transition-colors hover:text-gold-300 sm:text-xl"
            >
              {event.title}
            </Link>
            <span className="flex items-center gap-1.5 text-sm text-navy-200">
              <MapPin className="size-3.5" aria-hidden="true" />
              {event.location} ·{" "}
              {eventDate.toLocaleDateString("en-KE", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </span>
          </div>

          <Countdown targetIso={event.starts_at} />
        </div>
      </Container>
    </div>
  );
}

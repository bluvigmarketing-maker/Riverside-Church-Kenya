import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { DonateButton } from "@/components/events/donate-button";
import { getMediaUrl } from "@/lib/supabase/media";
import type { ChurchEvent } from "@/lib/types";

export function EventCard({ event, delay = 0 }: { event: ChurchEvent; delay?: number }) {
  const imageUrl = getMediaUrl(event.image_url);
  const date = new Date(event.starts_at);

  return (
    <AnimatedSection delay={delay}>
      <div className="gold-line group flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
        <div className="relative aspect-[16/9] w-full bg-navy-950">
          {imageUrl ? (
            <Image src={imageUrl} alt={event.title} fill className="object-cover" />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-1 text-gold-300">
              <CalendarDays className="size-8" aria-hidden="true" />
            </div>
          )}
          <div className="absolute top-3 left-3 flex flex-col items-center rounded-lg bg-white px-3 py-1.5 text-center shadow">
            <span className="font-heading text-lg font-bold text-navy-950">{date.getDate()}</span>
            <span className="text-[11px] font-semibold tracking-wide text-gold-700 uppercase">
              {date.toLocaleDateString("en-KE", { month: "short" })}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-6">
          <Link
            href={`/events/${event.slug}`}
            className="font-heading text-xl font-semibold text-navy-950 transition-colors hover:text-navy-700"
          >
            {event.title}
          </Link>
          <p className="line-clamp-2 flex-1 text-sm text-navy-700">{event.description}</p>
          {event.location && (
            <span className="flex items-center gap-1.5 text-sm text-navy-600">
              <MapPin className="size-4 text-gold-600" aria-hidden="true" />
              {event.location}
            </span>
          )}
          <div className="flex items-center justify-between pt-2">
            <Link
              href={`/events/${event.slug}`}
              className="text-sm font-semibold text-navy-900 underline-offset-4 hover:underline"
            >
              View details
            </Link>
            {event.donation_enabled && <DonateButton />}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

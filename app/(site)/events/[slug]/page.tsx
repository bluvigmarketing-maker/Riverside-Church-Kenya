import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarClock, MapPin } from "lucide-react";
import { Container } from "@/components/shared/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Countdown } from "@/components/events/countdown";
import { DonateButton } from "@/components/events/donate-button";
import { getEventBySlug } from "@/lib/content";
import { getMediaUrl } from "@/lib/supabase/media";
import { isEventUpcoming } from "@/lib/dates";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) return {};
  return { title: event.title, description: event.description };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) notFound();

  const imageUrl = getMediaUrl(event.image_url);
  const date = new Date(event.starts_at);
  const isUpcoming = isEventUpcoming(event.starts_at);

  return (
    <Container className="py-16">
      <Link
        href="/events"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 hover:text-navy-950"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to Events
      </Link>

      <AnimatedSection className="mt-6">
        <div className="relative aspect-[16/7] w-full overflow-hidden rounded-3xl bg-navy-950">
          {imageUrl ? (
            <Image src={imageUrl} alt={event.title} fill className="object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center">
              <CalendarClock className="size-12 text-gold-300" aria-hidden="true" />
            </div>
          )}
        </div>
      </AnimatedSection>

      <div className="mt-8 grid gap-10 md:grid-cols-[1fr_320px]">
        <AnimatedSection>
          <div>
            <h1 className="font-heading text-3xl font-bold text-navy-950 sm:text-4xl">
              {event.title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-navy-700">
              <span className="flex items-center gap-1.5">
                <CalendarClock className="size-4 text-gold-600" aria-hidden="true" />
                {date.toLocaleDateString("en-KE", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}{" "}
                &middot;{" "}
                {date.toLocaleTimeString("en-KE", { hour: "numeric", minute: "2-digit" })}
              </span>
              {event.location && (
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-4 text-gold-600" aria-hidden="true" />
                  {event.location}
                </span>
              )}
            </div>
            <p className="mt-6 text-navy-700">{event.description}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="gold-line flex flex-col gap-4 rounded-2xl border bg-navy-950 p-6">
            {isUpcoming ? (
              <>
                <span className="text-xs font-semibold tracking-wide text-gold-400 uppercase">
                  Counting down
                </span>
                <Countdown targetIso={event.starts_at} />
              </>
            ) : (
              <p className="font-heading text-lg text-gold-300">This event has already taken place.</p>
            )}
            {event.donation_enabled && (
              <div className="pt-2">
                <DonateButton />
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </Container>
  );
}

import Image from "next/image";
import { Quote } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { getMediaUrl } from "@/lib/supabase/media";
import type { Leader } from "@/lib/types";

export function WelcomeMessage({ leaders }: { leaders: Leader[] }) {
  const senior = leaders[0];

  return (
    <Container className="py-16">
      <SectionHeading
        eyebrow="Welcome to River Church Eldoret"
        title="Welcome Message from Our Pastors"
      />

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center">
        <AnimatedSection>
          <div className="flex flex-col gap-4">
            {senior?.quote && (
              <p className="flex items-start gap-3 font-heading text-xl text-navy-800 italic">
                <Quote className="mt-1 size-6 shrink-0 text-gold-500" aria-hidden="true" />
                {senior.quote}
              </p>
            )}
            <p className="text-navy-700">
              We believe that just as the River of Life flows from the throne of God, His Holy
              Spirit is flowing today — refreshing lives, healing broken hearts, and transforming
              generations.
            </p>
            <p className="text-navy-700">
              Whether you are seeking spiritual renewal, looking for a church family, or hoping
              for hope, there is a place for you here.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2">
            {leaders.map((leader) => (
              <div
                key={leader.id}
                className="gold-line overflow-hidden rounded-2xl border bg-white shadow-sm"
              >
                <div className="relative aspect-[4/5] w-full bg-navy-100">
                  {getMediaUrl(leader.photo_url) && (
                    <Image
                      src={getMediaUrl(leader.photo_url)!}
                      alt={leader.name}
                      fill
                      sizes="(min-width: 768px) 260px, (min-width: 640px) 45vw, 90vw"
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold tracking-wide text-gold-600 uppercase">
                    {leader.role_title}
                  </span>
                  <p className="font-heading text-base font-semibold text-navy-950">
                    {leader.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </Container>
  );
}

import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { getHistorySections } from "@/lib/content";
import { getMediaUrl } from "@/lib/supabase/media";

export const metadata: Metadata = {
  title: "Our History",
  description:
    "The divine vision, faithful beginnings, and growth of River Church Eldoret — from a dream of the river of life to a thriving congregation in Marura.",
};

export default async function HistoryPage() {
  const sections = await getHistorySections();
  const closing = sections[sections.length - 1];
  const timeline = sections.slice(0, -1);

  return (
    <>
      <PageHero eyebrow="Our Journey" title="Our History" />

      <Container className="flex flex-col gap-16 py-16">
        {timeline.map((section, index) => {
          const imageUrl = getMediaUrl(section.image_url);
          const imageFirst = index % 2 === 0;

          return (
            <div
              key={section.id}
              className="grid gap-8 md:grid-cols-2 md:items-center"
            >
              <AnimatedSection className={imageFirst ? "md:order-1" : "md:order-2"}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-navy-950">
                  {imageUrl ? (
                    <Image src={imageUrl} alt={section.heading} fill className="object-cover" />
                  ) : (
                    <div className="flex h-full items-center justify-center px-6 text-center font-heading text-2xl font-semibold text-gold-300">
                      {section.heading}
                    </div>
                  )}
                </div>
              </AnimatedSection>

              <AnimatedSection
                delay={0.1}
                className={imageFirst ? "md:order-2" : "md:order-1"}
              >
                <div>
                  <h2 className="font-heading text-2xl font-semibold text-navy-950 sm:text-3xl">
                    {section.heading}
                  </h2>
                  {section.subheading && (
                    <p className="mt-1 font-medium text-gold-700">{section.subheading}</p>
                  )}
                  <div className="mt-4 flex flex-col gap-3 text-navy-700">
                    {section.body.split("\n\n").map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          );
        })}

        {closing && (
          <AnimatedSection>
            <div className="gold-line rounded-2xl border bg-navy-950 p-8 text-center sm:p-12">
              <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl">
                {closing.heading}
              </h2>
              <div className="mx-auto mt-4 flex max-w-2xl flex-col gap-3 text-navy-100">
                {closing.body.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}
      </Container>
    </>
  );
}

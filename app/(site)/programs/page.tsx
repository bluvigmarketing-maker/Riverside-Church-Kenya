import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { getIcon } from "@/components/shared/icon-map";
import { getPrograms } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "The ministries and pillars of faith that shape life at River Church Eldoret.",
};

export default async function ProgramsPage() {
  const programs = await getPrograms();

  return (
    <>
      <PageHero
        eyebrow="Ministries"
        title="Our Programs"
        description="The pillars of faith and ministries carrying the presence of God through every part of church life."
      />

      <Container className="py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = getIcon(program.icon_name);
            return (
              <AnimatedSection key={program.id} delay={index * 0.05}>
                <div className="group h-full rounded-2xl border border-navy-100 bg-white p-7 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-full bg-navy-950 font-heading text-sm font-semibold text-gold-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon className="size-6 text-gold-600" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 font-heading text-xl font-semibold text-navy-950">
                    {program.title}
                  </h2>
                  <p className="mt-2 text-navy-700">{program.description}</p>
                  {program.tag_label && (
                    <span className="mt-4 inline-flex items-center text-xs font-medium text-gold-700">
                      {program.tag_label}
                    </span>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </>
  );
}

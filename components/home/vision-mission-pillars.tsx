import { Compass, Target } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { getIcon } from "@/components/shared/icon-map";
import type { Program, SiteSettings } from "@/lib/types";

export function VisionMissionPillars({
  settings,
  programs,
}: {
  settings: SiteSettings;
  programs: Program[];
}) {
  return (
    <div className="bg-navy-50 py-16">
      <Container>
        <SectionHeading
          eyebrow="Our Purpose & Direction"
          title="Vision, Mission & Core Pillars"
          description="Carrying the presence, love, power, and hope of Jesus Christ to Marura, Eldoret, and beyond."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <AnimatedSection>
            <div className="flex h-full flex-col gap-3 rounded-2xl bg-navy-950 p-8 text-white">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-300 uppercase">
                <Compass className="size-4" aria-hidden="true" />
                Our Vision
              </span>
              <p className="font-heading text-xl italic">&ldquo;{settings.vision}&rdquo;</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="gold-line flex h-full flex-col gap-3 rounded-2xl border bg-white p-8">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-700 uppercase">
                <Target className="size-4" aria-hidden="true" />
                Our Mission
              </span>
              <p className="font-heading text-xl text-navy-900 italic">&ldquo;{settings.mission}&rdquo;</p>
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-14">
          <p className="text-center text-xs font-semibold tracking-wide text-gold-700 uppercase">
            Foundational Values
          </p>
          <h3 className="mt-1 text-center font-heading text-2xl font-semibold text-navy-950">
            Pillars of Our Faith
          </h3>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => {
              const Icon = getIcon(program.icon_name);
              return (
                <AnimatedSection key={program.id} delay={index * 0.05}>
                  <div className="group h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-full bg-navy-950 font-heading text-sm font-semibold text-gold-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <Icon className="size-5 text-gold-600" aria-hidden="true" />
                    </div>
                    <h4 className="mt-4 font-heading text-lg font-semibold text-navy-950">
                      {program.title}
                    </h4>
                    <p className="mt-2 text-sm text-navy-700">{program.description}</p>
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
        </div>
      </Container>
    </div>
  );
}

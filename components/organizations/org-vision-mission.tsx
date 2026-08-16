import { Compass, Target } from "lucide-react";
import { Container } from "@/components/shared/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import type { Organization } from "@/lib/types";

export function OrgVisionMission({ org }: { org: Organization }) {
  return (
    <div className="bg-purple-50 py-16">
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          <AnimatedSection>
            <div className="flex h-full flex-col gap-3 rounded-3xl border border-gold-400/60 bg-white p-7 sm:p-8">
              <span className="flex size-11 items-center justify-center rounded-full bg-purple-950">
                <Compass className="size-5 text-gold-300" aria-hidden="true" />
              </span>
              <h2 className="font-heading text-2xl font-semibold text-purple-950">Vision</h2>
              <p className="text-purple-900/90">{org.vision}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex h-full flex-col gap-3 rounded-3xl border border-gold-400/60 bg-white p-7 sm:p-8">
              <span className="flex size-11 items-center justify-center rounded-full bg-purple-950">
                <Target className="size-5 text-gold-300" aria-hidden="true" />
              </span>
              <h2 className="font-heading text-2xl font-semibold text-purple-950">Mission</h2>
              <p className="text-purple-900/90">{org.mission}</p>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </div>
  );
}

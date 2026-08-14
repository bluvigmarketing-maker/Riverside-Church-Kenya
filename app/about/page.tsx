import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import { PageHero } from "@/components/shared/page-hero";
import { getSiteSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about River Church Eldoret's vision, mission, history, and leadership.",
};

export default async function AboutPage() {
  const settings = await getSiteSettings();

  return (
    <>
      <PageHero eyebrow="River Church Eldoret" title="About Us" />

      <Container className="py-16">
        <SectionHeading
          eyebrow="Our Purpose & Direction"
          title="Vision & Mission"
          description="Carrying the presence, love, power, and hope of Jesus Christ to Marura, Eldoret, and beyond."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <AnimatedSection>
            <div className="flex h-full flex-col gap-3 rounded-2xl bg-navy-950 p-8 text-white">
              <span className="text-sm font-semibold text-gold-300 uppercase">Our Vision</span>
              <p className="font-heading text-xl italic">&ldquo;{settings.vision}&rdquo;</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="gold-line flex h-full flex-col gap-3 rounded-2xl border bg-white p-8">
              <span className="text-sm font-semibold text-gold-700 uppercase">Our Mission</span>
              <p className="font-heading text-xl text-navy-900 italic">&ldquo;{settings.mission}&rdquo;</p>
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          <AnimatedSection>
            <Link
              href="/about/history"
              className="group gold-line flex h-full flex-col justify-between gap-3 rounded-2xl border bg-white p-8 transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <h3 className="font-heading text-2xl font-semibold text-navy-950">Our History</h3>
                <p className="mt-2 text-navy-700">
                  The divine vision, faithful beginnings, and growth of River Church Eldoret.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold-700">
                Read our story
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Link
              href="/about/leadership"
              className="group gold-line flex h-full flex-col justify-between gap-3 rounded-2xl border bg-white p-8 transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <h3 className="font-heading text-2xl font-semibold text-navy-950">
                  Our Leadership
                </h3>
                <p className="mt-2 text-navy-700">
                  Meet the pastors shepherding River Church Eldoret.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold-700">
                Meet the team
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </Container>
    </>
  );
}

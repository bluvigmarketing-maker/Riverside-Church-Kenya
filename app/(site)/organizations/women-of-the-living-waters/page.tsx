import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/shared/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Button } from "@/components/ui/button";
import { OrgHero } from "@/components/organizations/org-hero";
import { OrgVisionMission } from "@/components/organizations/org-vision-mission";
import { OrgPartSection } from "@/components/organizations/org-part-section";
import { getOrganizationBySlug, getOrganizationSections } from "@/lib/content";

const SLUG = "women-of-the-living-waters";

export async function generateMetadata(): Promise<Metadata> {
  const org = await getOrganizationBySlug(SLUG);
  if (!org) return {};
  return { title: org.name, description: org.short_description };
}

export default async function WomenOfTheLivingWatersPage() {
  const org = await getOrganizationBySlug(SLUG);
  if (!org) notFound();

  const sections = await getOrganizationSections(org.id);
  const churchSections = sections.filter((s) => s.part === "Church & Community");
  const nationalSections = sections.filter((s) => s.part === "National Vision");
  const internationalSections = sections.filter((s) => s.part === "International Vision");

  return (
    <>
      <OrgHero org={org} />

      <Container className="pt-8">
        <Link
          href="/about/leadership"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-700 hover:text-purple-950"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to Leadership
        </Link>
      </Container>

      <OrgVisionMission org={org} />

      <OrgPartSection part="Church & Community" sections={churchSections} tone="white" showIcons />
      <OrgPartSection part="National Vision" sections={nationalSections} tone="muted" />
      <OrgPartSection part="International Vision" sections={internationalSections} tone="white" />

      <div className="bg-purple-950 py-16 text-center text-white sm:py-20">
        <Container>
          <AnimatedSection>
            <div className="flex flex-col items-center gap-4">
              <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
                Join the Movement
              </h2>
              <span className="h-px w-16 bg-gold-400" />
              <p className="max-w-2xl text-purple-100">
                To get involved with {org.name}, connect with the ministry through River Church
                Eldoret.
              </p>
              <Button render={<Link href="/contact" />} className="btn-metallic gold-line font-semibold">
                Get in Touch
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </div>
    </>
  );
}

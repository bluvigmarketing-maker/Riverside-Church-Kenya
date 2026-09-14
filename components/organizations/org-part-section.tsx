import { Container } from "@/components/shared/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { OrgRichText } from "@/components/organizations/org-rich-text";
import { OrgSectionCard } from "@/components/organizations/org-section-card";
import { OrgImageSlot } from "@/components/organizations/org-image-slot";
import { getOrgSectionIcon } from "@/components/organizations/org-icon-map";
import type { OrganizationSection } from "@/lib/types";

/** A section is a bulleted content block (has an "**Objectives**"-style label or "- " bullets). */
function hasStructuredContent(body: string): boolean {
  return /\*\*.+\*\*/.test(body) || /(^|\n)\s*-\s/.test(body);
}

export function OrgPartSection({
  part,
  sections,
  tone,
  showIcons = false,
}: {
  part: string;
  sections: OrganizationSection[];
  tone: "white" | "muted";
  showIcons?: boolean;
}) {
  if (sections.length === 0) return null;
  const [intro, ...rest] = sections;
  const cardSections = rest.filter((s) => hasStructuredContent(s.body));
  const proseSections = rest.filter((s) => !hasStructuredContent(s.body));

  return (
    <div className={tone === "muted" ? "bg-purple-50 py-16 sm:py-20" : "bg-white py-16 sm:py-20"}>
      <Container className="flex flex-col gap-12">
        <div className="grid items-start gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-10">
          <AnimatedSection>
            <div className="flex flex-col gap-3">
              <span className="w-fit text-xs font-semibold tracking-wide text-purple-700 uppercase">
                {part}
              </span>
              <h2 className="font-heading text-3xl font-semibold text-purple-950 sm:text-4xl">
                {intro.heading}
              </h2>
              <span className="h-px w-16 bg-gold-400" />

              {intro.scripture_text && (
                <blockquote className="rounded-xl bg-purple-950 p-4 font-heading text-white italic">
                  &ldquo;{intro.scripture_text}&rdquo;
                  {intro.scripture_ref && (
                    <footer className="mt-1.5 text-sm font-sans font-semibold text-gold-300 not-italic">
                      — {intro.scripture_ref}
                    </footer>
                  )}
                </blockquote>
              )}

              <OrgRichText body={intro.body} />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <OrgImageSlot
              path={intro.image_url}
              alt={`${part} photo`}
              label={`${part} photo — upload via the admin dashboard`}
              className="aspect-[4/3] md:aspect-square"
            />
          </AnimatedSection>
        </div>

        {cardSections.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cardSections.map((section, index) => (
              <OrgSectionCard
                key={section.id}
                section={section}
                icon={showIcons ? getOrgSectionIcon(section.heading) : undefined}
                delay={index * 0.05}
              />
            ))}
          </div>
        )}

        {proseSections.map((section) => (
          <AnimatedSection key={section.id}>
            <div className="rounded-3xl bg-purple-950 p-8 text-center sm:p-10">
              <h3 className="font-heading text-xl font-semibold text-gold-300">
                {section.heading}
              </h3>
              <div className="mx-auto mt-3 max-w-3xl">
                <OrgRichText body={section.body} tone="dark" />
              </div>
            </div>
          </AnimatedSection>
        ))}
      </Container>
    </div>
  );
}

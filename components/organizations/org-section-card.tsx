import { AnimatedSection } from "@/components/shared/animated-section";
import { OrgRichText } from "@/components/organizations/org-rich-text";
import type { OrganizationSection } from "@/lib/types";
import type { LucideIcon } from "lucide-react";

export function OrgSectionCard({
  section,
  icon: Icon,
  delay = 0,
}: {
  section: OrganizationSection;
  icon?: LucideIcon;
  delay?: number;
}) {
  return (
    <AnimatedSection delay={delay}>
      <div className="h-full rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
        {Icon && (
          <span className="mb-4 flex size-11 items-center justify-center rounded-full bg-purple-950">
            <Icon className="size-5 text-gold-300" aria-hidden="true" />
          </span>
        )}
        <h3 className="font-heading text-lg font-semibold text-purple-950">{section.heading}</h3>
        <div className="mt-3">
          <OrgRichText body={section.body} />
        </div>
      </div>
    </AnimatedSection>
  );
}

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { getMediaUrl } from "@/lib/supabase/media";
import type { Organization } from "@/lib/types";

/**
 * Points from the Senior Pastor's profile to a ministry she leads that has
 * its own dedicated page (e.g. Women of the Living Waters).
 */
export function OrganizationLink({ organization }: { organization: Organization }) {
  const logoUrl = getMediaUrl(organization.logo_url);

  return (
    <AnimatedSection>
      <Link
        href={`/organizations/${organization.slug}`}
        className="group flex items-center gap-4 rounded-2xl border border-gold-400/60 bg-navy-50 p-5 transition-transform hover:-translate-y-1 hover:shadow-md sm:p-6"
      >
        {logoUrl && (
          <div className="hidden shrink-0 rounded-xl bg-white p-2 shadow-sm sm:block">
            <Image
              src={logoUrl}
              alt={`${organization.name} logo`}
              width={56}
              height={56}
              className="size-14 rounded-lg object-cover"
            />
          </div>
        )}
        <div className="flex-1">
          <p className="text-xs font-semibold tracking-wide text-gold-700 uppercase">
            Also Leads
          </p>
          <p className="font-heading text-lg font-semibold text-navy-950">
            {organization.name}
          </p>
          <p className="text-sm text-navy-700">{organization.short_description}</p>
        </div>
        <ArrowRight
          className="size-5 shrink-0 text-navy-500 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </AnimatedSection>
  );
}

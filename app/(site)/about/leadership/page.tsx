import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { LeaderProfile } from "@/components/leadership/leader-profile";
import { OrganizationLink } from "@/components/leadership/organization-link";
import { getLeaders, getOrganizationBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Leadership",
  description:
    "Meet the pastors of River Church Eldoret — devoted servants of God committed to shepherd, lead, and guide our church family.",
};

export default async function LeadershipPage() {
  const [leaders, womenOfLivingWaters] = await Promise.all([
    getLeaders(),
    getOrganizationBySlug("women-of-the-living-waters"),
  ]);

  return (
    <>
      <PageHero
        eyebrow="River Church Eldoret"
        title="Our Leadership Team"
        description="Devoted servants of God committed to shepherd, lead, and guide our church family into the continuous flow of God's grace and truth."
      />

      <Container className="flex flex-col gap-10 py-16">
        {leaders.map((leader) => {
          const isSeniorPastor = leader.name.toLowerCase().includes("borness");
          return (
            <div key={leader.id} className="flex flex-col gap-6">
              <LeaderProfile leader={leader} />
              {isSeniorPastor && womenOfLivingWaters && (
                <OrganizationLink organization={womenOfLivingWaters} />
              )}
            </div>
          );
        })}
      </Container>
    </>
  );
}

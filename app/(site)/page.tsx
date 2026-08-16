import { Hero } from "@/components/home/hero";
import { FeaturedEventBanner } from "@/components/home/featured-event-banner";
import { ScriptureBlock } from "@/components/home/scripture-block";
import { WelcomeMessage } from "@/components/home/welcome-message";
import { VisionMissionPillars } from "@/components/home/vision-mission-pillars";
import { AboutSnippet } from "@/components/home/about-snippet";
import { FindUs } from "@/components/home/find-us";
import {
  getSiteSettings,
  getLeaders,
  getPrograms,
  getFeaturedEvent,
  getOrganizationBySlug,
} from "@/lib/content";

export default async function Home() {
  const [settings, leaders, programs, featuredEvent, womenOfLivingWaters] = await Promise.all([
    getSiteSettings(),
    getLeaders(),
    getPrograms(),
    getFeaturedEvent(),
    getOrganizationBySlug("women-of-the-living-waters"),
  ]);

  return (
    <>
      <Hero settings={settings} />
      <FeaturedEventBanner event={featuredEvent} />
      <ScriptureBlock settings={settings} />
      <WelcomeMessage leaders={leaders} organization={womenOfLivingWaters} />
      <VisionMissionPillars settings={settings} programs={programs} />
      <AboutSnippet settings={settings} />
      <FindUs settings={settings} />
    </>
  );
}

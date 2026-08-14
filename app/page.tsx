import { Hero } from "@/components/home/hero";
import { FeaturedEventBanner } from "@/components/home/featured-event-banner";
import { ScriptureBlock } from "@/components/home/scripture-block";
import { WelcomeMessage } from "@/components/home/welcome-message";
import { VisionMissionPillars } from "@/components/home/vision-mission-pillars";
import { AboutSnippet } from "@/components/home/about-snippet";
import { FindUs } from "@/components/home/find-us";
import { getSiteSettings, getLeaders, getPrograms, getFeaturedEvent } from "@/lib/content";

export default async function Home() {
  const [settings, leaders, programs, featuredEvent] = await Promise.all([
    getSiteSettings(),
    getLeaders(),
    getPrograms(),
    getFeaturedEvent(),
  ]);

  return (
    <>
      <Hero settings={settings} />
      <FeaturedEventBanner event={featuredEvent} />
      <ScriptureBlock settings={settings} />
      <WelcomeMessage leaders={leaders} />
      <VisionMissionPillars settings={settings} programs={programs} />
      <AboutSnippet settings={settings} />
      <FindUs settings={settings} />
    </>
  );
}

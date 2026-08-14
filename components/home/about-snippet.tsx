import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Container } from "@/components/shared/container";
import type { SiteSettings } from "@/lib/types";

export function AboutSnippet({ settings }: { settings: SiteSettings }) {
  return (
    <Container className="py-16">
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-start">
        <AnimatedSection>
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-2xl font-semibold text-navy-950">
              About River Church Eldoret
            </h2>
            <p className="text-navy-700">
              The name <strong>River Church</strong> was inspired by the River of Life in
              Revelation 22:1–3. Just as the river flows from the throne of God bringing healing,
              restoration, and life to the nations, River Church exists to carry the presence,
              love, power, and hope of Jesus Christ to the community and beyond.
            </p>
            <p className="text-navy-700">
              We believe God&rsquo;s Spirit flows continuously — refreshing hearts, healing lives,
              and transforming generations.
            </p>
            <div>
              <Button
                render={<Link href="/about/history" />}
                variant="outline"
                className="gold-line font-semibold text-navy-900"
              >
                Learn more
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="gold-line rounded-2xl border bg-navy-50 p-6">
            <p className="text-xs font-semibold tracking-wide text-gold-700 uppercase">
              Scriptural Foundation
            </p>
            <blockquote className="mt-3 border-l-2 border-gold-400 pl-4 font-heading text-navy-900 italic">
              &ldquo;{settings.key_scripture_text}&rdquo;
              <footer className="mt-2 text-sm font-semibold text-navy-600 not-italic">
                — {settings.key_scripture_ref}
              </footer>
            </blockquote>
          </div>
        </AnimatedSection>
      </div>
    </Container>
  );
}

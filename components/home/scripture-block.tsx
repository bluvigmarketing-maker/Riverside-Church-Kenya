import { BookOpenText } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Container } from "@/components/shared/container";
import type { SiteSettings } from "@/lib/types";

export function ScriptureBlock({ settings }: { settings: SiteSettings }) {
  return (
    <Container className="py-16">
      <AnimatedSection>
        <div className="gold-line rounded-3xl border bg-white p-8 text-center shadow-sm sm:p-12">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-gold-400/60 px-3 py-1 text-xs font-semibold tracking-wide text-gold-700 uppercase">
            <BookOpenText className="size-3.5" aria-hidden="true" />
            Key Scripture Highlight
          </span>
          <p className="mx-auto mt-6 max-w-3xl font-heading text-2xl leading-relaxed text-navy-950 italic sm:text-3xl">
            &ldquo;{settings.key_scripture_text}&rdquo;
          </p>
          <p className="mt-6 font-heading text-lg font-semibold text-navy-700">
            — {settings.key_scripture_ref}
          </p>
        </div>
      </AnimatedSection>
    </Container>
  );
}

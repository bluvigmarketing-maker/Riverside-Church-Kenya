import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import type { SiteSettings } from "@/lib/types";

export function FindUs({ settings }: { settings: SiteSettings }) {
  return (
    <div className="bg-navy-50 py-16">
      <Container>
        <SectionHeading eyebrow="Visit In Person" title="Find Us" description={settings.address} />
        <div className="mt-8 overflow-hidden rounded-2xl border border-navy-100 shadow-sm">
          <iframe
            title="Map to River Church Eldoret"
            src={`https://www.google.com/maps?q=${encodeURIComponent(settings.address)}&output=embed`}
            width="100%"
            height="360"
            loading="lazy"
            className="border-0"
          />
        </div>
      </Container>
    </div>
  );
}

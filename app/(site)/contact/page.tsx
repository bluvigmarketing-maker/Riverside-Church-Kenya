import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ContactForm } from "@/components/contact/contact-form";
import { getSiteSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with River Church Eldoret.",
};

export default async function ContactPage() {
  const settings = await getSiteSettings();

  return (
    <>
      <PageHero
        eyebrow="We'd Love to Hear from You"
        title="Contact Us"
        description="Reach out with questions, prayer requests, or to plan your visit."
      />

      <Container className="grid gap-10 py-16 md:grid-cols-[1fr_1.2fr]">
        <AnimatedSection>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-gold-600" aria-hidden="true" />
              <div>
                <p className="font-semibold text-navy-950">Address</p>
                <p className="text-navy-700">{settings.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-gold-600" aria-hidden="true" />
              <div>
                <p className="font-semibold text-navy-950">Phone</p>
                <p className="text-navy-700">{settings.phone ?? "Coming soon"}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-gold-600" aria-hidden="true" />
              <div>
                <p className="font-semibold text-navy-950">Email</p>
                <p className="text-navy-700">{settings.email ?? "Coming soon"}</p>
              </div>
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-navy-100 shadow-sm">
              <iframe
                title="Map to River Church Eldoret"
                src={`https://www.google.com/maps?q=${encodeURIComponent(settings.address)}&output=embed`}
                width="100%"
                height="260"
                loading="lazy"
                className="border-0"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="gold-line rounded-2xl border bg-white p-6 sm:p-8">
            <h2 className="font-heading text-2xl font-semibold text-navy-950">Send a Message</h2>
            <p className="mt-1 text-navy-700">We typically respond within a day or two.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </>
  );
}

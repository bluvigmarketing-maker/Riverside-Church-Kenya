import Image from "next/image";
import { Container } from "@/components/shared/container";
import { getMediaUrl } from "@/lib/supabase/media";
import type { Organization } from "@/lib/types";

export function OrgHero({ org }: { org: Organization }) {
  const logoUrl = getMediaUrl(org.logo_url);
  const heroImageUrl = getMediaUrl(org.hero_image_url);

  return (
    <div className="relative overflow-hidden bg-purple-950 py-16 text-center text-white sm:py-20">
      {heroImageUrl && (
        <>
          <Image
            src={heroImageUrl}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/80 to-purple-950/50" />
        </>
      )}
      <Container className="relative">
        <div className="flex flex-col items-center gap-4">
          {logoUrl && (
            <div className="w-fit rounded-2xl bg-white p-3 shadow-lg">
              <Image
                src={logoUrl}
                alt={`${org.name} logo`}
                width={140}
                height={140}
                className="size-24 rounded-xl object-cover sm:size-28"
                priority
              />
            </div>
          )}

          <span className="inline-flex items-center rounded-full border border-gold-400/60 px-3 py-1 text-xs font-semibold tracking-wide text-gold-300 uppercase">
            A Ministry of River Church Eldoret
          </span>
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">{org.name}</h1>
          <span className="h-px w-16 bg-gold-400" />
          <p className="max-w-2xl text-purple-100">{org.short_description}</p>

          {org.motto && (
            <p className="font-heading text-lg text-gold-300 italic">&ldquo;{org.motto}&rdquo;</p>
          )}

          {org.theme_scripture_text && (
            <blockquote className="mt-4 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-5 font-heading text-purple-50 italic">
              &ldquo;{org.theme_scripture_text}&rdquo;
              {org.theme_scripture_ref && (
                <footer className="mt-2 text-sm font-sans font-semibold text-gold-300 not-italic">
                  — {org.theme_scripture_ref}
                </footer>
              )}
            </blockquote>
          )}
        </div>
      </Container>
    </div>
  );
}

import Image from "next/image";
import { GraduationCap, MapPin, Sparkles, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/shared/animated-section";
import { getMediaUrl } from "@/lib/supabase/media";
import type { Leader } from "@/lib/types";

export function LeaderProfile({ leader }: { leader: Leader }) {
  const imageUrl = getMediaUrl(leader.photo_url);

  const facts = [
    leader.hometown && { icon: MapPin, label: "Hometown", value: leader.hometown },
    leader.education && { icon: GraduationCap, label: "Education", value: leader.education },
    leader.ordination_info && { icon: Sparkles, label: "Ordination", value: leader.ordination_info },
  ].filter(Boolean) as { icon: typeof MapPin; label: string; value: string }[];

  return (
    <AnimatedSection>
      <div className="gold-line grid gap-8 rounded-3xl border bg-white p-6 sm:p-10 md:grid-cols-[280px_1fr]">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative aspect-[4/5] w-full max-w-64 overflow-hidden rounded-2xl bg-navy-100">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={leader.name}
                fill
                sizes="(min-width: 640px) 256px, 60vw"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <Users className="size-10 text-navy-400" aria-hidden="true" />
              </div>
            )}
          </div>
          <div>
            <p className="font-heading text-lg font-semibold text-navy-950">{leader.name}</p>
            <p className="text-sm font-semibold tracking-wide text-gold-600 uppercase">
              {leader.role_title}
            </p>
          </div>

          {facts.length > 0 && (
            <dl className="w-full space-y-2 rounded-xl bg-navy-50 p-4 text-left">
              {facts.map((fact) => (
                <div key={fact.label} className="flex items-start gap-2 text-sm">
                  <fact.icon className="mt-0.5 size-4 shrink-0 text-gold-600" aria-hidden="true" />
                  <div>
                    <dt className="font-semibold text-navy-900">{fact.label}</dt>
                    <dd className="text-navy-600">{fact.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs font-semibold tracking-wide text-gold-700 uppercase">
              {leader.role_title} Profile
            </p>
            <h3 className="font-heading text-2xl font-semibold text-navy-950">{leader.name}</h3>
          </div>

          <div className="flex flex-col gap-3 text-navy-700">
            {leader.bio.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {leader.quote && (
            <blockquote className="rounded-xl bg-navy-50 p-4 font-heading text-navy-900 italic">
              &ldquo;{leader.quote}&rdquo;
            </blockquote>
          )}

          {leader.attributes.length > 0 && (
            <div>
              <p className="text-xs font-semibold tracking-wide text-gold-700 uppercase">
                Ministry Attributes & Virtues
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {leader.attributes.map((attribute) => (
                  <Badge key={attribute} variant="outline" className="gold-line text-navy-800">
                    {attribute}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}

import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { getMediaUrl } from "@/lib/supabase/media";

/**
 * A photo slot for the organization page. Shows the real photo once an
 * admin uploads one for this section; until then, renders an obvious
 * placeholder (not a broken image) so it's clear where a photo belongs.
 */
export function OrgImageSlot({
  path,
  alt,
  label,
  className = "aspect-[4/3]",
}: {
  path: string | null | undefined;
  alt: string;
  label?: string;
  className?: string;
}) {
  const url = getMediaUrl(path);

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl bg-purple-100 ${className}`}>
      {url ? (
        <Image src={url} alt={alt} fill sizes="(min-width: 768px) 480px, 100vw" className="object-cover" />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
          <ImageIcon className="size-8 text-purple-400" aria-hidden="true" />
          <p className="text-xs font-medium text-purple-500">
            {label ?? "Photo coming soon"}
          </p>
        </div>
      )}
    </div>
  );
}

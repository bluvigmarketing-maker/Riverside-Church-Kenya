const MEDIA_BUCKET = "media";

/**
 * Resolves an image column value to a URL <Image> can use. DB rows store a
 * bare Storage object path (e.g. "leadership/pastor-borness.jpg"); local
 * fallback content (content-fallback.ts) instead points straight at a
 * public/ asset (e.g. "/images/leadership/pastor-borness.jpg"). Both are
 * passed through this so callers don't need to care which source they got.
 */
export function getMediaUrl(path: string | null | undefined): string | null {
  if (!path) return null;
  if (path.startsWith("http") || path.startsWith("/")) return path;

  const baseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!baseUrl) return null;

  return `${baseUrl}/storage/v1/object/public/${MEDIA_BUCKET}/${path}`;
}

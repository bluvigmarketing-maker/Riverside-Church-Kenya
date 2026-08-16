import { revalidatePath } from "next/cache";

const PUBLIC_ROUTES = [
  "/",
  "/about",
  "/about/history",
  "/about/leadership",
  "/programs",
  "/events",
  "/contact",
  "/organizations/women-of-the-living-waters",
];

/** Called after any admin content mutation so edits show up immediately instead of waiting for ISR. */
export function revalidatePublicSite() {
  for (const path of PUBLIC_ROUTES) revalidatePath(path);
}

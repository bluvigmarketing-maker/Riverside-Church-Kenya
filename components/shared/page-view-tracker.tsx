"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

/** Records one row per page view for the dashboard's built-in Analytics page. */
export function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const supabase = createClient();
    supabase
      .from("page_views")
      .insert({ path: pathname })
      .then(() => {});
  }, [pathname]);

  return null;
}

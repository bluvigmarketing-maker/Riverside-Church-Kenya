"use client";

import { useState } from "react";
import type { DailyCount } from "@/lib/admin/analytics";

export function DailyBarChart({ data }: { data: DailyCount[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const max = Math.max(1, ...data.map((d) => d.count));

  return (
    <div className="flex flex-col gap-2">
      <div className="flex h-40 items-end gap-2">
        {data.map((d, i) => {
          const heightPct = Math.max((d.count / max) * 100, d.count > 0 ? 4 : 1.5);
          return (
            <div
              key={d.date}
              className="relative flex h-full flex-1 flex-col items-center justify-end"
            >
              {hovered === i && (
                <div className="absolute -top-8 z-10 whitespace-nowrap rounded-md bg-navy-950 px-2 py-1 text-xs font-medium text-white shadow">
                  {d.count} {d.count === 1 ? "view" : "views"}
                </div>
              )}
              <div
                className="w-full cursor-default rounded-t-md bg-navy-600 transition-colors hover:bg-gold-500"
                style={{ height: `${heightPct}%` }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              />
            </div>
          );
        })}
      </div>
      <div className="flex gap-2">
        {data.map((d) => (
          <div key={d.date} className="flex-1 text-center text-[10px] text-navy-500">
            {new Date(`${d.date}T00:00:00`).toLocaleDateString("en-KE", {
              day: "numeric",
              month: "short",
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

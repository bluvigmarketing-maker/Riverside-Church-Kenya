"use client";

import { useSyncExternalStore } from "react";

// A ticking clock is external, mutable state — useSyncExternalStore is the
// sanctioned way to read that during render (via getSnapshot) and subscribe
// to its changes (via subscribe), without impure calls in the component body
// or setState calls directly in an effect.
function subscribe(callback: () => void) {
  const interval = setInterval(callback, 1000);
  return () => clearInterval(interval);
}

function getSnapshot() {
  return Date.now();
}

function getServerSnapshot() {
  return null;
}

function getTimeParts(targetIso: string, nowMs: number) {
  const diff = Math.max(0, new Date(targetIso).getTime() - nowMs);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: diff <= 0,
  };
}

export function Countdown({ targetIso }: { targetIso: string }) {
  // null on the server / before the first client tick, so the server-
  // rendered markup never disagrees with the client's clock.
  const nowMs = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (nowMs === null) return null;

  const parts = getTimeParts(targetIso, nowMs);

  if (parts.done) {
    return <p className="font-heading text-lg font-semibold text-gold-300">Happening now!</p>;
  }

  const units = [
    { label: "Days", value: parts.days },
    { label: "Hours", value: parts.hours },
    { label: "Minutes", value: parts.minutes },
    { label: "Seconds", value: parts.seconds },
  ];

  return (
    <div className="flex items-center gap-3 sm:gap-5">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <span className="font-heading text-2xl font-bold text-white sm:text-3xl">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="text-[11px] font-medium tracking-wide text-gold-300 uppercase">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}

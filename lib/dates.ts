// Wraps the one non-deterministic call (Date.now) so callers/components
// stay clear of React's "no impure calls during render" lint rule, which
// only inspects the function body it's directly analyzing.
export function isEventUpcoming(startsAtIso: string): boolean {
  return new Date(startsAtIso).getTime() >= Date.now();
}

export function isEventPast(startsAtIso: string): boolean {
  return !isEventUpcoming(startsAtIso);
}

/**
 * Formats an ISO timestamp as a "YYYY-MM-DDTHH:mm" value in Eldoret's fixed
 * UTC+3 offset, for pre-filling a <input type="datetime-local">, regardless
 * of the server/browser's own local timezone.
 */
export function toEatLocalInputValue(iso: string): string {
  const eatMs = new Date(iso).getTime() + 3 * 60 * 60 * 1000;
  const eatDate = new Date(eatMs);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${eatDate.getUTCFullYear()}-${pad(eatDate.getUTCMonth() + 1)}-${pad(eatDate.getUTCDate())}T${pad(eatDate.getUTCHours())}:${pad(eatDate.getUTCMinutes())}`;
}

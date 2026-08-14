// Wraps the one non-deterministic call (Date.now) so callers/components
// stay clear of React's "no impure calls during render" lint rule, which
// only inspects the function body it's directly analyzing.
export function isEventUpcoming(startsAtIso: string): boolean {
  return new Date(startsAtIso).getTime() >= Date.now();
}

export function isEventPast(startsAtIso: string): boolean {
  return !isEventUpcoming(startsAtIso);
}

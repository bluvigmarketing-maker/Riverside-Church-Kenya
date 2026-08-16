import {
  Flame,
  Users,
  HeartHandshake,
  Sparkles,
  Landmark,
  Megaphone,
  KeyRound,
  HeartPulse,
  Baby,
  Trash2,
  TreePine,
  UtensilsCrossed,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

const KEYWORD_ICONS: [RegExp, LucideIcon][] = [
  [/spiritual growth/i, Flame],
  [/leadership/i, Users],
  [/famil/i, HeartHandshake],
  [/welfare/i, HeartHandshake],
  [/talent|gift/i, Sparkles],
  [/economic/i, Landmark],
  [/evangelism|crusade/i, Megaphone],
  [/prison/i, KeyRound],
  [/hospital/i, HeartPulse],
  [/child/i, Baby],
  [/clean-up/i, Trash2],
  [/tree|environment/i, TreePine],
  [/feeding/i, UtensilsCrossed],
  [/skills training/i, GraduationCap],
];

/** Matches a section heading to a representative icon; falls back to Sparkles. */
export function getOrgSectionIcon(heading: string): LucideIcon {
  const match = KEYWORD_ICONS.find(([pattern]) => pattern.test(heading));
  return match ? match[1] : Sparkles;
}

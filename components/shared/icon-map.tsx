import {
  Flame,
  Music,
  HeartPulse,
  Unlock,
  Users,
  Sparkles,
  Church,
  BookOpen,
  HandHeart,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  flame: Flame,
  music: Music,
  "heart-pulse": HeartPulse,
  unlock: Unlock,
  users: Users,
  sparkles: Sparkles,
  church: Church,
  "book-open": BookOpen,
  "hand-heart": HandHeart,
};

export function getIcon(name: string | null | undefined): LucideIcon {
  return (name && ICONS[name]) || Sparkles;
}

export const ICON_KEYS = Object.keys(ICONS);

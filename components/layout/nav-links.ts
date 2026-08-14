export type NavLink = { label: string; href: string };

export const NAV_LINKS: { label: string; href?: string; children?: NavLink[] }[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "History", href: "/about/history" },
      { label: "Leadership", href: "/about/leadership" },
    ],
  },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

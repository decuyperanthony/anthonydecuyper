import { ROUTES } from "@/lib/routes";

export const navItems = [
  { href: ROUTES.home, key: "home" },
  { href: ROUTES.cv, key: "cv" },
  { href: ROUTES.projects, key: "projects" },
  { href: ROUTES.contact, key: "contact" },
] as const;

export type NavKey = (typeof navItems)[number]["key"];

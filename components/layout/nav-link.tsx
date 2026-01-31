"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useI18n } from "@/lib/i18n";
import { isNavLinkActive } from "@/lib/navigation";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

import { type NavKey } from "./nav-items";

type NavLinkProps = {
  href: string;
  navKey: NavKey;
  mobile?: boolean;
  onClick?: () => void;
};

export const NavLink = ({ href, navKey, mobile, onClick }: NavLinkProps) => {
  const { t } = useI18n();
  const pathname = usePathname();

  const isActive = isNavLinkActive(href, pathname, ROUTES.home);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "rounded-md px-3 py-2 font-medium transition-colors",
        mobile ? "text-base" : "text-sm",
        isActive
          ? "bg-accent text-accent-foreground"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      )}
    >
      {t.nav[navKey]}
    </Link>
  );
};

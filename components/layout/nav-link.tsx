"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";

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
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  const isActive = isNavLinkActive(href, pathname, ROUTES.home);

  // Mobile nav keeps the existing bg-accent style, no underline needed
  if (mobile) {
    return (
      <Link
        href={href}
        onClick={onClick}
        aria-current={isActive ? "page" : undefined}
        className={cn(
          "rounded-md px-3 py-2 text-base font-medium transition-colors",
          isActive
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        )}
      >
        {t.nav[navKey]}
      </Link>
    );
  }

  // Desktop: animated underline on hover, no bg-accent highlight
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {t.nav[navKey]}

      {/* Animated underline — scaleX from left on hover, stays when active */}
      {!prefersReducedMotion && (
        <motion.span
          aria-hidden="true"
          className="absolute inset-x-3 bottom-1 h-px origin-left bg-foreground"
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: isActive || isHovered ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      )}

      {/* Reduced-motion fallback: static underline when active */}
      {prefersReducedMotion && isActive && (
        <span
          aria-hidden="true"
          className="absolute inset-x-3 bottom-1 h-px bg-foreground"
        />
      )}
    </Link>
  );
};

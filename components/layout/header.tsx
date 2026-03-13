"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";

import { LangToggle } from "@/components/lang-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

import { MobileNav } from "./mobile-nav";
import { navItems } from "./nav-items";
import { NavLink } from "./nav-link";
import { PageContainer } from "./page-container";

export const Header = () => {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <motion.header
        className={cn(
          "sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm",
          !prefersReducedMotion && scrolled && "border-border/60 bg-background/90 backdrop-blur-md shadow-sm shadow-black/5"
        )}
        style={
          prefersReducedMotion
            ? undefined
            : {
                transition: "background-color 200ms ease, box-shadow 200ms ease, border-color 200ms ease",
              }
        }
      >
        <PageContainer>
          <div className="flex h-14 items-center justify-between">
            <Link
              href={ROUTES.home}
              className="font-semibold tracking-tight text-foreground transition-colors hover:text-foreground/80"
            >
              <span className="sm:hidden">AC</span>
              <span className="hidden sm:inline">{t.meta.name}</span>
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href} navKey={item.key} />
              ))}
            </nav>

            {/* Desktop toggles */}
            <div className="hidden items-center gap-1 md:flex">
              <LangToggle />
              <ThemeToggle />
            </div>

            {/* Mobile */}
            <div className="flex items-center gap-1 md:hidden">
              <LangToggle />
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
                aria-expanded={isOpen}
                aria-controls="mobile-nav"
              >
                <Menu className="size-5" aria-hidden="true" />
              </Button>
            </div>

            <MobileNav open={isOpen} onOpenChange={setIsOpen} />
          </div>
        </PageContainer>
      </motion.header>
    </>
  );
};

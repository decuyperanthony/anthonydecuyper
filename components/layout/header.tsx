"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import { LangToggle } from "@/components/lang-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { ROUTES } from "@/lib/routes";

import { MobileNav } from "./mobile-nav";
import { navItems } from "./nav-items";
import { NavLink } from "./nav-link";
import { PageContainer } from "./page-container";

export const Header = () => {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
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
          <nav className="hidden items-center gap-1 md:flex">
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
            >
              <Menu className="size-5" />
            </Button>
          </div>

          <MobileNav open={isOpen} onOpenChange={setIsOpen} />
        </div>
      </PageContainer>
    </header>
  );
};

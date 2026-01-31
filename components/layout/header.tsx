"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import { LangToggle } from "@/components/lang-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useI18n } from "@/lib/i18n";
import { ROUTES } from "@/lib/routes";

import { NavLink } from "./nav-link";
import { PageContainer } from "./page-container";

const navItems = [
  { href: ROUTES.home, key: "home" },
  { href: ROUTES.cv, key: "cv" },
  { href: ROUTES.projects, key: "projects" },
  { href: ROUTES.contact, key: "contact" },
] as const;

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

          {/* Mobile menu button */}
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

          {/* Mobile sheet */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>{t.meta.name}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 px-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    navKey={item.key}
                    mobile
                    onClick={() => setIsOpen(false)}
                  />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </PageContainer>
    </header>
  );
};

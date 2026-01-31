"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
import { cn } from "@/lib/utils";

import { PageContainer } from "./page-container";

const navItems = [
  { href: ROUTES.home, key: "home" },
  { href: ROUTES.cv, key: "cv" },
  { href: ROUTES.projects, key: "projects" },
  { href: ROUTES.contact, key: "contact" },
] as const;

export const Header = () => {
  const { t } = useI18n();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const getIsActive = (href: string) =>
    href === ROUTES.home ? pathname === ROUTES.home : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <PageContainer>
        <div className="flex h-14 items-center justify-between">
          <Link
            href={ROUTES.home}
            className="font-semibold tracking-tight text-foreground transition-colors hover:text-foreground/80"
          >
            <span className="sm:hidden">ADC</span>
            <span className="hidden sm:inline">{t.meta.name}</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  getIsActive(item.href)
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {t.nav[item.key]}
              </Link>
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
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "rounded-md px-3 py-2 text-base font-medium transition-colors",
                      getIsActive(item.href)
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    {t.nav[item.key]}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </PageContainer>
    </header>
  );
};

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LangToggle } from "@/components/lang-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import { PageContainer } from "./page-container";

const navItems = [
  { href: "/", key: "home" },
  { href: "/cv", key: "cv" },
  { href: "/projects", key: "projects" },
  { href: "/contact", key: "contact" },
] as const;

export const Header = () => {
  const { t } = useI18n();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <PageContainer>
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="font-semibold tracking-tight text-foreground transition-colors hover:text-foreground/80"
          >
            {t.meta.name}
          </Link>

          <nav className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  {t.nav[item.key]}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1">
            <LangToggle />
            <ThemeToggle />
          </div>
        </div>
      </PageContainer>
    </header>
  );
};

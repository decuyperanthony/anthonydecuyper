"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useI18n } from "@/lib/i18n";

import { navItems } from "./nav-items";
import { NavLink } from "./nav-link";

type MobileNavProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const MobileNav = ({ open, onOpenChange }: MobileNavProps) => {
  const { t } = useI18n();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
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
              onClick={() => onOpenChange(false)}
            />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

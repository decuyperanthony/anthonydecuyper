"use client";

import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export const LangToggle = () => {
  const { locale, setLocale } = useI18n();

  const toggleLocale = () => {
    setLocale(locale === "en" ? "fr" : "en");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      aria-label="Toggle language"
      className="font-medium"
    >
      {locale === "en" ? "FR" : "EN"}
    </Button>
  );
};

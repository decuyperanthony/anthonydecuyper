"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

const CV_FILES = {
  en: "/cv/cv-anthony-de-cuyper.pdf",
  fr: "/cv/cv-anthony-de-cuyper-fr.pdf",
} as const;

export const CVDownload = () => {
  const { locale, t } = useI18n();

  return (
    <Button asChild>
      <a href={CV_FILES[locale]} download>
        <Download className="size-4" />
        {t.cv.download}
      </a>
    </Button>
  );
};

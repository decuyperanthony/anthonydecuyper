"use client";

import { Typography } from "@/components/ui/typography";
import { useI18n } from "@/lib/i18n";

export const CVHeader = () => {
  const { t } = useI18n();

  return (
    <>
      <div className="print:hidden">
        <div className="py-12">
          <Typography variant="h2" as="h1" className="sm:text-4xl">
            {t.cv.title}
          </Typography>
        </div>
      </div>
      <div className="hidden print:block">
        <div className="py-8 text-center">
          <Typography variant="h2" as="h1">
            {t.meta.name}
          </Typography>
          <Typography variant="body">
            {t.meta.role}
          </Typography>
        </div>
      </div>
    </>
  );
};

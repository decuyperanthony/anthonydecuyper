"use client";

import { useI18n } from "@/lib/i18n";

export const CVHeader = () => {
  const { t } = useI18n();

  return (
    <>
      <div className="print:hidden">
        <div className="py-12">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.cv.title}
          </h1>
        </div>
      </div>
      <div className="hidden print:block">
        <div className="py-8 text-center">
          <h1 className="text-3xl font-bold text-foreground">{t.meta.name}</h1>
          <p className="text-muted-foreground">{t.meta.role}</p>
        </div>
      </div>
    </>
  );
};

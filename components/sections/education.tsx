"use client";

import { Typography } from "@/components/ui/typography";
import { education, languages } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

export const Education = () => {
  const { locale, t } = useI18n();

  return (
    <section className="space-y-8 py-10 sm:space-y-12 sm:py-16">
      <div className="space-y-6 sm:space-y-8">
        <Typography variant="h3" as="h2">
          {t.cv.education}
        </Typography>
        <div className="space-y-6">
          {education.map((item, index) => (
            <div key={index} className="space-y-1">
              <Typography variant="body-large" as="h3" className="font-semibold">
                {item.institution}
              </Typography>
              <Typography variant="body">
                {item.degree[locale]}
              </Typography>
              <Typography variant="muted">
                {item.period.start} &mdash; {item.period.end}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <Typography variant="h3" as="h2">
          {t.cv.languages}
        </Typography>
        <div className="space-y-2">
          {languages.map((lang, index) => (
            <div key={index} className="flex items-center gap-2">
              <Typography variant="body" as="span" className="font-medium">
                {lang.name[locale]}
              </Typography>
              <Typography variant="muted" as="span">&mdash;</Typography>
              <Typography variant="muted" as="span">
                {lang.level[locale]}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

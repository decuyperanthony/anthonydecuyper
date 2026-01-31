"use client";

import { education, languages } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

export const Education = () => {
  const { locale, t } = useI18n();

  return (
    <section className="space-y-12 py-16">
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          {t.cv.education}
        </h2>
        <div className="space-y-6">
          {education.map((item, index) => (
            <div key={index} className="space-y-1">
              <h3 className="font-semibold text-foreground">{item.institution}</h3>
              <p className="text-muted-foreground">{item.degree[locale]}</p>
              <p className="text-sm text-muted-foreground">
                {item.period.start} &mdash; {item.period.end}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          {t.cv.languages}
        </h2>
        <div className="space-y-2">
          {languages.map((lang, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="font-medium text-foreground">
                {lang.name[locale]}
              </span>
              <span className="text-muted-foreground">&mdash;</span>
              <span className="text-muted-foreground">{lang.level[locale]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

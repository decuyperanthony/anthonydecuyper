"use client";

import { Badge } from "@/components/ui/badge";
import { experience } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

export const Experience = () => {
  const { locale, t } = useI18n();

  return (
    <section className="space-y-8 py-16">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        {t.experience.title}
      </h2>
      <div className="space-y-8">
        {experience.map((item, index) => (
          <div
            key={index}
            className="relative border-l-2 border-border pl-6 pb-8 last:pb-0"
          >
            <div className="absolute -left-[9px] top-0 size-4 rounded-full border-2 border-border bg-background" />
            <div className="space-y-2">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-semibold text-foreground">{item.company}</h3>
                <span className="text-sm text-muted-foreground">
                  {item.period.start} &mdash;{" "}
                  {item.period.end ?? t.experience.present}
                </span>
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                {item.role[locale]}
              </p>
              <p className="text-muted-foreground">{item.description[locale]}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {item.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

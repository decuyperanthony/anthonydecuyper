"use client";

import { useI18n } from "@/lib/i18n";

export const About = () => {
  const { t } = useI18n();

  return (
    <section className="space-y-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        {t.about.title}
      </h2>
      <p className="max-w-3xl leading-relaxed text-muted-foreground">
        {t.about.bio}
      </p>
    </section>
  );
};

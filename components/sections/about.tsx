"use client";

import { Typography } from "@/components/ui/typography";
import { useI18n } from "@/lib/i18n";

export const About = () => {
  const { t } = useI18n();

  return (
    <section className="space-y-4 py-10 sm:space-y-6 sm:py-16">
      <Typography variant="h3" as="h2">
        {t.about.title}
      </Typography>
      <Typography variant="body-large" className="max-w-3xl leading-relaxed">
        {t.about.bio}
      </Typography>
    </section>
  );
};

"use client";

import { Typography } from "@/components/ui/typography";
import { useI18n } from "@/lib/i18n";

type PageTitleProps = {
  titleKey: "cv" | "projects" | "contact";
  descriptionKey?: "cv" | "projects" | "contact";
};

export const PageTitle = ({ titleKey, descriptionKey }: PageTitleProps) => {
  const { t } = useI18n();

  const titleMap = {
    cv: t.cv.title,
    projects: t.projects.title,
    contact: t.contact.title,
  };

  const descriptionMap = {
    cv: null,
    projects: t.projects.description,
    contact: t.contact.description,
  };

  return (
    <div className="space-y-4 py-12">
      <Typography variant="h2" as="h1" className="sm:text-4xl">
        {titleMap[titleKey]}
      </Typography>
      {descriptionKey && descriptionMap[descriptionKey] && (
        <Typography variant="body-large" className="max-w-2xl">
          {descriptionMap[descriptionKey]}
        </Typography>
      )}
    </div>
  );
};

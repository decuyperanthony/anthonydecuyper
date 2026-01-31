"use client";

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
    <div className="py-12">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {titleMap[titleKey]}
      </h1>
      {descriptionKey && descriptionMap[descriptionKey] && (
        <p className="max-w-2xl text-muted-foreground">
          {descriptionMap[descriptionKey]}
        </p>
      )}
    </div>
  );
};

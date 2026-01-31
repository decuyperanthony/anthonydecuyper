"use client";

import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { skills } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

export const Skills = () => {
  const { t } = useI18n();

  const categories = [
    { key: "frontend" as const, skills: skills.frontend },
    { key: "backend" as const, skills: skills.backend },
    { key: "tools" as const, skills: skills.tools },
    { key: "practices" as const, skills: skills.practices },
  ];

  return (
    <section className="space-y-8 py-16">
      <Typography variant="h3" as="h2">
        {t.skills.title}
      </Typography>
      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category.key} className="space-y-3">
            <Typography variant="muted" as="h3" className="font-medium">
              {t.skills.categories[category.key]}
            </Typography>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

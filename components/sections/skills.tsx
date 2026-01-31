"use client";

import { Badge } from "@/components/ui/badge";
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
    <section className="py-16">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">
        {t.skills.title}
      </h2>
      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category.key}>
            <h3 className="mb-3 text-sm font-medium text-muted-foreground">
              {t.skills.categories[category.key]}
            </h3>
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

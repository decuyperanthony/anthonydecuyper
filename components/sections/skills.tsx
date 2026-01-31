"use client";

import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { skills } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";
import { StaggerContainer, StaggerItem, motion } from "@/components/motion";

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
      <StaggerContainer className="space-y-6" staggerDelay={0.15}>
        {categories.map((category) => (
          <StaggerItem key={category.key} className="space-y-3">
            <Typography variant="muted" as="h3" className="font-medium">
              {t.skills.categories[category.key]}
            </Typography>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.03,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge variant="secondary">{skill}</Badge>
                </motion.div>
              ))}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
};

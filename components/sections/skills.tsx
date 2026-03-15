"use client";

import { motion, useReducedMotion } from "motion/react";

import { ScrollReveal } from "@/components/animations";
import { fadeInUp, scaleIn, staggerContainer } from "@/components/animations/variants";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { skills } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

const badgeContainer = staggerContainer(0.04, 0);

export const Skills = () => {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();

  const categories = [
    { key: "frontend" as const, skills: skills.frontend },
    { key: "backend" as const, skills: skills.backend },
    { key: "tools" as const, skills: skills.tools },
    { key: "practices" as const, skills: skills.practices },
  ];

  if (prefersReducedMotion) {
    return (
      <section className="space-y-6 py-10 sm:space-y-8 sm:py-16">
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
  }

  return (
    <section className="space-y-6 py-10 sm:space-y-8 sm:py-16">
      <ScrollReveal>
        <Typography variant="h3" as="h2">
          {t.skills.title}
        </Typography>
      </ScrollReveal>

      <motion.div
        className="space-y-6"
        variants={staggerContainer(0.1, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {categories.map((category) => (
          <motion.div key={category.key} className="space-y-3" variants={fadeInUp}>
            <Typography variant="muted" as="h3" className="font-medium">
              {t.skills.categories[category.key]}
            </Typography>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={badgeContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {category.skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.08,
                    y: -2,
                    filter: "drop-shadow(0 4px 8px oklch(0.5 0.1 264 / 0.25))",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 20,
                  }}
                >
                  <Badge variant="secondary">{skill}</Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

"use client";

import { motion, useReducedMotion } from "motion/react";

import { ScrollReveal } from "@/components/animations";
import { fadeInUp, slideInLeft, staggerContainer } from "@/components/animations/variants";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { experience } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

const listContainer = staggerContainer(0.12, 0.08);

export const Experience = () => {
  const { locale, t } = useI18n();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <section className="space-y-6 sm:space-y-8">
        <Typography variant="h3" as="h2">
          {t.experience.title}
        </Typography>
        <ul className="space-y-8">
          {experience.map((item, index) => (
            <li
              key={index}
              className="relative border-l-2 border-border pl-6 pb-8 last:pb-0"
            >
              <div className="absolute -left-[9px] top-0 size-4 rounded-full border-2 border-border bg-background" />
              <div className="space-y-2">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <Typography variant="body-large" as="h3" className="font-semibold">
                    {item.company}
                  </Typography>
                  <Typography variant="muted" as="span">
                    {item.period.start} &mdash;{" "}
                    {item.period.end ?? t.experience.present}
                  </Typography>
                </div>
                <Typography variant="muted" className="font-medium">
                  {item.role[locale]}
                </Typography>
                <Typography variant="body">{item.description[locale]}</Typography>
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section className="space-y-6 sm:space-y-8">
      <ScrollReveal>
        <Typography variant="h3" as="h2">
          {t.experience.title}
        </Typography>
      </ScrollReveal>

      <motion.ul
        className="space-y-8"
        variants={listContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        {experience.map((item, index) => (
          <motion.li
            key={index}
            className="relative border-l-2 border-border pl-6 pb-8 last:pb-0"
            variants={slideInLeft}
          >
            <div className="absolute -left-[9px] top-0 size-4 rounded-full border-2 border-border bg-background" />
            <div className="space-y-2">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <Typography variant="body-large" as="h3" className="font-semibold">
                  {item.company}
                </Typography>
                <Typography variant="muted" as="span">
                  {item.period.start} &mdash;{" "}
                  {item.period.end ?? t.experience.present}
                </Typography>
              </div>
              <Typography variant="muted" className="font-medium">
                {item.role[locale]}
              </Typography>
              <Typography variant="body">{item.description[locale]}</Typography>
              <motion.div
                className="flex flex-wrap gap-2 pt-2"
                variants={staggerContainer(0.03, 0.1)}
              >
                {item.technologies.map((tech) => (
                  <motion.div key={tech} variants={fadeInUp}>
                    <Badge variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

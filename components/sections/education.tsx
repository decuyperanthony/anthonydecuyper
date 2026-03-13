"use client";

import { motion, useReducedMotion } from "motion/react";

import { ScrollReveal } from "@/components/animations";
import { fadeInUp, staggerContainer } from "@/components/animations/variants";
import { Typography } from "@/components/ui/typography";
import { education, languages } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

const listContainer = staggerContainer(0.1, 0.05);

export const Education = () => {
  const { locale, t } = useI18n();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <section className="space-y-8 py-10 sm:space-y-12 sm:py-16">
        <div className="space-y-6 sm:space-y-8">
          <Typography variant="h3" as="h2">
            {t.cv.education}
          </Typography>
          <ul className="space-y-6">
            {education.map((item, index) => (
              <li key={index} className="space-y-1">
                <Typography variant="body-large" as="h3" className="font-semibold">
                  {item.institution}
                </Typography>
                <Typography variant="body">{item.degree[locale]}</Typography>
                <Typography variant="muted">
                  {item.period.start} &mdash; {item.period.end}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <Typography variant="h3" as="h2">
            {t.cv.languages}
          </Typography>
          <ul className="space-y-2">
            {languages.map((lang, index) => (
              <li key={index} className="flex items-center gap-2">
                <Typography variant="body" as="span" className="font-medium">
                  {lang.name[locale]}
                </Typography>
                <Typography variant="muted" as="span">&mdash;</Typography>
                <Typography variant="muted" as="span">
                  {lang.level[locale]}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-8 py-10 sm:space-y-12 sm:py-16">
      <div className="space-y-6 sm:space-y-8">
        <ScrollReveal>
          <Typography variant="h3" as="h2">
            {t.cv.education}
          </Typography>
        </ScrollReveal>

        <motion.ul
          className="space-y-6"
          variants={listContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {education.map((item, index) => (
            <motion.li key={index} className="space-y-1" variants={fadeInUp}>
              <Typography variant="body-large" as="h3" className="font-semibold">
                {item.institution}
              </Typography>
              <Typography variant="body">{item.degree[locale]}</Typography>
              <Typography variant="muted">
                {item.period.start} &mdash; {item.period.end}
              </Typography>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div className="space-y-6">
        <ScrollReveal>
          <Typography variant="h3" as="h2">
            {t.cv.languages}
          </Typography>
        </ScrollReveal>

        <motion.ul
          className="space-y-2"
          variants={listContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {languages.map((lang, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-2"
              variants={fadeInUp}
            >
              <Typography variant="body" as="span" className="font-medium">
                {lang.name[locale]}
              </Typography>
              <Typography variant="muted" as="span">&mdash;</Typography>
              <Typography variant="muted" as="span">
                {lang.level[locale]}
              </Typography>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

"use client";

import { motion, useReducedMotion } from "motion/react";

import { ScrollReveal } from "@/components/animations";
import { Typography } from "@/components/ui/typography";
import { useI18n } from "@/lib/i18n";
import { fadeInUp } from "@/components/animations/variants";

export const About = () => {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <section className="space-y-4 py-8 sm:space-y-6 sm:py-12">
        <Typography variant="h3" as="h2">
          {t.about.title}
        </Typography>
        <Typography variant="body-large" className="max-w-3xl leading-relaxed">
          {t.about.bio}
        </Typography>
      </section>
    );
  }

  return (
    <section className="space-y-4 py-8 sm:space-y-6 sm:py-12">
      <ScrollReveal>
        <Typography variant="h3" as="h2">
          {t.about.title}
        </Typography>
      </ScrollReveal>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Typography variant="body-large" className="max-w-3xl leading-relaxed">
          {t.about.bio}
        </Typography>
      </motion.div>
    </section>
  );
};

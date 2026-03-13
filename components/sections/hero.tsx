"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useI18n } from "@/lib/i18n";
import { ROUTES } from "@/lib/routes";

const heroVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const lineVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 28,
    },
  },
};

export const Hero = () => {
  const { t } = useI18n();

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <motion.div
        className="space-y-6"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={lineVariant}>
          <Typography variant="muted">{t.hero.greeting}</Typography>
        </motion.div>

        <motion.div variants={lineVariant}>
          <Typography
            variant="h1"
            as="h1"
            className="sm:text-5xl lg:text-6xl"
          >
            {t.meta.name}
          </Typography>
        </motion.div>

        <motion.div variants={lineVariant}>
          <Typography variant="lead" className="sm:text-2xl">
            {t.meta.role} &mdash; {t.meta.tagline}
          </Typography>
        </motion.div>

        <motion.div variants={lineVariant}>
          <Typography variant="body-large" className="max-w-2xl">
            {t.hero.description}
          </Typography>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 pt-4"
          variants={lineVariant}
        >
          <Button asChild>
            <Link href={ROUTES.cv}>
              {t.hero.cta}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={ROUTES.contact}>
              <Mail className="size-4" aria-hidden="true" />
              {t.hero.contact}
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

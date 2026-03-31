"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { MagneticButton } from "@/components/animations/magnetic-button";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useI18n } from "@/lib/i18n";
import { ROUTES } from "@/lib/routes";
import { staggerContainer, wordReveal } from "@/components/animations/variants";

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

// Stagger the words of the name with a tighter 60ms gap
const nameContainer = staggerContainer(0.06, 0.15);

export const Hero = () => {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const hasMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  // Split the name into words for the staggered reveal
  const nameWords = t.meta.name.split(" ");

  // SSR: render visible content immediately (no initial="hidden")
  // Client: animate in after hydration
  const shouldAnimate = hasMounted && !prefersReducedMotion;

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <motion.div
        className="space-y-6"
        variants={heroVariants}
        initial={shouldAnimate ? "hidden" : false}
        animate="visible"
      >
        <motion.div variants={shouldAnimate ? lineVariant : undefined}>
          <Typography variant="muted">{t.hero.greeting}</Typography>
        </motion.div>

        {/* Cinematic name reveal — each word wipes up from a clipping mask */}
        <motion.div variants={shouldAnimate ? lineVariant : undefined}>
          {prefersReducedMotion || !shouldAnimate ? (
            <Typography variant="h1" as="h1" className="sm:text-5xl lg:text-6xl">
              {t.meta.name}
            </Typography>
          ) : (
            <h1
              className="scroll-m-20 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
              aria-label={t.meta.name}
            >
              <motion.span
                className="flex flex-wrap gap-x-[0.3em]"
                variants={nameContainer}
                initial="hidden"
                animate="visible"
                aria-hidden="true"
              >
                {nameWords.map((word, i) => (
                  // Overflow hidden clips the rising word
                  <span key={i} className="overflow-hidden pb-1">
                    <motion.span
                      className="inline-block"
                      variants={wordReveal}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </motion.span>
            </h1>
          )}
        </motion.div>

        <motion.div variants={shouldAnimate ? lineVariant : undefined}>
          <Typography variant="lead" className="sm:text-2xl">
            {t.meta.role} &mdash; {t.meta.tagline}
          </Typography>
        </motion.div>

        <motion.div variants={shouldAnimate ? lineVariant : undefined}>
          <Typography variant="body-large" className="max-w-2xl">
            {t.hero.description}
          </Typography>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 pt-4"
          variants={shouldAnimate ? lineVariant : undefined}
        >
          <MagneticButton>
            <Button asChild>
              <Link href={ROUTES.cv}>
                {t.hero.cta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button variant="outline" asChild>
              <Link href={ROUTES.contact}>
                <Mail className="size-4" aria-hidden="true" />
                {t.hero.contact}
              </Link>
            </Button>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

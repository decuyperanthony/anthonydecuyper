"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useI18n } from "@/lib/i18n";
import { ROUTES } from "@/lib/routes";
import {
  StaggerContainer,
  StaggerItem,
  motion,
} from "@/components/motion";

export const Hero = () => {
  const { t } = useI18n();

  return (
    <section className="py-20 sm:py-32">
      <StaggerContainer className="space-y-6" staggerDelay={0.15}>
        <StaggerItem>
          <Typography variant="muted">{t.hero.greeting}</Typography>
        </StaggerItem>

        <StaggerItem>
          <Typography
            variant="h1"
            as="h1"
            className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text sm:text-5xl lg:text-6xl"
          >
            {t.meta.name}
          </Typography>
        </StaggerItem>

        <StaggerItem>
          <Typography variant="lead" className="sm:text-2xl">
            {t.meta.role} &mdash; {t.meta.tagline}
          </Typography>
        </StaggerItem>

        <StaggerItem>
          <Typography variant="body-large" className="max-w-2xl">
            {t.hero.description}
          </Typography>
        </StaggerItem>

        <StaggerItem className="flex flex-wrap gap-4 pt-4">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button asChild>
              <Link href={ROUTES.cv}>
                {t.hero.cta}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button variant="outline" asChild>
              <Link href={ROUTES.contact}>
                <Mail className="size-4" />
                {t.hero.contact}
              </Link>
            </Button>
          </motion.div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
};

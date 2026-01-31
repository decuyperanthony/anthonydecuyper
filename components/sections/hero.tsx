"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useI18n } from "@/lib/i18n";
import { ROUTES } from "@/lib/routes";

export const Hero = () => {
  const { t } = useI18n();

  return (
    <section className="py-20 sm:py-32">
      <div className="space-y-6">
        <Typography
          variant="muted"
          className="animate-fade-in opacity-0"
        >
          {t.hero.greeting}
        </Typography>
        <Typography
          variant="h1"
          as="h1"
          className="animate-fade-in-up opacity-0 animation-delay-100 sm:text-5xl lg:text-6xl"
        >
          {t.meta.name}
        </Typography>
        <Typography
          variant="lead"
          className="animate-fade-in-up opacity-0 animation-delay-200 sm:text-2xl"
        >
          {t.meta.role} &mdash; {t.meta.tagline}
        </Typography>
        <Typography
          variant="body-large"
          className="animate-fade-in-up max-w-2xl opacity-0 animation-delay-300"
        >
          {t.hero.description}
        </Typography>
        <div className="animate-fade-in-up flex flex-wrap gap-4 pt-4 opacity-0 animation-delay-400">
          <Button asChild>
            <Link href={ROUTES.cv}>
              {t.hero.cta}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={ROUTES.contact}>
              <Mail className="size-4" />
              {t.hero.contact}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

"use client";

import { ExternalLink, Github, Lock, ShieldOff } from "lucide-react";

import { Badge, type BadgeVariant } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { motion } from "@/components/motion";
import type { Project, ProjectCategory } from "@/lib/constants";

type ProjectCardProps = Project;

const categoryToVariant: Record<ProjectCategory, BadgeVariant> = {
  platform: "platform",
  "advisor-tools": "tools",
  mobile: "mobile",
  partner: "partner",
  volunteer: "volunteer",
  personal: "personal",
};

export const ProjectCard = ({
  title,
  oneLiner,
  category,
  role,
  timeframe,
  stack,
  highlights,
  access,
  accessNote,
  links,
}: ProjectCardProps) => {
  const { locale, t } = useI18n();

  const categoryLabel = t.projects.categories[category];

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Card className="flex h-full flex-col transition-shadow duration-300 hover:shadow-lg dark:hover:shadow-primary/5">
        <CardHeader className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <Badge variant={categoryToVariant[category]}>{categoryLabel}</Badge>
            <span className="text-xs text-muted-foreground">{timeframe}</span>
          </div>
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">{role[locale]}</p>
          </div>
          <CardDescription>{oneLiner[locale]}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-4">
          {/* Highlights */}
          <ul className="space-y-2 text-sm text-muted-foreground">
            {highlights[locale].map((highlight, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-primary">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5">
            {stack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="transition-colors hover:bg-primary/10"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Access note & Links */}
          <div className="mt-auto flex flex-col gap-2">
            {access !== "public" && accessNote && (
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                {access === "restricted" ? (
                  <Lock className="size-3" />
                ) : (
                  <ShieldOff className="size-3" />
                )}
                <span>{accessNote[locale]}</span>
              </div>
            )}
            {(links.live ?? links.repo) && (
              <div className="flex gap-2">
                {links.live && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="size-4" />
                        {t.projects.viewProject}
                      </a>
                    </Button>
                  </motion.div>
                )}
                {links.repo && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="size-4" />
                        {t.projects.viewCode}
                      </a>
                    </Button>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

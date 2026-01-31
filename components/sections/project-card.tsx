"use client";

import { ExternalLink, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

type ProjectCardProps = {
  title: string;
  description: { en: string; fr: string };
  technologies: string[];
  url: string | null;
  codeUrl?: string | null;
};

export const ProjectCard = ({
  title,
  description,
  technologies,
  url,
  codeUrl,
}: ProjectCardProps) => {
  const { locale, t } = useI18n();

  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description[locale]}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        {(url ?? codeUrl) && (
          <div className="flex gap-2">
            {url && (
              <Button variant="outline" size="sm" asChild>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="size-4" />
                  {t.projects.viewProject}
                </a>
              </Button>
            )}
            {codeUrl && (
              <Button variant="ghost" size="sm" asChild>
                <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="size-4" />
                  {t.projects.viewCode}
                </a>
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink, Github, Lock, ShieldOff } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import type { Project, ProjectCategory } from "@/lib/constants";
import { cn } from "@/lib/utils";

type ProjectShowcaseProps = Project;

const categoryColors: Record<ProjectCategory, string> = {
  platform: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  "advisor-tools": "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  mobile: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  partner: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  volunteer: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20",
  personal: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
};

const categoryGlow: Record<ProjectCategory, string> = {
  platform: "from-blue-500/50 via-blue-400/30",
  "advisor-tools": "from-purple-500/50 via-purple-400/30",
  mobile: "from-green-500/50 via-green-400/30",
  partner: "from-orange-500/50 via-orange-400/30",
  volunteer: "from-pink-500/50 via-pink-400/30",
  personal: "from-cyan-500/50 via-cyan-400/30",
};

export const ProjectShowcase = ({
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
  images,
}: ProjectShowcaseProps) => {
  const { locale, t } = useI18n();
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categoryLabel = t.projects.categories[category];
  const hasImages = images && images.length > 0;
  const hasMultipleImages = images && images.length > 1;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const nextImage = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (!images) return;
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images]);

  const prevImage = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (!images) return;
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group relative h-full"
    >
      {/* Animated border glow */}
      <div
        className={cn(
          "absolute -inset-px rounded-2xl bg-gradient-to-r to-transparent opacity-0 blur-sm transition-opacity duration-500",
          categoryGlow[category],
          isHovering && "opacity-100"
        )}
      />

      {/* Card container */}
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/80 backdrop-blur-xl transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-black/10">
        {/* Spotlight effect */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: isHovering
              ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
              : "none",
          }}
        />

        {/* Image section */}
        {hasImages ? (
          <div className="relative aspect-video w-full overflow-hidden bg-black/20">
            {/* Image */}
            <Image
              src={images[currentImageIndex]}
              alt={`${title} screenshot ${currentImageIndex + 1}`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />

            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />

            {/* Navigation arrows */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white/80 opacity-0 backdrop-blur-sm transition-all hover:bg-black/70 hover:text-white group-hover:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white/80 opacity-0 backdrop-blur-sm transition-all hover:bg-black/70 hover:text-white group-hover:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRight className="size-4" />
                </button>
              </>
            )}

            {/* Dots indicator */}
            {hasMultipleImages && (
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    className={cn(
                      "size-1.5 rounded-full transition-all",
                      idx === currentImageIndex
                        ? "w-4 bg-white"
                        : "bg-white/40 hover:bg-white/60"
                    )}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Category badge on image */}
            <div className="absolute left-4 top-4">
              <Badge className={cn("text-xs font-medium backdrop-blur-sm", categoryColors[category])}>
                {categoryLabel}
              </Badge>
            </div>

            {/* Timeframe on image */}
            <div className="absolute right-4 top-4">
              <span className="rounded-full bg-black/50 px-2.5 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
                {timeframe}
              </span>
            </div>
          </div>
        ) : (
          /* Fallback header without image */
          <div className="relative px-5 pt-5">
            <div className="flex items-center justify-between gap-2">
              <Badge className={cn("text-xs font-medium", categoryColors[category])}>
                {categoryLabel}
              </Badge>
              <span className="text-xs text-muted-foreground">{timeframe}</span>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="relative flex flex-1 flex-col gap-4 p-5">
          {/* Title & Role */}
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
              {title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{role[locale]}</p>
          </div>

          {/* One liner */}
          <p className="text-sm leading-relaxed text-muted-foreground">
            {oneLiner[locale]}
          </p>

          {/* Highlights */}
          <ul className="space-y-2 text-sm text-muted-foreground">
            {highlights[locale].map((highlight, index) => (
              <li key={index} className="flex gap-2">
                <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
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
                className="bg-muted/50 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Access note & Links */}
          <div className="mt-auto flex flex-col gap-3 pt-2">
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
                  <Button
                    variant="default"
                    size="sm"
                    asChild
                    className="group/btn relative overflow-hidden"
                  >
                    <a href={links.live} target="_blank" rel="noopener noreferrer">
                      <span className="relative z-10 flex items-center gap-2">
                        <ExternalLink className="size-4" />
                        {t.projects.viewProject}
                      </span>
                    </a>
                  </Button>
                )}
                {links.repo && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={links.repo} target="_blank" rel="noopener noreferrer">
                      <Github className="size-4" />
                      {t.projects.viewCode}
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

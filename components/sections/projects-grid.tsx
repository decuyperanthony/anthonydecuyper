"use client";

import { motion, useReducedMotion } from "motion/react";

import { fadeInUp, staggerContainer } from "@/components/animations/variants";
import { ProjectShowcase } from "@/components/sections/project-showcase";
import type { Project } from "@/lib/constants";

type ProjectsGridProps = {
  projects: Project[];
};

const gridContainer = staggerContainer(0.1, 0.1);

export const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <ul role="list" className="grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectShowcase {...project} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <motion.ul
      role="list"
      className="grid gap-8 lg:grid-cols-2"
      variants={gridContainer}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project) => (
        <motion.li key={project.slug} variants={fadeInUp}>
          <ProjectShowcase {...project} />
        </motion.li>
      ))}
    </motion.ul>
  );
};

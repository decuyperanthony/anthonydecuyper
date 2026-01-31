"use client";

import { PageLayout } from "@/components/layout";
import { ProjectCard } from "@/components/sections";
import { projects } from "@/lib/constants";
import { StaggerContainer, StaggerItem } from "@/components/motion";

const ProjectsPage = () => (
  <PageLayout titleKey="projects" descriptionKey="projects">
    <StaggerContainer
      className="grid gap-6 lg:grid-cols-2"
      staggerDelay={0.1}
      delayChildren={0.2}
    >
      {projects.map((project) => (
        <StaggerItem key={project.slug}>
          <ProjectCard {...project} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  </PageLayout>
);

export default ProjectsPage;

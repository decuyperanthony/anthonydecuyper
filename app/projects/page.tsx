import { PageLayout } from "@/components/layout";
import { ProjectCard } from "@/components/sections";
import { projects } from "@/lib/constants";

export const metadata = {
  title: "Projects",
  description: "A selection of projects",
};

const ProjectsPage = () => (
  <PageLayout titleKey="projects" descriptionKey="projects">
    <div className="grid gap-6 lg:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </div>
  </PageLayout>
);

export default ProjectsPage;

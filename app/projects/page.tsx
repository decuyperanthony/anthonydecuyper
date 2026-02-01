import { PageLayout } from "@/components/layout";
import { ProjectShowcase } from "@/components/sections";
import { projects } from "@/lib/constants";

export const metadata = {
  title: "Projects",
  description: "A selection of projects",
};

const ProjectsPage = () => (
  <PageLayout titleKey="projects" descriptionKey="projects">
    <div className="grid gap-8 lg:grid-cols-2">
      {projects.map((project) => (
        <ProjectShowcase key={project.slug} {...project} />
      ))}
    </div>
  </PageLayout>
);

export default ProjectsPage;

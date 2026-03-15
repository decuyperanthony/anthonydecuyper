import { PageLayout } from "@/components/layout";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { projects } from "@/lib/constants";

export const metadata = {
  title: "Projects",
  description: "A selection of projects",
};

const ProjectsPage = () => (
  <PageLayout titleKey="projects" descriptionKey="projects">
    <ProjectsGrid projects={projects} />
  </PageLayout>
);

export default ProjectsPage;

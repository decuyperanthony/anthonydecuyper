import { PageLayout } from "@/components/layout";
import { ProjectShowcase } from "@/components/sections";
import { projects } from "@/lib/constants";

export const metadata = {
  title: "Projects",
  description: "A selection of projects",
};

const ProjectsPage = () => (
  <PageLayout titleKey="projects" descriptionKey="projects">
    <ul role="list" className="grid gap-8 lg:grid-cols-2">
      {projects.map((project) => (
        <li key={project.slug}>
          <ProjectShowcase {...project} />
        </li>
      ))}
    </ul>
  </PageLayout>
);

export default ProjectsPage;

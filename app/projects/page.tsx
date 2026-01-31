import { Footer, Header, PageContainer } from "@/components/layout";
import { PageTitle, ProjectCard } from "@/components/sections";
import { projects } from "@/lib/constants";

export const metadata = {
  title: "Projects",
  description: "A selection of projects",
};

const ProjectsPage = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">
      <PageContainer>
        <PageTitle titleKey="projects" descriptionKey="projects" />
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              url={project.url}
            />
          ))}
        </div>
      </PageContainer>
    </main>
    <Footer />
  </div>
);

export default ProjectsPage;

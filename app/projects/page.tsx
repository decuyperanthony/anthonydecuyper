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
    <main className="flex-1 py-12">
      <PageContainer>
        <PageTitle titleKey="projects" descriptionKey="projects" />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </PageContainer>
    </main>
    <Footer />
  </div>
);

export default ProjectsPage;

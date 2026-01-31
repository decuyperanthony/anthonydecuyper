import { Footer, Header, PageContainer } from "@/components/layout";
import { ProjectCard } from "@/components/sections";
import { projects } from "@/lib/constants";

export const metadata = {
  title: "Projects | Anthony de Cuyper",
  description: "A selection of projects by Anthony de Cuyper",
};

const ProjectsPage = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">
      <PageContainer>
        <div className="py-12">
          <h1 className="mb-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Projects
          </h1>
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
        </div>
      </PageContainer>
    </main>
    <Footer />
  </div>
);

export default ProjectsPage;

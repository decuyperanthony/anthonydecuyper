import { Footer, Header, PageContainer } from "@/components/layout";
import { Education, Experience, Skills } from "@/components/sections";

export const metadata = {
  title: "Resume | Anthony de Cuyper",
  description: "Professional experience and skills of Anthony de Cuyper, Frontend Engineering Leader",
};

const CVPage = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1 print:pt-0">
      <PageContainer>
        <div className="print:hidden">
          <h1 className="py-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Resume
          </h1>
        </div>
        <div className="print:block hidden">
          <div className="py-8 text-center">
            <h1 className="text-3xl font-bold text-foreground">Anthony de Cuyper</h1>
            <p className="text-muted-foreground">Head of Frontend</p>
          </div>
        </div>
        <Experience />
        <Skills />
        <Education />
      </PageContainer>
    </main>
    <div className="print:hidden">
      <Footer />
    </div>
  </div>
);

export default CVPage;

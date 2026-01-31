import { Footer, Header, PageContainer } from "@/components/layout";
import { CVHeader, Education, Experience, Skills } from "@/components/sections";

export const metadata = {
  title: "Resume",
  description: "Professional experience and skills",
};

const CVPage = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1 print:pt-0">
      <PageContainer>
        <CVHeader />
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

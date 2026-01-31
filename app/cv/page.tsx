import { Footer, Header, PageContainer } from "@/components/layout";
import {
  CVDownload,
  CVHeader,
  Education,
  Experience,
  Skills,
} from "@/components/sections";

export const metadata = {
  title: "Resume",
  description: "Professional experience and skills",
};

const CVPage = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1 py-12 print:py-0">
      <PageContainer>
        <div className="mb-8 flex items-start justify-between gap-4 print:hidden">
          <CVHeader />
          <CVDownload />
        </div>
        <div className="hidden print:block">
          <CVHeader />
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

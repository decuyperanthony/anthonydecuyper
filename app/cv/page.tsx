import { PageLayout } from "@/components/layout";
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
  <PageLayout className="print:py-0" hideFooterOnPrint>
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
  </PageLayout>
);

export default CVPage;

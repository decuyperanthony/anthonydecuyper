import { Download } from "lucide-react";

import { PageLayout } from "@/components/layout";
import { CVHeader, Education, Experience, Skills } from "@/components/sections";

export const metadata = {
  title: "Resume",
  description: "Professional experience and skills",
};

const CV_FILES = {
  en: "/cv/cv-anthony-de-cuyper.pdf",
  fr: "/cv/cv-anthony-de-cuyper-fr.pdf",
} as const;

const CVPage = () => (
  <PageLayout
    className="print:py-0"
    hideFooterOnPrint
    titleKey="cv"
    buttonProps={{
      href: CV_FILES,
      download: true,
      labelKey: "download",
      icon: <Download className="size-4" />,
    }}
  >
    <div className="hidden print:block">
      <CVHeader />
    </div>
    <Experience />
    <Skills />
    <Education />
  </PageLayout>
);

export default CVPage;

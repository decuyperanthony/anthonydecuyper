"use client";

import type { ReactNode } from "react";

import { Typography } from "@/components/ui/typography";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import { Footer } from "./footer";
import { Header } from "./header";
import { PageContainer } from "./page-container";

type PageKey = "cv" | "projects" | "contact";

type PageLayoutProps = {
  children: ReactNode;
  className?: string;
  hideFooterOnPrint?: boolean;
  titleKey?: PageKey;
  descriptionKey?: PageKey;
};

export const PageLayout = ({
  children,
  className,
  hideFooterOnPrint = false,
  titleKey,
  descriptionKey,
}: PageLayoutProps) => {
  const { t } = useI18n();

  const titleMap = {
    cv: t.cv.title,
    projects: t.projects.title,
    contact: t.contact.title,
  };

  const descriptionMap = {
    cv: null,
    projects: t.projects.description,
    contact: t.contact.description,
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className={cn("flex-1 py-6 sm:py-12", className)}>
        <PageContainer>
          {titleKey && (
            <div className="space-y-3 py-6 sm:space-y-4 sm:py-12">
              <Typography variant="h2" as="h1" className="sm:text-4xl">
                {titleMap[titleKey]}
              </Typography>
              {descriptionKey && descriptionMap[descriptionKey] && (
                <Typography variant="body-large" className="max-w-2xl">
                  {descriptionMap[descriptionKey]}
                </Typography>
              )}
            </div>
          )}
          {children}
        </PageContainer>
      </main>
      {hideFooterOnPrint ? (
        <div className="print:hidden">
          <Footer />
        </div>
      ) : (
        <Footer />
      )}
    </div>
  );
};

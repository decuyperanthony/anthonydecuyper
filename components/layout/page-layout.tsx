"use client";

import type { ComponentProps, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { type Locale, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import { Footer } from "./footer";
import { Header } from "./header";
import { PageContainer } from "./page-container";

type PageKey = "cv" | "projects" | "contact";

type ButtonLinkProps = Omit<
  ComponentProps<typeof Button>,
  "asChild" | "children"
> & {
  href: Record<Locale, string>;
  download?: boolean | string;
  labelKey: "download";
  icon?: ReactNode;
};

type PageLayoutProps = {
  children: ReactNode;
  className?: string;
  hideFooterOnPrint?: boolean;
  titleKey?: PageKey;
  descriptionKey?: PageKey;
  buttonProps?: ButtonLinkProps;
};

export const PageLayout = ({
  children,
  className,
  hideFooterOnPrint = false,
  titleKey,
  descriptionKey,
  buttonProps,
}: PageLayoutProps) => {
  const { locale, t } = useI18n();

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

  const buttonLabelMap = {
    download: t.cv.download,
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className={cn("flex-1 py-6 sm:py-12", className)}>
        <PageContainer>
          {titleKey && (
            <div className="space-y-3 pb-8 sm:space-y-4 sm:pb-10">
              <div className="flex items-center justify-between gap-4">
                <Typography variant="h2" as="h1" className="sm:text-4xl">
                  {titleMap[titleKey]}
                </Typography>
                {buttonProps && (
                  <div className="shrink-0 print:hidden">
                    <Button asChild variant={buttonProps.variant} size={buttonProps.size}>
                      <a href={buttonProps.href[locale]} download={buttonProps.download}>
                        {buttonProps.icon}
                        {buttonLabelMap[buttonProps.labelKey]}
                      </a>
                    </Button>
                  </div>
                )}
              </div>
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

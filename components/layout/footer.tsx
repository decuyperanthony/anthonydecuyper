"use client";

import { useI18n } from "@/lib/i18n";

import { PageContainer } from "./page-container";

export const Footer = () => {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <PageContainer>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {t.meta.name}. {t.footer.rights}
          </p>
        </div>
      </PageContainer>
    </footer>
  );
};

import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

export const PageContainer = ({ children, className }: PageContainerProps) => (
  <div className={cn("mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8", className)}>
    {children}
  </div>
);

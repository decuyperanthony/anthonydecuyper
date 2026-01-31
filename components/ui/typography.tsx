import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight lg:text-3xl",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight lg:text-2xl",
      h5: "scroll-m-20 text-lg font-semibold tracking-tight",
      h6: "scroll-m-20 text-base font-semibold tracking-tight",
      lead: "text-xl text-muted-foreground lg:text-2xl",
      body: "text-base leading-7",
      "body-large": "text-lg leading-8",
      "body-small": "text-sm leading-6",
      muted: "text-sm text-muted-foreground",
      caption: "text-xs text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

const typographyVariantList = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "lead",
  "body",
  "body-large",
  "body-small",
  "muted",
  "caption",
] as const satisfies VariantProps<typeof typographyVariants>["variant"][];

type Tag = "p" | "span" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "li";

type TypographyProps = HTMLAttributes<HTMLElement> &
  PropsWithChildren &
  VariantProps<typeof typographyVariants> & {
    as?: Tag;
    asChild?: boolean;
  };

const Typography = ({
  as: Component = "p",
  asChild = false,
  children,
  className,
  variant,
  ...props
}: TypographyProps) => {
  const Comp = asChild ? Slot : Component;

  return (
    <Comp className={cn(typographyVariants({ variant }), className)} {...props}>
      <Slottable>{children}</Slottable>
    </Comp>
  );
};
Typography.displayName = "Typography";

export { Typography, typographyVariants, typographyVariantList };
export type { TypographyProps, Tag as TypographyTag };

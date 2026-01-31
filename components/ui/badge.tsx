import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-colors",
  {
    variants: {
      variant: {
        // Base variants
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        outline: "border-border text-foreground",
        ghost: "border-transparent text-foreground",

        // Semantic variants
        info: "border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400",
        success:
          "border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400",
        warning:
          "border-orange-500/20 bg-orange-500/10 text-orange-600 dark:text-orange-400",
        error:
          "border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400",

        // Project category variants
        platform:
          "border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400",
        tools:
          "border-purple-500/20 bg-purple-500/10 text-purple-600 dark:text-purple-400",
        mobile:
          "border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400",
        partner:
          "border-orange-500/20 bg-orange-500/10 text-orange-600 dark:text-orange-400",
        volunteer:
          "border-pink-500/20 bg-pink-500/10 text-pink-600 dark:text-pink-400",
        personal:
          "border-cyan-500/20 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type BadgeVariant = NonNullable<VariantProps<typeof badgeVariants>["variant"]>;

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants, type BadgeVariant };

"use client";

import { type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { motion } from "@/components/motion";

type ContactLinkProps = {
  icon: LucideIcon;
  label: string;
  href: string;
  value: string;
};

export const ContactLink = ({
  icon: Icon,
  label,
  href,
  value,
}: ContactLinkProps) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    <Button
      variant="outline"
      className="h-auto w-full justify-start gap-4 py-4"
      asChild
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Icon className="size-5 text-muted-foreground" />
        <div className="flex flex-col items-start">
          <Typography variant="body-small" as="span" className="font-medium">
            {label}
          </Typography>
          <Typography variant="muted" as="span">
            {value}
          </Typography>
        </div>
      </a>
    </Button>
  </motion.div>
);

"use client";

import { type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

type ContactLinkProps = {
  icon: LucideIcon;
  label: string;
  href: string;
  value: string;
};

export const ContactLink = ({ icon: Icon, label, href, value }: ContactLinkProps) => (
  <Button
    variant="outline"
    className="w-full justify-start gap-4 h-auto py-4"
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
);

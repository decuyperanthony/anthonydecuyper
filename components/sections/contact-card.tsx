"use client";

import { Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contact } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

export const ContactCard = () => {
  const { t } = useI18n();

  const links = [
    {
      icon: Mail,
      label: t.contact.email,
      href: `mailto:${contact.email}`,
      value: contact.email,
    },
    {
      icon: Github,
      label: t.contact.github,
      href: contact.github,
      value: "github.com/anthonydecuyper",
    },
    {
      icon: Linkedin,
      label: t.contact.linkedin,
      href: contact.linkedin,
      value: "linkedin.com/in/anthonydecuyper",
    },
  ];

  return (
    <div className="space-y-4">
      {links.map((link) => (
        <Button
          key={link.label}
          variant="outline"
          className="w-full justify-start gap-4 h-auto py-4"
          asChild
        >
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            <link.icon className="size-5 text-muted-foreground" />
            <div className="flex flex-col items-start">
              <span className="text-sm font-medium">{link.label}</span>
              <span className="text-sm text-muted-foreground">{link.value}</span>
            </div>
          </a>
        </Button>
      ))}
    </div>
  );
};

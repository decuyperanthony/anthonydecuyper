"use client";

import { Github, Linkedin, Mail } from "lucide-react";

import { contact } from "@/lib/constants";
import { getDisplayUrl } from "@/lib/format";
import { useI18n } from "@/lib/i18n";
import { StaggerContainer, StaggerItem } from "@/components/motion";

import { ContactLink } from "./contact-link";

export const ContactLinks = () => {
  const { t } = useI18n();

  return (
    <StaggerContainer className="space-y-4" staggerDelay={0.1}>
      <StaggerItem>
        <ContactLink
          icon={Mail}
          label={t.contact.email}
          href={`mailto:${contact.email}`}
          value={contact.email}
        />
      </StaggerItem>
      <StaggerItem>
        <ContactLink
          icon={Github}
          label={t.contact.github}
          href={contact.github}
          value={getDisplayUrl(contact.github)}
        />
      </StaggerItem>
      <StaggerItem>
        <ContactLink
          icon={Linkedin}
          label={t.contact.linkedin}
          href={contact.linkedin}
          value={getDisplayUrl(contact.linkedin)}
        />
      </StaggerItem>
    </StaggerContainer>
  );
};

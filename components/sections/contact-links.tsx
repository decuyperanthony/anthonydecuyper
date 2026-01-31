"use client";

import { Github, Linkedin, Mail } from "lucide-react";

import { contact } from "@/lib/constants";
import { getDisplayUrl } from "@/lib/format";
import { useI18n } from "@/lib/i18n";

import { ContactLink } from "./contact-link";

export const ContactLinks = () => {
  const { t } = useI18n();

  return (
    <div className="space-y-4">
      <ContactLink
        icon={Mail}
        label={t.contact.email}
        href={`mailto:${contact.email}`}
        value={contact.email}
      />
      <ContactLink
        icon={Github}
        label={t.contact.github}
        href={contact.github}
        value={getDisplayUrl(contact.github)}
      />
      <ContactLink
        icon={Linkedin}
        label={t.contact.linkedin}
        href={contact.linkedin}
        value={getDisplayUrl(contact.linkedin)}
      />
    </div>
  );
};

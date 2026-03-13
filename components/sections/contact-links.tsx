"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { fadeInUp, staggerContainer } from "@/components/animations/variants";
import { contact } from "@/lib/constants";
import { getDisplayUrl } from "@/lib/format";
import { useI18n } from "@/lib/i18n";

import { ContactLink } from "./contact-link";

const listContainer = staggerContainer(0.1, 0.05);

export const ContactLinks = () => {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();

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
      value: getDisplayUrl(contact.github),
    },
    {
      icon: Linkedin,
      label: t.contact.linkedin,
      href: contact.linkedin,
      value: getDisplayUrl(contact.linkedin),
    },
  ] as const;

  if (prefersReducedMotion) {
    return (
      <div className="space-y-4">
        {links.map((link) => (
          <ContactLink key={link.href} {...link} />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="space-y-4"
      variants={listContainer}
      initial="hidden"
      animate="visible"
    >
      {links.map((link) => (
        <motion.div key={link.href} variants={fadeInUp}>
          <ContactLink {...link} />
        </motion.div>
      ))}
    </motion.div>
  );
};

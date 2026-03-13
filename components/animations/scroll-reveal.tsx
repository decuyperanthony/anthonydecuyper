"use client";

import { type ReactNode, useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

import { fadeInUp, staggerContainer } from "./variants";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger children instead of animating as one block */
  stagger?: boolean;
  staggerDelay?: number;
  /** How much of the element must be visible before triggering */
  threshold?: number;
  /** Trigger only once (default: true) */
  once?: boolean;
};

export const ScrollReveal = ({
  children,
  className,
  stagger = false,
  staggerDelay = 0.07,
  threshold = 0.15,
  once = true,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once, amount: threshold });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = stagger ? staggerContainer(staggerDelay) : fadeInUp;

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

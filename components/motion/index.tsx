"use client";

import { motion, type Variants } from "framer-motion";
import { type ComponentProps } from "react";

// ============================================================================
// Animation Variants
// ============================================================================

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

// ============================================================================
// Stagger Container - Animates children sequentially
// ============================================================================

type StaggerContainerProps = ComponentProps<typeof motion.div> & {
  staggerDelay?: number;
  delayChildren?: number;
};

export const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  delayChildren = 0,
  ...props
}: StaggerContainerProps) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      visible: {
        transition: {
          staggerChildren: staggerDelay,
          delayChildren,
        },
      },
    }}
    {...props}
  >
    {children}
  </motion.div>
);

// ============================================================================
// Fade In - Simple fade with optional direction
// ============================================================================

type FadeInProps = ComponentProps<typeof motion.div> & {
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
};

export const FadeIn = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  ...props
}: FadeInProps) => {
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
    none: {},
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// Stagger Item - Use inside StaggerContainer
// ============================================================================

type StaggerItemProps = ComponentProps<typeof motion.div> & {
  variant?: "fadeInUp" | "fadeIn" | "scaleIn";
};

const variantMap = {
  fadeInUp,
  fadeIn,
  scaleIn,
};

export const StaggerItem = ({
  children,
  variant = "fadeInUp",
  ...props
}: StaggerItemProps) => (
  <motion.div
    variants={variantMap[variant]}
    transition={{ duration: 0.5, ease: "easeOut" }}
    {...props}
  >
    {children}
  </motion.div>
);

// ============================================================================
// Hover Scale - Micro-interaction for buttons/cards
// ============================================================================

type HoverScaleProps = ComponentProps<typeof motion.div> & {
  scale?: number;
};

export const HoverScale = ({
  children,
  scale = 1.02,
  ...props
}: HoverScaleProps) => (
  <motion.div
    whileHover={{ scale }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    {...props}
  >
    {children}
  </motion.div>
);

// ============================================================================
// Hover Lift - Card hover effect with shadow
// ============================================================================

type HoverLiftProps = ComponentProps<typeof motion.div>;

export const HoverLift = ({ children, ...props }: HoverLiftProps) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    {...props}
  >
    {children}
  </motion.div>
);

// ============================================================================
// Re-export motion for convenience
// ============================================================================

export { motion };

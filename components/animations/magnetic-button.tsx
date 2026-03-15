"use client";

import { type ReactNode, useCallback, useRef, useState } from "react";
import { motion, useReducedMotion, useSpring } from "motion/react";

type MagneticButtonProps = {
  children: ReactNode;
  /** Max pixel displacement toward the cursor (default: 8) */
  strength?: number;
  /** Radius in px within which the magnet activates (default: 60) */
  radius?: number;
};

/**
 * Wraps any element with a subtle magnetic pull toward the cursor.
 * Desktop-only: skipped on touch devices and when prefers-reduced-motion is set.
 *
 * Usage:
 *   <MagneticButton>
 *     <Button>Click me</Button>
 *   </MagneticButton>
 */
export const MagneticButton = ({
  children,
  strength = 8,
  radius = 60,
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isTouch, setIsTouch] = useState(false);

  // Spring config: responsive feel, snaps back smoothly
  const springConfig = { stiffness: 180, damping: 18, mass: 0.6 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current || isTouch) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

      if (distance < radius) {
        // Scale displacement so it fades off toward the radius edge
        const factor = (1 - distance / radius) * strength;
        x.set(deltaX * (factor / distance || 0));
        y.set(deltaY * (factor / distance || 0));
      } else {
        x.set(0);
        y.set(0);
      }
    },
    [isTouch, radius, strength, x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const handleTouchStart = useCallback(() => {
    setIsTouch(true);
  }, []);

  // Render without motion when reduced-motion is preferred
  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ x, y, display: "inline-flex" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      {children}
    </motion.div>
  );
};

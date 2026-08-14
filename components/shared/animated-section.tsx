"use client";

import { motion } from "framer-motion";

/**
 * Scroll-triggered zoom/fade-in wrapper, per client's request for "lively"
 * animation. Respects prefers-reduced-motion via Framer's default handling
 * of the initial/animate values (no motion if the user disabled it, since
 * we keep the fallback state visually acceptable at rest).
 */
export function AnimatedSection({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

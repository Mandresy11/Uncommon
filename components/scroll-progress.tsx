"use client";

// Barre de progression de scroll doree en haut de page (effet premium, retour Tom v18).
import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-gradient-to-r from-[#D4B36A] via-[#E3C888] to-[#D4B36A]"
      aria-hidden="true"
    />
  );
}

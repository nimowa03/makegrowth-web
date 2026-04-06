import type { Variants } from "framer-motion";

const supanovaEase = [0.16, 1, 0.3, 1] as const;

/* ── Entry Animations ── */

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: supanovaEase },
  },
};

export const clipReveal: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    opacity: 1,
    transition: { duration: 0.8, ease: supanovaEase },
  },
};

export const slideFromLeft: Variants = {
  hidden: { x: -60, opacity: 0, filter: "blur(4px)" },
  visible: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: supanovaEase },
  },
};

export const slideFromRight: Variants = {
  hidden: { x: 60, opacity: 0, filter: "blur(4px)" },
  visible: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: supanovaEase },
  },
};

export const scaleUp: Variants = {
  hidden: { scale: 0.85, opacity: 0, filter: "blur(4px)" },
  visible: {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: supanovaEase },
  },
};

/* ── Container Stagger ── */

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const staggerSlow: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ── Bar / Width Animation ── */

export const barGrow = (targetWidth: string, delay = 0): Variants => ({
  hidden: { width: "0%" },
  visible: {
    width: targetWidth,
    transition: { duration: 1.2, delay, ease: supanovaEase },
  },
});

/* ── Hover Card ── */

export const hoverCard = {
  scale: 1.03,
  transition: { duration: 0.4, ease: supanovaEase },
};

export const hoverCardSubtle = {
  scale: 1.02,
  y: -2,
  transition: { duration: 0.4, ease: supanovaEase },
};

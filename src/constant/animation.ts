import { cubicBezier, Variants } from 'framer-motion';

export const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0 },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: cubicBezier(0.16, 1, 0.3, 1),
    },
  },
};

export const slideInLR = {
  hidden: (direction: 'left' | 'right') => ({
    opacity: 0,
    x: direction === 'left' ? -40 : 40,
  }),
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: cubicBezier(0.16, 1, 0.3, 1),
    },
  },
};

export const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const stepImageV: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: cubicBezier(0.16, 1, 0.3, 1) },
  },
};

export const stepCardV: Variants = {
  hidden: (side: 'left' | 'right') => ({
    opacity: 0,
    x: side === 'left' ? -24 : 24,
    y: 8,
  }),
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.45,
      delay: 0.18,
      ease: cubicBezier(0.16, 1, 0.3, 1),
    },
  },
};

export const stepArrowV: Variants = {
  hidden: {
    opacity: 0,
    y: -12,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.16, 1, 0.3, 1),
    },
  },
};

export const STEP_NUMBER_PARALLAX = {
  fromY: -10,
  toY: 18,
};

export const imageRevealV: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: cubicBezier(0.16, 1, 0.3, 1) },
  },
};

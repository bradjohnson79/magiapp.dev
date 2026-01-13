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

export const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

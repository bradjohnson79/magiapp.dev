export const buildCards = [
  {
    key: 'web-apps',
    title: 'Web Apps & Websites',
    description: 'Full-stack applications with real logic and structure.',
    icon: {
      name: 'icon-park-solid:browser',
      chipBg: 'bg-(--color-soft-violet)',
      iconColor: 'text-(--color-background)',
    },
    image: {
      src: '/images/home/second-section-grid-1.png',
      alt: 'Web apps preview',
    },
  },
  {
    key: 'mobile-apps',
    title: 'Mobile Apps',
    description: 'Build once, extend everywhere & sell your creation.',
    icon: {
      name: 'meteor-icons:mobile',
      chipBg: 'bg-(--color-soft-blue)',
      iconColor: 'text-(--color-background)',
    },
    image: {
      src: '/images/home/second-section-grid-2.png',
      alt: 'Mobile apps preview',
    },
  },
  {
    key: 'dashboards',
    title: 'Dashboards & Admin Panels',
    description: 'Clean, role-aware interfaces for real users.',
    icon: {
      name: 'si:dashboard-line',
      chipBg: 'bg-(--color-soft-pink)',
      iconColor: 'text-(--color-background)',
    },
    image: {
      src: '/images/home/second-section-grid-3.png',
      alt: 'Dashboard preview',
    },
  },
  {
    key: 'ai-tools',
    title: 'AI-Powered Tools',
    description: 'Integrate intelligence where it actually belongs.',
    icon: {
      name: 'si:ai-line',
      chipBg: 'bg-(--color-accent-orange)',
      iconColor: 'text-(--color-background)',
    },
    image: {
      src: '/images/home/second-section-grid-4.png',
      alt: 'AI tools preview',
    },
  },
  {
    key: 'games',
    title: 'Games & Interactive Experiences',
    description: 'Logic-driven, not gimmick-driven.',
    icon: {
      name: 'fluent:games-24-regular',
      chipBg: 'bg-(--color-accent-green)',
      iconColor: 'text-(--color-background)',
    },
    image: {
      src: '/images/home/second-section-grid-5.png',
      alt: 'Games preview',
    },
  },
  {
    key: 'internal-tools',
    title: 'Internal Tools & APIs',
    description: 'The systems companies actually rely on.',
    icon: {
      name: 'flowbite:tools-outline',
      chipBg: 'bg-(--color-magic-blue)',
      iconColor: 'text-(--color-background)',
    },
    image: {
      src: '/images/home/second-section-grid-6.png',
      alt: 'Internal tools preview',
    },
  },
] as const;

export const whyMagiPoints = [
  {
    key: 'vibe',
    text: 'Vibe coding generates pieces and leaves you to connect the dots.',
  },
  {
    key: 'senior',
    text: 'MAGI behaves like a senior engineer, not throwing code at the wall and hoping it sticks.',
  },
  {
    key: 'systems',
    text: 'No clumsy vibes. No Franken-apps. Just systems that make sense.',
  },
];

export const magiPillars = [
  {
    key: 'self-learning',
    title: 'Self-Learning Logic',
    description:
      'MAGI improves as projects evolve, learning structure and intent instead of repeating mistakes.',
    image: {
      src: '/images/ui-shapes/circle-purple.png',
      width: 120,
      height: 120,
      className: 'absolute -top-6 right-0 -translate-y-1/3 translate-x-1/3',
    },
  },
  {
    key: 'self-repairing',
    title: 'Self-Repairing Awareness',
    description:
      'Broken flows, missing pieces, and inconsistencies are detected early — not after deployment.',
    image: {
      src: '/images/ui-shapes/double-circle.png',
      width: 200,
      height: 80,
      className: 'absolute -bottom-13 left-0 translate-y-1/3',
    },
  },
  {
    key: 'full-stack',
    title: 'Full-Stack Understanding',
    description:
      'Frontend, backend, database, authentication, and deployment are treated as one system.',
    image: {
      src: '/images/ui-shapes/quarter-circle.png',
      width: 200,
      height: 120,
      className:
        'absolute -bottom-14 right-0 rotate-110 translate-y-1/3 translate-x-1/3',
    },
  },
  {
    key: 'skill-aware',
    title: 'Skill-Aware Interaction',
    description:
      'MAGI adapts to beginners, intermediate builders, and advanced developers automatically.',
    image: {
      src: '/images/ui-shapes/circle-pink.png',
      width: 120,
      height: 120,
      className:
        'absolute -top-14 -left-12 rotate-90 -translate-y-1/3 -translate-x-1/3',
    },
  },
];

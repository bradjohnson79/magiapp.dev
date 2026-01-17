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

// how-it-works.data.ts
export type HowItWorksStep = {
  id: number;
  side: 'left' | 'right';
  title: string;
  description: string;
  cardPadding: { desktop: 'pr' | 'pl'; mobile: 'pb' };
  cardImg: {
    src: string;
    w: number;
    h: number;
    desktopOverlapClass: string;
  };
  decoNumberImg: {
    src: string;
    w: number;
    h: number;
    desktopPosClass: string;
  };
  arrowRotationClass: string;
};

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    id: 1,
    side: 'left',
    title: 'Describe what you want to build',
    description:
      'Explain your idea in plain language or technical terms — MAGI understands both.',
    cardPadding: { desktop: 'pr', mobile: 'pb' },
    cardImg: {
      src: '/images/home/forth-section-one.png',
      w: 300,
      h: 200,
      desktopOverlapClass: '-ml-18',
    },
    decoNumberImg: {
      src: '/images/home/forth-section-two.png',
      w: 142,
      h: 128,
      desktopPosClass: 'absolute -top-8 right-[12%] hidden lg:block',
    },
    arrowRotationClass: '-rotate-24',
  },
  {
    id: 2,
    side: 'right',
    title: 'MAGI designs the system',
    description:
      'Architecture, logic, and structure are assembled intelligently, not guessed.',
    cardPadding: { desktop: 'pl', mobile: 'pb' },
    cardImg: {
      src: '/images/home/forth-section-three.png',
      w: 300,
      h: 200,
      desktopOverlapClass: '-mr-18',
    },
    decoNumberImg: {
      src: '/images/home/forth-section-fore.png',
      w: 142,
      h: 128,
      desktopPosClass: 'absolute -bottom-8 left-[12%] hidden lg:block',
    },
    arrowRotationClass: 'rotate-24',
  },
  {
    id: 3,
    side: 'left',
    title: 'Refine, expand, and deploy',
    description:
      'You stay in control. MAGI helps you move faster with fewer mistakes.',
    cardPadding: { desktop: 'pr', mobile: 'pb' },
    cardImg: {
      src: '/images/home/forth-section-six.png',
      w: 300,
      h: 200,
      desktopOverlapClass: '-ml-18',
    },
    decoNumberImg: {
      src: '/images/home/forth-section-seven.png',
      w: 142,
      h: 128,
      desktopPosClass: 'absolute top-10 right-[12%] hidden lg:block',
    },
    arrowRotationClass: '-rotate-24',
  },
  {
    id: 4,
    side: 'right',
    title: 'Publish and get paid',
    description:
      'Finalize your app, set up publishing, and go live when you’re ready.',
    cardPadding: { desktop: 'pl', mobile: 'pb' },
    cardImg: {
      src: '/images/home/forth-section-heigh.png',
      w: 300,
      h: 200,
      desktopOverlapClass: '-mr-18',
    },
    decoNumberImg: {
      src: '/images/home/forth-section-nine.png',
      w: 142,
      h: 128,
      desktopPosClass: 'absolute -top-12 left-[12%] hidden lg:block',
    },
    arrowRotationClass: 'rotate-24',
  },
  {
    id: 5,
    side: 'left',
    title: 'What you create is yours to keep',
    description:
      'No lock-in restrictions. No prompt limits. Make your vision come to life, and you own all of it.',
    cardPadding: { desktop: 'pr', mobile: 'pb' },
    cardImg: {
      src: '/images/home/forth-section-ten.png',
      w: 300,
      h: 200,
      desktopOverlapClass: '-ml-18',
    },
    decoNumberImg: {
      src: '/images/home/forth-section-eleven.png',
      w: 142,
      h: 128,
      desktopPosClass: 'absolute -bottom-12 right-[12%] hidden lg:block',
    },
    arrowRotationClass: '-rotate-24',
  },
];

type PlanTeaserCard = {
  id: 'trial' | 'monthly' | 'annual';
  title: string;
  description: string;
  imageSrc: string;
  imageW: number;
  imageH: number;
  desktopJustify: 'start' | 'center' | 'end';
  desktopOffsetClass?: string;
};

export const PLAN_TEASER_CARDS: PlanTeaserCard[] = [
  {
    id: 'trial',
    title: 'MAGI Trial',
    description:
      'No token restrictions. No prompt limits. Make your vision come to life, and you own all of it.',
    imageSrc: '/images/home/five-section-grid-one.png',
    imageW: 380,
    imageH: 300,
    desktopJustify: 'start',
  },
  {
    id: 'monthly',
    title: 'MAGI Monthly',
    description: 'Full access for independent builders and creators.',
    imageSrc: '/images/home/five-section-grid-two.png',
    imageW: 380,
    imageH: 300,
    desktopJustify: 'center',
  },
  {
    id: 'annual',
    title: 'MAGI Annual',
    description: 'Best value for long-term builders and serious projects.',
    imageSrc: '/images/home/five-section-grid-three.png',
    imageW: 380,
    imageH: 300,
    desktopJustify: 'end',
  },
];

type DocsSupportPoint = {
  id: number;
  text: string;
};

export const DOCS_SUPPORT_POINTS: DocsSupportPoint[] = [
  { id: 1, text: 'Getting started guides' },
  { id: 2, text: 'Core concepts explained simply' },
  { id: 3, text: 'Troubleshooting and common fixes' },
  { id: 4, text: 'Best practices as MAGI evolves' },
];

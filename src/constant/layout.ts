export const navItems = [
  { label: 'Community', href: '#' },
  { label: 'Enterprise', href: '#' },
  {
    label: 'Resources',
    children: [
      { label: 'Founders', href: '#' },
      { label: 'Designers', href: '#' },
    ],
  },
  { label: 'Pricing', href: '#' },
] as const;


export type NavItem = {
  label: string;
  href: string;
  icon: string;
  role?: string
};

export const sideNav: NavItem[] = [
  { label: 'Home', href: '/dashboard', icon: 'solar:home-2-linear' },
  { label: 'Profile', href: '/dashboard/profile', icon: 'ion:person-outline' },
  { label: 'Tokens', href: '/dashboard/tokens', icon: 'material-symbols:token-outline-rounded' },
  { label: 'Support', href: '/dashboard/support', icon: 'ix:support' },
  { label: 'Settings', href: '/dashboard/settings', icon: 'ci:settings' },
  { label: 'Doc Editor', href: '/dashboard/docs', icon: 'f7:doc', role: 'admin' },
  { label: 'Admin Tool', href: '/dashboard/tool', icon: 'flowbite:tools-outline', role: 'admin' },
];

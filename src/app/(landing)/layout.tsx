import { LandingPageLayout } from '@/components/layout.tsx/landing-page-layout';
import { type ReactNode } from 'react';

export default function LandingLayout({ children }: { children: ReactNode }) {
  return <LandingPageLayout>{children}</LandingPageLayout>;
}

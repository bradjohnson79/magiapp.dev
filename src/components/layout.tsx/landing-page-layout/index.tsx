import { type ReactNode } from 'react';
import { Footer } from '@/components/layout.tsx/footer';

type LandingPageLayoutProps = {
  children: ReactNode;
  footer?: ReactNode;
};

export function LandingPageLayout({
  children,
  footer,
}: LandingPageLayoutProps) {
  return (
    <>
      <main>{children}</main>
      {footer ?? <Footer />}
    </>
  );
}

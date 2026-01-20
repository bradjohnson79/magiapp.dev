import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Get Started with MAGI',
  description: 'Start building with MAGI using a free 3-day trial.',
};

export default function GetStartedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}

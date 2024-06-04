import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}

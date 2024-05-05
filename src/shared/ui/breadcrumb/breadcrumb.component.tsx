'use client';

import { usePathname } from 'next/navigation';
import BreadcrumbDesktop from './breadcrumb-desktop.component';
import BreadcrumbMobile from './breadcrumb-mobile.component';

export default function Breadcrumb() {
  const pathname = usePathname();

  if (pathname === '/') return null;
  return (
    <>
      <BreadcrumbMobile />
      <BreadcrumbDesktop />
    </>
  );
}

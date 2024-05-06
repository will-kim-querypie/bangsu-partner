'use client';

import { usePathname } from 'next/navigation';
import BreadcrumbDesktop from './breadcrumb-desktop.component';
import BreadcrumbMobile from './breadcrumb-mobile.component';
import styles from './breadcrumb.module.css';

export default function Breadcrumb() {
  const pathname = usePathname();

  if (pathname === '/') return null;
  return (
    <div className={styles.container}>
      <BreadcrumbMobile />
      <BreadcrumbDesktop />
    </div>
  );
}

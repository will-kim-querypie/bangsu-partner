'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import getSubRoutesViewModel from '@/shared/config/sub-routes';
import styles from './gnb-desktop.module.css';

const subRoutes = getSubRoutesViewModel('gnb-desktop');

export default function GNBDesktopMenu() {
  const pathname = usePathname();

  return (
    <ul className={styles.categories}>
      {subRoutes.map(({ key, label, children }) => (
        <li key={key} className={styles.category}>
          <Link
            href={children[0].path}
            className={clsx(styles.categoryLink, {
              [styles.active]: children.some(child => child.path === pathname),
            })}
          >
            {label}
          </Link>

          <ul className={styles.subMenus}>
            {children.map(({ key, label, path }, index) => (
              <li key={key} className={styles.subMenu}>
                <Link
                  href={path}
                  className={clsx(styles.subMenuLink, {
                    [styles.active]: path === pathname,
                  })}
                  data-order={index + 1}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

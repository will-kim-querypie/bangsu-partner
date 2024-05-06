'use client';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from './sub-page-hero.module.css';
import { getPageInfo } from '../../config/sub-routes';
import { Typography } from '../typography';

export default function SubPageHero() {
  const pathname = usePathname();
  const pageInfo = getPageInfo(pathname);

  if (pathname === '/') return null;
  return (
    <div className={clsx('width-limit', styles.container)}>
      <Typography type="title1" as="h1">
        {pageInfo.child.label}
      </Typography>
      <Typography type="detail1" as="p" className={styles.subText}>
        최고의 시공으로 쾌적한 환경을 만들어 드리겠습니다.
      </Typography>
    </div>
  );
}

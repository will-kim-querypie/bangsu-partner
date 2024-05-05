import { usePathname, useRouter } from 'next/navigation';
import { ChevronLeft } from 'react-bootstrap-icons';
import { getPageLabel } from '@/shared/config/sub-routes';
import { Typography } from '@/shared/ui/typography';
import styles from './breadcrumb-mobile.module.css';

export default function BreadcrumbMobile() {
  const pathname = usePathname();
  const router = useRouter();
  const pageLabel = getPageLabel(pathname);

  return (
    <button
      className={styles.container}
      onClick={() => {
        // NOTE: 히스토리 스택이 없을 경우 다른 페이지로 리디렉션될 수 있음.
        router.back();
      }}
    >
      <ChevronLeft size={24} />
      <Typography type="detail1">{pageLabel}</Typography>
      <div />
    </button>
  );
}

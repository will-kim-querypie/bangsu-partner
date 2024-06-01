import Link from 'next/link';
import { ChatRightDots, Images } from 'react-bootstrap-icons';
import { FLAGSHIP_DETAILS } from '@/shared/config/flagship';
import { Typography } from '@/shared/ui/typography';
import styles from './quick-menu.module.css';
import { ResponsiveImage } from '../responsive-image';

export default function QuickMenu() {
  return (
    <aside className={styles.container}>
      <div className={styles.square} role="presentation">
        <ResponsiveImage src="/sidemenu-top.png" alt="" width={90} aspectRatio="1 / 1" />
      </div>
      <Link href="/customer/check" className={styles.square}>
        <ChatRightDots size={28} />
        <Typography type="caption1">고객상담</Typography>
      </Link>
      <Link href={`/construction-result/${FLAGSHIP_DETAILS[0].key}`} className={styles.square}>
        <Images size={28} />
        <Typography type="caption1">시공사진</Typography>
      </Link>
    </aside>
  );
}

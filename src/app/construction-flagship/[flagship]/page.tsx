import { Flagship, FLAGSHIP_DETAILS } from '@/shared/config/flagship';
import { Empty } from '@/shared/ui/empty';
import { Typography } from '@/shared/ui/typography';
import styles from './page.module.css';

export default function FlagShipPage({ params }: { params: { flagship: Flagship } }) {
  const flagShipDetail = FLAGSHIP_DETAILS.find(detail => detail.key === params.flagship);

  if (!flagShipDetail?.description) {
    return (
      <main>
        <Empty />
      </main>
    );
  }
  return (
    <main>
      <Typography type="detail1" className={styles.description}>
        {flagShipDetail?.description}
      </Typography>
    </main>
  );
}

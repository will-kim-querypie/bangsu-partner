import { Flagship, FLAGSHIP_DETAILS } from '@/shared/config/flagship';
import { Typography } from '@/shared/ui/typography';
import styles from './page.module.css';

export default function FlagShipPage({ params }: { params: { flagship: Flagship } }) {
  const flagShipDetail = FLAGSHIP_DETAILS.find(detail => detail.key === params.flagship);

  return (
    <main>
      <Typography type="detail1" className={styles.description}>
        {flagShipDetail?.description}
      </Typography>
    </main>
  );
}

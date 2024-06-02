import { flagshipInfoDict } from '@/app/construction-flagship/[flagship]/info-dict';
import { Flagship } from '@/shared/config/flagship';
import { Empty } from '@/shared/ui/empty';
import { Typography } from '@/shared/ui/typography';
import styles from './page.module.css';

export default function FlagShipPage({ params }: { params: { flagship: Flagship } }) {
  const info = flagshipInfoDict[params.flagship];

  if (!info.description) {
    return (
      <main>
        <Empty />
      </main>
    );
  }
  return (
    <main>
      <Typography type="detail1" className={styles.description}>
        {info.description}
      </Typography>
    </main>
  );
}

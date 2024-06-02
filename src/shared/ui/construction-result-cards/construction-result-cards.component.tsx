import Image from 'next/image';
import Link from 'next/link';
import { Search as SearchIcon } from 'react-bootstrap-icons';
import clsx from 'clsx';
import { Typography } from '@/shared/ui/typography';
import styles from './construction-result-cards.module.css';

type Card = {
  href: string;
  imageSrc: string;
  title: string;
  className?: string;
};

export default function ConstructionResultCards({ cards }: { cards: Card[] }) {
  return (
    <ul className={styles.list}>
      {cards.map(card => (
        <li key={card.title}>
          <Link href={card.href} className={clsx(styles.link, card.className)}>
            <div className={styles.processRateFloatTag}>
              <Typography type="caption3">공정률 100%</Typography>
            </div>

            <div className={styles.imageWrap}>
              <Image
                src={card.imageSrc}
                alt="construction-result-preview"
                fill
                sizes="320px"
                loading="lazy"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className={styles.image}
              />
              <div className={styles.imageOverWrap}>
                <Typography type="detail1">{card.title}</Typography>
                <SearchIcon />
              </div>
            </div>

            <div className={styles.content}>
              <Typography type="body3" overflow="ellipsis">
                {card.title}
              </Typography>

              <div className={styles.processRate}>
                <Typography type="caption2" className={styles.processRateLabel}>
                  공정률
                </Typography>
                <Typography type="caption3" className={styles.processRateBar}>
                  100%
                </Typography>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

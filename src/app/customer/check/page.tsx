import { ComponentProps } from 'react';
import clsx from 'clsx';
import { linkList } from '@/app/customer/check/link-list';
import { Typography } from '@/shared/ui/typography';
import styles from './page.module.css';

export default function CheckPage() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.comment}>
          <Typography type="body1">24시간 상담 가능</Typography>
          <Typography type="detail1" className={styles.commentSubText}>
            주말, 공휴일 포함
          </Typography>
        </div>
        <div className={styles.cards}>
          {linkList.map(({ title, description, icon, className, href }) => {
            const anchorProps: ComponentProps<'a'> = {
              className: clsx(styles.cardLink, className),
              href,
            };
            if (href.startsWith('http')) {
              anchorProps.target = '_blank';
              anchorProps.rel = 'noopener noreferrer';
            }

            return (
              <a key={title} {...anchorProps}>
                <div className={styles.cardLinkInner}>
                  {icon}
                  <Typography type="body3">{title}</Typography>
                  <Typography type="detail1" className={styles.cardLinkSubText}>
                    # {description}
                  </Typography>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}

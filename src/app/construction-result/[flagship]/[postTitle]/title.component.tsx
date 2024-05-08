'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'react-bootstrap-icons';
import { Button } from '@/shared/ui/button';
import { Typography } from '@/shared/ui/typography';
import styles from './title.module.css';

type TitleProps = {
  backUrl: string;
  content: string;
};

export default function Title({ backUrl, content }: TitleProps) {
  const router = useRouter();

  return (
    <>
      <Typography className={styles.textTitle} type="title2" overflow="break-words">
        {content}
      </Typography>

      <Button
        className={styles.buttonTitle}
        typo="title2"
        variant="transparent"
        icon={<ArrowLeft style={{ width: 24, height: 24 }} />}
        onClick={() => {
          router.push(backUrl);
        }}
        style={{
          padding: 0,
        }}
      >
        {content}
      </Button>
    </>
  );
}

'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'react-bootstrap-icons';
import { Button } from '@/shared/ui/button';
import styles from './back-to-list-button.module.css';

type BackToListButtonProps = {
  backUrl: string;
};

export default function BackToListButton({ backUrl }: BackToListButtonProps) {
  const router = useRouter();

  return (
    <div className={styles.center}>
      <Button
        variant="outline"
        color="secondary"
        icon={<ArrowLeft style={{ width: 16, height: 16 }} />}
        onClick={() => {
          router.push(backUrl);
        }}
      >
        목록으로 돌아가기
      </Button>
    </div>
  );
}

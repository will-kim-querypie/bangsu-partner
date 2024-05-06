'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'react-bootstrap-icons';
import { Button } from '@/shared/ui/button';

type BackButtonProps = {
  backUrl: string;
  content: string;
};

export default function BackButton({ backUrl, content }: BackButtonProps) {
  const router = useRouter();

  return (
    <Button
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
  );
}

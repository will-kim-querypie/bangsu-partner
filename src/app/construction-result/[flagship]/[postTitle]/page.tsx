'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'react-bootstrap-icons';
import { getPostDetail } from '@/shared/api/posts/controller';
import { Flagship } from '@/shared/config/flagship';
import { Button } from '@/shared/ui/button';
import { Typography } from '@/shared/ui/typography';
import ImageGallery from './image-gallery.component';
import styles from './page.module.css';

export default function ConstructionResultDetailPage({
  params,
}: {
  params: { flagship: Flagship; postTitle: string };
}) {
  const router = useRouter();

  const postTitle = decodeURIComponent(params.postTitle);
  const { images } = getPostDetail(params.flagship, postTitle);
  const backUrl = `/construction-result/${params.flagship}`;

  return (
    <main>
      <div className={styles.header}>
        <Typography className={styles.textTitle} type="title2" overflow="breakWords">
          {postTitle}
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
          {postTitle}
        </Button>
      </div>

      <ImageGallery images={images} />

      <div className={styles.floatRight}>
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
    </main>
  );
}

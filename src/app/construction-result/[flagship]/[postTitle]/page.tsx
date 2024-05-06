import Image from 'next/image';
import type { PostDetailDto } from '@/app/api/flagship/[flagship]/[postTitle]/route';
import nextApiFetcher from '@/shared/api/nextApiFetcher';
import { Flagship } from '@/shared/config/flagship';
import BackButton from './back-button.component';
import styles from './page.module.css';

export default async function ConstructionResultDetailPage({
  params,
}: {
  params: { flagship: Flagship; postTitle: string };
}) {
  const { images }: PostDetailDto = await nextApiFetcher(`flagship/${params.flagship}/${params.postTitle}`);

  return (
    <main>
      <div className={styles.header}>
        <BackButton backUrl={`/construction-result/${params.flagship}`} content={params.postTitle} />
      </div>

      <ul className={styles.images}>
        {images.map(image => (
          <li key={image.src} className={styles.image}>
            <Image
              src={image.src}
              alt={image.alt}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}

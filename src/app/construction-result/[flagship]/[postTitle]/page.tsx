import type { PostDetailDto } from '@/app/api/flagship/[flagship]/[postTitle]/route';
import nextApiFetcher from '@/shared/api/nextApiFetcher';
import { Flagship } from '@/shared/config/flagship';
import BackToListButton from './back-to-list-button.component';
import ImageGallery from './image-gallery.component';
import styles from './page.module.css';
import Title from './title.component';

export const dynamic = 'force-dynamic';

export default async function ConstructionResultDetailPage({
  params,
}: {
  params: { flagship: Flagship; postTitle: string };
}) {
  const { images }: PostDetailDto = await nextApiFetcher(`flagship/${params.flagship}/${params.postTitle}`);
  const backUrl = `/construction-result/${params.flagship}`;

  return (
    <main>
      <div className={styles.header}>
        <Title backUrl={backUrl} content={decodeURIComponent(params.postTitle)} />
      </div>

      <ImageGallery images={images} />

      <BackToListButton backUrl={backUrl} />
    </main>
  );
}

import { getPostDetail } from '@/shared/api/posts/controller';
import { Flagship } from '@/shared/config/flagship';
import BackToListButton from './back-to-list-button.component';
import ImageGallery from './image-gallery.component';
import styles from './page.module.css';
import Title from './title.component';

export default function ConstructionResultDetailPage({
  params,
}: {
  params: { flagship: Flagship; postTitle: string };
}) {
  const postTitle = decodeURIComponent(params.postTitle);
  const { images } = getPostDetail(params.flagship, postTitle);
  const backUrl = `/construction-result/${params.flagship}`;

  return (
    <main>
      <div className={styles.header}>
        <Title backUrl={backUrl} content={postTitle} />
      </div>

      <ImageGallery images={images} />

      <BackToListButton backUrl={backUrl} />
    </main>
  );
}

import type { PostListDto } from '@/app/api/flagship/[flagship]/posts/route';
import fetcher from '@/shared/api/fetcher';
import { Flagship } from '@/shared/config/flagship';
import { Typography } from '@/shared/ui/typography';
import styles from './page.module.css';

export default async function ConstructionResultPage({ params }: { params: { flagship: Flagship } }) {
  const { posts }: PostListDto = await fetcher(`/api/flagship/${params.flagship}/posts`);

  return (
    <main>
      <ul className={styles.posts}>
        {posts.map(post => (
          <li
            key={post.title}
            role="button"
            className={styles.post}
            style={{
              background: `url(${post.firstImage.src}) no-repeat center/cover`,
            }}
          >
            <div className={styles.postTitleWrap}>
              <Typography type="detail1" className={styles.postTitle}>
                {post.title}
              </Typography>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

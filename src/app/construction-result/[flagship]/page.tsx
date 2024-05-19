import Link from 'next/link';
import { getPostList } from '@/shared/api/posts/controller';
import { Flagship } from '@/shared/config/flagship';
import { Typography } from '@/shared/ui/typography';
import styles from './page.module.css';

export default function ConstructionResultPage({ params }: { params: { flagship: Flagship } }) {
  const { posts } = getPostList(params.flagship);

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
            <Link href={`/construction-result/${params.flagship}/${post.title}`} className={styles.postTitleWrap}>
              <Typography type="detail1" className={styles.postTitle}>
                {post.title}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

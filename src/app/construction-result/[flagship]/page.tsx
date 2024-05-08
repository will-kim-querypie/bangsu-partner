import Link from 'next/link';
import type { PostListDto } from '@/app/api/flagship/[flagship]/posts/route';
import nextApiFetcher from '@/shared/api/nextApiFetcher';
import { Flagship } from '@/shared/config/flagship';
import { Typography } from '@/shared/ui/typography';
import styles from './page.module.css';

export const dynamic = 'force-dynamic';

export default async function ConstructionResultPage({ params }: { params: { flagship: Flagship } }) {
  const { posts }: PostListDto = await nextApiFetcher(`flagship/${params.flagship}/posts`);

  return (
    <main>
      <ul className={styles.posts}>
        {posts.map(post => (
          <li
            key={post.title}
            role="button"
            className={styles.post}
            style={{
              // NOTE: 공백이 포함된 문자는 url에 사용할 수 없음
              background: `url(${post.firstImage.src.replace(/ /g, '%20')}) no-repeat center/cover`,
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

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { getPostList } from '@/shared/api/posts/controller';
import { Flagship } from '@/shared/config/flagship';
import { Empty } from '@/shared/ui/empty';
import { Search } from '@/shared/ui/search';
import { Typography } from '@/shared/ui/typography';
import styles from './page.module.css';

export default function ConstructionResultPage({ params }: { params: { flagship: Flagship } }) {
  const { posts } = getPostList(params.flagship);
  const [search, setSearch] = useState('');

  const filteredPosts = (() => {
    if (!search) return posts;

    return posts.filter(({ title }) => {
      return title.includes(search);
    });
  })();

  if (!posts.length) {
    return (
      <main>
        <Empty />
      </main>
    );
  }
  return (
    <main>
      <Search resultLength={filteredPosts.length} onChange={setSearch} />

      {!filteredPosts.length && <Empty description="검색 결과가 없습니다." />}
      {!!filteredPosts.length && (
        <ul className={styles.posts}>
          {filteredPosts.map(post => (
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
      )}
    </main>
  );
}

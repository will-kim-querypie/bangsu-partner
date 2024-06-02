'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Search as SearchIcon } from 'react-bootstrap-icons';
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
            <li key={post.title} className={styles.post}>
              <Link href={`/construction-result/${params.flagship}/${post.title}`} className={styles.postLink}>
                <div className={styles.processRateFloatTag}>
                  <Typography type="caption3">공정률 100%</Typography>
                </div>

                <div className={styles.postImageWrap}>
                  <Image
                    src={post.firstImage.src}
                    alt="construction-result-preview"
                    fill
                    sizes="320px"
                    loading="lazy"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    className={styles.postImage}
                  />
                  <div className={styles.postImageOverWrap}>
                    <Typography type="detail1">{post.title}</Typography>
                    <SearchIcon />
                  </div>
                </div>

                <div className={styles.postContent}>
                  <Typography type="body3" overflow="ellipsis">
                    {post.title}
                  </Typography>

                  <div className={styles.processRate}>
                    <Typography type="caption2" className={styles.processRateLabel}>
                      공정률
                    </Typography>
                    <Typography type="caption3" className={styles.processRateBar}>
                      100%
                    </Typography>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

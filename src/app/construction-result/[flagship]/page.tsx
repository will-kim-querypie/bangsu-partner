'use client';

import { useState } from 'react';
import { getPostList } from '@/shared/api/posts/controller';
import { Flagship } from '@/shared/config/flagship';
import { ConstructionResultCards } from '@/shared/ui/construction-result-cards';
import { Empty } from '@/shared/ui/empty';
import { Search } from '@/shared/ui/search';

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
        <ConstructionResultCards
          cards={filteredPosts.map(post => ({
            href: `/construction-result/${params.flagship}/${post.title}`,
            imageSrc: post.firstImage.src,
            title: post.title,
          }))}
        />
      )}
    </main>
  );
}

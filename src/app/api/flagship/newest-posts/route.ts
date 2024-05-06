import { NextResponse } from 'next/server';
import { FlagshipDetail } from '@/shared/config/flagship';
import * as FlagshipPosts from '@/shared/config/flagship-posts';

type PostPreview = {
  title: FlagshipPosts.Post['title'];
  firstImage: FlagshipPosts.Image;
};
export type NewestPostListDto = {
  flagshipDetail: FlagshipDetail;
  newestPost?: PostPreview;
}[];

export const GET = async () => {
  const bundles = await FlagshipPosts.getAll();

  const response: NewestPostListDto = bundles.map(bundle => ({
    flagshipDetail: bundle.flagshipDetail,
    newestPost: bundle.posts[0] && {
      title: bundle.posts[0].title,
      firstImage: bundle.posts[0].images[0],
    },
  }));

  return NextResponse.json(response, { status: 200 });
};

import { NextResponse } from 'next/server';
import * as PostsService from '@/shared/api/posts.service';
import { FlagshipDetail } from '@/shared/config/flagship';

type PostPreview = {
  title: PostsService.Post['title'];
  firstImage: PostsService.Image;
};
export type NewestPostListDto = {
  flagshipDetail: FlagshipDetail;
  newestPost?: PostPreview;
}[];

export const GET = async () => {
  const bundles = await PostsService.getAll();

  const response: NewestPostListDto = bundles.map(bundle => ({
    flagshipDetail: bundle.flagshipDetail,
    newestPost: bundle.posts[0] && {
      title: bundle.posts[0].title,
      firstImage: bundle.posts[0].images[0],
    },
  }));

  return NextResponse.json(response, { status: 200 });
};

import { NextResponse } from 'next/server';
import { isFlagship, FlagshipDetail } from '@/shared/config/flagship';
import * as FlagshipPosts from '@/shared/config/flagship-posts';

export type PostDetailDto = {
  flagshipDetail: FlagshipDetail;
  images: FlagshipPosts.Image[];
};

export const GET = async (_request: Request, { params }: { params: { flagship: string; postTitle: string } }) => {
  if (!isFlagship(params.flagship)) {
    return new Response('Unknown flagship', { status: 404 });
  }
  if (!(await FlagshipPosts.isValidPostTitle(params.flagship, params.postTitle))) {
    return new Response('Unknown post title', { status: 404 });
  }

  const bundle = await FlagshipPosts.get(params.flagship);
  const response: PostDetailDto = {
    flagshipDetail: bundle.flagshipDetail,
    images: bundle.posts.find(post => post.title === params.postTitle)?.images ?? [],
  };

  return NextResponse.json(response, { status: 200 });
};

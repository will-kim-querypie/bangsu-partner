import { NextResponse } from 'next/server';
import * as PostsService from '@/shared/api/posts.service';
import { isFlagship, FlagshipDetail } from '@/shared/config/flagship';

export type PostDetailDto = {
  flagshipDetail: FlagshipDetail;
  images: PostsService.Image[];
};

export const GET = async (_request: Request, { params }: { params: { flagship: string; postTitle: string } }) => {
  if (!isFlagship(params.flagship)) {
    return new Response('Unknown flagship', { status: 404 });
  }
  if (!(await PostsService.isValidPostTitle(params.flagship, params.postTitle))) {
    return new Response('Unknown post title', { status: 404 });
  }

  const bundle = await PostsService.get(params.flagship);
  const response: PostDetailDto = {
    flagshipDetail: bundle.flagshipDetail,
    images: bundle.posts.find(post => post.title === params.postTitle)?.images ?? [],
  };

  return NextResponse.json(response, { status: 200 });
};

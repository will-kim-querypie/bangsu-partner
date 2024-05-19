import { NextResponse } from 'next/server';
import * as PostsService from '@/shared/api/posts.service';
import { isFlagship, FlagshipDetail } from '@/shared/config/flagship';

type PostPreview = {
  title: PostsService.Post['title'];
  firstImage: PostsService.Image;
};
export type PostListDto = {
  flagshipDetail: FlagshipDetail;
  posts: PostPreview[];
};

export const GET = async (_request: Request, { params }: { params: { flagship: string } }) => {
  if (!isFlagship(params.flagship)) {
    return new Response('Unknown flagship', { status: 404 });
  }

  const bundle = await PostsService.get(params.flagship);
  const response: PostListDto = {
    flagshipDetail: bundle.flagshipDetail,
    posts: bundle.posts.map(post => ({
      title: post.title,
      firstImage: post.images[0],
    })),
  };

  return NextResponse.json(response, { status: 200 });
};

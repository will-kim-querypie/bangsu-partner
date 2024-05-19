import { cached } from './cached';
import * as PostsService from './service';
import { FlagshipDetail, isFlagship } from '../../config/flagship';

type PostPreview = {
  title: PostsService.Post['title'];
  firstImage: PostsService.Image;
};
type NewestPostListDto = {
  flagshipDetail: FlagshipDetail;
  newestPost?: PostPreview;
}[];
export function getNewestPostList(): NewestPostListDto {
  return cached.map(bundle => ({
    flagshipDetail: bundle.flagshipDetail,
    newestPost: bundle.posts[0] && {
      title: bundle.posts[0].title,
      firstImage: bundle.posts[0].images[0],
    },
  }));
}

type PostListDto = {
  flagshipDetail: FlagshipDetail;
  posts: PostPreview[];
};
export function getPostList(flagship: string): PostListDto {
  if (!isFlagship(flagship)) {
    throw new Error('Unknown flagship');
  }

  const bundle = cached.find(bundle => bundle.flagshipDetail.key === flagship) as PostsService.Bundle;
  return {
    flagshipDetail: bundle.flagshipDetail,
    posts: bundle.posts.map(post => ({
      title: post.title,
      firstImage: post.images[0],
    })),
  };
}

type PostDetailDto = {
  flagshipDetail: FlagshipDetail;
  images: PostsService.Image[];
};
export function getPostDetail(flagship: string, postTitle: string): PostDetailDto {
  if (!isFlagship(flagship)) {
    throw new Error('Unknown flagship');
  }

  const bundle = cached.find(bundle => bundle.flagshipDetail.key === flagship) as PostsService.Bundle;
  return {
    flagshipDetail: bundle.flagshipDetail,
    images: bundle.posts.find(post => post.title === postTitle)?.images ?? [],
  };
}

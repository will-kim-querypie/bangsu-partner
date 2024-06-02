import { cached } from './cached';
import * as PostsService from './service';
import { Flagship, isFlagship } from '../../config/flagship';

type PostPreview = {
  title: PostsService.Post['title'];
  firstImage: PostsService.Image;
};
type NewestPostListDto = {
  flagship: Flagship;
  newestPost?: PostPreview;
}[];
export function getNewestPostList(): NewestPostListDto {
  return cached.map(bundle => ({
    flagship: bundle.flagship,
    newestPost: bundle.posts[0] && {
      title: bundle.posts[0].title,
      firstImage: bundle.posts[0].images[0],
    },
  }));
}

type PostListDto = {
  flagship: Flagship;
  posts: PostPreview[];
};
export function getPostList(flagship: string, limit?: number): PostListDto {
  if (!isFlagship(flagship)) {
    throw new Error('Unknown flagship');
  }

  const bundle = cached.find(bundle => bundle.flagship === flagship) as PostsService.Bundle;
  const allPosts = bundle.posts.map(post => ({
    title: post.title,
    firstImage: post.images[0],
  }));

  return {
    flagship: bundle.flagship,
    posts: limit ? allPosts.slice(0, limit) : allPosts,
  };
}

export type PostDetailDto = {
  flagship: Flagship;
  images: PostsService.Image[];
};
export function getPostDetail(flagship: string, postTitle: string): PostDetailDto {
  if (!isFlagship(flagship)) {
    throw new Error('Unknown flagship');
  }

  const bundle = cached.find(bundle => bundle.flagship === flagship) as PostsService.Bundle;

  return {
    flagship: bundle.flagship,
    images: bundle.posts.find(post => post.title === postTitle)?.images ?? [],
  };
}

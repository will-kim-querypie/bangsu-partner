import fs from 'fs';
import { Record } from 'react-bootstrap-icons';
import { glob } from 'glob';
import { Flagship, FLAGSHIP_DETAILS, FlagshipDetail, isFlagship } from './flagship';

const DIRNAME = `${process.cwd()}/public/flagships`;
const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'jfif', 'png', 'webp', 'bmp'];
const IMAGE_EXTENSIONS_MAP = IMAGE_EXTENSIONS.reduce(
  (acc, ext) => ({ ...acc, [ext]: true }),
  {} as Record<string, boolean>,
);

export type Image = {
  src: string;
  alt: string;
};
export type Post = {
  title: string;
  images: Image[]; // cannot be empty
};
export type Bundle = {
  flagshipDetail: FlagshipDetail;
  posts: Post[]; // can be empty
};

export async function get(flagship: Flagship): Promise<Bundle> {
  const paths = await glob(`${DIRNAME}/${flagship}/**/*.{${IMAGE_EXTENSIONS.join(',')}}`);

  return group(sortByNewest(paths)).find(bundle => bundle.flagshipDetail.key === flagship) as Bundle;
}

export async function getAll(): Promise<Bundle[]> {
  const paths = await glob(`${DIRNAME}/**/*.{${IMAGE_EXTENSIONS.join(',')}}`);

  return group(sortByNewest(paths));
}

export async function isValidPostTitle(flagship: Flagship, postTitle: string): Promise<boolean> {
  const paths = await glob(`${DIRNAME}/${flagship}/${postTitle}/*.{${IMAGE_EXTENSIONS.join(',')}}`);

  return paths.length > 0;
}

function sortByNewest(paths: string[]): string[] {
  return paths
    .map(name => ({ name, ctime: fs.statSync(name).ctime }))
    .sort((a, b) => +b.ctime - +a.ctime)
    .map(({ name }) => name);
}

/**
 * @param paths - .../{flagship}/{postTitle}/{imageName}.{ext} 구조의 경로 목록이 와야함
 */
function group(paths: string[]): Bundle[] {
  const result: Bundle[] = [];
  const dict = Object.values(Flagship).reduce((acc, flagship) => {
    acc[flagship] = {};
    return acc;
  }, {} as Record<Flagship, Record<Post['title'], Image[]>>);

  for (const path of paths) {
    const { flagship, postTitle, imageName } = dividePath(path);

    if (!isFlagship(flagship) || !validateImageExtension(imageName)) {
      continue;
    }

    if (!dict[flagship][postTitle]) {
      dict[flagship][postTitle] = [];
    }
    const image = imageFactory(path, postTitle, imageName);
    dict[flagship][postTitle].push(image);
  }

  for (const [flagship, postImagesDict] of Object.entries(dict)) {
    const flagshipDetail = FLAGSHIP_DETAILS.find(detail => detail.key === flagship);
    if (!flagshipDetail) {
      continue;
    }

    const posts: Post[] = [];
    for (const [title, images] of Object.entries(postImagesDict)) {
      posts.push({ title, images });
    }

    result.push({ flagshipDetail: flagshipDetail, posts: posts });
  }

  return result;
}

function dividePath(fullPath: string): { flagship: string; postTitle: string; imageName: string } {
  const parts = fullPath.split('/');

  const imageName = parts.pop() as string;
  const postTitle = parts.pop() as string;
  const flagship = parts.pop() as string;

  return { flagship, postTitle, imageName };
}

function validateImageExtension(filename: string): boolean {
  const extension = filename.split('.').pop();
  return !!extension && !!IMAGE_EXTENSIONS_MAP[extension];
}

function imageFactory(fullPath: string, postTitle: string, imageName: string): Image {
  return {
    src: fullPath.split('/public').pop() as string,
    alt: `${postTitle}-${imageName}`,
  };
}

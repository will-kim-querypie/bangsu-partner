import { glob } from 'glob';
import sortPaths from './sort-paths';
import { Flagship, isFlagship } from '../../config/flagship';

const DIRNAME = `${process.cwd()}/public/construction-result`;
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
  flagship: Flagship;
  posts: Post[]; // can be empty
};

export async function getAll() {
  const paths = await glob(`${DIRNAME}/**/*.{${IMAGE_EXTENSIONS.join(',')}}`);
  const normalizedPaths = paths.map(path => path.normalize('NFC'));

  return group(sortPaths(normalizedPaths));
}

/**
 * @param paths - .../{flagship}/{postTitle}/{imageName}.{ext} 구조의 경로 목록이 와야함
 */
function group(paths: string[]): Bundle[] {
  const result: Bundle[] = [];
  const dict = new Map<Flagship, Map<Post['title'], Image[]>>();

  Object.values(Flagship).forEach(flagship => {
    dict.set(flagship, new Map<Post['title'], Image[]>());
  });

  for (const path of paths) {
    const { flagship, postTitle, imageName } = dividePath(path);

    if (!isFlagship(flagship) || !validateImageExtension(imageName)) {
      continue;
    }

    const postImages = dict.get(flagship);
    if (!postImages) {
      continue;
    }

    if (!postImages.has(postTitle)) {
      postImages.set(postTitle, []);
    }

    const images = postImages.get(postTitle);
    if (images) {
      const image = imageFactory(path, postTitle, imageName);
      images.push(image);
    }
  }

  for (const [flagship, postImagesDict] of dict.entries()) {
    const posts: Post[] = [];
    for (const [title, images] of postImagesDict.entries()) {
      posts.push({ title, images });
    }

    result.push({ flagship, posts });
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
    src: fullPath.split('/public').pop() as string, // Next.js의 Image가 자동으로 URL 인코딩을 처리합니다
    alt: `${postTitle}-${imageName}`,
  };
}

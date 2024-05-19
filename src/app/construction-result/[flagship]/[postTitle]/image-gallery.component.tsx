'use client';

import { useMemo } from 'react';
import ReactImageGallery, { type ReactImageGalleryItem } from 'react-image-gallery';
import type { PostDetailDto } from '@/shared/api/posts/controller';
import 'react-image-gallery/styles/css/image-gallery.css';

export default function ImageGallery({ images }: { images: PostDetailDto['images'] }) {
  const galleryImages = useMemo<ReactImageGalleryItem[]>(() => {
    return images.map(image => ({
      original: image.src,
      thumbnail: image.src,
      originalAlt: image.alt,
      thumbnailAlt: image.alt,
    }));
  }, [images]);

  return (
    <ReactImageGallery
      items={galleryImages}
      thumbnailPosition="top"
      showPlayButton={false}
      disableThumbnailScroll={false}
    />
  );
}

import Image from 'next/image';
import { CSSProperties } from 'react';
import styles from './responsive-image.module.css';

type LogoProps = {
  src: string;
  alt: string;
  width: CSSProperties['width'];
  aspectRatio: string;
  quality?: number;
  priority?: boolean;
};

export default function ResponsiveImage({ src, alt, width, aspectRatio, quality, priority }: LogoProps) {
  return (
    <div className={styles.container} style={{ width, aspectRatio }}>
      <Image src={src} alt={alt} className={styles.image} quality={quality} fill priority={priority} />
    </div>
  );
}

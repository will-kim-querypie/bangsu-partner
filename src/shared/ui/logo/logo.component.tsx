import Image from 'next/image';
import styles from './logo.module.css';

type LogoProps = {
  width: number;
};

export default function Logo({ width }: LogoProps) {
  return (
    <div className={styles.container} style={{ width }}>
      <Image src="/logo.png" alt="logo" className={styles.image} quality={100} fill priority />
    </div>
  );
}

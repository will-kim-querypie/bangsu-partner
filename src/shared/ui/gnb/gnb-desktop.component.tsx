import Link from 'next/link';
import GNBDesktopMenu from './gnb-desktop-menu.component';
import styles from './gnb-desktop.module.css';
import { Logo } from '../logo';

export default function GNBDesktop() {
  return (
    <nav className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Logo width={200} />
      </Link>

      <GNBDesktopMenu />
    </nav>
  );
}

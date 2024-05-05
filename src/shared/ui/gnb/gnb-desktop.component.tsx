import styles from './gnb-desktop.module.css';
import { Logo } from '../logo';

export default function GNBDesktop() {
  return (
    <div className={styles.container}>
      <Logo width={120} />
    </div>
  );
}

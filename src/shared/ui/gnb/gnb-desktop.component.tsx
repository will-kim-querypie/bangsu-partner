import Logo from '@/shared/ui/logo/logo.component';
import styles from './gnb-desktop.module.css';

export default function GNBDesktop() {
  return (
    <div className={styles.container}>
      <Logo width={120} />
    </div>
  );
}

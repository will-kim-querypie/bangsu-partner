import GNBDesktop from './gnb-desktop.component';
import GNBMobile from './gnb-mobile.component';
import styles from './gnb.module.css';

export default function GNB() {
  return (
    <div className={styles.container}>
      <GNBMobile />
      <GNBDesktop />
    </div>
  );
}

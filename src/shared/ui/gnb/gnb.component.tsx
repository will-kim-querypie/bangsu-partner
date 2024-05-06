import clsx from 'clsx';
import GNBDesktop from './gnb-desktop.component';
import GNBMobile from './gnb-mobile.component';
import styles from './gnb.module.css';

export default function GNB() {
  return (
    <header className={styles.container}>
      <div className={clsx('width-limit', styles.innerContainer)}>
        <GNBMobile />
        <GNBDesktop />
      </div>
    </header>
  );
}

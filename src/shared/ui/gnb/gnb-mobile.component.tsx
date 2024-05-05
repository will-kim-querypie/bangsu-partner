import Link from 'next/link';
import { TelephoneOutboundFill } from 'react-bootstrap-icons';
import GnbMobileMenu from './gnb-mobile-menu.component';
import styles from './gnb-mobile.module.css';
import { KAKAOTALK_OPEN_CHAT, PHONE } from '../../config/company';
import { Logo } from '../logo';
import { ResponsiveImage } from '../responsive-image';

export default function GNBMobile() {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <a href={`tel:${PHONE.replace(/-/g, '')}`}>
          <TelephoneOutboundFill size={20} />
        </a>
        <a href={KAKAOTALK_OPEN_CHAT} target="_blank" rel="noreferrer noopener">
          <ResponsiveImage src="/kakaotalk.svg" alt="kakaotalk-icon" width={24} aspectRatio="1/1" />
        </a>
      </div>

      <Link href="/" className={styles.logo}>
        <Logo width={160} />
      </Link>

      <GnbMobileMenu />
    </div>
  );
}

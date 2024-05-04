'use client';

import Link from 'next/link';
import { List, TelephoneOutboundFill } from 'react-bootstrap-icons';
import { KAKAOTALK_OPEN_CHAT, PHONE } from '@/shared/config/company';
import useDisclosure from '@/shared/hooks/use-disclosure.hook';
import { ResponsiveImage } from '@/shared/ui/responsive-image';
import styles from './gnb-mobile.module.css';
import { Button } from '../button';
import { Drawer } from '../drawer';
import { Logo } from '../logo';

export default function GNBMobile() {
  const { open, onToggle } = useDisclosure();

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

      <Button onClick={onToggle} className={styles.hamburger} icon={<List size={28} />} variant="transparent" />
      <Drawer id="gnb-drawer" open={open} onClose={onToggle}>
        WIP
      </Drawer>
    </div>
  );
}

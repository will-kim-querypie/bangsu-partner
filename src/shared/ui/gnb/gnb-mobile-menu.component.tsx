'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { CaretDownFill, List } from 'react-bootstrap-icons';
import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import getSubRoutesViewModel from '@/shared/config/sub-routes';
import { Typography } from '@/shared/ui/typography';
import styles from './gnb-mobile.module.css';
import useDisclosure from '../../lib/use-disclosure.hook';
import { Button } from '../button';
import { Drawer } from '../drawer';

const subRoutes = getSubRoutesViewModel('gnb-mobile');

export default function GnbMobileMenu() {
  const pathname = usePathname();
  const { open, onToggle, onClose } = useDisclosure();

  useEffect(() => {
    onClose();
  }, [pathname]);

  return (
    <>
      <Button onClick={onToggle} className={styles.hamburger} icon={<List size={28} />} variant="transparent" />
      <Drawer id="gnb-drawer" open={open} onClose={onToggle}>
        <div className={styles.menus}>
          {subRoutes.map(({ key, label, children }) => {
            const hasCurrentPath = children.some(child => child.path === pathname);
            return (
              <Disclosure key={key} defaultOpen={hasCurrentPath}>
                <Disclosure.Button
                  className={clsx(styles.menuButton, {
                    [styles.menuButtonActive]: hasCurrentPath,
                  })}
                >
                  <Typography type="detail1">{label}</Typography>
                  <CaretDownFill className={styles.caretIcon} />
                </Disclosure.Button>

                <Disclosure.Panel className={styles.menuPanel}>
                  {children.map(({ key, label, path }) => (
                    <Link
                      key={key}
                      href={path}
                      className={clsx(styles.menuLink, {
                        [styles.menuLinkActive]: path === pathname,
                      })}
                    >
                      {label}
                    </Link>
                  ))}
                </Disclosure.Panel>
              </Disclosure>
            );
          })}
        </div>
      </Drawer>
    </>
  );
}

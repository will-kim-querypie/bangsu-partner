import React, { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
import { XLg } from 'react-bootstrap-icons';
import clsx from 'clsx';
import styles from './drawer.module.css';
import { Button } from '../button';

type Direction = 'left' | 'right' | 'top' | 'bottom';

type DrawerProps = {
  id: string;
  children?: React.ReactNode;
  open: boolean;
  onClose?: () => void;
  size?: number | string;
  direction?: Direction;
  lockBackgroundScroll?: boolean;
  overlayClassName?: string;
  className?: string;
};

export default function Drawer({
  id,
  children,
  open,
  onClose = () => {},
  size = 300,
  direction = 'left',
  lockBackgroundScroll = false,
  overlayClassName,
  className,
}: DrawerProps) {
  const bodyRef = useRef<HTMLBodyElement | null>(null);

  useEffect(() => {
    const updatePageScroll = () => {
      bodyRef.current = window.document.querySelector('body');
      if (bodyRef.current && lockBackgroundScroll) {
        bodyRef.current.style.overflow = open ? 'hidden' : '';
      }
    };
    updatePageScroll();
  }, [open]);

  return (
    <>
      <input id={id} type="checkbox" className={styles.checkbox} checked={open} onChange={onClose} />
      <label htmlFor={id} className={clsx(styles.overlay, overlayClassName)}></label>

      <nav role="navigation" style={getDirectionStyle(direction, size)} className={clsx(styles.container, className)}>
        <header className={styles.header}>
          <Button
            className={styles.headerCloseButton}
            icon={<XLg size={24} />}
            variant="transparent"
            onClick={onClose}
          />
        </header>

        {children}
      </nav>
    </>
  );
}

type DirectionStyle = Pick<CSSProperties, 'top' | 'left' | 'right' | 'bottom' | 'width' | 'height' | 'transform'>;
const getDirectionStyle = (dir: Direction, size?: number | string): DirectionStyle => {
  const directionStyle: Record<Direction, DirectionStyle> = {
    left: {
      top: 0,
      left: 0,
      transform: 'translate3d(-100%, 0, 0)',
      width: size,
      height: '100vh',
    },
    right: {
      top: 0,
      right: 0,
      transform: 'translate3d(100%, 0, 0)',
      width: size,
      height: '100vh',
    },
    bottom: {
      left: 0,
      right: 0,
      bottom: 0,
      transform: 'translate3d(0, 100%, 0)',
      width: '100%',
      height: size,
    },
    top: {
      left: 0,
      right: 0,
      top: 0,
      transform: 'translate3d(0, -100%, 0)',
      width: '100%',
      height: size,
    },
  };
  return directionStyle[dir];
};

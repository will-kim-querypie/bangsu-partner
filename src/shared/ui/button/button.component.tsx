'use client';

import type { ComponentProps, ReactNode } from 'react';
import { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './button.module.css';
import { Loading } from '../loading';
import { Typography, TypographyType } from '../typography';

type ButtonColor = 'primary' | 'secondary';
type ButtonVariant = 'fill' | 'outline' | 'transparent';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type ButtonHTMLProps = ComponentProps<'button'>;
type ButtonProps = Omit<ButtonHTMLProps, 'color' | 'children'> & {
  children?: string;
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
  typo?: TypographyType;
  icon?: ReactNode;
  iconPlacement?: 'left' | 'right';
  loading?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      color = 'primary',
      variant = 'fill',
      size = 'md',
      typo = typoTypeDict[size],
      icon,
      iconPlacement = 'left',
      loading,
      disabled,
      onClick,
      ...rest
    },
    ref,
  ) => {
    const iconOnly = !children && !!icon;
    const interactive = !(disabled || loading);

    return (
      <button
        ref={ref}
        className={clsx(
          styles.base,
          iconOnly ? styles.iconOnly : styles[size],
          styles[variant],
          styles[color],
          interactive && styles.interactive,
          !interactive && styles.disabled,
          className,
        )}
        disabled={disabled || loading}
        onClick={e => {
          if (!interactive) return;
          onClick?.(e);
        }}
        {...rest}
      >
        {loading ? <Loading /> : iconPlacement === 'left' && icon}
        {children && (
          <Typography type={typo} overflow="breakNormal">
            {children}
          </Typography>
        )}
        {iconPlacement === 'right' && icon}
      </button>
    );
  },
);

const typoTypeDict: Record<ButtonSize, TypographyType> = {
  xs: 'caption1',
  sm: 'caption1',
  md: 'detail1',
  lg: 'body3',
  xl: 'body1',
};

export default Button;

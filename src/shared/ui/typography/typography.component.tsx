import { JSX, forwardRef, HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './typography.module.css';

export type TypographyType =
  | 'title1'
  | 'title2'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'detail1'
  | 'detail2'
  | 'caption1'
  | 'caption2';
type TypographyOverflow = 'ellipsis' | 'break-words' | 'break-all' | 'break-normal' | 'break-keep';

type TypographyProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode;
  type?: TypographyType;
  overflow?: TypographyOverflow;
  as?: keyof Pick<JSX.IntrinsicElements, 'h1' | 'h2' | 'p' | 'span'>;
};

const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
  (
    {
      className,
      children,
      type = 'detail1',
      overflow = titleTypes.includes(type) ? 'ellipsis' : undefined,
      title = overflow === 'ellipsis' && typeof children === 'string' ? children : undefined,
      as: El = defaultElDict[type],
      ...rest
    },
    ref,
  ) => {
    return (
      <El ref={ref} title={title} className={clsx(styles[type], overflow && styles[overflow], className)} {...rest}>
        {children}
      </El>
    );
  },
);

const defaultElDict: Record<TypographyType, keyof Pick<JSX.IntrinsicElements, 'h1' | 'h2' | 'p'>> = {
  title1: 'h1',
  title2: 'h2',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  detail1: 'p',
  detail2: 'p',
  caption1: 'p',
  caption2: 'p',
};
const titleTypes: TypographyType[] = ['title1', 'title2'];

export default Typography;

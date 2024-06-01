import { forwardRef, ReactNode, InputHTMLAttributes, useRef } from 'react';
import clsx from 'clsx';

import combineRef from '@/shared/lib/combine-ref';
import styles from './input.module.css';

type ExcludedAttributes = 'suffix';
type InputProps = {
  suffix?: ReactNode;
} & Omit<InputHTMLAttributes<HTMLInputElement>, ExcludedAttributes>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, disabled = false, onChange, prefix, suffix, ...rest }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const combinedref = combineRef([ref, inputRef]);

    return (
      <span
        onClick={() => inputRef.current?.focus()}
        className={clsx(styles.inputWrapper, {
          [`${styles.disabled}`]: disabled,
        })}
      >
        {prefix}
        <input
          ref={combinedref}
          disabled={disabled}
          className={clsx(styles.input, className)}
          onChange={onChange}
          {...rest}
        />
        {suffix}
      </span>
    );
  },
);

Input.displayName = 'Input';

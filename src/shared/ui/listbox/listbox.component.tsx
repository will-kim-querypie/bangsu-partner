import { CSSProperties, Fragment } from 'react';
import { ChevronDown } from 'react-bootstrap-icons';
import { Listbox as HDLListbox, Transition } from '@headlessui/react';
import clsx from 'clsx';
import styles from './listbox.module.css';
import { Typography } from '../typography';

export type ListboxOption<T> = {
  key: string;
  label: string;
  value: T;
};
type ListboxProps<T> = {
  width: CSSProperties['width'];
  className?: string;
  value: T;
  onChange: (value: T) => void;
  options: ListboxOption<T>[];
};

export default function Listbox<T>({ width, className, value, onChange, options }: ListboxProps<T>) {
  return (
    <div style={{ width }} className={className}>
      <HDLListbox value={value} onChange={onChange}>
        <div className={styles.container}>
          <HDLListbox.Button className={styles.listButton}>
            <Typography type="caption1" overflow="ellipsis">
              {options.find(option => option.value === value)?.label ?? '선택'}
            </Typography>
            <span className={styles.iconRight}>
              <ChevronDown className={styles.icon} aria-hidden="true" />
            </span>
          </HDLListbox.Button>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <HDLListbox.Options className={styles.options}>
              {options.map((option, index) => (
                <HDLListbox.Option
                  key={option.key}
                  className={({ active }) => clsx(styles.option, { [styles.active]: active })}
                  value={option.value}
                  data-order={index + 1}
                >
                  <Typography type="caption1" overflow="ellipsis">
                    {option.label}
                  </Typography>
                </HDLListbox.Option>
              ))}
            </HDLListbox.Options>
          </Transition>
        </div>
      </HDLListbox>
    </div>
  );
}

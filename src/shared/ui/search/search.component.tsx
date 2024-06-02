import { useState, KeyboardEventHandler, ChangeEventHandler } from 'react';
import { ArrowReturnLeft } from 'react-bootstrap-icons';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Typography } from '@/shared/ui/typography';
import styles from './search.module.css';

type SearchProps = {
  resultLength: number;
  onChange: (search: string) => void;
};

export default function Search({ resultLength, onChange }: SearchProps) {
  const [localValue, setLocalValue] = useState('');

  const applySearch = () => {
    onChange(localValue);
  };
  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    setLocalValue(e.target.value);
  };
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      e.preventDefault();
      applySearch();
    }
  };

  return (
    <header className={styles.header}>
      <Typography type="detail1">
        전체 <b className={styles.count}>{resultLength}</b>건
      </Typography>
      <div className={styles.search}>
        <Input
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={styles.searchInput}
          placeholder="검색어를 입력해주세요"
          suffix={<Button icon={<ArrowReturnLeft />} onClick={applySearch} variant="transparent" />}
        />
      </div>
    </header>
  );
}

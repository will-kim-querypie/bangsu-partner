import { Search as SearchIcon } from 'react-bootstrap-icons';
import { Input } from '@/shared/ui/input';
import { Typography } from '@/shared/ui/typography';
import styles from './search.module.css';

type SearchProps = {
  resultLength: number;
  onChange: (search: string) => void;
};

export default function Search({ resultLength, onChange }: SearchProps) {
  return (
    <header className={styles.header}>
      <Typography type="detail1">
        전체 <b className={styles.count}>{resultLength}</b>건
      </Typography>
      <div className={styles.search}>
        <Input
          onChange={e => onChange(e.target.value)}
          className={styles.searchInput}
          placeholder="검색어를 입력해주세요"
          suffix={<SearchIcon />}
        />
      </div>
    </header>
  );
}

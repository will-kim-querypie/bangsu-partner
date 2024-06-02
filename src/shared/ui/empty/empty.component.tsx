import { Typography } from '@/shared/ui/typography';
import styles from './empty.module.css';

type EmptyProps = {
  description?: string;
};

export default function Empty({ description = '준비 중인 페이지입니다.' }: EmptyProps) {
  return (
    <div className={styles.container}>
      <EmptyIcon />
      <Typography type="detail1">{description}</Typography>
    </div>
  );
}

function EmptyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 1024 1024" version="1.1">
      <path
        fill="currentColor"
        d="M831.7 369.4H193.6L64 602v290.3h897.2V602L831.7 369.4zM626.6 604.6c0 62.9-51 113.9-114 113.9s-114-51-114-113.9H117.5l103.8-198h582.5l103.8 198h-281zM502.2 131h39.1v140.6h-39.1zM236.855 200.802l27.647-27.647 99.419 99.418-27.648 27.648zM667.547 272.637l99.418-99.419 27.648 27.648-99.418 99.418z"
      />
    </svg>
  );
}

import { AutoTypo } from '@/shared/ui/auto-typo';
import { Typography } from '@/shared/ui/typography';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>
            <span>고객을 위한</span>
            <span className={styles.heroTitleAuto}>
              <AutoTypo words={['최상의 서비스', '최선의 선택']} />
            </span>
          </h1>

          <Typography type="body2" className={styles.heroSubTitle}>
            안전공사! 품질공사! 책임공사!
          </Typography>
          <Typography type="detail1" className={styles.heroDescription}>
            엘코엘시즈가 고객님들께 드리는 약속입니다.
            <br />
            엘코엘시즈의 프리미엄 서비스로 고객님들의 신용과 재산을 지켜드리겠습니다.
          </Typography>
        </div>
      </div>

      <main>Home</main>
    </>
  );
}

import Link from 'next/link';
import { ArrowRight } from 'react-bootstrap-icons';
import clsx from 'clsx';
import { getNewestPostList } from '@/shared/api/posts/controller';
import { COMPANY_NAME, PHONE } from '@/shared/config/company';
import { FLAGSHIP_LABEL_DICT } from '@/shared/config/flagship';
import { AutoTypo } from '@/shared/ui/auto-typo';
import { Typography } from '@/shared/ui/typography';
import styles from './page.module.css';

export default function HomePage() {
  const posts = getNewestPostList();

  return (
    <main data-landing="true" className={styles.container}>
      <div className={styles.hero}>
        <div className={clsx(styles.overlay, styles.heroOverlay)}>
          <h1 className={styles.heroTitle}>
            <span>고객을 위한</span>
            <span className={styles.heroTitleAuto}>
              <AutoTypo words={['무료견적 서비스', '최선의 선택']} />
            </span>
          </h1>

          <Typography type="body2" className={styles.heroSubTitle}>
            안전공사! 품질공사! 책임공사!
          </Typography>
          <Typography type="detail1" className={styles.heroDescription}>
            {COMPANY_NAME}가 고객님들께 드리는 약속입니다.
            <br />
            {COMPANY_NAME}의 프리미엄 서비스로 고객님들의 공간을 안전하고 쾌적하게 만들어 드리겠습니다.
          </Typography>
          <a href={`tel:${PHONE.replace(/-/g, '')}`}>
            <Typography type="title1" className={styles.heroPhoneNumber}>
              견적문의 <span>{PHONE}</span>
            </Typography>
          </a>
        </div>
      </div>

      <div className="width-limit">
        <div className={styles.previewCards}>
          {posts.map(({ flagship, newestPost }) => (
            <Link key={`preview-${flagship}`} href={`/construction-result/${flagship}`} className={styles.previewCard}>
              <div
                role="presentation"
                className={styles.previewCardImage}
                style={{
                  backgroundImage: `url(${newestPost ? newestPost.firstImage.src : '/flagship-default.jpeg'})`,
                }}
              />
              <div className={styles.previewCardContent}>
                <Typography type="body2" className={styles.previewCardTitle}>
                  {FLAGSHIP_LABEL_DICT[flagship]}
                </Typography>
                <Typography type="caption2" className={styles.previewCardSubTitle}>
                  장마 및 태풍에도 안심하세요!
                  <br />
                  하자보증 최대5년! 전문건설면허업
                </Typography>
                <Typography type="caption3" className={styles.previewCardViewMore}>
                  <span>view more</span>
                  <ArrowRight strokeWidth={2} />
                </Typography>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/*<div className={styles.customerCardsBg}>*/}
      {/*  <div className="width-limit">*/}
      {/*    <div className={styles.customerCards}>*/}
      {/*      <div className={styles.customerCard}></div>*/}
      {/*      <div className={styles.customerCard}></div>*/}
      {/*      <div className={styles.customerCard}></div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </main>
  );
}

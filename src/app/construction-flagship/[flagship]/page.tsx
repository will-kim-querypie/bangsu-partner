import Link from 'next/link';
import { Plus } from 'react-bootstrap-icons';
import clsx from 'clsx';
import { howToUseSteps } from '@/app/construction-flagship/[flagship]/how-to-use';
import { viewModelDict } from '@/app/construction-flagship/[flagship]/view-model';
import { getPostList } from '@/shared/api/posts/controller';
import { Flagship, FLAGSHIP_LABEL_DICT } from '@/shared/config/flagship';
import { Button } from '@/shared/ui/button';
import { ConstructionResultCards } from '@/shared/ui/construction-result-cards';
import { Empty } from '@/shared/ui/empty';
import { Typography } from '@/shared/ui/typography';
import styles from './page.module.css';

const enum SectionId {
  Description = 'description',
  ConstructionSequence = 'construction-sequence',
}

const POSTS_LIMIT = 6;

export default function ConstructionResultPage({ params }: { params: { flagship: Flagship } }) {
  const info = viewModelDict[params.flagship];
  const label = FLAGSHIP_LABEL_DICT[params.flagship];
  const { posts, allPostsLength } = getPostList(params.flagship, POSTS_LIMIT);

  if (!info.description) {
    return (
      <main>
        <Empty />
      </main>
    );
  }
  return (
    <main data-landing="true">
      <section className={styles.section}>
        <div className="width-limit">
          <header className={clsx(styles.sectionHeader, styles.sectionHeaderLeft)} id={SectionId.Description}>
            <Typography type="title2" as="h2" className={styles.sectionHeaderTitle} overflow="breakKeep">
              {label} 개요
            </Typography>
          </header>

          <Typography>{info.description}</Typography>
        </div>
      </section>

      {info.constructionSequence && (
        <section className={clsx(styles.section, styles.sectionSecondaryBG)}>
          <div className="width-limit">
            <header
              className={clsx(styles.sectionHeader, styles.sectionHeaderCenter)}
              id={SectionId.ConstructionSequence}
            >
              <Typography type="title1" as="h2" className={styles.sectionHeaderTitle} overflow="breakKeep">
                {label} 시공순서
              </Typography>
              <Typography type="title2" as="p" className={styles.sectionHeaderSubTitle} overflow="breakKeep">
                {info.constructionSequence.subTitle}
              </Typography>
              <Typography type="caption1" className={styles.sectionHeaderCaption}>
                {info.constructionSequence.description}
              </Typography>
            </header>

            <ol className={styles.sequence}>
              {info.constructionSequence.items.map((item, index) => (
                <li key={item.name} className={styles.sequenceItem}>
                  <div
                    className={styles.sequenceItemImage}
                    style={{
                      background: `url(/${encodeURIComponent(item.image)}) no-repeat center/cover`,
                    }}
                  />
                  <div className={styles.sequenceItemOrder}>{formatOrder(index)}</div>
                  <div className={styles.sequenceItemContent}>
                    <Typography type="body2">{item.name}</Typography>
                    <Typography type="caption1" className={styles.sequenceItemContentCaption}>
                      {item.description}
                    </Typography>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {info.constructionTypes && (
        <section className={clsx(styles.section, styles.sectionSecondaryBG)}>
          <div className="width-limit">
            <header
              className={clsx(styles.sectionHeader, styles.sectionHeaderCenter)}
              id={SectionId.ConstructionSequence}
            >
              <Typography type="title1" as="h2" className={styles.sectionHeaderTitle} overflow="breakKeep">
                {label} 시공타입
              </Typography>
              <Typography type="title2" as="p" className={styles.sectionHeaderSubTitle} overflow="breakKeep">
                {info.constructionTypes.subTitle}
              </Typography>
              <Typography type="caption1" className={styles.sectionHeaderCaption}>
                {info.constructionTypes.description}
              </Typography>
            </header>

            {info.constructionTypes.items.map((item, index) => (
              <div key={item.name}>
                <header className={styles.typesHeader}>
                  <Typography type="detail1" as="b">
                    TYPE {formatOrder(index)}
                  </Typography>
                  <Typography type="body2">{item.name}</Typography>
                </header>
                <ul className={styles.types}>
                  {item.images.map(image => (
                    <li
                      key={image}
                      className={styles.typesItem}
                      style={{
                        background: `url(/${encodeURIComponent(image)}) no-repeat center/cover`,
                      }}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {!!posts.length && (
        <section className={styles.section}>
          <div className="width-limit">
            <header
              className={clsx(styles.sectionHeader, styles.sectionHeaderCenter)}
              id={SectionId.ConstructionSequence}
            >
              <Typography type="title1" as="h2" className={styles.sectionHeaderTitle} overflow="breakKeep">
                성공적인 시공사례
              </Typography>
              <Typography type="title2" as="p" className={styles.sectionHeaderSubTitle} overflow="breakKeep">
                방수파트너를 만나 달라진 최상의 결과를 확인해보세요!
              </Typography>
            </header>

            <ConstructionResultCards
              cards={posts.map(post => ({
                href: `/construction-result/${params.flagship}/${post.title}`,
                imageSrc: post.firstImage.src,
                title: post.title,
              }))}
            />

            {allPostsLength > POSTS_LIMIT && (
              <Link href={`/construction-result/${params.flagship}`}>
                <Button
                  className={styles.seeAllButton}
                  icon={<Plus />}
                  size="lg"
                  iconPlacement="right"
                  variant="outline"
                  color="secondary"
                  typo="caption1"
                >
                  전체보기
                </Button>
              </Link>
            )}
          </div>
        </section>
      )}

      <section className={clsx(styles.section, styles.sectionSecondaryBG)}>
        <div className="width-limit">
          <header
            className={clsx(styles.sectionHeader, styles.sectionHeaderCenter)}
            id={SectionId.ConstructionSequence}
          >
            <Typography type="title1" as="h2" className={styles.sectionHeaderTitle} overflow="breakKeep">
              처음이세요? 이용방법안내
            </Typography>
            <Typography type="title2" as="p" className={styles.sectionHeaderSubTitle} overflow="breakKeep">
              전국 어디서나 무료방문 견적 및 시공을 받을 수 있습니다.
            </Typography>
            <Typography type="caption1" className={styles.sectionHeaderCaption}>
              방문하여 공사비와 기간을 줄이는 최선의 해결책을 드립니다.
            </Typography>
          </header>

          <ol className={styles.howToUseSteps}>
            {howToUseSteps.map((item, index) => (
              <li key={item.name} className={styles.howToUseStep}>
                <div className={styles.howToUseStepCircle}>
                  <Typography type="caption1" className={styles.howToUseStepNum}>
                    step {formatOrder(index)}
                  </Typography>
                  {item.icon}
                  <Typography type="body3">{item.name}</Typography>
                </div>
                <Typography type="caption1" className={styles.howToUseStepDescription}>
                  {item.description}
                </Typography>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}

function formatOrder(index: number) {
  return (index + 1).toString().padStart(2, '0');
}

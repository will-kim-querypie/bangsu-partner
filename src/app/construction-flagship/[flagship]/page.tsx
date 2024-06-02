import clsx from 'clsx';
import { viewModelDict } from '@/app/construction-flagship/[flagship]/view-model';
import { Flagship, FLAGSHIP_LABEL_DICT } from '@/shared/config/flagship';
import { Empty } from '@/shared/ui/empty';
import { Typography } from '@/shared/ui/typography';
import styles from './page.module.css';

const enum SectionId {
  Description = 'description',
  ConstructionSequence = 'construction-sequence',
}

export default function ConstructionResultPage({ params }: { params: { flagship: Flagship } }) {
  const info = viewModelDict[params.flagship];
  const label = FLAGSHIP_LABEL_DICT[params.flagship];

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
        <section className={styles.section}>
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
        <section className={styles.section}>
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
    </main>
  );
}

function formatOrder(index: number) {
  return (index + 1).toString().padStart(2, '0');
}

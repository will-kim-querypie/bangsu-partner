'use client';

import { ChangeEventHandler, useState } from 'react';
import { CaretDownFill, Search } from 'react-bootstrap-icons';
import { Disclosure } from '@headlessui/react';
import wrapByTag from '@/shared/lib/wrap-by-tag';
import { Input } from '@/shared/ui/input';
import { Typography } from '@/shared/ui/typography';
import styles from './page.module.css';
import { qnaList } from './qna-list';

export default function QuestionPage() {
  const [search, setSearch] = useState('');

  const filteredQnaList = (() => {
    if (!search) return qnaList;

    return qnaList.filter(({ question, answer }) => {
      return (question + answer).includes(search);
    });
  })();

  const handleChangeSearch: ChangeEventHandler<HTMLInputElement> = e => {
    setSearch(e.target.value);
  };

  const highlightSearchPhrase = (text: string) => {
    if (!search) return text;

    return wrapByTag(text, [
      {
        targetPhrase: search,
        tag: 'strong',
        tagAttr: { class: styles.highlight },
      },
    ]);
  };

  return (
    <main>
      <header className={styles.header}>
        <Typography type="detail1">
          전체 <b className={styles.count}>{filteredQnaList.length}</b>건
        </Typography>
        <div className={styles.search}>
          <Input
            value={search}
            onChange={handleChangeSearch}
            className={styles.searchInput}
            placeholder="검색어를 입력해주세요"
            suffix={<Search />}
          />
        </div>
      </header>
      <div className={styles.list}>
        {filteredQnaList.map(({ question, answer }) => {
          const highlightedQuestion = highlightSearchPhrase(question);
          const highlightedAnswer = highlightSearchPhrase(answer);

          return (
            <Disclosure key={question} defaultOpen={!!search}>
              <Disclosure.Button className={styles.disclosureButton}>
                <div role="presentation" className={styles.qaCircle}>
                  Q
                </div>
                <Typography
                  type="detail1"
                  className={styles.question}
                  dangerouslySetInnerHTML={{ __html: highlightedQuestion }}
                />
                <CaretDownFill className={styles.caretIcon} />
              </Disclosure.Button>

              <Disclosure.Panel className={styles.disclosurePanel}>
                <div role="presentation" className={styles.qaCircle}>
                  A
                </div>
                <Typography type="detail1" dangerouslySetInnerHTML={{ __html: highlightedAnswer }} />
              </Disclosure.Panel>
            </Disclosure>
          );
        })}
      </div>
    </main>
  );
}

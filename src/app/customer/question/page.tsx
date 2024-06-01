'use client';

import { useState } from 'react';
import { CaretDownFill, Search } from 'react-bootstrap-icons';
import { Disclosure } from '@headlessui/react';
import { Input } from '@/shared/ui/input';
import { Typography } from '@/shared/ui/typography';
import styles from './page.module.css';
import { qnaList } from './qna';

export default function QuestionPage() {
  const [search, setSearch] = useState('');

  const filteredQnaList = (() => {
    if (!search) return qnaList;

    return qnaList.filter(({ question, answer }) => {
      return (question + answer).includes(search);
    });
  })();

  return (
    <main>
      <header className={styles.header}>
        <Typography type="detail1">
          전체 <b className={styles.count}>{filteredQnaList.length}</b>건
        </Typography>
        <div className={styles.search}>
          <Input
            value={search}
            onChange={e => setSearch(e.target.value)}
            className={styles.searchInput}
            placeholder="검색어를 입력해주세요"
            suffix={<Search />}
          />
        </div>
      </header>
      <div className={styles.list}>
        {filteredQnaList.map(({ question, answer }) => (
          <Disclosure key={question} defaultOpen={!!search}>
            <Disclosure.Button className={styles.disclosureButton}>
              <div role="presentation" className={styles.qaCircle}>
                Q
              </div>
              <Typography type="detail1" className={styles.question}>
                {question}
              </Typography>
              <CaretDownFill className={styles.caretIcon} />
            </Disclosure.Button>

            <Disclosure.Panel className={styles.disclosurePanel}>
              <div role="presentation" className={styles.qaCircle}>
                A
              </div>
              <Typography type="detail1">{answer}</Typography>
            </Disclosure.Panel>
          </Disclosure>
        ))}
      </div>
    </main>
  );
}

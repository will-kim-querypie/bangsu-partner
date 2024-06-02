'use client';

import { useState } from 'react';
import { CaretDownFill } from 'react-bootstrap-icons';
import { Disclosure } from '@headlessui/react';
import wrapByTag from '@/shared/lib/wrap-by-tag';
import { Search } from '@/shared/ui/search';
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
      <Search resultLength={filteredQnaList.length} onChange={setSearch} />

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

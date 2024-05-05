'use client';

import useTypewriter from './use-typewriter.hook';

/**
 * 훅을 직접 가져다 쓰면 매 typo 마다 리렌더링이 발생하며, 'use client'또한 강제됩니다.
 * 해서 컴포넌트로 한 번 래핑하여 사용합니다.
 */
export default function AutoTypo({ words }: { words: string[] }) {
  return useTypewriter({
    words,
  });
}

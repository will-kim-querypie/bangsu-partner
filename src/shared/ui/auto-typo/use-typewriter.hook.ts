import { useEffect, useState } from 'react';

type UseTypewriterProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBeforeType?: number;
  delayBeforeDelete?: number;
};

export default function useTypewriter({
  words,
  typingSpeed = 150,
  deletingSpeed = 50,
  delayBeforeType = 200,
  delayBeforeDelete = 4000,
}: UseTypewriterProps) {
  const [state, setState] = useState({
    text: '',
    isDeleting: false,
    loopNum: 0,
    typingDelay: typingSpeed,
  });

  useEffect(() => {
    // console.log(`Typing: '${state.text}', LoopNum: ${state.loopNum}, IsDeleting: ${state.isDeleting}`);
    const currentWord = words[state.loopNum % words.length];

    const handleTyping = () => {
      setState(prev => {
        const currentText = state.text;
        const nextText = state.isDeleting
          ? currentWord.slice(0, currentText.length - 1)
          : currentWord.slice(0, currentText.length + 1);

        const mustChangeToDeleteMode = !state.isDeleting && nextText === currentWord;
        const mustChangeToTypingMode = state.isDeleting && nextText === '';

        const newState = { ...prev, text: nextText };

        if (mustChangeToDeleteMode) {
          newState.isDeleting = true;
          newState.typingDelay = delayBeforeDelete;
        } else if (mustChangeToTypingMode) {
          newState.isDeleting = false;
          newState.loopNum = prev.loopNum + 1;
          newState.typingDelay = delayBeforeType;
        } else {
          newState.typingDelay = state.isDeleting ? deletingSpeed : typingSpeed;
        }

        return newState;
      });
    };

    const timerId = setTimeout(handleTyping, state.typingDelay);
    return () => {
      clearTimeout(timerId);
    };
  }, [state]);

  return state.text;
}

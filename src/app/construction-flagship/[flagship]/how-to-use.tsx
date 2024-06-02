import { ReactNode } from 'react';
import { CardChecklist, ChatDots, PaintBucket, PencilSquare } from 'react-bootstrap-icons';

type HowToUseStep = {
  icon: ReactNode;
  name: string;
  description: string;
};
export const howToUseSteps: HowToUseStep[] = [
  {
    icon: <ChatDots />,
    name: '상담 및 방문견적',
    description: '기초 전화상담, 현장상태\n정밀조사 및 진단',
  },
  {
    icon: <PencilSquare />,
    name: '공사계약',
    description: '견적확인 및\n공사계약 진행',
  },
  {
    icon: <PaintBucket />,
    name: '방수시공',
    description: '고객님과\n일정협의 후 시공',
  },
  {
    icon: <CardChecklist />,
    name: '사후관리',
    description: '무상 년 1~2회\n유지보수',
  },
];

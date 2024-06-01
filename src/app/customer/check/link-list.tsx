import { ReactNode } from 'react';
import { TelephoneOutboundFill } from 'react-bootstrap-icons';
import { KAKAOTALK_OPEN_CHAT_LINK, NAVER_FORM_LINK, PHONE } from '@/shared/config/company';
import { ResponsiveImage } from '@/shared/ui/responsive-image';
import styles from './page.module.css';

type Link = {
  title: string;
  description: string;
  className: string;
  icon: ReactNode;
  href: string;
};
export const linkList: Link[] = [
  {
    title: '전화로 문의하기',
    description: PHONE,
    icon: <TelephoneOutboundFill size={22} />,
    className: styles.cardLinkPhone,
    href: `tel:${PHONE.replace(/-/g, '')}`,
  },
  {
    title: '카카오톡으로 문의하기',
    description: '실시간 채팅 상담',
    className: styles.cardLinkKakao,
    icon: <ResponsiveImage src="/kakaotalk.svg" alt="kakaotalk-icon" width={24} aspectRatio="1/1" />,
    href: KAKAOTALK_OPEN_CHAT_LINK,
  },
  {
    title: '네이버 폼으로 문의하기',
    description: '양식에 맞춰 빠른 견적 신청',
    className: styles.cardLinkNaverForm,
    icon: <ResponsiveImage src="/naver.png" alt="naver-icon" width={24} aspectRatio="1/1" />,
    href: NAVER_FORM_LINK,
  },
];

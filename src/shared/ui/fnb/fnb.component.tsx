import clsx from 'clsx';
import {
  ADDRESS,
  BUSINESS_NUMBER,
  CEO,
  COMPANY_NAME,
  EMAIL,
  MAIL_ORDER_SALES_APRROVAL_NUMBER,
  PHONE,
} from '@/shared/config/company';
import { Logo } from '@/shared/ui/logo';
import { Typography } from '@/shared/ui/typography';
import styles from './fnb.module.css';

export default function FNB() {
  return (
    <footer className={styles.container}>
      <div className={clsx('width-limit', styles.innerContainer)}>
        <div className={styles.logoWrap}>
          <Logo width={140} />
        </div>

        <div className={styles.content}>
          <address className={styles.address}>
            <Typography type="caption2">상호명: {COMPANY_NAME}</Typography>
            <Typography type="caption2">대표: {CEO}</Typography>
            <Typography type="caption2">{ADDRESS}</Typography>
            <a href={`mailto:${EMAIL}`}>
              <Typography type="caption2">이메일: {EMAIL}</Typography>
            </a>
            <a href={`tel:${PHONE.replace(/-/g, '')}`}>
              <Typography type="caption2">H.P: {PHONE}</Typography>
            </a>
            <Typography type="caption2">사업자등록번호: {BUSINESS_NUMBER}</Typography>
            <Typography type="caption2">통신판매신고번호: {MAIL_ORDER_SALES_APRROVAL_NUMBER}</Typography>
          </address>

          <Typography type="caption2">@Copyright {COMPANY_NAME}. All rights reserved.</Typography>
        </div>
      </div>
    </footer>
  );
}

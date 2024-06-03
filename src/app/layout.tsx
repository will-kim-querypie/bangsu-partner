import './reset.css';
import './globals.css';

import { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
import { COMPANY_NAME, DEPLOYMENT_URL } from '@/shared/config/company';
import { Breadcrumb } from '@/shared/ui/breadcrumb';
import { FNB } from '@/shared/ui/fnb';
import { GNB } from '@/shared/ui/gnb';
import { QuickMenu } from '@/shared/ui/quick-menu';
import { SubPageHero } from '@/shared/ui/sub-page-hero';

export const metadata: Metadata = {
  metadataBase: new URL(DEPLOYMENT_URL),
  title: `25년 경력의 방수 시공 전문업체, ${COMPANY_NAME}`,
  description: `${COMPANY_NAME}는 무료 방문 견적을 원칙으로 합니다. 옥상 우레탄 바닥 방수, 외벽 방수, 곰팡이 결로 제거 및 리페인팅으로 건물의 쾌적한 환경을 약속합니다.`,
  icons: [{ rel: 'icon', url: '/symbol.svg' }],
  applicationName: COMPANY_NAME,
  generator: 'Next.js',
  openGraph: {
    images: [{ url: '/home-bg.jpg' }],
  },
};
export const viewport: Viewport = {
  themeColor: '#219bfe',
  colorScheme: 'light',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GNB />
        <Breadcrumb />
        <SubPageHero />

        {children}

        <FNB />
        <QuickMenu />
      </body>
    </html>
  );
}

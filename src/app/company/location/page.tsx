'use client';

import { GeoAltFill } from 'react-bootstrap-icons';
import { useKakaoLoader, Map, MapMarker } from 'react-kakao-maps-sdk';
import { ADDRESS, ADDRESS_COORDINATE } from '@/shared/config/company';
import { Typography } from '@/shared/ui/typography';
import styles from './page.module.css';

/**
 * see https://react-kakao-maps-sdk.jaeseokim.dev/docs/setup/withHook/
 */
export default function LocationPage() {
  useKakaoLoader({
    id: 'kakao-loader',
    appkey: process.env.NEXT_PUBLIC_KAKAO_API_KEY as string,
    libraries: ['services'],
  });

  return (
    <main>
      <Typography type="detail1" as="p" className={styles.text}>
        <GeoAltFill className={styles.icon} />
        <span>{ADDRESS}</span>
      </Typography>

      <Map
        level={7}
        center={{ lat: ADDRESS_COORDINATE.latitude, lng: ADDRESS_COORDINATE.longitude }}
        className={styles.map}
      >
        <MapMarker position={{ lat: ADDRESS_COORDINATE.latitude, lng: ADDRESS_COORDINATE.longitude }} />
      </Map>
    </main>
  );
}

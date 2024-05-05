import { Flagship } from '@/shared/config/flagship';

export default function FlagShipPage({ params }: { params: { flagship: Flagship } }) {
  return <main>FlagShipPage: {params.flagship}</main>;
}

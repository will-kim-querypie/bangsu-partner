import { Flagship } from '@/shared/config/flagship';

export default function ConstructionResultPage({ params }: { params: { flagship: Flagship } }) {
  return <main>ConstructionResultPage: {params.flagship}</main>;
}

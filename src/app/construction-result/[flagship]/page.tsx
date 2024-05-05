import { Flagship } from '@/shared/config/flagship';

export default function ConstructionResultPage({ params }: { params: { flagship: Flagship } }) {
  return <div>ConstructionResultPage: {params.flagship}</div>;
}

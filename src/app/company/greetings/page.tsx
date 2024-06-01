import { CEO, COMPANY_NAME } from '@/shared/config/company';
import { Typography } from '@/shared/ui/typography';
import styles from './page.module.css';

export default function GreetingsPage() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.imageSection} />

        <div className={styles.textSection}>
          <Typography type="body2" as="h2">
            건축 및 주거 공간의 보수와 보강에 있어 방수는 매우 중요한 요소입니다.
          </Typography>

          <Typography type="detail1" as="p">
            최근 건축 환경의 변화에 따라 방수 시공의 필요성이 더욱 증대되고 있습니다. 특히, 고층 건물이나 복잡한
            구조물의 방수는 단순한 기술력뿐만 아니라 전문적인 경험과 첨단 기술이 요구됩니다. 이로 인해 시장 내에서는
            전문성을 갖추지 못한 업체들이 가격 경쟁에만 집중하며, 품질이 떨어지는 서비스를 제공하는 경우가 빈번합니다.
          </Typography>

          <Typography type="detail1" as="p">
            이런 환경 속에서, 저희 {COMPANY_NAME}는 방수 시공 전문업체로서 첨단 방수 기술과 풍부한 시공 경험을 바탕으로
            고객의 다양한 요구를 충족시킬 수 있습니다. 저희는 최고 수준의 방수 솔루션을 제공하여 건물의 가치를 높이며,
            장기적인 안전과 편안함을 보장합니다.
          </Typography>

          <Typography type="detail1" as="p">
            {COMPANY_NAME}의 모든 직원은 고객의 만족을 최우선으로 하고, 안전과 신뢰를 바탕으로 정확하고 효율적인 방수
            시공을 수행함으로써 고객과의 신뢰를 지속적으로 쌓아가는 것을 목표로 하고 있습니다. 고객 여러분의 소중한
            공간을 보호하고 가치를 높이는 데 최선을 다하겠습니다.
          </Typography>

          <Typography type="detail1" as="p">
            감사합니다.
          </Typography>

          <Typography type="detail1" as="p" className={styles.floatRight}>
            대표 {CEO}
          </Typography>
        </div>
      </div>
    </main>
  );
}

import { Flagship } from '@/shared/config/flagship';

type FlagshipInfo = {
  description: string;
};

export const flagshipInfoDict: Record<Flagship, FlagshipInfo> = {
  [Flagship.RoofUrethaneWaterproofing]: {
    description:
      '아크릴 탄성 도막 방수제를 혼합하여 가볍고 견고하며, 탄성이 강한 방수층을 만들어 주는 방수제를 사용합니다. 옥상신축공사, 옥상보수공사, 실외공간과 욕실, 발코니 등 다양한 시공을 합니다. 섬유질과 탄성 및 지속력이 뛰어나며, 수용성과 냄새 및 화재 발생의 위험이 없어 인체에 무해한 친환경 제품만을 사용합니다.',
  },
  [Flagship.ExteriorWallWaterproofing]: {
    description:
      '건축물의 외벽 누수와 점토 벽돌로 시공한 건축물에 발생하는 백화 현상에 대한 문제의 심각성은 결로 및 곰팡이로 전이되며 건물의 수명을 단축시키게 됩니다. 백화 제거와 방수를 동시에 시공하며 재발하지 않도록 최고의 공사로 고객의 만족도를 높여드립니다',
  },
  [Flagship.FloorSurfaceEpoxyWork]: {
    description:
      '건물의 수명을 늘리고 관리가 쉬워 주로 주차장이나 공장 바닥에 주로 시공하는 작업입니다. 바닥에 균열이 많거나 과거에 에폭시 시공을 한 적이 있다면 공사 전 균열 보수나 재시공이 필요할 수 있습니다. 요즘은 카페나 사무실 등 실내에 인테리어를 위해 에폭시 작업을 하는 경우도 많이 생기고 있습니다',
  },
  [Flagship.InjectionWork]: {
    description:
      '건물의 내,외부에 누수가 발생한다면 벽 상태를 파악하여 우레탄 경질을 사용하여 크렉이 난 부분의 공간을 메꿔주는 방식입니다. 누수 발생에 의해 작업하는 경우도 많지만, 빈 공간을 채워주기 위해서 작업하시는 경우도 있습니다.',
  },
  [Flagship.ReverseRoofWaterproofing]: {
    description:
      '방수하면서 단열도 되는 방식으로 유럽에서 보편적으로 시행되고 있는 방수 방법입니다. 여러 단계의 공법을 거치며 물의 배수를 용이하게 하고, 여분의 수분도 증발, 외부 온도 변화로 부터 보호를 합니다. 마지막 쇄석 작업은 낮에 뜨거운 열기를 흡수하고 밤에는 열을 식혀주는 중요한 역할을 합니다.',
  },
  [Flagship.OtherWork]: {
    description: '',
  },
};

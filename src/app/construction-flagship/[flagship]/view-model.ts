import { Flagship } from '@/shared/config/flagship';

type ViewModel = {
  description: string;
  /**
   * 시공순서
   */
  constructionSequence?: {
    subTitle: string;
    description: string;
    items: Array<{
      name: string;
      description: string;
      image: string;
    }>;
  };
  /**
   * 시공 종류
   */
  constructionTypes?: {
    subTitle: string;
    description: string;
    items: Array<{
      name: string;
      images: string[];
    }>;
  };
};

export const viewModelDict: Record<Flagship, ViewModel> = {
  // 옥상우레탄방수
  [Flagship.RoofUrethaneWaterproofing]: {
    description:
      '아크릴 탄성 도막 방수제를 혼합하여 가볍고 견고하며, 탄성이 강한 방수층을 만들어 주는 방수제를 사용합니다. 옥상신축공사, 옥상보수공사, 실외공간과 욕실, 발코니 등 다양한 시공을 합니다. 섬유질과 탄성 및 지속력이 뛰어나며, 수용성과 냄새 및 화재 발생의 위험이 없어 인체에 무해한 친환경 제품만을 사용합니다.',
    constructionSequence: {
      subTitle: '빌딩, 공장, 주택 등 어떤 옥상도 우레탄방수로 오랜기간 안심하고 사용할 수 있습니다.',
      description: '방수공사는 검증된 전문기술자가 현장 상황에 맞춰 표준 공정대로 시공을 해야 하자가 없습니다.',
      items: [
        {
          name: '그라인딩',
          description: '시공전 바탕면이 거친곳을 기계로 갈아내어 균등하게 합니다.',
          image: `/construction-flagship/${Flagship.RoofUrethaneWaterproofing}/1.jfif`,
        },
        {
          name: '옥상청소',
          description: '유분, 수분, 모래, 먼지등 이물질을 완전히 제거합니다.',
          image: `/construction-flagship/${Flagship.RoofUrethaneWaterproofing}/2.jfif`,
        },
        {
          name: '하도도장',
          description: '하도액을 필요에 의해 붓과 도장공구를 이용해 진행합니다.',
          image: `/construction-flagship/${Flagship.RoofUrethaneWaterproofing}/3.jfif`,
        },
        {
          name: '실란트작업',
          description: '크렉, 홈진 부분에 우레탄 실란트을 주입합니다.',
          image: `/construction-flagship/${Flagship.RoofUrethaneWaterproofing}/4.jfif`,
        },
        {
          name: '중도도장',
          description: '탄성우레탄중도는 필요에 의해 붓, 로라, 방수헤라로 작업됩니다.',
          image: `/construction-flagship/${Flagship.RoofUrethaneWaterproofing}/5.jfif`,
        },
        {
          name: '상도도장',
          description: '붓이나 로라를 이용하여 도장하고 마무리합니다.',
          image: `/construction-flagship/${Flagship.RoofUrethaneWaterproofing}/6.jfif`,
        },
      ],
    },
  },

  // 외벽방수
  [Flagship.ExteriorWallWaterproofing]: {
    description:
      '건축물의 외벽 누수와 점토 벽돌로 시공한 건축물에 발생하는 백화 현상에 대한 문제의 심각성은 결로 및 곰팡이로 전이되며 건물의 수명을 단축시키게 됩니다. 백화 제거와 방수를 동시에 시공하며 재발하지 않도록 최고의 공사로 고객의 만족도를 높여드립니다.',
    constructionTypes: {
      subTitle: '아파트, 빌딩, 공장, 주택 등 어떤 외벽도 외벽방수로 오랜기간 안심하고 사용할 수 있습니다.',
      description: '방수공사는 검증된 전문기술자가 현장 상황에 맞춰 표준 공정대로 시공을 해야 하자가 없습니다.',
      items: [
        {
          name: '실리콘 코킹 작업',
          images: [
            `/construction-flagship/${Flagship.ExteriorWallWaterproofing}/실리콘코킹/1.jpg`,
            `/construction-flagship/${Flagship.ExteriorWallWaterproofing}/실리콘코킹/2.jpg`,
          ],
        },
        {
          name: '수성 발수제 도포 작업',
          images: [
            `/construction-flagship/${Flagship.ExteriorWallWaterproofing}/수성발수제도포/1.jfif`,
            `/construction-flagship/${Flagship.ExteriorWallWaterproofing}/수성발수제도포/2.jfif`,
            `/construction-flagship/${Flagship.ExteriorWallWaterproofing}/수성발수제도포/3.jpg`,
            `/construction-flagship/${Flagship.ExteriorWallWaterproofing}/수성발수제도포/4.jfif`,
            `/construction-flagship/${Flagship.ExteriorWallWaterproofing}/수성발수제도포/5.jpg`,
            `/construction-flagship/${Flagship.ExteriorWallWaterproofing}/수성발수제도포/6.jpg`,
            `/construction-flagship/${Flagship.ExteriorWallWaterproofing}/수성발수제도포/7.jfif`,
            `/construction-flagship/${Flagship.ExteriorWallWaterproofing}/수성발수제도포/8.jpg`,
            `/construction-flagship/${Flagship.ExteriorWallWaterproofing}/수성발수제도포/9.jfif`,
            `/construction-flagship/${Flagship.ExteriorWallWaterproofing}/수성발수제도포/10.jfif`,
          ],
        },
        {
          name: '방수 페인트 작업',
          images: [
            `/construction-flagship/${Flagship.ExteriorWallWaterproofing}/방수페인트/1.jfif`,
            `/construction-flagship/${Flagship.ExteriorWallWaterproofing}/방수페인트/2.jfif`,
            `/construction-flagship/${Flagship.ExteriorWallWaterproofing}/방수페인트/3.jpg`,
            `/construction-flagship/${Flagship.ExteriorWallWaterproofing}/방수페인트/4.jfif`,
            `/construction-flagship/${Flagship.ExteriorWallWaterproofing}/방수페인트/5.jpg`,
          ],
        },
      ],
    },
  },

  // 바닥면에폭시작업
  [Flagship.FloorSurfaceEpoxyWork]: {
    description:
      '건물의 수명을 늘리고 관리가 쉬워 주로 주차장이나 공장 바닥에 주로 시공하는 작업입니다. 바닥에 균열이 많거나 과거에 에폭시 시공을 한 적이 있다면 공사 전 균열 보수나 재시공이 필요할 수 있습니다. 요즘은 카페나 사무실 등 실내에 인테리어를 위해 에폭시 작업을 하는 경우도 많이 생기고 있습니다.',
    constructionTypes: {
      subTitle: '주차장, 공장, 사무실, 카페 등 다양한 바닥면에 시공합니다.',
      description: '방수공사는 검증된 전문기술자가 현장 상황에 맞춰 표준 공정대로 시공을 해야 하자가 없습니다.',
      items: [
        {
          name: '주차장 에폭시 코팅',
          images: [
            `/construction-flagship/${Flagship.FloorSurfaceEpoxyWork}/주차장에폭시코팅/1.jpg`,
            `/construction-flagship/${Flagship.FloorSurfaceEpoxyWork}/주차장에폭시코팅/2.jpg`,
            `/construction-flagship/${Flagship.FloorSurfaceEpoxyWork}/주차장에폭시코팅/3.jpg`,
            `/construction-flagship/${Flagship.FloorSurfaceEpoxyWork}/주차장에폭시코팅/4.jpg`,
            `/construction-flagship/${Flagship.FloorSurfaceEpoxyWork}/주차장에폭시코팅/5.jfif`,
            `/construction-flagship/${Flagship.FloorSurfaceEpoxyWork}/주차장에폭시코팅/6.jpg`,
            `/construction-flagship/${Flagship.FloorSurfaceEpoxyWork}/주차장에폭시코팅/7.jpg`,
            `/construction-flagship/${Flagship.FloorSurfaceEpoxyWork}/주차장에폭시코팅/8.jpg`,
            `/construction-flagship/${Flagship.FloorSurfaceEpoxyWork}/주차장에폭시코팅/9.jpg`,
            `/construction-flagship/${Flagship.FloorSurfaceEpoxyWork}/주차장에폭시코팅/10.jpg`,
            `/construction-flagship/${Flagship.FloorSurfaceEpoxyWork}/주차장에폭시코팅/11.jpg`,
            `/construction-flagship/${Flagship.FloorSurfaceEpoxyWork}/주차장에폭시코팅/12.jpg`,
            `/construction-flagship/${Flagship.FloorSurfaceEpoxyWork}/주차장에폭시코팅/13.jpg`,
            `/construction-flagship/${Flagship.FloorSurfaceEpoxyWork}/주차장에폭시코팅/14.jpg`,
          ],
        },
        {
          name: '주차장 에폭시 라이닝',
          images: [
            `/construction-flagship/${Flagship.FloorSurfaceEpoxyWork}/주차장에폭시라이닝/1.jpg`,
            `/construction-flagship/${Flagship.FloorSurfaceEpoxyWork}/주차장에폭시라이닝/2.jpg`,
            `/construction-flagship/${Flagship.FloorSurfaceEpoxyWork}/주차장에폭시라이닝/3.jpg`,
            `/construction-flagship/${Flagship.FloorSurfaceEpoxyWork}/주차장에폭시라이닝/4.jpg`,
            `/construction-flagship/${Flagship.FloorSurfaceEpoxyWork}/주차장에폭시라이닝/5.jpg`,
            `/construction-flagship/${Flagship.FloorSurfaceEpoxyWork}/주차장에폭시라이닝/6.jpg`,
            `/construction-flagship/${Flagship.FloorSurfaceEpoxyWork}/주차장에폭시라이닝/7.jpg`,
            `/construction-flagship/${Flagship.FloorSurfaceEpoxyWork}/주차장에폭시라이닝/8.jpg`,
          ],
        },
      ],
    },
  },

  // 인젝션작업
  [Flagship.InjectionWork]: {
    description:
      '건물의 내,외부에 누수가 발생한다면 벽 상태를 파악하여 우레탄 경질을 사용하여 크렉이 난 부분의 공간을 메꿔주는 방식입니다. 누수 발생에 의해 작업하는 경우도 많지만, 빈 공간을 채워주기 위해서 작업하시는 경우도 있습니다.',
    constructionSequence: {
      subTitle: '누수, 균열로 고민이라면 인젝션작업으로 해결하세요.',
      description: '방수공사는 검증된 전문기술자가 현장 상황에 맞춰 표준 공정대로 시공을 해야 하자가 없습니다.',
      items: [
        {
          name: '균열, 누수상태조사',
          description: '시공전 벽상태를 파악하고 작업위치를 선정합니다.',
          image: `/construction-flagship/${Flagship.InjectionWork}/1.jpg`,
        },
        {
          name: '천공작업',
          description: '크렉이 있는곳에서 조금 떨어진 거리에서 천공작업 진행합니다.',
          image: `/construction-flagship/${Flagship.InjectionWork}/2.jpg`,
        },
        {
          name: '페카설치',
          description: '천공작업 후 내부를 청소한뒤 설치합니다.',
          image: `/construction-flagship/${Flagship.InjectionWork}/3.jpg`,
        },
        {
          name: '우레탄 및 에폭시주입',
          description: '페카를 통해 장비를 이용하여 액을 주입합니다.',
          image: `/construction-flagship/${Flagship.InjectionWork}/4.jpg`,
        },
        {
          name: '페카제거',
          description: '우레탄 및 에폭시액 양생후 페카제거, 퍼티작업 후 마무리합니다.',
          image: `/construction-flagship/${Flagship.InjectionWork}/5.jpg`,
        },
      ],
    },
  },

  // 역전지붕방수작업
  [Flagship.ReverseRoofWaterproofing]: {
    description:
      '방수하면서 단열도 되는 방식으로 유럽에서 보편적으로 시행되고 있는 방수 방법입니다. 여러 단계의 공법을 거치며 물의 배수를 용이하게 하고, 여분의 수분도 증발, 외부 온도 변화로 부터 보호를 합니다. 마지막 쇄석 작업은 낮에 뜨거운 열기를 흡수하고 밤에는 열을 식혀주는 중요한 역할을 합니다.',
  },

  // 기타공사
  [Flagship.OtherWork]: {
    description: '',
  },
};

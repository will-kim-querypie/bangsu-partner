export enum Flagship {
  FloorSurfaceWaterproofing = 'floor-surface-waterproofing',
  ExteriorSurfaceWaterproofing = 'exterior-surface-waterproofing',
  FloorSurfaceEpoxyWork = 'floor-surface-epoxy-work',
  Repainting = 'repainting',
}

type FlagshipDetail = {
  key: Flagship;
  label: string;
  description: string;
};

export const flagships: FlagshipDetail[] = [
  {
    key: Flagship.FloorSurfaceWaterproofing,
    label: '바닥면방수공사',
    description: '바닥면에 방수재를 도포하여 물의 침투를 막는 공사입니다.',
  },
  {
    key: Flagship.ExteriorSurfaceWaterproofing,
    label: '외부면방수공사',
    description: '건물 외부에 방수재를 도포하여 물의 침투를 막는 공사입니다.',
  },
  {
    key: Flagship.FloorSurfaceEpoxyWork,
    label: '바닥면에폭시공사',
    description: '바닥면에 에폭시를 도포하여 강도를 높이고 깔끔한 마감을 위한 공사입니다.',
  },
  {
    key: Flagship.Repainting,
    label: '리페인팅',
    description: '기존의 도료를 제거하고 새로운 도료를 도포하여 건물의 외관을 새롭게 하는 공사입니다.',
  },
];

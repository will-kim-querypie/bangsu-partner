export enum Flagship {
  RoofUrethaneWaterproofing = 'roof-urethane-waterproofing', // 옥상우레탄방수
  ExteriorWallWaterproofing = 'exterior-wall-waterproofing', // 외벽방수
  FloorSurfaceEpoxyWork = 'floor-surface-epoxy-work', // 바닥면에폭시작업
  InjectionWork = 'injection-work', // 인젝션작업
  ReverseRoofWaterproofing = 'reverse-roof-waterproofing', // 역전지붕방수작업
  OtherWork = 'other-work', // 기타공사
}

export const FLAGSHIP_LABEL_DICT: Record<Flagship, string> = {
  [Flagship.RoofUrethaneWaterproofing]: '옥상우레탄방수',
  [Flagship.ExteriorWallWaterproofing]: '외벽방수',
  [Flagship.FloorSurfaceEpoxyWork]: '바닥면에폭시작업',
  [Flagship.InjectionWork]: '인젝션작업',
  [Flagship.ReverseRoofWaterproofing]: '역전지붕방수작업',
  [Flagship.OtherWork]: '기타공사',
};

export function isFlagship(value: unknown): value is Flagship {
  return Object.values(Flagship).includes(value as Flagship);
}

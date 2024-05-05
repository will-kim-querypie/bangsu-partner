import { flagships } from '@/shared/config/flagship';

type SubRoute = {
  path: string;
  label: string;
  children?: {
    path: string;
    label: string;
  }[];
};
const subRoutes: SubRoute[] = [
  {
    path: 'company',
    label: '회사소개',
    children: [
      {
        path: 'greetings',
        label: '인사말',
      },
      {
        path: 'location',
        label: '오시는길',
      },
    ],
  },
  {
    path: 'construction-flagship/[flagship]',
    label: '시공분야',
  },
  {
    path: 'construction-result/[flagship]',
    label: '시공사진',
  },
  {
    path: 'customer',
    label: '고객센터',
  },
];

type SubRouteViewModel = {
  key: string;
  label: string;
  children: {
    key: string;
    path: string;
    label: string;
  }[];
};
const processToViewModel = (keyPrefix: string, routes: SubRoute[]): SubRouteViewModel[] => {
  const getChildren = (parent: SubRoute): SubRouteViewModel['children'] => {
    if (parent.children) {
      // children이 있는 경우, children을 반환
      return parent.children.map(child => ({
        key: `${keyPrefix}-${parent.path}-${child.path}-child`,
        path: `/${parent.path}/${child.path}`,
        label: child.label,
      }));
    }
    if (parent.path.includes('[flagship]')) {
      // flagship이 포함된 path인 경우, flagship에 따라 children 생성
      return flagships.map(flagship => ({
        key: `${keyPrefix}-${parent.path}-${flagship.key}-child`,
        path: `/${parent.path.replace('[flagship]', flagship.key)}`,
        label: flagship.label,
      }));
    }
    // children이 없는 경우, parent 자체를 children으로 반환
    return [
      {
        key: `${keyPrefix}-${parent.path}-child`,
        path: `/${parent.path}`,
        label: parent.label,
      },
    ];
  };

  return routes.map(parent => {
    return {
      key: `${keyPrefix}-${parent.path}-parent`,
      label: parent.label,
      children: getChildren(parent),
    };
  });
};

export default function getSubRoutesViewModel(uniqueKey: string): SubRouteViewModel[] {
  return processToViewModel(uniqueKey, subRoutes);
}

export function getPageLabel(pathname: string): string {
  const subRoutes = getSubRoutesViewModel('');

  for (const subRoute of subRoutes) {
    const targetChild = subRoute.children.find(child => child.path === pathname);
    if (targetChild) return targetChild.label;
  }

  return 'Undefined';
}

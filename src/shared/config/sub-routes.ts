import { FLAGSHIP_DETAILS } from '@/shared/config/flagship';

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
    children: [
      {
        path: 'check',
        label: '빠른견적문의',
      },
      {
        path: 'question',
        label: '자주묻는질문',
      },
    ],
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
        key: `${keyPrefix}-child:${parent.path}-${child.path}`,
        path: `/${parent.path}/${child.path}`,
        label: child.label,
      }));
    }
    if (parent.path.includes('[flagship]')) {
      // flagship이 포함된 path인 경우, flagship에 따라 children 생성
      return FLAGSHIP_DETAILS.map(flagship => ({
        key: `${keyPrefix}-child:${parent.path}-${flagship.key}`,
        path: `/${parent.path.replace('[flagship]', flagship.key)}`,
        label: flagship.label,
      }));
    }
    // children이 없는 경우, parent 자체를 children으로 반환
    return [
      {
        key: `${keyPrefix}-child:${parent.path}`,
        path: `/${parent.path}`,
        label: parent.label,
      },
    ];
  };

  return routes.map(parent => ({
    key: `${keyPrefix}-parent:${parent.path}`,
    label: parent.label,
    children: getChildren(parent),
  }));
};

export default function getSubRoutesViewModel(uniqueKey: string): SubRouteViewModel[] {
  return processToViewModel(uniqueKey, subRoutes);
}

export function getPageInfo(pathname: string, predifinedSubRoutes = getSubRoutesViewModel('')) {
  for (const subRoute of predifinedSubRoutes) {
    const targetChild = subRoute.children.find(child => child.path === pathname);
    if (targetChild) {
      return {
        parent: subRoute,
        child: targetChild,
      };
    }
  }

  // NOTE: 일치하는 경로를 찾을 수 없다면, 상세 페이지임. 예시로 /construction-flagship/[flagship]/[postTitle]. 이 경우 부모 페이지 탐색
  for (const subRoute of predifinedSubRoutes) {
    const targetChild = subRoute.children.find(child => pathname.startsWith(child.path));
    if (targetChild) {
      return {
        parent: subRoute,
        child: targetChild,
      };
    }
  }

  // NOTE: Invalid pathname 에러를 던져야 하지만, /sw.js 같은 이상한 친구들이 인자로 오는 경우가 있어서 일단 에러 없게 처리
  return {
    parent: predifinedSubRoutes[0],
    child: predifinedSubRoutes[0].children[0],
  };
}

export function getPageLabel(pathname: string): string {
  const currentPage = getPageInfo(pathname);
  return currentPage.child.label;
}

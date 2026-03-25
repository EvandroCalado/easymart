import type { RouteProps } from 'react-router';

import { HomePage } from '@/pages/home';
import { LoginPage } from '@/pages/login';
import { AppRoutes, routePaths } from '@/shared/config';

export const routeConfig: RouteProps[] = [
  {
    path: routePaths[AppRoutes.HOME],
    element: <HomePage />,
  },
  {
    path: routePaths[AppRoutes.LOGIN],
    element: <LoginPage />,
  },
];

export const AppRoutes = {
  HOME: 'home',
  LOGIN: 'login',
  NOT_FOUND: 'not_found',
} as const;

type AppRoute = (typeof AppRoutes)[keyof typeof AppRoutes];

export const routePaths: Record<AppRoute, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.NOT_FOUND]: '*', // Must be last
};

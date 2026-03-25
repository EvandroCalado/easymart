export const AppRoutes = {
  HOME: 'home',
  LOGIN: 'login',
} as const;

type AppRoute = (typeof AppRoutes)[keyof typeof AppRoutes];

export const routePaths: Record<AppRoute, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.LOGIN]: '/login',
};

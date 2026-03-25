import { lazy } from 'react';

export const LoginPageAsync = lazy(
  () =>
    new Promise(resolve => {
      setTimeout(
        () =>
          resolve(
            // @ts-expect-error Simulate Delay
            import('./LoginPage').then(module => ({
              default: module.LoginPage,
            })),
          ),
        1500,
      );
    }),
);

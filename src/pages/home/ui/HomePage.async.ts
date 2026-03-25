import { lazy } from 'react';

export const HomePageAsync = lazy(
  () =>
    new Promise(resolve => {
      setTimeout(
        () =>
          resolve(
            // @ts-expect-error Simulate Delay
            import('./HomePage').then(module => ({
              default: module.HomePage,
            })),
          ),
        1500,
      );
    }),
);

import { Suspense } from 'react';
import { Route, Routes } from 'react-router';

import { Loader } from '@/widgets/Loader';

import { routeConfig } from '../routerConfig';

export const AppRouter = () => {
  return (
    <Routes>
      {routeConfig.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense key={path} fallback={<Loader />}>
              {element}
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};

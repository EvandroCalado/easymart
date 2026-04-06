import { Suspense } from 'react';

import { Loader } from '@/widgets/Loader';

import { AppRouter } from './providers';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <AppRouter />
    </Suspense>
  );
}

export default App;

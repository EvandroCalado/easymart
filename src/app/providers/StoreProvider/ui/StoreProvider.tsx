import { Provider } from 'react-redux';

import { createStore, type StateSchema } from '@/app/stores';

interface StoreProviderProps {
  children: React.ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider = ({
  children,
  initialState,
}: StoreProviderProps) => {
  const store = createStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};

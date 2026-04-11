import type { StateSchema } from '@/app/stores/config/StateSchema';

export const selectLoginIsLoading = (state: StateSchema) =>
  state.loginForm.isLoading;

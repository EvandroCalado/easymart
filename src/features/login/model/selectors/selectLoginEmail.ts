import type { StateSchema } from '@/app/stores/config/StateSchema';

export const selectLoginEmail = (state: StateSchema) =>
  state.loginForm?.email ?? '';

import type { StateSchema } from '@/app/stores/config/StateSchema';

export const selectLoginPassword = (state: StateSchema) =>
  state.loginForm.password;

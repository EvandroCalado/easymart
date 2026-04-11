import type { StateSchema } from '@/app/stores/config/StateSchema';

export const selectLoginPhone = (state: StateSchema) =>
  state.loginForm?.phone ?? '';

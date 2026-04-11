import type { StateSchema } from '@/app/stores/config/StateSchema';

import { AuthMethods } from '@/shared/config';

export const selectLoginMethod = (state: StateSchema) =>
  state.loginForm?.method ?? AuthMethods.EMAIL;

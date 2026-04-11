import type { StateSchema } from '@/app/stores/config/StateSchema';

export const selectLoginError = (state: StateSchema) => state.loginForm.error;

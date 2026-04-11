import type { AuthMethodType } from '@/shared/config';

export interface LoginFormSchema {
  password: string;
  isLoading: boolean;
  method: AuthMethodType;
  email?: string;
  phone?: string;
  error?: string;
}

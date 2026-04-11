export const AuthProviders = {
  LOCAL: 'LOCAL',
  GOOGLE: 'GOOGLE',
} as const;

export type AuthProviderType =
  (typeof AuthProviders)[keyof typeof AuthProviders];

export const AuthMethods = {
  EMAIL: 'EMAIL',
  PHONE: 'PHONE',
} as const;

export type AuthMethodType = (typeof AuthMethods)[keyof typeof AuthMethods];

export const LOCAL_STORAGE_USER_KEY = 'user';

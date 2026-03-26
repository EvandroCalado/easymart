import { createContext } from 'react';

export const Theme = {
  BLUE: 'blue-theme',
  PINK: 'pink-theme',
} as const;

export type ThemeType = (typeof Theme)[keyof typeof Theme];

export interface themeContextProps {
  theme?: ThemeType;
  setTheme?: (theme: ThemeType) => void;
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const ThemeContext = createContext<themeContextProps>({});

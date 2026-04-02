import type { FunctionComponent, SVGProps } from 'react';

import BrazilFlagIcon from '@/shared/assets/icons/Brazil.svg?react';
import EnglishFlagIcon from '@/shared/assets/icons/English.svg?react';

import type { supportedLngs } from './i18n';

export type SupportedLngsType = (typeof supportedLngs)[number];

type LanguageIconListType = Record<
  SupportedLngsType,
  FunctionComponent<SVGProps<SVGSVGElement>>
>;

export const languageIconList: LanguageIconListType = {
  en: EnglishFlagIcon,
  pt: BrazilFlagIcon,
};

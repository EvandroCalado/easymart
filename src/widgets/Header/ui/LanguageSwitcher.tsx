import { useTranslation } from 'react-i18next';

import { type SupportedLngsType, languageIconList } from '@/shared/config';
import { AppIcon, Button } from '@/shared/ui';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language as SupportedLngsType;

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'pt-BR' : 'en');
  };

  return (
    <Button theme='ghost' onClick={toggleLanguage}>
      <AppIcon Icon={languageIconList[currentLanguage]} />
    </Button>
  );
};

import { useTranslation } from 'react-i18next';

import BrazilFlagIcon from '@/shared/assets/icons/Brazil.svg?react';
import CircleIcon from '@/shared/assets/icons/Circle.svg?react';
import EnglishFlagIcon from '@/shared/assets/icons/English.svg?react';
import LogoIcon from '@/shared/assets/icons/Logo.svg?react';
import MapPinIcon from '@/shared/assets/icons/MapPin.svg?react';
import SearchIcon from '@/shared/assets/icons/Search.svg?react';
import UsersIcon from '@/shared/assets/icons/Users.svg?react';
import { useTheme } from '@/shared/config';
import { AppIcon, Button, Input } from '@/shared/ui';

import styles from './Header.module.scss';

export const Header = () => {
  const { i18n } = useTranslation();
  const { toggleTheme } = useTheme();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'pt-BR' : 'en');
  };

  return (
    <header className={styles.header}>
      <div className={styles.section}>
        <LogoIcon className={styles.logo} />

        <Button theme='ghost'>
          <AppIcon Icon={MapPinIcon} />
          <span>10115 New York</span>
        </Button>
      </div>

      <div className={styles.section}>
        <Input
          type='search'
          placeholder='Search by'
          Icon={<AppIcon Icon={SearchIcon} size={18} theme='background' />}
          rounded
        />
      </div>

      <div className={styles.section}>
        <Button theme='secondary'>Cart</Button>
        <Button theme='outline'>
          <AppIcon Icon={UsersIcon} />
          <span>Login</span>
        </Button>
        <Button theme='ghost' onClick={toggleTheme}>
          <AppIcon Icon={CircleIcon} filled />
        </Button>
        <Button theme='ghost' onClick={toggleLanguage}>
          {i18n.language === 'en' ? <EnglishFlagIcon /> : <BrazilFlagIcon />}
        </Button>
      </div>
    </header>
  );
};

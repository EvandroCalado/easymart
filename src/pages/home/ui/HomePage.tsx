import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import EnglishFlag from '@/shared/assets/icons/English.svg?react';
import SearchIcon from '@/shared/assets/icons/Search.svg?react';
import { useTheme } from '@/shared/config';
import { Button, Input } from '@/shared/ui';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  const { toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'pt-br' : 'en');
  };

  return (
    <>
      <h1 className={styles.title}>{t('Hello')}</h1>
      <Link to='/login'>Login</Link>
      <Input icon={<SearchIcon />} type='password' />
      <Button onClick={toggleTheme}>Theme</Button>
      <Button theme='secondary' onClick={changeLanguage}>
        <EnglishFlag />
      </Button>
    </>
  );
};

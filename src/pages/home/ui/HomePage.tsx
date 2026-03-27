import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import { useTheme } from '@/shared/config';
import { Button } from '@/shared/ui';

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
      <Button onClick={toggleTheme}>Theme</Button>
      <Button disabled theme='secondary' onClick={changeLanguage}>
        Change language
      </Button>
    </>
  );
};

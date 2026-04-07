import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import NotFoundIcon from '@/shared/assets/icons/NotFound.svg?react';
import { AppRoutes } from '@/shared/config';
import { Button } from '@/shared/ui';

import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (window.history.length < 1) {
      navigate(AppRoutes.HOME);
      return;
    }

    navigate(-1);
  };

  return (
    <div className={styles['not-found-page']}>
      <div className={styles.content}>
        <NotFoundIcon className={styles.icon} />
        <h3 className={styles.title}>{t('notFound.title')}</h3>
        <p className={styles.description}>{t('notFound.description')}</p>

        <Button onClick={handleBackClick} theme='primary' form='rounded'>
          {t('notFound.goBack')}
        </Button>
      </div>
    </div>
  );
};

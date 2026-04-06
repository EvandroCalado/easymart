import { useTranslation } from 'react-i18next';

import { Spinner } from '@/shared/ui';

import styles from './Loader.module.scss';

export const Loader = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.loader}>
      <h3 className={styles.title}>{t('loader.loading')}</h3>
      <Spinner />
    </div>
  );
};

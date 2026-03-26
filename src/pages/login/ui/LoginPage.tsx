import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

export const LoginPage = () => {
  const { t } = useTranslation('login');

  return (
    <>
      <Link to='/'>Home</Link>
      <p>{t('login')}</p>
    </>
  );
};

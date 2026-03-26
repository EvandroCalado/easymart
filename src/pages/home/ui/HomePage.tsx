import { Link } from 'react-router';

import { useTheme } from '@/shared/config';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  const { toggleTheme } = useTheme();

  return (
    <>
      <h1 className={styles.title}>Home</h1>
      <Link to='/login'>Login</Link>
      <button onClick={toggleTheme}>theme</button>
    </>
  );
};

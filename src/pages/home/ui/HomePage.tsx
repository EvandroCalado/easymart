import { useEffect, useState } from 'react';
import { Link } from 'react-router';

import { Button } from '@/shared/ui';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      throw new Error('Error');
    }
  }, [error]);

  return (
    <div className={styles['page-wrapper']}>
      <Header />
      <main className={styles.content}>
        <Link to='/login'>Login</Link>

        <Button onClick={() => setError(true)}>Error</Button>
      </main>
      <Footer />
    </div>
  );
};

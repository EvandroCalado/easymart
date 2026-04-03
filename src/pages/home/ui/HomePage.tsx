import { Link } from 'react-router';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={styles['page-wrapper']}>
      <Header />
      <main className={styles.content}>
        <Link to='/login'>Login</Link>
      </main>
      <Footer />
    </div>
  );
};

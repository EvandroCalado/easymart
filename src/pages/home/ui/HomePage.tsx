import { Link } from 'react-router';

import { Header } from '@/widgets/Header';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Link to='/login'>Login</Link>
    </>
  );
};

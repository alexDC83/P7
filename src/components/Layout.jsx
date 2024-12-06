import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import styles from './layout.module.css';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

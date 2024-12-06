import kosaLogo from '../assets/LOGO.png';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={kosaLogo} alt="Logo Kosa" />
      </div>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

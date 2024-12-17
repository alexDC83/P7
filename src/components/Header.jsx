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
        <NavLink className={styles.navLink} to="/">Accueil</NavLink>
        <NavLink className={styles.navLink} to="/about">A propos</NavLink>
      </nav>
    </header>
  );
};

export default Header;

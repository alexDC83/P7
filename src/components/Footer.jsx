import styles from './footer.module.css';
import kosaFooter from '../assets/LOGOfooter.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={kosaFooter} alt="Logo Kosa" className={styles.logo} />
      <p className={styles.copyright}>© 2020 Kosa. All rights reserved</p>
    </footer>
  );
};

export default Footer;

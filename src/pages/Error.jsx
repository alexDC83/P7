import { Link } from 'react-router-dom';
import styles from './error.module.css';

const Error = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.content}>
        Oups! La page que vous demandez n&apos;existe pas
      </p>
      <Link to="/" className={styles.link}>
        Retourner sur la page d&apos;accueil
      </Link>
    </div>
  );
};

export default Error;

import { CardLogement } from './CardLogement';
import styles from './logementSection.module.css';
import { Link } from 'react-router-dom';

export const LogementSection = ({ data }) => {
  return (
    <section className={styles.logements}>
      <div className={styles.logementsGrid}>
        {data.map(({ id, title, cover }) => (
          <Link to={`logement/${id}`} key={id}>
            <CardLogement id={id} title={title} cover={cover} />
          </Link>
        ))}
      </div>
    </section>
  );
};

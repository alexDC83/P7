import { CardLogement } from './CardLogement';
import styles from './logementSection.module.css';

export const LogementSection = ({ data }) => {
  return (
    <section className={styles.logements}>
      <div className={styles.logementsGrid}>
        {data.map(({ id, title, cover }) => (
          <CardLogement key={id} id={id} title={title} cover={cover} />
        ))}
      </div>
    </section>
  );
};

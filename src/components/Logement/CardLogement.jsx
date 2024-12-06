import styles from './cardLogement.module.css';

export const CardLogement = ({ id, title, cover }) => {
  return (
    <article key={id} className={styles.logementCard}>
      <div className={styles.logementCardOverlay}></div>
      <img src={cover} alt={title} className={styles.logementCardImage} />
      <h2 className={styles.logementCardTitle}>{title}</h2>
    </article>
  );
};

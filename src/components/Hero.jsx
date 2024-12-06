import styles from './hero.module.css';

export const Hero = ({ title, backgroundImage }) => {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
          url(${backgroundImage})
        `,
      }}
    >
      <h1 className={styles.heroTitle}>{title}</h1>
    </section>
  );
};

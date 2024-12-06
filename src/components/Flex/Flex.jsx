import styles from './flex.module.css';
export const Flex = ({ children, gap, isVertical, style }) => {
  return (
    <div
      className={styles.container}
      style={{
        ...style,
        gap,
        flexDirection: isVertical ? 'column' : 'row',
      }}
    >
      {children}
    </div>
  );
};

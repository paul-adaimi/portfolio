import styles from "./AnimatedTitle.module.css";

export default function AnimatedTitle({ children }) {
  return (
    <div className={styles.titleContainer}>
      <p className={styles.title}>{"<"}</p>
      <h1 className={styles.animatedTitle}>{children}</h1>
      <p className={styles.title}>{">"}</p>
    </div>
  );
}

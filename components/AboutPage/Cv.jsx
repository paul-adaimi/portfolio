import styles from "./CV.module.css";

export default function CV() {
  return (
    <div className={styles.content}>
      <p className={styles.title}>
        {"<"}
        About Me
        {"/>"}
      </p>
      <div className={styles.subContent}>Hello</div>
    </div>
  );
}

import AnimatedTitle from "../AnimatedTitle";
import styles from "./Index.module.css";

export default function Index() {
  return (
    <div className={styles.content}>
      <div className={styles.titleContainer}>
        <AnimatedTitle>{"Contact Me"}</AnimatedTitle>
      </div>
      <div className={styles.main}></div>
    </div>
  );
}

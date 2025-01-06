import AnimatedTitle from "../AnimatedTitle";
import styles from "./Index.module.css";

export default function Index() {
  return (
    <div className={styles.content}>
      <AnimatedTitle>{"My Projects"}</AnimatedTitle>
    </div>
  );
}

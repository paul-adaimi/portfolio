import AnimatedTitle from "../AnimatedTitle";
import styles from "./Index.module.css";
import Intro from "./Intro";
import PaulCoded from "./PaulCoded";

export default function Index() {
  return (
    <div className={styles.content}>
      <div className={styles.titleContainer}>
        <AnimatedTitle>{"Paul Adaimi"}</AnimatedTitle>
      </div>
      <div className={styles.main}>
        <PaulCoded />
        <Intro />
      </div>
    </div>
  );
}

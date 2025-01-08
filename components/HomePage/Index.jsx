import AnimatedTitle from "../AnimatedTitle";
import styles from "./Index.module.css";
import Intro from "./Intro";
import PaulCoded from "./PaulCoded";

export default function Index() {
  return (
    <div className={styles.main}>
      <PaulCoded />
      <Intro />
    </div>
  );
}

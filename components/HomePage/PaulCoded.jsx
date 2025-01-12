import Image from "next/image";
import styles from "./PaulCoded.module.css";
import AnimatedTextCoordinated from "../Global/AnimatedTextCoordinated";
import { useAnimatedTitle } from "../Global/AnimatedTitleProvider";

export default function PaulCoded() {
  const { shouldAnimateOut } = useAnimatedTitle();

  return (
    <div className={styles.content}>
      <div className={styles.contentLeft}>
        <p
          className={`${styles.text} ${styles.headOpenTag} ${
            shouldAnimateOut && styles.animateOut
          }`}
        >
          {"<"}
          <AnimatedTextCoordinated id={0}>Head</AnimatedTextCoordinated>
          {">"}
        </p>

        <p
          className={`${styles.text} ${styles.bodyOpenTag} ${
            shouldAnimateOut && styles.animateOut
          }`}
        >
          {"<"}
          <AnimatedTextCoordinated id={1}>Body</AnimatedTextCoordinated>
          {">"}
        </p>
      </div>
      <div className={styles.contentCenter}>
        <Image
          src="/images/paul-adaimi.png"
          alt="Paul Adaimi"
          width={400}
          height={400}
          className={`${styles.imagePaul} ${
            shouldAnimateOut && styles.animateOut
          }`}
        />
      </div>
      <div className={styles.contentRight}>
        <p
          className={`${styles.text} ${styles.headCloseTag} ${
            shouldAnimateOut && styles.animateOut
          }`}
        >
          {"</"}
          <AnimatedTextCoordinated id={0}>Head</AnimatedTextCoordinated>
          {">"}
        </p>
        <p
          className={`${styles.text} ${styles.bodyCloseTag} ${
            shouldAnimateOut && styles.animateOut
          }`}
        >
          {"<"}
          <AnimatedTextCoordinated id={1}>Body</AnimatedTextCoordinated>
          {"/>"}
        </p>
      </div>
    </div>
  );
}

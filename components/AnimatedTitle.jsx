import { useEffect, useState } from "react";
import styles from "./AnimatedTitle.module.css";

export default function AnimatedTitle({ children }) {
  const [displayText, setDisplayText] = useState(children);
  const [animate, setAnimate] = useState();

  useEffect(() => {
    if (children !== displayText) {
      setAnimate(true);
      setTimeout(() => {
        setDisplayText(""); // Clear the text (simulate backspacing)
        setDisplayText(children); // Set the new text (simulate typing)
        setAnimate(false); // Stop animation once complete
      }, 1000);
    }
  }, [children, displayText]);

  return (
    <div className={styles.titleContainer}>
      <p className={styles.title}>{"<"}</p>
      <h1
        className={`${styles.animatedTitle} ${
          animate ? styles.backspacing : styles.typing
        }`}
      >
        {displayText}
      </h1>
      <p className={styles.title}>{">"}</p>
    </div>
  );
}
